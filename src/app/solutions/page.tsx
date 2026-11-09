import type { Metadata } from "next";
import Link from "next/link";
import { cardCls } from "@/components/blocks";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero, Photo, SectionHeading } from "@/components/sections";
import { solutions } from "@/content/solutions";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Road asset inventory, pavement condition, field inspection, traffic studies, traffic operations and herd monitoring.",
  alternates: { canonical: "/solutions" },
};

const groups = ["Roads and assets", "Traffic", "Beyond the road"] as const;

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Start from the problem, not the product"
        accent="not the product"
        lead="Each solution shows the problem we solve, how we approach it and which products do the work."
        image={{ src: "/media/site/guardrail.webp", alt: "A highway curving through forest with guardrails and an overhead sign", position: "50% 55%" }}
      />
      {groups.map((g, gi) => {
        const items = solutions.filter((s) => s.group === g);
        return (
          <section key={g} className={cn("section", gi === 1 ? "bg-deep" : "bg-bg", gi > 0 && "lg:pt-28")}>
            <div className="wrap">
              <SectionHeading eyebrow={`0${gi + 1}`} title={g} />
              <ul className={cn("mt-12 grid gap-5", items.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")}>
                {items.map((s, i) => (
                  <Reveal as="li" key={s.slug} delay={i * 0.08}>
                    <Link href={`/solutions/${s.slug}`} className={cn(cardCls, "flex h-full flex-col overflow-clip")}>
                      <Photo image={s.image} className="aspect-[16/10]" sizes="(min-width: 1024px) 33vw, 100vw" />
                      <div className="flex flex-1 flex-col p-7">
                        <h3 className="font-display text-2xl font-semibold text-fg group-hover:text-primary-strong">{s.title}</h3>
                        <p className="mt-3 flex-1 text-[1rem] leading-relaxed text-fg-2">{s.short}</p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          <span className="link">See the approach</span>
                          <span className="arrow" aria-hidden>
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
      <CtaBand />
    </>
  );
}
