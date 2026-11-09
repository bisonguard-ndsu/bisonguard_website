import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureGrid, ProductCards, Showcase, SolutionCards, StatStrip, Steps } from "@/components/blocks";
import Link from "next/link";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { Reveal } from "@/components/motion";
import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { getApp } from "@/content/apps";
import { getProductPage, productPages } from "@/content/product-pages";
import { getProduct } from "@/content/products";
import { productFaqs } from "@/content/faqs";
import { AdamsPage } from "@/components/products/adams-page";
import { TmcPage } from "@/components/products/tmc-page";

/** Products with their own page design; the rest use the shared layout below. */
const custom: Record<string, () => React.ReactNode> = { adams: AdamsPage, "traffic-management": TmcPage };

export const dynamicParams = false;
export const generateStaticParams = () => productPages.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProductPage((await params).slug);
  if (!p) return {};
  return {
    title: p.fullName ? `${p.name} — ${p.fullName}` : p.name,
    description: p.lead,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { images: [{ url: p.hero.src }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProductPage((await params).slug);
  if (!p) notFound();
  const Custom = custom[p.slug];
  if (Custom) return <Custom />;
  const prod = getProduct(p.slug);
  const app = prod.appKey ? getApp(prod.appKey) : undefined;
  const faqs = productFaqs[p.slug] ?? [];

  return (
    <>
      <PageHero
        eyebrow={p.fullName ? `${p.name} · ${p.fullName}` : p.name}
        title={p.title}
        accent={p.accent}
        lead={p.lead}
        image={p.hero}
        crumbs={[{ label: "Products", href: "/products" }]}
      >
        <Reveal delay={0.85} className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
          {app?.url ? (
            <ButtonLink href={app.url} variant="ghost" external>
              Sign in to {p.name}
            </ButtonLink>
          ) : (
            app?.note && <span className="btn btn-ghost h-12 cursor-default px-6 text-base">{app.note}</span>
          )}
        </Reveal>
      </PageHero>

      <section className="bg-bg pt-4 pb-4">
        <div className="wrap">
          <StatStrip stats={p.stats} />
        </div>
      </section>

      <Steps title={`How ${p.name} works`} accent="works" lead="Three steps from the road to a record your team can act on." steps={p.steps} />

      <Showcase eyebrow={p.name} items={p.showcase} />

      <FeatureGrid eyebrow="Capabilities" title={`What you get with ${p.name}`} accent={p.name} lead={prod.output + "."} features={p.features} />

      <section className="section bg-bg">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who it is for" title="Made for the people who look after roads" accent="look after roads" side={false} />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:self-end">
            {p.audience.map((a, i) => (
              <Reveal as="li" key={a} delay={i * 0.06} className="border border-line bg-surface px-5 py-5 font-display text-lg font-semibold tracking-[-0.02em] text-fg">
                {a}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {faqs.length > 0 && (
        <section id="questions" className="section scroll-mt-20 bg-bg" aria-labelledby="questions-title">
          <FaqJsonLd items={faqs} />
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Questions" title={`About ${p.name}`} side={false} />
              <Reveal delay={0.15} className="mt-6">
                <Link href="/faq" className="text-link">
                  All questions
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-8">
              <FaqList items={faqs} />
            </Reveal>
          </div>
        </section>
      )}

      <SolutionCards slugs={p.solutions} title="Solutions built on it" />
      <ProductCards slugs={productPages.filter((x) => x.slug !== p.slug).map((x) => x.slug)} eyebrow="More products" title="Works alongside" />
      <CtaBand title={`See ${p.name} on your own network`} accent="your own network" image={p.hero} />
    </>
  );
}
