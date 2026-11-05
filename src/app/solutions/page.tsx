import type { Metadata } from "next";
import { PageHero, SplitText, Tiles } from "@/components/page";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Road asset inventory, pavement condition, field inspection, traffic studies, traffic operations and herd monitoring.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        h1="Road and traffic solutions for agencies"
        lead="Six problems we solve, from inventorying every sign on a network to delivering a turning-movement study. Each page shows the approach and the products that do the work."
        pic={{ src: "/media/site/interchange.webp", alt: "A highway interchange from above with traffic on every ramp" }}
      />
      <Tiles
        id="all"
        h2="Six solutions."
        muted="Five on the road, one beyond it."
        items={solutions.map((s) => ({ href: `/solutions/${s.slug}`, img: s.image.src, alt: s.image.alt, position: s.image.position, title: s.title, fact: s.group }))}
      />
      <SplitText
        id="custom"
        ground="inverse"
        h2="A problem that is not on the list"
        lead="Our models read road and traffic video. If your question can be answered from footage you already have, we can usually build the count, the inventory or the alert."
        lines={["Video from phones, fixed cameras or drones", "A pilot on a stretch of your own network", "Results on the same map as our products"]}
        pic={{ src: "/media/site/plans.webp", alt: "Two engineers pointing at a printed plan on a table" }}
      />
    </>
  );
}
