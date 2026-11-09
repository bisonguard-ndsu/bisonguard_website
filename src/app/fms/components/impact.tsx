"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "100%",
    label: "Herbicide Reduction",
    detail: "Chemical-free weeding on organic and small crop farms.",
  },
  {
    value: "70%",
    label: "Lower Labour Cost",
    detail: "Autonomous field work that runs without a crew.",
  },
  {
    value: "24/7",
    label: "Herd Monitoring",
    detail: "Continuous watch over location, health, and predators.",
  },
];

export default function Impact() {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-dark-blue py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #27ea9c 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={containerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto container"
      >
        <div className="mb-14 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              The Impact
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
            Grow More With <span className="text-neon">Less</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/10 border border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={containerInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * index,
                ease: "easeOut",
              }}
              className="group px-8 py-12 text-center transition-colors duration-500 hover:bg-white/5"
            >
              <p className="text-5xl font-bold tracking-tight text-neon lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-white">
                {stat.label}
              </p>
              <div className="mx-auto my-5 h-0.5 w-10 bg-neon/40 transition-all duration-500 group-hover:w-16 group-hover:bg-neon" />
              <p className="text-sm leading-relaxed text-gray-300">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
