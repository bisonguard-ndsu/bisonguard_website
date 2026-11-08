import type { Metadata } from "next";
import Link from "next/link";
import { cardCls, StatStrip } from "@/components/blocks";
import { Reveal, WordRise } from "@/components/motion";
import { CtaBand, Eyebrow, PageHero, Photo, SectionHeading } from "@/components/sections";
import { partners } from "@/content/evidence";
import { publications } from "@/content/publications";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "InfiniCity Labs is a team of transportation engineers and computer-vision researchers building software for the roads people drive every day.",
  alternates: { canonical: "/company" },
};

const values = [
  { title: "Evidence behind every number", text: "Every count, rating and detection links back to the frame or vehicle path that produced it. If an engineer cannot check it, we do not ship it." },
  { title: "Use what agencies already have", text: "Phones, existing cameras and footage on file. We would rather make ordinary equipment useful than sell specialist hardware." },
  { title: "Research that reaches the road", text: "We publish our methods and then put them to work on live networks. A model that only lives in a paper has not done its job." },
  { title: "Built with the people who use it", text: "Crews, operators and engineers shape the products. If it slows down a field inspection, it gets changed." },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Engineers building for the roads people drive every day"
        accent="the roads people drive every day"
        lead="InfiniCity Labs is a team of transportation engineers, computer-vision researchers and software engineers. We build tools that help agencies see their networks clearly and act sooner."
        image={{ src: "/media/site/plans.webp", alt: "Two engineers pointing at a printed plan on a table", position: "50% 45%" }}
        actions={[{ label: "Talk to us", href: "/contact" }]}
      />

      <section className="section bg-bg">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <Reveal y={12} className="lg:col-span-3">
            <Eyebrow>Our story</Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <WordRise
              inView
              text="We started in transportation research labs, watching good models stall before they reached the agencies that needed them."
              accent="the agencies that needed them."
              className="font-display text-[1.75rem] leading-[1.2] font-medium tracking-[-0.02em] text-fg sm:text-[2.25rem] lg:text-[2.75rem]"
            />
            <Reveal delay={0.25} className="mt-8 grid gap-6 text-[1.0625rem] leading-relaxed text-fg-2 md:grid-cols-2">
              <p>
                Our founders spent years publishing on pavement condition, traffic anomalies and driver behaviour. The methods worked, but road
                agencies still inventoried signs by hand and counted traffic with clipboards.
              </p>
              <p>
                InfiniCity Labs exists to close that gap: take the methods that work, make them run on the phones and cameras agencies already
                have, and put the results where engineers make decisions.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="wrap mt-16 lg:mt-24">
          <StatStrip
            stats={[
              { value: "4", label: "products in service" },
              { value: String(publications.length), label: "peer-reviewed papers by our team" },
              { value: "2", label: "regions we work in: the United States and West Africa" },
              { value: String(partners.length), label: "partners and collaborators" },
            ]}
          />
        </div>
      </section>

      <section className="section relative overflow-clip bg-deep">
        <div aria-hidden className="pointer-events-none absolute top-0 -right-40 h-[30rem] w-[30rem] rounded-full bg-violet/10 blur-3xl" />
        <div className="wrap">
          <SectionHeading eyebrow="How we work" title="What we hold ourselves to" accent="hold ourselves to" />
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 2) * 0.1} className="rounded-2xl border border-white/[0.08] bg-surface p-8 sm:p-10">
                <span className="font-mono text-xs text-primary-strong">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-fg">{v.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg-2">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="wrap">
          <SectionHeading eyebrow="Partners" title="Who we work with" accent="work with" lead="Agencies, universities and funders we have worked alongside." />
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-clip rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3 lg:grid-cols-5">
            {partners.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 0.05} className="flex min-h-36 flex-col justify-between bg-surface p-6">
                <span className="font-display text-2xl font-semibold text-fg">{p.name}</span>
                {p.full !== p.name && <span className="mt-4 text-sm leading-snug text-fg-3">{p.full}</span>}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-bg pt-0 lg:pt-0">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {[
            { href: "/company/team", title: "Meet the team", text: "The engineers and researchers behind the products.", image: { src: "/media/site/meeting.webp", alt: "A team meeting around a long table with laptops" } },
            { href: "/company/careers", title: "Join us", text: "Engineering and research roles on models that run on real roads.", image: { src: "/media/site/engineers.webp", alt: "Engineers working together at laptops" } },
          ].map((c, i) => (
            <Reveal key={c.href} delay={i * 0.1}>
              <Link href={c.href} className={cn(cardCls, "relative flex h-[22rem] flex-col justify-end overflow-clip p-8 sm:p-10")}>
                <Photo image={c.image} className="absolute inset-0 -z-10" sizes="(min-width: 768px) 50vw, 100vw" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
                <h2 className="font-display text-3xl font-semibold text-white">{c.title}</h2>
                <p className="mt-2 text-white/80">{c.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary-strong">
                  <span className="link">Read more</span>
                  <span className="arrow" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
