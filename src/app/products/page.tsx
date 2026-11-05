import type { Metadata } from "next";
import { PageHero, SplitText, Tiles } from "@/components/page";
import { productPages } from "@/content/product-pages";
import { getProduct, platformExtras, statusLabel } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description: "AdAMS, TMC, Turnflow and RoadLogger: four products for road and traffic agencies, sharing one map and the evidence behind every number.",
  alternates: { canonical: "/products" },
};

const cards: Record<string, { img: string; alt: string; position?: string }> = {
  adams: { img: "/media/hero/adams.webp", alt: "A motorway at dusk seen from the driver's seat", position: "50% 60%" },
  "traffic-management": { img: "/media/hero/tmc.webp", alt: "A traffic camera mounted on a pole against the sky", position: "40% 50%" },
  turnflow: { img: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above" },
  roadlogger: { img: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn yellow lane marking" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        h1="Road and traffic software for agencies"
        lead="Four products, each built for one job, sharing one map, one set of accounts and the evidence behind every number. All four are in service today."
        second={{ label: "Sign in", href: "https://app.infinicitylabs.org" }}
        shot={{ src: "/media/site/adams-sign.webp", alt: "An R7-1 no-parking sign record opened on the AdAMS map with its video frame" }}
      />
      <Tiles
        id="products"
        h2="Four products."
        muted="Pick the one that matches the job."
        ratio="16 / 9"
        items={productPages.map((p) => {
          const prod = getProduct(p.slug);
          return { href: prod.href, img: cards[p.slug].img, alt: cards[p.slug].alt, position: cards[p.slug].position, title: p.name, fact: prod.output };
        })}
      />
      <SplitText
        id="next"
        ground="inverse"
        h2="What we are building next"
        lead="The labelling platform behind our models, and an assistant that answers questions about your network in plain language."
        lines={platformExtras.map((x) => `${x.name}: ${statusLabel[x.status].toLowerCase()}`)}
        pic={{ src: "/media/site/engineers.webp", alt: "Engineers working together at laptops" }}
        link={{ label: "See our research", href: "/research" }}
      />
    </>
  );
}
