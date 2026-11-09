import type { Metadata } from "next";
import { StatStrip } from "@/components/blocks";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero, Photo, SectionHeading, Tag } from "@/components/sections";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research",
  description: "Applied research by the InfiniCity Labs team in pavement analysis, traffic safety, multimodal AI and mobility.",
  alternates: { canonical: "/research" },
};

const areas: { id: string; title: string; text: string; feeds: string; image: { src: string; alt: string } }[] = [
  {
    id: "pavement",
    title: "Pavement analysis",
    text: "Estimating pavement condition indices straight from images, roughness from a phone's motion sensors, and running it all at the edge.",
    feeds: "AdAMS, RoadLogger",
    image: { src: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn yellow lane marking" },
  },
  {
    id: "traffic-safety",
    title: "Traffic safety",
    text: "Detecting anomalies, helmet violations and distracted driving in video, and describing traffic events in plain language.",
    feeds: "TMC",
    image: { src: "/media/site/night-intersection.webp", alt: "A city intersection at night" },
  },
  {
    id: "multimodal",
    title: "Multimodal AI",
    text: "Vision-language models that caption, search and reason over road and traffic video, so engineers can ask questions of their footage.",
    feeds: "PaveXpert",
    image: { src: "/media/hero/company.webp", alt: "A city highway interchange at night, seen from above" },
  },
  {
    id: "mobility",
    title: "Mobility",
    text: "Traffic prediction from loop detectors, high-resolution traffic parameters from LiDAR, and datasets for scene understanding.",
    feeds: "Turnflow, TMC",
    image: { src: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above" },
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="The research our products rest on"
        accent="our products rest on"
        lead="Our team works on pavement analysis, traffic safety, multimodal AI and mobility. What we learn in the lab goes straight into the products."
        image={{ src: "/media/site/markings.webp", alt: "Fresh white road markings on dark asphalt", position: "50% 50%" }}
        actions={[{ label: "Work with our researchers", href: "/contact" }]}
      />

      <section className="bg-bg pt-4 pb-4">
        <div className="wrap">
          <StatStrip
            stats={[
              { value: "4", label: "research areas" },
              { value: "4", label: "products the research feeds" },
              { value: "2", label: "regions where it is tested on live roads" },
            ]}
          />
        </div>
      </section>

      <section className="section theme-light">
        <div className="wrap">
          <SectionHeading eyebrow="Areas" title="Four areas, one aim: better decisions about roads" />
          <div className="mt-14 space-y-6 lg:mt-20">
            {areas.map((a, i) => {
              return (
                <Reveal key={a.id}>
                  <article id={a.id} className="group grid scroll-mt-28 overflow-clip rounded-2xl border border-line bg-surface lg:grid-cols-12">
                    <Photo image={a.image} className={cn("aspect-[16/9] lg:col-span-5 lg:aspect-auto lg:min-h-[18rem]", i % 2 === 1 && "lg:order-2")} sizes="(min-width: 1024px) 40vw, 100vw" />
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7">
                      <div className="flex flex-wrap gap-2">
                        <Tag tone="primary">Feeds {a.feeds}</Tag>
                      </div>
                      <h2 className="mt-5 font-display text-3xl font-semibold text-fg">{a.title}</h2>
                      <p className="mt-3 max-w-[56ch] text-[1.0625rem] leading-relaxed text-fg-2">{a.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Working on a research question about roads?" accent="about roads?" lead="We collaborate with universities and agencies on applied research. Tell us what you are working on." />
    </>
  );
}
