"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "@/components/motion";
import { ButtonLink } from "@/components/sections";
import { partners } from "@/content/evidence";
import { cn } from "@/lib/utils";

type Kind = "sign" | "signal" | "vehicle" | "roadside";

const colour: Record<Kind, string> = {
  sign: "oklch(0.8 0.13 185)",
  signal: "oklch(0.84 0.15 78)",
  vehicle: "oklch(0.78 0.11 250)",
  roadside: "oklch(0.76 0.13 300)",
};

/** Boxes in percent of the frame (highway-sign.webp, 1600 × 1067). */
const boxes: { label: string; score: string; kind: Kind; l: number; t: number; w: number; h: number; tag?: "in" | "below"; right?: boolean }[] = [
  { label: "Guide sign", score: "0.98", kind: "sign", l: 34.6, t: 32.8, w: 32.5, h: 24 },
  { label: "Exit panel", score: "0.95", kind: "sign", l: 54, t: 27.6, w: 12.5, h: 5.2 },
  { label: "Lane-use signals", score: "0.93", kind: "signal", l: 47.6, t: 60.8, w: 13.4, h: 8 },
  { label: "Vehicle", score: "0.99", kind: "vehicle", l: 43.4, t: 82.8, w: 7.6, h: 9.6 },
  { label: "Vehicle", score: "0.97", kind: "vehicle", l: 57, t: 83.3, w: 5.4, h: 7.4 },
  { label: "Truck", score: "0.96", kind: "vehicle", l: 5, t: 76, w: 8.2, h: 6.6 },
  { label: "Light pole", score: "0.91", kind: "roadside", l: 85.5, t: 0.6, w: 4.5, h: 83.4, tag: "in", right: true },
  { label: "Guardrail", score: "0.88", kind: "roadside", l: 64, t: 83, w: 35.6, h: 16.6, tag: "in" },
];

const tally: { kind: Kind; label: string }[] = [
  { kind: "sign", label: "Signs" },
  { kind: "signal", label: "Signals" },
  { kind: "vehicle", label: "Vehicles" },
  { kind: "roadside", label: "Roadside assets" },
];

const START_MS = 900;
const STEP_MS = 380;

function DetectionFrame() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? boxes.length : 0);

  useEffect(() => {
    if (reduce) return;
    const timers = boxes.map((_, i) => setTimeout(() => setShown(i + 1), START_MS + i * STEP_MS));
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  const done = shown >= boxes.length;
  const visible = boxes.slice(0, shown);

  return (
    <div className="overflow-clip rounded-xl border border-white/12 bg-[oklch(0.17_0.016_265)] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-xs text-white/60">
        <span className="flex min-w-0 items-center gap-2.5">
          <span className={cn("h-2 w-2 shrink-0 rounded-full", done ? "bg-[oklch(0.8_0.13_185)]" : "anim-pulse bg-[oklch(0.84_0.15_78)]")} />
          <span className="truncate">
            <span className="font-semibold text-white/85">AdAMS</span> · Survey run 0412 · I-190 northbound
          </span>
        </span>
        <span className="shrink-0 font-mono tabular-nums">{done ? "Frame analysed" : "Analysing frame…"}</span>
      </div>

      <div className="relative aspect-[1600/1067]">
        <Image
          src="/media/site/highway-sign.webp"
          alt="A highway approaching an overhead guide sign for Niagara Falls, with lane signals, vehicles, a light pole and a guardrail"
          fill
          priority
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-fill"
        />
        <div aria-hidden className="absolute inset-0">
          {boxes.map((b, i) => (
            <motion.div
              key={i}
              className="absolute rounded-[2px] border-2"
              style={{ left: `${b.l}%`, top: `${b.t}%`, width: `${b.w}%`, height: `${b.h}%`, borderColor: colour[b.kind] }}
              initial={reduce ? false : { opacity: 0, scale: 1.06 }}
              animate={i < shown ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <span
                className={cn(
                  "absolute hidden px-1.5 py-[3px] font-mono text-[10px] leading-none font-medium whitespace-nowrap text-[oklch(0.16_0.02_265)] sm:block lg:text-[11px]",
                  b.tag === "in" ? "top-0" : "bottom-full",
                  b.right ? "right-[-2px]" : "left-[-2px]",
                )}
                style={{ background: colour[b.kind] }}
              >
                {b.label} {b.score}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <dl className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
        {tally.map((t, i) => (
          <div key={t.kind} className={cn("px-4 py-3.5", i > 0 && "sm:border-l sm:border-white/10", i % 2 === 1 && "max-sm:border-l max-sm:border-white/10", i > 1 && "max-sm:border-t max-sm:border-white/10")}>
            <dt className="flex items-center gap-2 text-xs text-white/55">
              <span className="h-2 w-2 rounded-[2px]" style={{ background: colour[t.kind] }} />
              {t.label}
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white tabular-nums">{visible.filter((b) => b.kind === t.kind).length}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="relative -mt-[4.5rem] bg-deep pt-[4.5rem]">
      <div className="wrap grid items-center gap-12 pt-12 pb-16 lg:grid-cols-12 lg:gap-14 lg:pt-20 lg:pb-24">
        <div className="min-w-0 lg:col-span-6 xl:col-span-5">
          <motion.p {...rise(0)} className="text-sm font-semibold text-primary">
            Road and traffic analytics
          </motion.p>
          <motion.h1
            {...rise(0.08)}
            className="mt-5 font-display text-[2.625rem] leading-[1.04] font-semibold tracking-[-0.035em] text-white sm:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            Computer vision for the roads you manage
          </motion.h1>
          <motion.p {...rise(0.16)} className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/70">
            We turn the video your crews and cameras already capture into the records engineers maintain: asset inventories, pavement ratings,
            traffic counts and repair histories.
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Talk to us</ButtonLink>
            <ButtonLink href="/products" variant="ghost">
              Explore the products
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          className="min-w-0 lg:col-span-6 xl:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          <DetectionFrame />
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-10">
          <p className="shrink-0 text-sm text-white/50">Working with</p>
          <ul className="flex flex-wrap items-center gap-x-9 gap-y-3">
            {partners
              .filter((p) => p.verified)
              .map((p) => (
                <li key={p.name} title={p.full} className="font-display text-lg font-semibold tracking-tight text-white/70">
                  {p.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
