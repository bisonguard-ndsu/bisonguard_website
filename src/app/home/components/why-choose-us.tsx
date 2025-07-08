"use client";

import type React from "react";

import { BarChart3, Shield, Zap, Globe, Users, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface WhyChooseUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Real-time Analytics",
    description:
      "Get instant insights into your asset performance with our powerful analytics dashboard.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Security",
    description:
      "Keep your asset data secure with our enterprise-grade security protocols.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Deployment",
    description:
      "Get up and running quickly with our streamlined implementation process.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Accessibility",
    description:
      "Access your asset data from anywhere in the world, on any device.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description:
      "Collaborate seamlessly with your team members on asset management tasks.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Customizable Workflows",
    description:
      "Tailor the platform to match your specific asset management processes.",
  },
];

function WhyChooseUsCard({
  item,
  index,
}: {
  item: WhyChooseUsItem;
  index: number;
}) {
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
          <div className="text-neon">{item.icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">{item.description}</p>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-none border-2 border-transparent group-hover:border-neon/50 transition-colors duration-300" />
    </div>
  );
}

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const descRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const descInView = useInView(descRef, { once: true, margin: "-100px" });

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
              Why Choose Us
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          <motion.h2
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white"
          >
            Why <span className="text-neon">InfiniCity Labs</span> Delivers
            Excellence
          </motion.h2>

          <motion.p
            ref={descRef}
            initial={{ opacity: 0, y: 40 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-gray-300 text-md lg:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Our unique combination of research-driven expertise, proven
            technology solutions, and deep understanding of infrastructure,
            mobility, and smart systems enables us to deliver practical services
            that transform how cities manage their infrastructure, mobility, and
            smart systems.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyChooseUsItems.map((item, index) => (
            <WhyChooseUsCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
