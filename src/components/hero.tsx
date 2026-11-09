"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Hero({ items, interval = 20000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const {
    title = "Work with the best shape makers for your home.",
    buttonText = "OUR SERVICES",
    buttonHref = "/services",
    onButtonClick,
    backgroundImage = "https://static.vecteezy.com/system/resources/thumbnails/038/972/123/small_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg",
    highlightWords = ["best", "makers", "shape"],
    target,
  } = items[current] || {};

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const imageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a192f]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImage}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: "#0a192f",
          }}
          role="img"
          aria-label={`Background image for ${title}`}
          // @ts-expect-error from framer motion
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-l from-dark-blue/90 via-dark-blue/70 to-dark-blue/50" />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 py-12 lg:py-16 w-full">
        <div className="mx-auto container max-w-6xl">
          <div className="w-full max-w-4xl container mx-auto items-center">
            <motion.div
              key={current}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-4 text-white w-full"
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight"
                //@ts-expect-error from variants
                variants={fadeUp}
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

              <motion.div //@ts-expect-error from variants
                variants={fadeUp}
                className="pt-2 flex items-center justify-center"
              >
                {onButtonClick ? (
                  <Button
                    onClick={onButtonClick}
                    className="bg-neon hover:bg-[#22d18a] text-dark-blue capitalize px-8 py-5 text-sm tracking-wider transition-all duration-300 rounded-none font-bold"
                  >
                    {buttonText}
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="bg-neon hover:bg-[#22d18a] text-dark-blue capitalize px-8 py-5 text-sm font-semibold tracking-wider transition-all duration-300 rounded-none"
                  >
                    <Link href={buttonHref} target={target ?? "_parent"}>
                      {buttonText}
                    </Link>
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
