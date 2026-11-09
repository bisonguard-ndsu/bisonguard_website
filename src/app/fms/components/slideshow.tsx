"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

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
        loading="lazy"
      />
    </motion.div>
  );
}

export default function HerdSlideshow() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto container">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              In The Field
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          <h2 className="mb-6 text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
            Built For <span className="text-neon">Open Range</span> Conditions
          </h2>

          <p className="mx-auto max-w-3xl text-md leading-relaxed text-gray-600 lg:text-lg">
            Bison, cattle, and wildlife move across terrain that fences and
            headcounts can&apos;t keep up with. Our herd monitoring platform is
            designed for exactly this — wide, unpredictable, always-on ground.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
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
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 w-2 rounded-none transition-all duration-300 focus:outline-none ${
                selectedIndex === idx
                  ? "bg-neon shadow-lg scale-110"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
