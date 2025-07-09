"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HerdCard {
  id: number;
  image: string;
}

const features: HerdCard[] = [
  {
    id: 1,
    image: "/herd.JPG",
  },
  {
    id: 22,
    image: "/herd2.JPEG",
  },
  {
    id: 13,
    image: "/herd.JPG",
  },
  {
    id: 42,
    image: "/herd2.JPEG",
  },
  {
    id: 16,
    image: "/herd.JPG",
  },
  {
    id: 26,
    image: "/herd2.JPEG",
  },
];

function FeatureCardMotion({
  feature,
  index,
}: Readonly<{
  feature: HerdCard;
  index: number;
}>) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
      className={`relative h-full bg-bluish-white/10 `}
    >
      <img
        src={feature.image}
        alt={feature.id.toString()}
        className="w-full h-80 object-cover"
      />
    </motion.div>
  );
}

export default function HerdSlideshow() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto container">
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
