import type { Metadata } from "next";
import PublicationBrowser from "@/components/publication-browser";
import { CtaBand, PageHero } from "@/components/sections";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Papers by the InfiniCity Labs team at CVPR workshops, the Transportation Research Board and in transportation journals.",
  alternates: { canonical: "/research/publications" },
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Papers by our team"
        accent="our team"
        lead="CVPR workshops, the Transportation Research Board Annual Meeting, IEEE and transportation journals. Filter by area or search."
        image={{ src: "/media/site/markings.webp", alt: "Fresh white road markings on dark asphalt", position: "50% 50%" }}
        crumbs={[{ label: "Research", href: "/research" }]}
      />
      <section className="section bg-bg pt-12 lg:pt-16">
        <div className="wrap">
          <PublicationBrowser items={publications} />
        </div>
      </section>
      <CtaBand title="Want to build on this work?" accent="build on this work?" lead="We collaborate with universities and agencies on applied research. Tell us what you are working on." />
    </>
  );
}
