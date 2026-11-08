import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCards, SolutionCards, StatStrip } from "@/components/blocks";
import { Reveal, WordRise } from "@/components/motion";
import { AppFrame, CtaBand, Eyebrow, PageHero } from "@/components/sections";
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

  return (
    <>
      <PageHero
        eyebrow={p.place}
        title={p.title}
        accent={p.accent}
        lead={p.summary}
        image={{ src: "/media/site/interchange.webp", alt: "A highway interchange seen from above", position: "50% 50%" }}
        crumbs={[{ label: "Work", href: "/work" }]}
      />

      <section className="bg-bg pt-4 pb-4">
        <div className="wrap">
          <StatStrip stats={p.stats} />
        </div>
      </section>

      <section className="section bg-bg">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal y={12}>
              <Eyebrow>The challenge</Eyebrow>
            </Reveal>
            <WordRise inView text="What the cities needed" accent="needed" className="t-h2 mt-5 text-fg" />
            <Reveal delay={0.15} className="mt-6 text-[1.125rem] leading-relaxed text-fg-2">
              <p>{p.challenge}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <Eyebrow>Our approach</Eyebrow>
            </Reveal>
            <ol className="mt-6 space-y-4">
              {p.approach.map((a, i) => (
                <Reveal as="li" key={a} delay={i * 0.08} className="flex gap-5 rounded-2xl border border-white/[0.08] bg-surface p-6">
                  <span className="font-mono text-sm text-primary-strong">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[1.0625rem] leading-relaxed text-fg">{a}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section relative overflow-clip bg-deep">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="wrap">
          <div className="max-w-3xl">
            <Reveal y={12}>
              <Eyebrow>The result</Eyebrow>
            </Reveal>
            <WordRise inView text="One current record for the whole network" accent="the whole network" className="t-h2 mt-5 text-fg" />
            <Reveal delay={0.15} className="mt-6 text-[1.125rem] leading-relaxed text-fg-2">
              <p>{p.results}</p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {p.gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 0.1} className={i === 0 ? "lg:col-span-2" : undefined}>
                <AppFrame image={g} label={`AdAMS · ${g.label}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductCards slugs={p.products} />
      <SolutionCards slugs={p.solutions} title="Solutions in this project" />
      <CtaBand title="Want the same for your network?" accent="your network?" />
    </>
  );
}
