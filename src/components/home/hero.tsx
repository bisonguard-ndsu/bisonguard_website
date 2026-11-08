"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { DEMO_HREF } from "@/content/nav";

/*
  Full-screen photographic hero. Three slides, one per line of work, each with its own
  photograph, headline and product link. Photos cross-fade with a slow zoom; the tabs along
  the bottom show progress and switch slides on click.
*/

const slides = [
  {
    key: "roads",
    tab: "Roads and assets",
    products: "AdAMS · PaveXpert · RoadLogger",
    image: "/images/highway-interchange.jpg",
    position: "50% 55%",
    title: "See every road asset from a single survey drive",
    lead: "AdAMS reads dashboard video and builds your sign inventory and pavement condition record, mapped and ready for review.",
    cta: { label: "Explore AdAMS", href: "/products/adams" },
  },
  {
    key: "traffic",
    tab: "Traffic",
    products: "TMC · Turnflow",
    image: "/tmc2.jpg",
    position: "70% 50%",
    title: "Traffic counts and movements, straight from your cameras",
    lead: "TMC and Turnflow turn live feeds and recordings into vehicle counts, turning movements and engineering reports.",
    cta: { label: "Explore Turnflow", href: "/products/turnflow" },
  },
  {
    key: "wildlife",
    tab: "Wildlife",
    products: "BisonGuard",
    image: "/herd.JPG",
    position: "50% 62%",
    title: "Find the herd before it reaches the road",
    lead: "BisonGuard watches pastures and roadsides with cameras and drones, so ranchers and road crews know where the animals are.",
    cta: { label: "Explore BisonGuard", href: "/products/bisonguard" },
  },
];

const SLIDE_MS = 8000;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [userPaused, setPaused] = useState(false);
  const paused = userPaused || !!reduce; // no autoplay for reduced motion
  const slide = slides[index];
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section aria-labelledby="hero-h" aria-roledescription="carousel" className="relative isolate h-svh min-h-[640px] overflow-hidden bg-deep">
      {/* Photographs */}
      {slides.map((s, i) => (
        <div
          key={s.key}
          aria-hidden
          className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === index && !reduce ? "hero-zoom" : ""}`}
            style={{ objectPosition: s.position, animationPlayState: paused ? "paused" : "running" }}
          />
        </div>
      ))}
      {/* Flat shade so the words read on any photo */}
      <div className="absolute inset-0 -z-10 bg-[#05070b]/55" aria-hidden />

      <div className="wrap flex h-full flex-col pb-6 pt-[calc(var(--header-h)+24px)] sm:pb-8">
        {/* Words */}
        <div className="flex flex-1 flex-col justify-center lg:justify-end lg:pb-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease }}
              className="max-w-[980px]"
            >
              <p className="label flex items-center gap-3 !text-white/80">
                <span className="h-px w-8 bg-accent" aria-hidden />
                {slide.tab}
              </p>
              <h1
                id="hero-h"
                className="mt-6 text-[42px] font-[450] leading-[1.0] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[84px] xl:text-[96px]"
              >
                {slide.title}
              </h1>
              <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.6] text-white/80 sm:text-[19px]">{slide.lead}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={DEMO_HREF} className="btn btn-primary">
                  Book a demo <span className="arrow" aria-hidden>→</span>
                </Link>
                <Link
                  href={slide.cta.href}
                  className="btn btn-secondary !text-white ![box-shadow:inset_0_0_0_1px_rgb(255_255_255/0.35)] hover:!bg-white/10"
                >
                  {slide.cta.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide tabs */}
        <div className="flex items-stretch gap-3 sm:gap-6">
          <div role="tablist" aria-label="Hero slides" className="grid flex-1 grid-cols-3 gap-3 sm:gap-6">
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setIndex(i)}
                  className="group relative pt-4 text-left"
                >
                  <span className="absolute inset-x-0 top-0 h-[2px] overflow-hidden bg-white/20" aria-hidden>
                    {active &&
                      (reduce ? (
                        <span className="absolute inset-0 bg-accent" />
                      ) : (
                        <span
                          key={`${s.key}-${index}`}
                          className="hero-progress absolute inset-y-0 left-0 bg-accent"
                          style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                          onAnimationEnd={next}
                        />
                      ))}
                  </span>
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-mono text-[12px] text-white/50">0{i + 1}</span>
                    <span className={`text-[14px] transition-colors sm:text-[16px] ${active ? "text-white" : "text-white/55 group-hover:text-white/85"}`}>
                      {s.tab}
                    </span>
                  </span>
                  <span className="mt-1 hidden pl-[26px] text-[13px] text-white/45 md:block">{s.products}</span>
                </button>
              );
            })}
          </div>
          {!reduce && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="mt-2 grid size-10 shrink-0 place-items-center rounded-full text-white/70 ring-1 ring-white/25 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                {paused ? <path d="M2 1l7 4-7 4z" fill="currentColor" /> : <path d="M2 1h2v8H2zM6 1h2v8H6z" fill="currentColor" />}
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
