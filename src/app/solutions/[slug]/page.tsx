import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cardCls, Checklist, ProductCards, Steps } from "@/components/blocks";
import { Reveal, WordRise } from "@/components/motion";
import { CtaBand, Eyebrow, PageHero, Photo, SectionHeading } from "@/components/sections";
import { getSolution, solutions } from "@/content/solutions";
import { getProject } from "@/content/work";
import { cn } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => solutions.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getSolution((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.lead, alternates: { canonical: `/solutions/${s.slug}` } };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getSolution((await params).slug);
  if (!s) notFound();
  const project = s.project ? getProject(s.project) : undefined;
  const others = solutions.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={s.title}
        title={s.headline}
        accent={s.accent}
        lead={s.lead}
        image={s.image}
        crumbs={[{ label: "Solutions", href: "/solutions" }]}
        actions={[{ label: "Talk to us", href: "/contact" }]}
      />

      <section className="section bg-bg">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={12}>
              <Eyebrow>The problem</Eyebrow>
            </Reveal>
            <WordRise inView text="Why the usual way falls short" accent="falls short" className="t-h2 mt-5 text-fg" />
          </div>
          <Reveal delay={0.15} className="lg:col-span-7 lg:pt-14">
            <p className="font-display text-[1.375rem] leading-snug text-fg-2 sm:text-[1.625rem]">{s.problem}</p>
          </Reveal>
        </div>
      </section>

      <Steps eyebrow="Our approach" title="How we solve it" accent="solve it" steps={s.approach} />

      <section className="section bg-deep">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="What you get" title="Outcomes your team can use" accent="your team can use" side={false} />
          </div>
          <Checklist items={s.outcomes} className="sm:grid-cols-2 lg:col-span-7 lg:self-end" />
        </div>
      </section>

      <ProductCards slugs={s.products} />

      {project && (
        <section className="section bg-bg">
          <div className="wrap">
            <SectionHeading eyebrow="In practice" title="See it on a real network" accent="a real network" />
            <Reveal className="mt-12">
              <Link href={`/work/${project.slug}`} className={cn(cardCls, "grid overflow-clip lg:grid-cols-12")}>
                <Photo image={project.hero} className="aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[22rem]" />
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-5">
                  <p className="text-[0.875rem] text-fg-3">{project.place}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-fg sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-fg-2">{project.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                    <span className="link">Read the case study</span>
                    <span className="arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section bg-bg pt-0 lg:pt-0">
        <div className="wrap">
          <SectionHeading eyebrow="More solutions" title="Other problems we solve" />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal as="li" key={o.slug} delay={i * 0.08}>
                <Link href={`/solutions/${o.slug}`} className={cn(cardCls, "flex h-full flex-col overflow-clip")}>
                  <Photo image={o.image} className="aspect-[16/9]" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-fg group-hover:text-primary-strong">{o.title}</h3>
                    <p className="mt-2 text-[0.9375rem] text-fg-2">{o.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand image={s.image} />
    </>
  );
}
