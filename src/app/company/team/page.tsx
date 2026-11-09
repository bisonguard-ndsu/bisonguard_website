import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "The transportation engineers, computer-vision researchers and software engineers behind InfiniCity Labs.",
  alternates: { canonical: "/company/team" },
};

const disciplines = [
  { title: "Transportation engineering", text: "Pavement, traffic operations and safety. The people who know what an agency needs from the data." },
  { title: "Computer vision research", text: "Detection, tracking, segmentation and vision-language models, published at CVPR workshops and TRB." },
  { title: "Software and platform", text: "Web and mobile apps, cloud processing and the map that ties every product together." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind the products"
        accent="behind the products"
        lead="Engineers and researchers who would rather see a model run on a live network than sit in a paper."
        image={{ src: "/media/site/meeting.webp", alt: "A team meeting around a long table with laptops", position: "50% 50%" }}
        crumbs={[{ label: "Company", href: "/company" }]}
      />

      {team.length > 0 && (
        <section className="section bg-bg">
          <div className="wrap">
            <SectionHeading eyebrow="Leadership" title="Who leads the work" accent="leads the work" />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m, i) => (
                <Reveal as="li" key={m.id} delay={(i % 3) * 0.08} className="group overflow-clip rounded-2xl border border-white/[0.08] bg-surface">
                  <div className="relative aspect-[4/5] bg-surface-2">
                    {m.image && (
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, 50vw"
                        className="object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-fg">{m.name}</h3>
                    <p className="mt-1 text-sm text-primary-strong">{m.role}</p>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-2">{m.bio}</p>
                    {m.links && (
                      <ul className="mt-4 flex gap-4 text-sm">
                        {m.links.map((l) => (
                          <li key={l.href}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer" className="link text-fg-2 hover:text-fg">
                              {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section bg-deep">
        <div className="wrap">
          <SectionHeading eyebrow="Disciplines" title="Three kinds of expertise in one team" accent="in one team" />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 0.08} className="rounded-2xl border border-white/[0.08] bg-surface p-8">
                
                <h3 className="mt-4 font-display text-2xl font-semibold text-fg">{d.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg-2">{d.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10">
            <ButtonLink href="/company/careers" variant="ghost">
              Join the team
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
