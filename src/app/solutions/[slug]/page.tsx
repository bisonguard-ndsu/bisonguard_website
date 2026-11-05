import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, SplitText, StepCards, Tiles, type Tile } from "@/components/page";
import { getProduct } from "@/content/products";
import { getSolution, solutions } from "@/content/solutions";
import { getProject } from "@/content/work";

export const dynamicParams = false;
export const generateStaticParams = () => solutions.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getSolution((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.lead, alternates: { canonical: `/solutions/${s.slug}` } };
}

const productPics: Record<string, { img: string; alt: string; position?: string }> = {
  adams: { img: "/media/hero/adams.webp", alt: "A motorway at dusk seen from the driver's seat", position: "50% 60%" },
  "traffic-management": { img: "/media/hero/tmc.webp", alt: "A traffic camera mounted on a pole", position: "40% 50%" },
  turnflow: { img: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above" },
  roadlogger: { img: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn lane marking" },
};

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getSolution((await params).slug);
  if (!s) notFound();
  const project = s.project ? getProject(s.project) : undefined;

  const used: Tile[] = s.products.map((slug) => {
    const p = getProduct(slug);
    return { href: p.href, img: productPics[slug].img, alt: productPics[slug].alt, position: productPics[slug].position, title: p.name, fact: p.output };
  });
  if (project) used.push({ href: `/work/${project.slug}`, img: "/media/site/adams-iri.webp", alt: project.hero.alt, title: "Fargo case study", fact: "2,267 segments rated" });

  return (
    <>
      <PageHero notice={s.group} h1={s.h1} lead={s.lead} pic={s.image} />
      <SplitText id="problem" h2={s.headline} lead={s.problem} lines={s.outcomes} pic={s.side} />
      <StepCards
        id="approach"
        h2="Our approach, in 3 steps"
        steps={s.approach.map((a, i) => ({ ...a, img: s.stepPics[i].src, alt: s.stepPics[i].alt }))}
      />
      {used.length > 0 && (
        <Tiles
          id="products"
          h2="What does the work."
          muted={used.length > 1 ? "The products and a project behind this solution." : "The product behind this solution."}
          items={used}
          ratio={used.length === 1 ? "16 / 7" : used.length === 2 ? "3 / 2" : "1 / 1"}
        />
      )}
    </>
  );
}
