import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Faq, PageHero, RowsSplit, SplitText, StepCards, Tiles } from "@/components/page";
import { getApp } from "@/content/apps";
import { getProductPage, productPages } from "@/content/product-pages";
import { getProduct } from "@/content/products";
import { solutions } from "@/content/solutions";

export const dynamicParams = false;
export const generateStaticParams = () => productPages.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProductPage((await params).slug);
  if (!p) return {};
  return { title: `${p.name}: ${p.h1.toLowerCase()}`, description: p.lead, alternates: { canonical: `/products/${p.slug}` } };
}

/*
  type: software. A product page: hero split, steps, features beside a photograph,
  the evidence on the light band (dark-band rhythm), where it fits, questions, closing footer.
*/
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProductPage((await params).slug);
  if (!p) notFound();
  const app = getApp(getProduct(p.slug).appKey ?? "");
  const fits = solutions.filter((s) => p.solutions.includes(s.slug));

  return (
    <>
      <PageHero
        notice={p.name}
        h1={p.h1}
        lead={p.lead}
        second={app?.url ? { label: `Sign in to ${p.name}`, href: app.url } : undefined}
        facts={p.facts}
        pic={p.hero.pic}
        shot={p.hero.shot}
      />
      <StepCards id="how" h2={`How ${p.name} works, in 3 steps`} steps={p.steps} />
      <RowsSplit id="features" h2={`What ${p.name} does.`} muted="Five jobs, one product." items={p.features} pic={p.featuresPic} />
      <SplitText id="evidence" ground="inverse" h2={p.showcase.h2} lead={p.showcase.lead} lines={p.showcase.lines} pic={p.showcase.pic} shot={p.showcase.shot} />
      <Tiles
        id="fits"
        h2={`Where ${p.name} fits.`}
        muted="The problems it is used on."
        link={{ label: "See all solutions", href: "/solutions" }}
        items={fits.map((s) => ({ href: `/solutions/${s.slug}`, img: s.image.src, alt: s.image.alt, title: s.title, fact: s.group, position: s.image.position }))}
        ratio={fits.length === 1 ? "16 / 7" : fits.length === 2 ? "3 / 2" : "1 / 1"}
      />
      <Faq h2={`Questions about ${p.name}`} items={p.faq} />
    </>
  );
}
