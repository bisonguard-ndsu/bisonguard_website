"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
}

interface HeroCarouselProps {
  items: HeroProps[];
  interval?: number; // in ms
}

export default function Hero({ items, interval = 5000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const {
    badge = "Company Since 1996",
    title = "Work with the best shape makers for your home.",
    description = "Compliment favourable connection and dispatched terminated esteem powerful excuse remove.",
    buttonText = "OUR SERVICES",
    buttonHref = "/services",
    onButtonClick,
    backgroundImage = "https://static.vecteezy.com/system/resources/thumbnails/038/972/123/small_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg",
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
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
    },
    exit: { opacity: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Always-on dark background behind the image */}
      <div className="absolute inset-0 bg-[#0a192f]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImage}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: "#0a192f",
          }}
          //@ts-expect-error from variants
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      {/* Linear Gradient Overlay - Right to Left (darker to lighter) */}
      <div className="absolute inset-0 bg-gradient-to-l from-dark-blue/90 via-dark-blue/70 to-dark-blue/50" />

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 py-16 lg:py-20 w-full">
        <div className="mx-auto container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5  items-center">
            {/* Text Content - Left Side */}
            <motion.div
              key={current}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-6 text-white col-span-3"
            >
              {/* Badge */}
              <motion.div
                //@ts-expect-error from variants
                variants={fadeUp}
              >
                <span className="text-[#27ea9c] text-sm font-medium uppercase tracking-wider">
                  {badge}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                //@ts-expect-error from variants
                variants={fadeUp}
              >
                {title.split(" ").map((word, index) => {
                  // Highlight specific words with the neon color
                  const highlightWords = ["best", "makers", "shape"];
                  const isHighlighted = highlightWords.some((hw) =>
                    word.toLowerCase().includes(hw.toLowerCase())
                  );
                  return (
                    <span
                      key={index}
                      className={
                        isHighlighted ? "text-[#27ea9c]" : "text-white"
                      }
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </motion.h1>

              {/* Description with Icon */}
              <motion.div //@ts-expect-error from variants
                variants={fadeUp}
              >
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  {description}
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div //@ts-expect-error from variants
                variants={fadeUp}
                className="pt-4"
              >
                {onButtonClick ? (
                  <Button
                    onClick={onButtonClick}
                    className="bg-[#27ea9c] hover:bg-[#22d18a] text-dark-blue capitalize px-12 py-7 text-base font-semibold tracking-wider transition-all duration-300 rounded-none"
                  >
                    {buttonText}
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="bg-[#27ea9c] hover:bg-[#22d18a] text-dark-blue capitalize px-12 py-7 text-base font-semibold tracking-wider transition-all duration-300 rounded-none"
                  >
                    <a href={buttonHref}>{buttonText}</a>
                  </Button>
                )}
              </motion.div>
            </motion.div>

            {/* Right Side - Empty space for background image visibility */}
            <div className="hidden lg:block">
              {/* This space allows the background image to show through */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
