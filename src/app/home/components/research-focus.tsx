"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  ChartNoAxesCombined,
  Layers,
  Radar,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface FeatureCard {
  badge: string;
  title: string;
  description: string;
  number: string;
  /** Decorative anchor for the card — not content. */
  icon: LucideIcon;
}

/** Client-approved copy — badges, titles, descriptions and numbers are fixed. */
const features: FeatureCard[] = [
  {
    badge: "BIG DATA ANALYTICS",
    title: "Big Data Analytics In Transportation",
    description:
      "Leveraging large-scale data and machine learning to uncover insights, predict trends, and support decision-making in transportation systems",
    number: "01",
    icon: ChartNoAxesCombined,
  },
  {
    badge: "DIGITAL TWINS",
    title: "Digital Twins and Smart Cities",
    description:
      "Utilizing digital replicas of physical assets and urban environments to optimize city planning, operations, and sustainability",
    number: "02",
    icon: Boxes,
  },
  {
    badge: "INTELLIGENT SYSTEMS",
    title: "Intelligent Transportation Systems",
    description:
      "Integrating advanced technologies to create smarter, adaptive transportation networks",
    number: "03",
    icon: Radar,
  },
  {
    badge: "ASSET MANAGEMENT",
    title: "Pavement and Asset Management",
    description:
      "Developing methods for monitoring, maintaining, and optimizing the lifecycle of roads, bridges, and other transportation assets",
    number: "04",
    icon: Layers,
  },
  {
    badge: "SMART FARMING",
    title: "Smart Farming Solutions",
    description:
      "AI-powered agricultural systems that integrate autonomous robotics, aerial monitoring, and predictive analytics to transform how crops and livestock are managed",
    number: "05",
    icon: Sprout,
  },
];

/**
 * One focus area. Every card gets the identical treatment — hierarchy comes
 * from the navy icon block, the badge and the title, not from alternating
 * background colours.
 */
function FocusCard({ feature }: Readonly<{ feature: FeatureCard }>) {
  const Icon = feature.icon;

  return (
    <article className="group flex h-full flex-col border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neon hover:shadow-[0_24px_60px_-32px_rgba(11,36,57,0.45)] md:p-9">
      {/* Icon block + index */}
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy-900 transition-colors duration-300 group-hover:bg-navy-800">
          <Icon
            className="h-5 w-5 text-neon"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </span>
        <span
          aria-hidden="true"
          className="font-display text-sm font-semibold tabular-nums tracking-[0.18em] text-ink-300 transition-colors duration-300 group-hover:text-neon-deep"
        >
          {feature.number}
        </span>
      </div>

      {/* Badge */}
      <p className="eyebrow mt-8 text-ink-500">{feature.badge}</p>

      {/* Title */}
      <h3 className="mt-3 text-xl font-bold leading-snug text-ink-900 md:text-[1.375rem]">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-ink-500 md:text-base">
        {feature.description}
      </p>

      {/* Footer rule — extends and turns neon on hover */}
      <div className="mt-auto pt-8">
        <span
          aria-hidden="true"
          className="block h-px w-10 bg-ink-300 transition-all duration-300 group-hover:w-20 group-hover:bg-neon-deep"
        />
      </div>
    </article>
  );
}

export default function ResearchFocus() {
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

  const arrowClass =
    "flex h-11 w-11 items-center justify-center border border-ink-100 bg-white text-ink-700 transition-all duration-300 hover:border-navy-900 hover:bg-navy-900 hover:text-neon";

  return (
    <section className="section-y section-x bg-ink-50">
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading + desktop controls */}
        <div className="flex items-end justify-between gap-10">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Focus Areas"
            lede="The research disciplines behind every system we design, build, and deploy."
            tone="light"
          />

          <Reveal delay={0.16} className="hidden shrink-0 md:block">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className={arrowClass}
                aria-label="Previous focus area"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className={arrowClass}
                aria-label="Next focus area"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12 md:mt-16">
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
            <CarouselContent className="-ml-4 items-stretch md:-ml-6">
              {features.map((feature) => (
                <CarouselItem
                  key={feature.number}
                  className="h-auto pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
                >
                  <FocusCard feature={feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Reveal>

        {/* Dot indicators — 4px bars in a 32px tap target */}
        <Reveal delay={0.2} className="mt-8 flex justify-center gap-2 md:mt-10">
          {features.map((feature, idx) => (
            <button
              key={feature.number}
              type="button"
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={selectedIndex === idx ? "true" : undefined}
              className="group flex h-8 items-center px-1"
            >
              <span
                className={`block h-1 transition-all duration-300 ${
                  selectedIndex === idx
                    ? "w-10 bg-neon-deep"
                    : "w-5 bg-ink-300 group-hover:bg-ink-500"
                }`}
              />
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
