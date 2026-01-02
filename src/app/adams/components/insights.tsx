"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

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
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="insights"
      className="py-20 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mx-auto container mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              Insights
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
            Don&apos;t replace, <span className="text-neon">Integrate</span>{" "}
          </h2>
          <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed">
            We understand the hassle of replacing the tools you&apos;re used to
            in your process. That&apos;s why we integrate with the tools you use
            in your day-to-day work.
          </p>
        </motion.div>

        {/* Insights Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <InsightCard key={index} insight={insight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightCard({
  insight,
  index,
}: {
  insight: (typeof insights)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Image Container with Overlay Effect */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-dark-blue/0 group-hover:bg-dark-blue/10 transition-colors duration-300 z-10" />
        <img
          src={insight.image || "/placeholder.svg?height=300&width=400"}
          alt={insight.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-neon/90 clip-path-polygon transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-dark-blue mb-4 group-hover:text-neon transition-colors duration-300">
          {insight.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {insight.description}
        </p>

        <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
          {insight.list.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle
                className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-neon"
              />
              <span className="text-sm text-gray-700 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <Button className="w-full bg-white text-dark-blue border-2 border-dark-blue hover:bg-dark-blue hover:text-white rounded-none font-bold tracking-wide transition-all duration-300 group-hover:shadow-md">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
