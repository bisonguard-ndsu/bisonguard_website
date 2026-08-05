"use client";

import {
  Shield,
  Building2,
  Car,
  Database,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    icon: Building2,
    title: "Pavement Asset Management",
    description:
      "Detect pavement distresses, calculate PCI, and evaluate marking retro-reflectivity with advanced AI algorithms.",
    features: [
      "AI-powered distress detection",
      "PCI calculation",
      "Retro-reflectivity analysis",
    ],
  },
  {
    icon: Car,
    title: "Traffic Asset Management",
    description:
      "Detect and geolocate traffic signs, evaluate sign conditions, and estimate sign sizes with precision analytics.",
    features: [
      "Sign detection & geolocation",
      "Condition assessment",
      "Size estimation",
    ],
  },
  {
    icon: Landmark,
    title: "Bridge Monitoring",
    description:
      "Deploy drones for comprehensive inspections to monitor bridge structures and detect potential issues early.",
    features: [
      "Drone inspections",
      "Structural monitoring",
      "Early issue detection",
    ],
  },
  {
    icon: Shield,
    title: "Guard-rails Monitoring",
    description:
      "Detect guard rails and evaluate their conditions for safety management with computer vision technology.",
    features: [
      "Guard rail detection",
      "Condition evaluation",
      "Safety management",
    ],
  },
  {
    icon: Database,
    title: "Data Collection Services",
    description:
      "Use the customized AdAMS app for data collection and IRI prediction with seamless integration and reporting.",
    features: [
      "Custom data collection",
      "IRI prediction",
      "Seamless integration",
    ],
  },
];

function SolutionsCard({ item }: Readonly<{ item: Solution }>) {
  return (
    <article className="group flex h-full flex-col border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neon-deep hover:shadow-[0_18px_40px_-24px_rgba(11,36,57,0.45)] md:p-8">
      <span className="mb-6 inline-flex h-12 w-12 shrink-0 items-center justify-center border border-ink-100 bg-ink-50 text-navy-800 transition-colors duration-300 group-hover:border-navy-800 group-hover:bg-navy-900 group-hover:text-neon">
        <item.icon aria-hidden className="h-5 w-5" />
      </span>

      <h3 className="text-xl font-bold text-ink-900">{item.title}</h3>

      <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-500 md:text-base">
        {item.description}
      </p>

      <ul className="mt-auto space-y-2.5 border-t border-ink-100 pt-6">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-relaxed text-ink-700"
          >
            <span
              aria-hidden
              className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-neon-deep"
            />
            <span className="break-words">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Solutions() {
  return (
    <section className="section-y section-x bg-ink-50">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Solutions"
          title="AdAMS Solutions For Your Organization"
          lede="Maximize your team's productivity and security with our affordable, user-friendly asset management system."
          tone="light"
        />

        {/* 3 + 2: the trailing pair widens so the grid never ends on a hole */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-6">
          {solutions.map((item, index) => (
            <Reveal
              key={item.title}
              delay={Math.min(index, 2) * 0.1}
              className={cn(
                "h-full",
                index < 3 ? "lg:col-span-2" : "lg:col-span-3",
                index === solutions.length - 1 && "sm:col-span-2 lg:col-span-3"
              )}
            >
              <SolutionsCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
