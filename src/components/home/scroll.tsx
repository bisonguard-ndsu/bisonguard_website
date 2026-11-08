"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { CountUp, Reveal } from "@/components/motion";
import { ButtonLink, Photo, SectionHeading, type Img } from "@/components/sections";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* Products: full-width cards that pin under the header and stack as you scroll */

export type StackItem = {
  slug: string;
  name: string;
  fullName?: string;
  category: string;
  status: string;
  href: string;
  summary: string;
  input: string;
  output: string;
  image: Img;
};

export function ProductStack({ items }: { items: StackItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="relative mt-14 lg:mt-20">
      {items.map((p, i) => (
        <StackCard key={p.slug} p={p} i={i} n={items.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}

function StackCard({ p, i, n, progress }: { p: StackItem; i: number; n: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  // Once the next card starts to cover this one, shrink it a little so the stack reads as depth.
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.04]);
  const dim = useTransform(progress, [i / n, Math.min(1, (i + 1) / n)], [0, i === n - 1 ? 0 : 0.35]);
  return (
    <div className="sticky top-[5.5rem] pb-6 lg:top-[6.5rem]" style={{ zIndex: i + 1 }}>
      <motion.div style={reduce ? undefined : { scale }} className="origin-top">
        <Link
          href={p.href}
          className="group relative grid overflow-clip border border-line bg-surface lg:h-[34rem] lg:grid-cols-12"
        >
          <div className="flex flex-col p-8 sm:p-10 lg:col-span-5 lg:p-12">
            <div className="eyebrow flex items-center gap-3 text-fg-3">
              <span>{p.category}</span>
              <span aria-hidden className="h-3 w-px bg-line" />
              <span className="text-primary">{p.status}</span>
            </div>
            <h3 className="mt-6 font-display text-[2.5rem] leading-none font-medium tracking-[-0.04em] text-fg sm:text-[3.25rem]">{p.name}</h3>
            {p.fullName && <p className="mt-2 text-[0.9375rem] text-fg-3">{p.fullName}</p>}
            <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-fg-2">{p.summary}</p>
            <dl className="mt-auto grid grid-cols-2 gap-6 border-t border-line pt-6 max-lg:mt-8">
              <div>
                <dt className="text-[0.8125rem] text-fg-3">Input</dt>
                <dd className="mt-1 text-[0.9375rem] text-fg">{p.input}</dd>
              </div>
              <div>
                <dt className="text-[0.8125rem] text-fg-3">Output</dt>
                <dd className="mt-1 text-[0.9375rem] text-fg">{p.output}</dd>
              </div>
            </dl>
            <span className="text-link mt-6 self-start group-hover:text-primary">
              Explore {p.name}
              <ArrowUpRight size={18} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <Photo image={p.image} className="aspect-[16/10] lg:col-span-7 lg:aspect-auto" sizes="(min-width: 1024px) 58vw, 100vw" />
          <motion.span aria-hidden className="pointer-events-none absolute inset-0 bg-black" style={reduce ? { opacity: 0 } : { opacity: dim }} />
        </Link>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* How it works: the steps scroll past a pinned screen that changes with them */

export type Step = { key: string; title: string; text: string; detail: string[]; image: Img & { width: number; height: number }; label: string };

export function HowItWorks({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  return (
    <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
      <ol className="lg:col-span-5">
        {steps.map((s, i) => (
          <motion.li
            key={s.key}
            onViewportEnter={() => setActive(i)}
            viewport={{ amount: 0.6 }}
            className="flex flex-col justify-center border-t border-line py-10 lg:min-h-[70vh] lg:py-0"
          >
            <span className={cn("eyebrow transition-colors duration-500", i === active ? "text-primary" : "text-fg-3")}>
              Step {i + 1} of {steps.length}
            </span>
            <h3
              className={cn(
                "mt-3 font-display text-[2rem] font-medium tracking-[-0.04em] transition-colors duration-500 sm:text-[2.5rem]",
                i === active ? "text-fg" : "text-fg-3",
              )}
            >
              {s.title}
            </h3>
            <p className="mt-4 max-w-[44ch] text-[1.0625rem] leading-relaxed text-fg-2">{s.text}</p>
            <ul className="mt-6 space-y-2.5">
              {s.detail.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[0.9375rem] text-fg">
                  <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-primary-strong" aria-hidden>
                    <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
            {/* On small screens the picture sits with its step */}
            <div className="mt-8 overflow-clip rounded-xl border border-line lg:hidden">
              <Image src={s.image.src} alt={s.image.alt} width={s.image.width} height={s.image.height} sizes="100vw" className="block h-auto w-full" />
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="hidden lg:col-span-7 lg:block">
        <div className="sticky top-[calc(50vh-15rem)]">
          <div className="overflow-clip rounded-xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-[0.8125rem] text-fg-3">
              <span>{steps[active].label}</span>
              <span>
                {active + 1} / {steps.length}
              </span>
            </div>
            <div className="relative aspect-[16/9] bg-deep">
              {steps.map((s, i) => (
                <motion.div
                  key={s.key}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0, scale: i === active || reduce ? 1 : 1.03 }}
                  transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={s.image.src} alt={i === active ? s.image.alt : ""} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-top" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex gap-2" aria-hidden>
            {steps.map((s, i) => (
              <span key={s.key} className={cn("h-0.5 flex-1 transition-colors duration-500", i <= active ? "bg-primary" : "bg-line")} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Featured project: the product screen opens up to the full width as it scrolls in */

export function ProjectExpand({
  title,
  place,
  summary,
  stats,
  href,
  shot,
}: {
  title: string;
  place: string;
  summary: string;
  stats: { value: string; label: string }[];
  href: string;
  shot: Img & { width: number; height: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.15"] });
  const inset = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const clipPath = useTransform(inset, (i) => `inset(0% ${i}%)`);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section className="bg-deep pt-20 pb-20 lg:pt-32 lg:pb-32">
      <div className="wrap">
        <SectionHeading
          eyebrow={`Featured project · ${place}`}
          title={title}
          lead={summary}
        />
      </div>
      <div ref={ref} className="mt-14 lg:mt-20">
        <motion.div className="relative mx-auto aspect-[16/9] max-h-[92vh] overflow-clip" style={reduce ? undefined : { clipPath }}>
          <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: imgScale }}>
            <Image src={shot.src} alt={shot.alt} fill sizes="100vw" className="object-cover object-top" />
          </motion.div>
        </motion.div>
      </div>
      <div className="wrap mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-end">
        <dl className="grid grid-cols-3 gap-6 lg:col-span-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-t border-line pt-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="block font-display text-[2rem] font-medium tracking-[-0.04em] text-fg sm:text-5xl" />
                <span className="mt-2 block max-w-[22ch] text-[0.9375rem] leading-snug text-fg-2">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={0.2} className="lg:col-span-4 lg:flex lg:justify-end">
          <ButtonLink href={href}>Read the case study</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
