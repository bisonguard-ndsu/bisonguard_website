import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, SplitText, Tiles } from "@/components/page";
import { getProduct } from "@/content/products";
import { getSolution } from "@/content/solutions";
import { getProject, projects } from "@/content/work";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/work/${p.slug}` } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const [map, sign, recording] = p.gallery;

  return (
    <>
      <PageHero
        notice={p.place}
        h1="Sign and pavement survey of two cities"
        lead={p.summary}
        facts={p.stats.map((s) => [s.label.replace(/^traffic signs /, "Signs ").replace(/^road segments /, "Segments ").replace(/^frames analysed.*/, "Frames in one recording"), s.value] as [string, string])}
        shot={{ src: map.src, alt: map.alt }}
      />
      <SplitText
        id="challenge"
        h2="A current inventory without crews on foot"
        lead={p.challenge}
        lines={p.approach}
        pic={{ src: "/media/site/phone-dashboard.webp", alt: "A phone on a car dashboard recording the road" }}
      />
      <SplitText id="evidence" ground="inverse" h2="Every sign with the frame it came from" lead={p.results} shot={{ src: sign.src, alt: sign.alt }} />
      <SplitText
        id="recording"
        h2="Recording 74, read in full"
        lead="One 1 min 42 s drive: 3,085 frames, 14 signs found and each counted once across the frames it appeared in."
        lines={["3 no-parking signs with plaques", "2 do-not-enter and 2 stop signs", "7 more regulatory signs"]}
        shot={{ src: recording.src, alt: recording.alt }}
      />
      <Tiles
        id="used"
        h2="Products and solutions used"
        items={[
          ...p.products.map((slug) => {
            const prod = getProduct(slug);
            return { href: prod.href, img: "/media/hero/adams.webp", alt: "A motorway at dusk seen from the driver's seat", position: "50% 60%", title: prod.name, fact: prod.output };
          }),
          ...p.solutions.map((slug) => {
            const s = getSolution(slug)!;
            return { href: `/solutions/${s.slug}`, img: s.image.src, alt: s.image.alt, position: s.image.position, title: s.title, fact: s.group };
          }),
        ]}
      />
    </>
  );
}
