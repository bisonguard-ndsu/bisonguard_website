import type { Metadata } from "next";
import { PageHero, SplitText } from "@/components/page";
import { projects } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects delivered with InfiniCity Labs products, with the figures and the evidence behind them.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const p = projects[0];
  return (
    <>
      <PageHero
        h1="Case studies from live road networks"
        lead="Surveys and studies delivered with our products for cities and agencies, with the figures and the evidence behind them."
        pic={{ src: "/media/site/road-crew.webp", alt: "A paving crew at work on a road" }}
      />
      <SplitText
        id="fargo"
        ground="inverse"
        h2="Fargo and West Fargo, surveyed from one car"
        lead={p.summary}
        lines={p.stats.map((s) => `${s.value} ${s.label}`)}
        link={{ label: "Read the Fargo case study", href: `/work/${p.slug}` }}
        shot={{ src: "/media/site/adams-iri.webp", alt: p.hero.alt }}
      />
    </>
  );
}
