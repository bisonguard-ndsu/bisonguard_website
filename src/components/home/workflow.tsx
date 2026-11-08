"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EXPO, WIPE_EASE } from "@/components/motion";
import { SectionHeading } from "@/components/sections";
import { cn } from "@/lib/utils";

const STEP_MS = 6000;

const steps = [
  {
    key: "capture",
    title: "Capture",
    text: "A phone on the dashboard, a camera on a pole, or footage you already have. No special vehicles or sensors.",
    detail: ["AdAMS and RoadLogger phone apps", "Live and recorded traffic cameras", "Uploads that resume when the signal drops"],
    image: { src: "/media/site/phone-dashboard.webp", alt: "A phone mounted on a car dashboard recording the road ahead", width: 643, height: 360 },
    label: "AdAMS app · recording",
  },
  {
    key: "detect",
    title: "Detect",
    text: "Our models find signs, markings, defects and vehicles, follow each one across frames and fix where it is.",
    detail: ["Signs classified to MUTCD codes", "Distress graded on five levels", "Vehicles tracked through every movement"],
    image: { src: "/media/site/adams-recording.webp", alt: "An AdAMS recording with its sign detection summary", width: 1918, height: 1021 },
    label: "AdAMS · Recording 74",
  },
  {
    key: "act",
    title: "Act",
    text: "Results land on one map and in reports your engineers trust, with the evidence frame behind every number.",
    detail: ["Asset maps with condition layers", "Work orders and case tracking", "PDF and Word engineering reports"],
    image: { src: "/media/site/adams-map.webp", alt: "The AdAMS asset map of Fargo and West Fargo", width: 1651, height: 871 },
    label: "AdAMS · Asset map",
  },
];

export default function HomeWorkflow() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { amount: 0.35 });
  const playing = visible && !hover && !reduce;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [playing, active]);

  const step = steps[active];

  return (
    <section ref={ref} className="section relative overflow-clip bg-deep">
      <div aria-hidden className="pointer-events-none absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full bg-violet/10 blur-3xl" />
      <div className="wrap">
        <SectionHeading
          eyebrow="How it works"
          title="From video to a decision in three steps"
          accent="in three steps"
          lead="Every product follows the same path: capture what is on the road, let the models read it, and put the result where your team works."
        />

        <div
          className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14"
          onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
          onPointerLeave={() => setHover(false)}
        >
          <ol className="lg:col-span-5" role="tablist" aria-label="Steps">
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.key} className="relative border-t border-white/10 last:border-b">
                  <span aria-hidden className="absolute inset-x-0 -top-px h-[2px] overflow-hidden">
                    <span
                      key={`${active}-${playing}`}
                      className="block h-full origin-left bg-primary-strong"
                      style={{
                        transform: on && !playing ? "scaleX(1)" : "scaleX(0)",
                        animation: on && playing ? `hero-fill ${STEP_MS}ms linear forwards` : undefined,
                      }}
                    />
                  </span>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls="workflow-panel"
                    onClick={() => setActive(i)}
                    className="group flex w-full cursor-pointer items-start gap-6 py-6 text-left"
                  >
                    <span className={cn("mt-1.5 font-mono text-sm transition-colors", on ? "text-primary-strong" : "text-fg-3")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span
                        className={cn(
                          "block font-display text-2xl font-semibold tracking-tight transition-colors sm:text-[1.75rem]",
                          on ? "text-fg" : "text-fg-3 group-hover:text-fg-2",
                        )}
                      >
                        {s.title}
                      </span>
                      <motion.span
                        initial={false}
                        animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }}
                        transition={{ duration: reduce ? 0 : 0.5, ease: EXPO }}
                        className="block overflow-hidden"
                      >
                        <span className="block pt-3 text-[1.0625rem] leading-relaxed text-fg-2">{s.text}</span>
                        <span className="mt-4 flex flex-wrap gap-2">
                          {s.detail.map((d) => (
                            <span key={d} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.8125rem] text-fg-2">
                              {d}
                            </span>
                          ))}
                        </span>
                      </motion.span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div id="workflow-panel" role="tabpanel" className="relative lg:col-span-7">
            <div aria-hidden className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.125_185/0.18),transparent_70%)] blur-2xl" />
            <div className="overflow-clip rounded-2xl border border-white/10 bg-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 truncate font-mono text-[0.6875rem] tracking-wide text-fg-3">{step.label}</span>
              </div>
              <div className="relative aspect-[16/9] bg-deep">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={step.key}
                    className="absolute inset-0"
                    initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 0% 100%)" }}
                    animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: reduce ? 0.2 : 1, ease: WIPE_EASE }}
                  >
                    <Image src={step.image.src} alt={step.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-top" />
                  </motion.div>
                </AnimatePresence>
                {!reduce && (
                  <motion.span
                    key={`scan-${step.key}`}
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 z-10 w-px bg-primary-strong shadow-[0_0_18px_3px_var(--color-primary)]"
                    initial={{ left: "100%", opacity: 1 }}
                    animate={{ left: "0%", opacity: [1, 1, 0] }}
                    transition={{ left: { duration: 1, ease: WIPE_EASE }, opacity: { duration: 1.2, times: [0, 0.8, 1] } }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes hero-fill { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
    </section>
  );
}
