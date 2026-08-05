"use client";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";

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
  return (
    <section className="grain section-y section-x relative overflow-hidden bg-navy-950">
      {/* Backdrop: hairline grid + a single bloom behind the heading */}
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      <div
        className="bloom pointer-events-none absolute -top-56 -left-40 h-[34rem] w-[34rem] opacity-25"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="The Impact"
          title="Grow More With Less"
          tone="dark"
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 border-y border-navy-600 md:mt-20 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.1}
              y={24}
              className="border-b border-navy-600 py-10 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:py-14 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-10"
            >
              <p className="text-6xl font-bold leading-[0.9] tracking-[-0.04em] text-neon lg:text-7xl">
                {stat.value}
              </p>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {stat.label}
              </p>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-bluish-white/70 md:text-base">
                {stat.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
