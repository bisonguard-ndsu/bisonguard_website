import type { Metadata } from "next";
import { PageHero, RowsSplit, Tiles } from "@/components/page";

export const metadata: Metadata = {
  title: "Research",
  description: "Pavement analysis, traffic safety, multimodal AI and mobility research by the InfiniCity Labs team.",
  alternates: { canonical: "/research" },
};

const areas = [
  {
    id: "pavement",
    href: "/products/adams",
    title: "Pavement analysis",
    text: "Condition indices from images, roughness from a phone's motion sensors, run at the edge.",
    value: "AdAMS, RoadLogger",
    image: { src: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn yellow lane marking" },
  },
  {
    id: "traffic-safety",
    href: "/products/traffic-management",
    title: "Traffic safety",
    text: "Anomalies, helmet violations and distracted driving found in video and described in plain language.",
    value: "TMC",
    image: { src: "/media/site/night-intersection.webp", alt: "A city intersection at night" },
  },
  {
    id: "multimodal",
    href: "/products",
    title: "Multimodal AI",
    text: "Vision-language models that caption, search and reason over road video, so engineers can ask questions of their footage.",
    value: "PaveXpert",
    image: { src: "/media/hero/company.webp", alt: "A city highway interchange at night, seen from above" },
  },
  {
    id: "mobility",
    href: "/products/turnflow",
    title: "Mobility",
    text: "Traffic prediction from loop detectors and high-resolution traffic parameters from LiDAR.",
    value: "Turnflow, TMC",
    image: { src: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above" },
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        h1="Applied research in road and traffic AI"
        lead="The methods behind our products, from pavement condition indices to vision-language models for traffic video. Four research areas, each feeding a product in service."
        pic={{ src: "/media/site/engineers.webp", alt: "Engineers working together at laptops" }}
      />
      <Tiles
        id="areas"
        h2="Four research areas."
        muted="Each one feeds a product."
        ratio="16 / 9"
        items={areas.map((a) => ({ href: a.href, img: a.image.src, alt: a.image.alt, title: a.title, fact: a.value }))}
      />
      <RowsSplit
        id="detail"
        ground="inverse"
        h2="What each area works on"
        items={areas.map((a) => ({ title: a.title, text: a.text, value: a.value }))}
        pic={{ src: "/media/site/meeting.webp", alt: "The team reviewing results around a long table" }}
      />
    </>
  );
}
