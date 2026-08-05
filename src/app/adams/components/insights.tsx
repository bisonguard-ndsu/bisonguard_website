"use client";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";

const insights = [
  {
    title: "Pavement Condition Index (PCI)",
    description:
      "Advanced analysis of pavement conditions using AI-powered image processing and machine learning algorithms.",
    list: [
      "Automated condition assessment",
      "Real-time data collection",
      "Predictive analytics for maintenance planning",
    ],
    image: "/pci.png",
  },
  {
    title: "Pavement Distress Evaluation",
    description:
      "AI-powered distress detection and classification for accurate pavement condition assessment.",
    list: [
      "Detailed distress classification",
      "Severity level assessment",
      "Automated reporting and analysis",
    ],
    image: "/pde.gif",
  },
  {
    title: "Traffic Sign Retroreflectivity",
    description:
      " Precise measurement and analysis of traffic sign retroreflectivity for improved road safety.",
    list: [
      "Automated accurate retroreflectivity measurement",
      "Compliance monitoring",
      "Maintenance prioritization",
    ],
    image: "/retroref.png",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="section-y section-x bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Insights"
          title="What AdAMS measures"
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {insights.map((insight, index) => (
            <Reveal
              key={insight.title}
              delay={index * 0.1}
              className="h-full"
            >
              <InsightCard insight={insight} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightCard({ insight }: { insight: (typeof insights)[number] }) {
  return (
    <article className="group flex h-full flex-col border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neon-deep hover:shadow-[0_18px_40px_-24px_rgba(11,36,57,0.45)]">
      {/* Product still — matted on navy so the crop reads as deliberate */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950">
        <img
          src={insight.image}
          alt={insight.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-navy-950/15 transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-lg font-bold text-ink-900 md:text-xl">
          {insight.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-500 md:text-base">
          {insight.description}
        </p>

        <ul className="mt-auto space-y-2.5 border-t border-ink-100 pt-6">
          {insight.list.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-ink-700"
            >
              <span
                aria-hidden
                className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-neon-deep"
              />
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
