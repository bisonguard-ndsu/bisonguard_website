"use client";

import {
  BarChart3,
  Brain,
  MonitorSpeaker,
  Radar,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";

interface Step {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: "Data Collection",
    description:
      "We deploy sensors, cameras, and IoT devices across key traffic points to gather continuous data on vehicle flow, speed, volume, and incidents.",
    icon: Radar,
    features: [
      "Sensors & Cameras",
      "IoT Devices",
      "Continuous Monitoring",
      "Multi-point Coverage",
    ],
  },
  {
    id: 2,
    title: "Real-Time Analysis",
    description:
      "The collected data is processed through advanced analytics and AI algorithms to detect patterns, predict congestion, and identify potential risks instantly.",
    icon: Brain,
    features: [
      "AI Algorithms",
      "Pattern Detection",
      "Congestion Prediction",
      "Risk Assessment",
    ],
  },
  {
    id: 3,
    title: "Smart Response System",
    description:
      "Our system dynamically adjusts traffic signals, provides real-time alerts, and reroutes traffic based on current conditions to minimize delays.",
    icon: Zap,
    features: [
      "Dynamic Signal Control",
      "Real-time Alerts",
      "Traffic Rerouting",
      "Delay Minimization",
    ],
  },
  {
    id: 4,
    title: "Control Center Oversight",
    description:
      "A centralized dashboard allows city operators to monitor traffic conditions, make informed decisions, and intervene when necessary.",
    icon: MonitorSpeaker,
    features: [
      "Centralized Dashboard",
      "Real-time Monitoring",
      "Decision Support",
      "Manual Intervention",
    ],
  },
  {
    id: 5,
    title: "Reporting & Optimization",
    description:
      "Detailed reports and performance metrics help improve traffic planning, identify infrastructure needs, and support long-term transportation strategies.",
    icon: BarChart3,
    features: [
      "Performance Metrics",
      "Traffic Planning",
      "Infrastructure Analysis",
      "Strategic Insights",
    ],
  },
];

export default function HowTMCWorks() {
  return (
    <section className="grain section-y section-x relative isolate overflow-hidden bg-navy-950">
      {/* Engineered backdrop — hairline grid, faded at both edges */}
      <div
        aria-hidden
        className="grid-lines absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How it works"
          title="How Our TMC System Works"
          lede="Our intelligent traffic control solution utilizes real-time data analysis and machine learning to optimize traffic flow, reduce congestion, and enhance road safety across urban networks."
          tone="dark"
        />

        <ol role="list" className="mt-14 md:mt-20">
          {steps.map((step, index) => (
            <Reveal
              key={step.id}
              as="li"
              delay={Math.min(index, 2) * 0.08}
              className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-5 pb-12 last:pb-0 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-x-10 md:pb-16"
            >
              {/* Connector — runs from this node down to the next */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-11 bottom-0 left-[1.375rem] w-px bg-navy-600 md:top-12 md:left-6"
                />
              )}

              {/* Numbered node */}
              <div className="flex h-11 w-11 items-center justify-center border border-navy-600 bg-navy-950 md:h-12 md:w-12">
                <span className="eyebrow text-neon tabular-nums">
                  {String(step.id).padStart(2, "0")}
                </span>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <step.icon
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 text-neon md:mt-1.5"
                  />
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-bluish-white/75 md:text-lg">
                  {step.description}
                </p>

                <ul className="mt-6 grid max-w-2xl gap-x-8 gap-y-3 sm:grid-cols-2">
                  {step.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-bluish-white/70"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-neon"
                      />
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
