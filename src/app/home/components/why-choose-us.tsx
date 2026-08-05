"use client";

import type React from "react";

import { BarChart3, Shield, Zap, Globe, Users, Settings } from "lucide-react";

import Reveal from "@/components/ui/reveal";

interface WhyChooseUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ICON_CLASS = "size-5";

const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: <BarChart3 className={ICON_CLASS} />,
    title: "Real-time Analytics",
    description:
      "Get instant insights into your asset performance with our powerful analytics dashboard.",
  },
  {
    icon: <Shield className={ICON_CLASS} />,
    title: "Enhanced Security",
    description:
      "Keep your asset data secure with our enterprise-grade security protocols.",
  },
  {
    icon: <Zap className={ICON_CLASS} />,
    title: "Rapid Deployment",
    description:
      "Get up and running quickly with our streamlined implementation process.",
  },
  {
    icon: <Globe className={ICON_CLASS} />,
    title: "Global Accessibility",
    description:
      "Access your asset data from anywhere in the world, on any device.",
  },
  {
    icon: <Users className={ICON_CLASS} />,
    title: "Team Collaboration",
    description:
      "Collaborate seamlessly with your team members on asset management tasks.",
  },
  {
    icon: <Settings className={ICON_CLASS} />,
    title: "Customizable Workflows",
    description:
      "Tailor the platform to match your specific asset management processes.",
  },
];

/** Client-approved copy — do not reword. */
const WHY_LEDE =
  "Our unique combination of research-driven expertise, proven technology solutions, and deep understanding of infrastructure, mobility, and smart systems enables us to deliver practical services that transform how cities manage their infrastructure, mobility, and smart systems.";

export default function WhyChooseUs() {
  return (
    <section className="grain relative section-y section-x overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* One quiet bloom behind the header — no floating shapes, the capability
          grid itself supplies the structure. */}
      <div
        aria-hidden="true"
        className="bloom pointer-events-none absolute -top-56 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 opacity-20"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header — title left, supporting copy right */}
        <div className="mb-14 grid grid-cols-1 gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-neon" aria-hidden="true" />
                <span className="eyebrow text-neon">Why Choose Us</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-3xl font-bold leading-[1.12] text-white md:text-4xl lg:text-[2.75rem]">
                Why <span className="text-neon">InfiniCity Labs</span> Delivers
                Excellence
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.16}>
              <p className="text-base leading-relaxed text-bluish-white/75 md:text-lg">
                {WHY_LEDE}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Capability grid — continuous hairline rules rather than detached cards */}
        <ul className="grid grid-cols-1 border-l border-t border-navy-600 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsItems.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delay={0.06 * index}
              y={24}
              className="group relative border-b border-r border-navy-600 p-8 transition-colors duration-300 hover:bg-navy-800/50 lg:p-10"
            >
              {/* Neon rule wipes across the top edge on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-0 bg-neon transition-[width] duration-500 ease-out group-hover:w-full"
              />

              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center border border-navy-600 text-neon transition-colors duration-300 group-hover:border-neon/60 group-hover:bg-neon/10">
                  {item.icon}
                </span>
                <span
                  className="eyebrow text-navy-600 transition-colors duration-300 group-hover:text-neon/60"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">
                {item.title}
              </h3>
              <p className="max-w-[38ch] text-sm leading-relaxed text-bluish-white/70 md:text-base">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
