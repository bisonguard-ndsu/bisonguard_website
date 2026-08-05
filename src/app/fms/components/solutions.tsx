"use client";

import type React from "react";

import Link from "next/link";
import {
  ArrowRight,
  Radar,
  ScanSearch,
  Sprout,
  type LucideProps,
} from "lucide-react";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";

interface Solution {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  image: string;
  /** Describes the photograph itself — the title is already read out as the heading. */
  imageAlt: string;
  href: string;
  linkText: string;
}

const solutions: Solution[] = [
  {
    icon: Sprout,
    title: "Autonomous Weeding Robot",
    description:
      "AI-powered hexapod robot that identifies and removes weeds without chemicals. Perfect for organic farms and small crop farms. Reduces herbicide use by 100% while cutting labor costs by 70%.",
    image: "/weeding-robot.webp",
    imageAlt:
      "Robotic arms mounted on wheeled rovers working between rows of crops on a field.",
    href: "/#contact",
    linkText: "Talk To Us",
  },
  {
    icon: ScanSearch,
    title: "Crop Monitoring Drones",
    description:
      "Aerial systems that scan entire fields for disease, pest damage, and growth patterns. Delivers actionable solutions to your smartphone daily.",
    image: "/fms.webp",
    imageAlt:
      "A survey drone flying above rows of vines at sunset, scanning the field below.",
    href: "/#contact",
    linkText: "Talk To Us",
  },
  {
    icon: Radar,
    title: "Intelligent Herd Monitoring and Management System",
    description:
      "AI-driven monitoring platform that watches over your herd 24/7 — tracking location, detecting health issues, identifying predators, and alerting you the moment something's wrong. Purpose-built for bison, cattle, and wildlife on open ranges.",
    image: "/herd2.JPEG",
    imageAlt:
      "A bison herd with a young calf grazing across open prairie grassland.",
    href: "/#contact",
    linkText: "Talk To Us",
  },
];

function SolutionCard({
  item,
  index,
}: Readonly<{ item: Solution; index: number }>) {
  const Icon = item.icon;

  return (
    <article className="group flex h-full flex-col border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neon hover:shadow-[0_20px_44px_-28px_rgba(11,36,58,0.5)]">
      {/* Image — one ratio across all three cards so the row reads as a set */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Anchors the icon plate and keeps the photo from fighting the type below */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center bg-neon text-navy-900 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-neon"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-7 lg:p-8">
        <div className="mb-5 flex items-center gap-4" aria-hidden="true">
          <span className="eyebrow text-ink-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-ink-100 transition-colors duration-300 group-hover:bg-neon/60" />
        </div>

        <h3 className="text-xl font-bold leading-snug text-ink-900">
          {item.title}
        </h3>

        <p className="mt-4 flex-1 text-base leading-relaxed text-ink-500">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="group/link mt-8 inline-flex w-fit items-center gap-2 border-b border-ink-100 pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 transition-colors duration-300 hover:border-neon"
        >
          {item.linkText}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="section-y section-x bg-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Split header — title left, lede right, so the row below gets the width */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <SectionHeading
            eyebrow="What We Build"
            title="Our Smart Farming Solutions"
            tone="light"
            align="left"
            className="lg:col-span-7"
          />

          <Reveal delay={0.16} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-ink-500 md:text-lg lg:border-l lg:border-ink-100 lg:pl-8">
              Three intelligent systems built for the realities of the field —
              working the ground, watching from above, and standing guard over
              your herd.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {solutions.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.1}
              y={24}
              className="h-full"
            >
              <SolutionCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
