"use client";

import type React from "react";

import {
  Shield,
  Building2,
  Car,
  Database,
  Landmark,
  ArrowUpRight,
  CheckCircle,
  LucideProps,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Solution {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  features: string[];
}

const solutions = [
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

function SolutionsCard({
  item,
  index,
}: Readonly<{ item: Solution; index: number }>) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`rounded-none group relative bg-white/5 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 rounded-none bg-gradient-to-r from-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-neon/20 rounded-full mb-6 group-hover:bg-neon/30 transition-colors duration-300">
          <div className="text-neon">
            <item.icon className="w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        <div className="space-y-2">
          {item.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center text-gray-400 text-sm"
            >
              <CheckCircle
                className="w-4 h-4 mr-2 flex-shrink-0"
                style={{ color: "#27ea9c" }}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className="group/btn flex items-center gap-2 text-neon font-medium text-sm hover:gap-3 transition-all duration-300 mt-6">
          Explore Solution
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:rotate-45" />
        </button>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-none border-2 border-transparent group-hover:border-neon/50 transition-colors duration-300" />
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 lg:px-16  bg-gradient-to-br from-dark-blue via-foreground to-dark-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #27ea9c 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon/5 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-neon/8 rounded-full blur-lg animate-pulse delay-500" />

      <div className="relative z-10 max-w-6xl mx-auto container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              Solutions
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white">
            AdAMS <span className="text-neon">Solutions</span> For Your
            Organization
          </h2>

          <p className="text-gray-300 text-md lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Maximize your team&apos;s productivity and security with our
            affordable, user-friendly asset management system.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((item, index) => (
            <SolutionsCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
