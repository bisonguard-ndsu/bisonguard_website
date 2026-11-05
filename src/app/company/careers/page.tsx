import type { Metadata } from "next";
import { Checklist } from "@/components/blocks";
import { Reveal } from "@/components/motion";
import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Engineering and research roles at InfiniCity Labs, on computer-vision models that run on real roads.",
  alternates: { canonical: "/company/careers" },
};

const roles = [
  { title: "Computer vision engineers", text: "Detection, tracking and segmentation models that hold up on real road video, in every kind of weather and light." },
  { title: "Full-stack and mobile engineers", text: "The web platform, the field apps and the map that ties them together, used daily by agencies and crews." },
  { title: "Transportation engineers", text: "People who know pavement and traffic, and can turn model output into something an agency can act on." },
  { title: "Research scientists", text: "Applied research in multimodal AI, traffic safety and pavement analysis that ships in our products." },
];

const why = [
  "Your work runs on live road networks",
  "Small team, real ownership from day one",
  "Work across the United States and West Africa",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build models that run on real roads"
        lead="We hire engineers and researchers who want their work used on real roads."
        image={{ src: "/media/site/engineers.webp", alt: "Engineers working together at laptops", position: "50% 40%" }}
        crumbs={[{ label: "Company", href: "/company" }]}
      >
        <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${site.email}?subject=Careers`}>Send us your CV</ButtonLink>
        </Reveal>
      </PageHero>

      <section className="section tone-light">
        <div className="wrap">
          <SectionHeading
            eyebrow="Who we hire"
            title="The kinds of people we look for"
            lead="We do not always have an opening posted. If you fit one of these, write to us anyway."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {roles.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % 2) * 0.08} className="rounded-xl border border-edge bg-surface p-8">
                <h3 className="font-display text-2xl font-semibold text-fg">{r.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg-2">{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-deep">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Why join" title="What working here is like" side={false} />
          </div>
          <Checklist items={why} className="sm:grid-cols-2 lg:col-span-7 lg:self-end" />
        </div>
      </section>

      <CtaBand
        title="Think you would fit?"
        lead={`Send your CV and a few lines about work you are proud of to ${site.email}. A person on the team reads every application.`}
        image={{ src: "/media/site/engineers.webp", alt: "" }}
      />
    </>
  );
}
