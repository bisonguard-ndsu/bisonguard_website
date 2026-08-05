"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   name: "Dr. Sarah Johnson",
  //   position: "Infrastructure & Mobility Research Director, NDSU",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
  //   testimonial:
  //     "InfiniCity Labs' big data analytics platform has revolutionized how we approach infrastructure and mobility research. Their innovative use of machine learning algorithms has provided unprecedented insights into mobility patterns and infrastructure performance.",
  // },
  // {
  //   id: 2,
  //   name: "Michael Rodriguez",
  //   position: "Smart Cities Program Manager, NDDOT",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
  //   testimonial:
  //     "Working with InfiniCity Labs on our digital twin implementation has been transformative. Their expertise in real-time data processing and predictive modeling has enabled us to optimize our infrastructure and mobility networks like never before.",
  // },
  {
    id: 3,
    name: "Elijah Kofi Osei",
    position: "The Greyspaces Ltd.",
    image: "/elijah.jpg",
    testimonial:
      "The quality of research and technological innovation from InfiniCity Labs consistently exceeds expectations. Their asset management solutions have set new standards for infrastructure monitoring and maintenance optimization.",
  },
  // {
  //   id: 4,
  //   name: "Lisa Thompson",
  //   position: "Urban Planning Director, Smart Cities Initiative",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
  //   testimonial:
  //     "InfiniCity Labs' intelligent systems have been game-changing for our city planning efforts. Their safety analytics and predictive modeling capabilities have helped us reduce accidents and improve system flow significantly.",
  // },
];

/** Dwell time on each quote. Long enough to actually finish reading one. */
const ROTATION_MS = 8000;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // With a single approved quote there is nothing to rotate — running the
  // timer anyway would fade the section in and out for no reason.
  const hasMultiple = testimonials.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, ROTATION_MS);

    return () => clearInterval(interval);
  }, [hasMultiple]);

  const current = testimonials[currentIndex];

  if (!current) return null;

  return (
    <section className="section-y section-x relative overflow-hidden bg-ink-50">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by infrastructure and mobility leaders. What our clients and partners say."
          tone="light"
          className="max-w-4xl"
        />

        <Reveal delay={0.12} className="mt-14 md:mt-16 lg:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 lg:grid-cols-12 lg:gap-16"
            >
              {/* Portrait + attribution */}
              <div className="lg:col-span-4">
                <div className="relative w-40 max-w-xs sm:w-48 lg:w-full">
                  {/* Offset hairline frame — engineered, not decorative */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 hidden h-full w-full border border-neon-deep/40 lg:block"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
                    <img
                      src={current.image || "/user.jpg"}
                      alt={current.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-lg font-semibold text-ink-900">
                    {current.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    {current.position}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-8">
                <span
                  aria-hidden="true"
                  className="block select-none font-display text-7xl leading-[0.55] text-neon-deep/30 md:text-8xl"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-6 text-xl font-medium leading-[1.45] text-ink-900 md:text-2xl lg:text-[1.75rem] lg:leading-[1.4]">
                  {current.testimonial}
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        {hasMultiple && (
          <div className="mt-12 flex items-center gap-4 lg:mt-14">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={index === currentIndex}
                className="group py-3"
              >
                <span
                  className={`block h-[2px] w-10 transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-neon-deep"
                      : "bg-ink-300 group-hover:bg-ink-500"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
