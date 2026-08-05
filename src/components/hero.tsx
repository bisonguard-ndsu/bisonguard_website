"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
  highlightWords?: string[];
  target?: string;
}

interface HeroCarouselProps {
  items: HeroProps[];
  interval?: number; // in ms
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Parent of the copy block — staggers the eyebrow, title, lede and CTA in. */
const textGroup: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: EASE } },
};

/** Long, symmetrical crossfade so slides dissolve rather than blink. */
const backdrop: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.9, ease: EASE } },
};

const ctaClasses =
  "group h-auto rounded-none bg-neon px-8 py-4 text-sm font-bold capitalize tracking-[0.1em] text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-bright hover:shadow-lg hover:shadow-neon/25";

export default function Hero({ items, interval = 20000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const hasMultiple = items.length > 1;

  useEffect(() => {
    if (!hasMultiple || paused) return;
    // setTimeout keyed on `current` so manually jumping to a slide restarts
    // the dwell time instead of cutting it short.
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [current, hasMultiple, items.length, interval, paused]);

  const {
    badge,
    title = "Work with the best shape makers for your home.",
    description,
    buttonText = "OUR SERVICES",
    buttonHref = "/services",
    onButtonClick,
    backgroundImage = "https://static.vecteezy.com/system/resources/thumbnails/038/972/123/small_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg",
    highlightWords = ["best", "makers", "shape"],
    target,
  } = items[current] || {};

  const scrollToContent = () => {
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <section
      className="grain relative isolate flex min-h-[85svh] flex-col overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Layer 1 — the photograph, crossfaded between slides */}
      <AnimatePresence>
        <motion.div
          key={backgroundImage}
          className="absolute inset-0 bg-navy-950 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          role="img"
          aria-label={`Background image for ${title}`}
          variants={backdrop}
          initial="hidden"
          animate="show"
          exit="exit"
        />
      </AnimatePresence>

      {/* Layer 2 — scrims. Flat wash guarantees a contrast floor on any photo,
          the directional gradients anchor the left-aligned copy. */}
      <div aria-hidden className="absolute inset-0 bg-navy-950/45" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-navy-950/70"
      />

      {/* Layer 3 — engineered texture: hairline grid, faded top and bottom */}
      <div
        aria-hidden
        className="grid-lines absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)]"
      />

      {/* Layer 4 — column rules that mark the content measure */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="section-x container mx-auto h-full max-w-6xl">
          <div className="relative h-full">
            <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <span className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="section-x relative z-10 flex flex-1 flex-col pt-24 pb-10 md:pt-28 lg:pt-32">
        <div className="container mx-auto flex max-w-6xl flex-1 flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={textGroup}
              initial="hidden"
              animate="show"
              exit="exit"
              className="max-w-3xl"
            >
              {badge && (
                <motion.p
                  variants={fadeUp}
                  className="eyebrow flex items-start gap-3 text-neon"
                >
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-px w-8 shrink-0 bg-neon"
                  />
                  <span className="max-w-[48ch] break-words">{badge}</span>
                </motion.p>
              )}

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-4xl leading-[1.06] font-bold text-white md:mt-8 md:text-5xl lg:text-6xl xl:text-[4.25rem]"
              >
                {title.split(" ").map((word, index) => {
                  const isHighlighted = highlightWords.some((hw) =>
                    word.toLowerCase().includes(hw.toLowerCase()),
                  );
                  return (
                    <span
                      key={index}
                      className={isHighlighted ? "text-neon" : "text-white"}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </motion.h1>

              {description && (
                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-bluish-white/80 md:mt-7 md:text-lg"
                >
                  {description}
                </motion.p>
              )}

              <motion.div
                variants={fadeUp}
                className="mt-9 flex items-center md:mt-11"
              >
                {onButtonClick ? (
                  <Button onClick={onButtonClick} className={ctaClasses}>
                    {buttonText}
                    <ArrowRight
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                ) : (
                  <Button asChild className={ctaClasses}>
                    <Link href={buttonHref} target={target ?? "_parent"}>
                      {buttonText}
                      <ArrowRight
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide index + scroll cue */}
      <div className="section-x relative z-10 pb-8 md:pb-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-6 border-t border-white/10 pt-5 md:pt-6">
            {hasMultiple && (
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="eyebrow text-white/50 tabular-nums">
                  {String(current + 1).padStart(2, "0")}
                  <span className="text-white/25">
                    {" / "}
                    {String(items.length).padStart(2, "0")}
                  </span>
                </span>
                <div className="flex items-center gap-2">
                  {items.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={
                        item.title
                          ? `Show slide ${index + 1}: ${item.title}`
                          : `Show slide ${index + 1}`
                      }
                      aria-current={index === current}
                      className="group cursor-pointer py-3"
                    >
                      <span
                        className={`block h-[2px] transition-all duration-500 ${
                          index === current
                            ? "w-14 bg-neon"
                            : "w-7 bg-white/30 group-hover:bg-white/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={scrollToContent}
              aria-label="Scroll to content"
              className="group ml-auto flex cursor-pointer items-center gap-3 text-white/45 transition-colors duration-300 hover:text-neon"
            >
              <span className="eyebrow hidden sm:inline">Scroll</span>
              <ChevronDown
                aria-hidden
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
