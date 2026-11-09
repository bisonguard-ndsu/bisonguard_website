import type { Metadata } from "next";
import Link from "next/link";
import { cardCls } from "@/components/blocks";
import { CountUp, Reveal } from "@/components/motion";
import { CtaBand, PageHero, Photo, Tag } from "@/components/sections";
import { getProduct } from "@/content/products";
import { projects } from "@/content/work";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description: "Networks we have surveyed and studies we have delivered with AdAMS, TMC, Turnflow and RoadLogger.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Networks surveyed, studies delivered"
        accent="studies delivered"
        lead="Projects where our products did the work on live roads, with the numbers to show for it."
        image={{ src: "/media/site/interchange.webp", alt: "A highway interchange seen from above", position: "50% 50%" }}
      />
      <section className="section bg-bg">
        <div className="wrap space-y-6">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <Link href={`/work/${p.slug}`} className={cn(cardCls, "grid overflow-clip lg:grid-cols-12")}>
                <Photo image={p.hero} className="aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[30rem]" sizes="(min-width: 1024px) 58vw, 100vw" />
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-5">
                  <div className="flex flex-wrap gap-2">
                    {p.products.map((s) => (
                      <Tag key={s} tone="primary">
                        {getProduct(s).name}
                      </Tag>
                    ))}
                    <Tag>{p.place}</Tag>
                  </div>
                  <h2 className="mt-6 font-display text-3xl leading-tight font-semibold text-fg sm:text-4xl">{p.title}</h2>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-fg-2">{p.summary}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                    {p.stats.slice(0, 2).map((s) => (
                      <div key={s.label}>
                        <dt className="sr-only">{s.label}</dt>
                        <dd>
                          <CountUp value={s.value} className="block font-display text-3xl font-semibold text-fg" />
                          <span className="mt-1 block text-sm text-fg-2">{s.label}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
                    <span className="link">Read the case study</span>
                    <span className="arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="Have a network we should survey next?" accent="survey next?" />
    </>
  );
}
