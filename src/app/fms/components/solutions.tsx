"use client";

import type React from "react";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Radar, ScanSearch, Sprout, LucideProps } from "lucide-react";

interface Solution {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  image: string;
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
    href: "/#contact",
    linkText: "Talk To Us",
  },
  {
    icon: ScanSearch,
    title: "Crop Monitoring Drones",
    description:
      "Aerial systems that scan entire fields for disease, pest damage, and growth patterns. Delivers actionable solutions to your smartphone daily.",
    image: "/fms.webp",
    href: "/#contact",
    linkText: "Talk To Us",
  },
  {
    icon: Radar,
    title: "Intelligent Herd Monitoring and Management System",
    description:
      "AI-driven monitoring platform that watches over your herd 24/7 — tracking location, detecting health issues, identifying predators, and alerting you the moment something's wrong. Purpose-built for bison, cattle, and wildlife on open ranges.",
    image: "/herd2.JPEG",
    href: "/#contact",
    linkText: "Talk To Us",
  },
];

function SolutionCard({
  item,
  index,
}: Readonly<{ item: Solution; index: number }>) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-none border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-neon hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-dark-blue/10 transition-colors duration-500 group-hover:bg-dark-blue/0" />
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Icon badge sitting on the image edge */}
        <div className="absolute bottom-0 left-0 z-20 flex h-14 w-14 items-center justify-center bg-neon text-dark-blue transition-colors duration-300 group-hover:bg-dark-blue group-hover:text-neon">
          <item.icon className="h-7 w-7" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-8">
        <h3 className="mb-4 text-xl font-bold leading-snug text-dark-blue transition-colors duration-300 group-hover:text-neon">
          {item.title}
        </h3>

        <div className="mb-5 h-0.5 w-12 bg-neon transition-all duration-500 group-hover:w-20" />

        <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-600">
          {item.description}
        </p>

        <Link
          href={item.href}
          className="group/link mt-auto inline-flex items-center gap-2 self-start border-b-2 border-transparent pb-1 text-sm font-semibold uppercase tracking-wider text-dark-blue transition-all duration-300 hover:border-neon hover:text-neon"
        >
          {item.linkText}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="solutions"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              What We Build
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          <h2 className="mb-6 text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
            Our <span className="text-neon">Smart Farming</span> Solutions
          </h2>

          <p className="mx-auto max-w-3xl text-md leading-relaxed text-gray-600 lg:text-lg">
            Three intelligent systems built for the realities of the field —
            working the ground, watching from above, and standing guard over
            your herd.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <SolutionCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
