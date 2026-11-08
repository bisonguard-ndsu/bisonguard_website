"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "motion/react";
import { Fragment, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = {
  key: string;
  tab: string;
  tagline: string;
  eyebrow: string;
  title: string;
  /** The part of the title drawn in the brand gradient. Must appear at the end of `title`. */
  accent: string;
  text: string;
  image: { src: string; alt: string; position: string; flip?: boolean };
  actions: { label: string; href: string }[];
};

const SLIDE_MS = 7000;
const WIPE_S = 1.15;
const WIPE_EASE = [0.77, 0, 0.175, 1] as const;
const EXPO = [0.16, 1, 0.3, 1] as const;

const slides: Slide[] = [
  {
    key: "company",
    tab: "Overview",
    tagline: "What we do",
    eyebrow: "InfiniCity Labs",
    title: "Computer vision for the roads you manage",
    accent: "the roads you manage",
    text: "We build software that maps road assets, rates pavement condition, counts traffic and tracks every repair, all from the video your crews and cameras already capture.",
    image: { src: "/media/hero/company.webp", alt: "A city highway interchange at night, seen from above", position: "50% 50%" },
    actions: [
      { label: "Talk to us", href: "/contact" },
      { label: "Explore products", href: "/products" },
    ],
  },
  {
    key: "adams",
    tab: "AdAMS",
    tagline: "Asset management",
    eyebrow: "AdAMS · Advanced Asset Management System",
    title: "Drive the network once. Map every asset and defect.",
    accent: "Map every asset and defect.",
    text: "Record from a phone on the dashboard. AdAMS finds and geolocates signs, markings, street lights and signals, grades cracks and potholes on a five-level scale, and turns them into work orders.",
    image: { src: "/media/hero/adams.webp", alt: "A motorway at dusk seen from the driver's seat", position: "50% 62%" },
    actions: [
      { label: "Explore AdAMS", href: "/products/adams" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    key: "tmc",
    tab: "TMC",
    tagline: "Traffic cameras",
    eyebrow: "TMC",
    title: "Every traffic camera, live on one screen",
    accent: "live on one screen",
    text: "Watch live feeds, schedule recordings and run analyses for volume, speed, occupancy and density, with alerts and reports your operations team can act on.",
    image: { src: "/media/hero/tmc.webp", alt: "A traffic camera mounted on a pole against the sky", position: "50% 50%", flip: true },
    actions: [
      { label: "Explore TMC", href: "/products/traffic-management" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    key: "turnflow",
    tab: "Turnflow",
    tagline: "Movement counts",
    eyebrow: "Turnflow",
    title: "Turning-movement counts, report-ready",
    accent: "report-ready",
    text: "Upload intersection video or record a live camera. Turnflow counts every movement by interval, measures headways and lane occupancy, and exports PDF or Word engineering reports.",
    image: { src: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above", position: "50% 50%" },
    actions: [
      { label: "Explore Turnflow", href: "/products/turnflow" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    key: "roadlogger",
    tab: "RoadLogger",
    tagline: "Field inspections",
    eyebrow: "RoadLogger",
    title: "Every defect logged, every case tracked to repair",
    accent: "tracked to repair",
    text: "Inspectors capture issues on their phones, even offline. Each case moves from triage to monitoring to repair, pinned to the map and visible to the whole team.",
    image: { src: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn yellow lane marking", position: "50% 50%" },
    actions: [
      { label: "Explore RoadLogger", href: "/products/roadlogger" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
];

const FULL = "inset(0% 0% 0% 0%)";
const hiddenFor = (dir: number) => (dir > 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)");

export default function Hero() {
  const reduce = useReducedMotion();
  const [{ index, prev, dir }, setState] = useState({ index: 0, prev: -1, dir: 1 });
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);
  const playing = !paused && !hover && !hidden && !reduce;
  const go = useCallback((to: number, d?: number) => {
    setState((s) => {
      const next = (to + slides.length) % slides.length;
      if (next === s.index) return s;
      return { index: next, prev: s.index, dir: d ?? (next > s.index ? 1 : -1) };
    });
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(index + 1, 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [playing, index, go]);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onPanEnd = (e: PointerEvent, info: PanInfo) => {
    if (e.pointerType === "mouse") return;
    if (Math.abs(info.offset.x) < Math.abs(info.offset.y)) return;
    if (info.offset.x < -50 || info.velocity.x < -400) go(index + 1, 1);
    else if (info.offset.x > 50 || info.velocity.x > 400) go(index - 1, -1);
  };

  const slide = slides[index];

  return (
    <motion.section
      aria-roledescription="carousel"
      aria-label="What we build"
      className="relative isolate -mt-[4.5rem] h-[86svh] min-h-[36rem] touch-pan-y overflow-clip bg-deep lg:max-h-[54rem] lg:min-h-[40rem]"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={() => setHover(false)}
      onPanEnd={onPanEnd}
    >
      {/* Photos: the next one is uncovered by a sweeping wipe, then slowly settles */}
      {slides.map((s, i) => {
        const active = i === index;
        const behind = i === prev;
        return (
          <motion.div
            key={s.key}
            aria-hidden={!active}
            className="absolute inset-0"
            style={{ zIndex: active ? 2 : behind ? 1 : 0 }}
            initial={false}
            animate={{
              clipPath: active ? (reduce || prev < 0 ? FULL : [hiddenFor(dir), FULL]) : behind ? FULL : hiddenFor(dir),
            }}
            transition={active && !reduce ? { duration: WIPE_S, ease: WIPE_EASE } : { duration: 0 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: active || behind ? 1 : 1.18 }}
              transition={
                active && !reduce
                  ? { duration: SLIDE_MS / 1000 + WIPE_S, ease: [0.22, 1, 0.36, 1] }
                  : { duration: 0 }
              }
            >
              <Image
                src={s.image.src}
                alt={s.image.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                draggable={false}
                className={cn("object-cover select-none", s.image.flip && "-scale-x-100")}
                style={{ objectPosition: s.image.position }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Scan line riding the wipe's edge */}
      {!reduce && (
        <AnimatePresence initial={false}>
          <motion.div
            key={`scan-${index}`}
            aria-hidden
            className="pointer-events-none absolute inset-y-0 z-[3] w-px"
            initial={{ left: dir > 0 ? "100%" : "0%", opacity: 1 }}
            animate={{ left: dir > 0 ? "0%" : "100%", opacity: [1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ left: { duration: WIPE_S, ease: WIPE_EASE }, opacity: { duration: WIPE_S + 0.25, times: [0, 0.8, 1] } }}
          >
            <span className="absolute inset-y-0 left-0 w-px bg-primary-strong shadow-[0_0_18px_3px_var(--color-primary)]" />
            <span
              className={cn(
                "absolute inset-y-0 w-40 from-primary/25 to-transparent",
                dir > 0 ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l",
              )}
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Legibility */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[4]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-deep via-deep/70 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-deep/70 via-deep/20 to-transparent lg:w-2/3" />
      </div>

      {/* Copy */}
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="wrap pb-8 sm:pb-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.key}
              className="max-w-[48rem]"
              exit={reduce ? undefined : { opacity: 0, y: -14, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: "easeIn" }}
            >
              <motion.p
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: EXPO }}
                className="flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.08em] text-primary-strong uppercase sm:text-[0.8125rem]"
              >
                <span className="shrink-0 font-mono whitespace-nowrap text-white/60">
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-white/30"> / {String(slides.length).padStart(2, "0")}</span>
                </span>
                <span className="h-px w-8 shrink-0 bg-primary-strong/70" aria-hidden />
                {slide.eyebrow}
              </motion.p>

              <Headline as={index === 0 ? "h1" : "h2"} title={slide.title} accent={slide.accent} reduce={!!reduce} />

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.75, ease: EXPO }}
                className="mt-5 max-w-[38rem] text-[1.0625rem] leading-relaxed text-white/80 sm:text-lg"
              >
                {slide.text}
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: EXPO }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {slide.actions.map((a, i) => (
                  <Link
                    key={a.href + a.label}
                    href={a.href}
                    className={cn("btn group h-12 px-6 text-base", i === 0 ? "btn-primary" : "btn-ghost")}
                  >
                    {a.label}
                    {i === 0 && (
                      <span className="arrow" aria-hidden>
                        →
                      </span>
                    )}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Product rail */}
        <div className="wrap pb-5 sm:pb-6">
          <div className="flex items-stretch gap-4 border-t border-white/15">
            <div className="grid flex-1 grid-cols-5" role="group" aria-label="Choose a product">
              {slides.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`${s.tab}: ${s.tagline}`}
                    aria-current={active}
                    className="group relative cursor-pointer pt-4 pr-3 text-left"
                  >
                    <span aria-hidden className="absolute inset-x-0 -top-px h-[2px] overflow-hidden">
                      <span
                        key={`${index}-${playing}`}
                        className="block h-full origin-left bg-primary-strong shadow-[0_0_10px_var(--color-primary)]"
                        style={{
                          transform: active && !playing ? "scaleX(1)" : "scaleX(0)",
                          animation: active && playing ? `hero-fill ${SLIDE_MS}ms linear forwards` : undefined,
                        }}
                      />
                    </span>
                    <span
                      className={cn(
                        "block font-mono text-xs transition-colors duration-300",
                        active ? "text-primary-strong" : "text-white/45 group-hover:text-white/75",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "mt-1 hidden font-display text-[0.9375rem] font-semibold transition-colors duration-300 sm:block",
                        active ? "text-white" : "text-white/55 group-hover:text-white/85",
                      )}
                    >
                      {s.tab}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 hidden text-[0.8125rem] transition-colors duration-300 lg:block",
                        active ? "text-white/65" : "text-white/35 group-hover:text-white/55",
                      )}
                    >
                      {s.tagline}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center pt-4">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-[background-color,border-color,transform] duration-200 hover:border-white/60 hover:bg-white/10 active:scale-95"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                  {paused || reduce ? (
                    <path d="M5 3v10l8-5z" fill="currentColor" />
                  ) : (
                    <>
                      <rect x="4" y="3" width="2.5" height="10" rx="0.5" fill="currentColor" />
                      <rect x="9.5" y="3" width="2.5" height="10" rx="0.5" fill="currentColor" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes hero-fill { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
    </motion.section>
  );
}

/** Headline whose words rise out of a mask one after another; the accent phrase is drawn in the brand gradient. */
function Headline({ as, title, accent, reduce }: { as: "h1" | "h2"; title: string; accent: string; reduce: boolean }) {
  const Tag = as;
  const cut = title.endsWith(accent) ? title.length - accent.length : title.length;
  const words = [
    ...title.slice(0, cut).split(" ").filter(Boolean).map((w) => ({ w, accent: false })),
    ...title.slice(cut).split(" ").filter(Boolean).map((w) => ({ w, accent: true })),
  ];
  return (
    <Tag
      aria-label={title}
      className="mt-5 font-display text-[2.375rem] leading-[1.06] font-semibold tracking-[-0.03em] text-white sm:text-[3.5rem] lg:text-[4.25rem]"
    >
      {words.map(({ w, accent: a }, i) => (
        <Fragment key={i}>
        <span aria-hidden className="-mb-[0.12em] inline-block overflow-clip pb-[0.12em] align-top">
          <motion.span
            className={cn("inline-block", a && "text-gradient")}
            initial={reduce ? false : { y: "110%", rotate: 4 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.42 + i * 0.055, ease: EXPO }}
          >
            {w}
          </motion.span>
        </span>
        {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
