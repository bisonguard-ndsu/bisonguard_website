"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type PanInfo } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = {
  key: string;
  tab: string;
  tagline: string;
  eyebrow: string;
  title: string;
  text: string;
  image: { src: string; alt: string; position: string; flip?: boolean };
  /** How much to darken the photo for legible white text (0 to 1) */
  shade: number;
  actions: { label: string; href: string }[];
};

const SLIDE_MS = 7000;
const FADE_S = 1.2;
const EASE = [0.22, 1, 0.36, 1] as const;

const slides: Slide[] = [
  {
    key: "company",
    shade: 0.15,
    tab: "Overview",
    tagline: "What we do",
    eyebrow: "InfiniCity Labs",
    title: "Computer vision for the roads you manage",
    text: "We build software that maps road assets, rates pavement condition, counts traffic and tracks every repair, all from the video your crews and cameras already capture.",
    image: { src: "/media/hero/company.webp", alt: "A city highway interchange at night, seen from above", position: "50% 50%" },
    actions: [
      { label: "Talk to us", href: "/contact" },
      { label: "Explore products", href: "/products" },
    ],
  },
  {
    key: "adams",
    shade: 0.4,
    tab: "AdAMS",
    tagline: "Asset management",
    eyebrow: "AdAMS · Advanced Asset Management System",
    title: "Drive the network once. Map every asset and defect.",
    text: "Record from a phone on the dashboard. AdAMS finds and geolocates signs, markings, street lights and signals, grades cracks and potholes on a five-level scale, and turns them into work orders.",
    image: { src: "/media/hero/adams.webp", alt: "A motorway at dusk seen from the driver's seat", position: "50% 62%" },
    actions: [
      { label: "Explore AdAMS", href: "/products/adams" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    key: "tmc",
    shade: 0.5,
    tab: "TMC",
    tagline: "Traffic cameras",
    eyebrow: "TMC",
    title: "Every traffic camera, live on one screen",
    text: "Watch live feeds, schedule recordings and run analyses for volume, speed, occupancy and density, with alerts and reports your operations team can act on.",
    image: { src: "/media/hero/tmc.webp", alt: "A traffic camera mounted on a pole against the sky", position: "50% 50%", flip: true },
    actions: [
      { label: "Explore TMC", href: "/products/traffic-management" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    key: "turnflow",
    shade: 0.45,
    tab: "Turnflow",
    tagline: "Movement counts",
    eyebrow: "Turnflow",
    title: "Turning-movement counts, report-ready",
    text: "Upload intersection video or record a live camera. Turnflow counts every movement by interval, measures headways and lane occupancy, and exports PDF or Word engineering reports.",
    image: { src: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above", position: "50% 50%" },
    actions: [
      { label: "Explore Turnflow", href: "/products/turnflow" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    key: "roadlogger",
    shade: 0.5,
    tab: "RoadLogger",
    tagline: "Field inspections",
    eyebrow: "RoadLogger",
    title: "Every defect logged, every case tracked to repair",
    text: "Inspectors capture issues on their phones, even offline. Each case moves from triage to monitoring to repair, pinned to the map and visible to the whole team.",
    image: { src: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn yellow lane marking", position: "50% 50%" },
    actions: [
      { label: "Explore RoadLogger", href: "/products/roadlogger" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
];


export default function Hero() {
  const reduce = useReducedMotion();
  const [{ index, prev }, setState] = useState({ index: 0, prev: -1 });
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);
  const playing = !paused && !hover && !hidden && !reduce;
  const go = useCallback((to: number) => {
    setState((s) => {
      const next = (to + slides.length) % slides.length;
      if (next === s.index) return s;
      return { index: next, prev: s.index };
    });
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(index + 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [playing, index, go]);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // As the page scrolls away, the photo drifts down slower than the page and the copy lifts and fades.
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const onPanEnd = (e: PointerEvent, info: PanInfo) => {
    if (e.pointerType === "mouse") return;
    if (Math.abs(info.offset.x) < Math.abs(info.offset.y)) return;
    if (info.offset.x < -50 || info.velocity.x < -400) go(index + 1);
    else if (info.offset.x > 50 || info.velocity.x > 400) go(index - 1);
  };

  const slide = slides[index];

  return (
    <motion.section
      ref={ref}
      aria-roledescription="carousel"
      aria-label="What we build"
      className="relative isolate -mt-[4.5rem] h-[100svh] min-h-[38rem] touch-pan-y overflow-clip bg-deep lg:max-h-[60rem]"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={() => setHover(false)}
      onPanEnd={onPanEnd}
    >
      {/* Photos crossfade; the active one zooms out very slowly while it is on screen */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y: photoY }}>
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
              animate={{ opacity: active || behind ? 1 : 0 }}
              transition={{ duration: active && !reduce && prev >= 0 ? FADE_S : 0, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ scale: active ? 1 : 1.08 }}
                transition={active && !reduce ? { duration: SLIDE_MS / 1000 + FADE_S, ease: "linear" } : { duration: 0 }}
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
      </motion.div>

      {/* Even shade for legibility, set per photo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[4] bg-black"
        initial={false}
        animate={{ opacity: slide.shade }}
        transition={{ duration: reduce ? 0 : FADE_S }}
      />

      {/* Copy */}
      <motion.div className="relative z-10 flex h-full flex-col justify-end" style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
        <div className="wrap pb-10 sm:pb-14">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.key}
              className="max-w-[50rem]"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.25, ease: EASE } }}
              exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.3 } }}
            >
              <p className="eyebrow">{slide.eyebrow}</p>
              {index === 0 ? (
                <h1 className="mt-6 font-display text-[2.625rem] leading-[1.02] font-medium tracking-[-0.045em] text-white sm:text-[4rem] lg:text-[5rem]">
                  {slide.title}
                </h1>
              ) : (
                <h2 className="mt-6 font-display text-[2.625rem] leading-[1.02] font-medium tracking-[-0.045em] text-white sm:text-[4rem] lg:text-[5rem]">
                  {slide.title}
                </h2>
              )}
              <p className="mt-5 max-w-[38rem] text-[1.0625rem] leading-relaxed text-white/85 sm:text-lg">{slide.text}</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
                {slide.actions.map((a, i) =>
                  i === 0 ? (
                    <Link key={a.href + a.label} href={a.href} className="btn btn-light">
                      {a.label}
                      <ArrowUpRight size={18} aria-hidden />
                    </Link>
                  ) : (
                    <Link key={a.href + a.label} href={a.href} className="text-link text-white">
                      {a.label}
                      <ArrowUpRight size={18} aria-hidden />
                    </Link>
                  ),
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Product rail */}
        <div className="wrap pb-6">
          <div className="flex items-stretch gap-4 border-t border-white/20">
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
                    <span aria-hidden className="absolute inset-x-0 -top-px h-0.5 overflow-hidden">
                      <span
                        key={`${index}-${playing}`}
                        className="block h-full origin-left bg-white"
                        style={{
                          transform: active && !playing ? "scaleX(1)" : "scaleX(0)",
                          animation: active && playing ? `hero-fill ${SLIDE_MS}ms linear forwards` : undefined,
                        }}
                      />
                    </span>
                    <span
                      className={cn(
                        "block font-display text-[0.9375rem] font-medium transition-colors duration-300",
                        active ? "text-white" : "text-white/55 group-hover:text-white/85",
                      )}
                    >
                      {s.tab}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 hidden text-[0.8125rem] transition-colors duration-300 lg:block",
                        active ? "text-white/70" : "text-white/40 group-hover:text-white/60",
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
                className="flex h-10 w-10 cursor-pointer items-center justify-center border border-white/30 text-white transition-[background-color,border-color,transform] duration-200 hover:border-white/70 hover:bg-white/10 active:scale-95"
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
      </motion.div>

      <style>{`@keyframes hero-fill { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
    </motion.section>
  );
}
