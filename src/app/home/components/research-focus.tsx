"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureCard {
  badge: string;
  title: string;
  description: string;
  number: string;
}

const features: FeatureCard[] = [
  {
    badge: "BIG DATA ANALYTICS",
    title: "Big Data Analytics In Transportation",
    description:
      "Leveraging large-scale data and machine learning to uncover insights, predict trends, and support decision-making in transportation systems",
    number: "01",
  },
  {
    badge: "DIGITAL TWINS",
    title: "Digital Twins and Smart Cities",
    description:
      "Utilizing digital replicas of physical assets and urban environments to optimize city planning, operations, and sustainability",
    number: "02",
  },
  {
    badge: "INTELLIGENT SYSTEMS",
    title: "Intelligent Transportation Systems",
    description:
      "Integrating advanced technologies to create smarter, adaptive transportation networks",
    number: "03",
  },
  {
    badge: "ASSET MANAGEMENT",
    title: "Pavement and Asset Management",
    description:
      "Developing methods for monitoring, maintaining, and optimizing the lifecycle of roads, bridges, and other transportation assets",
    number: "04",
  },
  {
    badge: "TRANSPORTATION SAFETY",
    title: "Transportation Safety",
    description:
      "Roadways accidents reduction using data analysis, simulation and safety interventions",
    number: "05",
  },
];

function FeatureCardMotion({
  feature,
  index,
}: {
  feature: FeatureCard;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
      className={`relative h-full p-10 ${
        index % 2 === 1
          ? "bg-bluish-white/10"
          : "bg-white border border-bluish-white/30"
      }`}
    >
      {/* Background Number */}
      <div className="absolute top-5 right-5 text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 leading-none select-none">
        {feature.number}
      </div>
      {/* Content */}
      <div className="relative z-10 pt-8">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span
            className={`px-4 py-2 text-[10px] font-semibold uppercase tracking-wider ${
              index % 2 === 0
                ? "bg-neon text-foreground"
                : "bg-neon/20 text-neon"
            }`}
          >
            {feature.badge}
          </span>
        </div>
        {/* Title */}
        <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight">
          {feature.title}
        </h3>
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function ResearchFocus() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Research Focus
          </h2>
        </motion.div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <FeatureCardMotion feature={feature} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
