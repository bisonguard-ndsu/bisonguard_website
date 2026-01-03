"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

  return (
    <section
      id="insights"
      className="pt-5 pb-10 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto container">
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
      className="group bg-white border border-gray-100  hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden rounded-lg"
    >
      {/* Image Container with Overlay Effect */}
      <div className="relative h-56 overflow-hidden">
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
      <div className="px-8 py-2 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-dark-blue mb-1 group-hover:text-neon transition-colors duration-300">
          {insight.title}
        </h4>

        <p className="text-gray-600 mb-2 text-sm leading-relaxed flex-grow">
          {insight.description}
        </p>

        <div className="mt-auto">
          <Button className="w-full rounded-lg h-10 bg-white text-dark-blue border-2 border-dark-blue hover:bg-dark-blue hover:text-white font-bold tracking-wide transition-all duration-300 group-hover:shadow-md">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
