"use client";

import {
  CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useCallback, useEffect } from "react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Step = {
  id: number;
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    image: "/adams-1.png",
  },
  {
    id: 2,
    image: "/traffic-sign-geolocation_2.png",
  },
  {
    id: 3,
    image: "/adams-2.png",
  },
  {
    id: 4,
    image: "/adams-3.png",
  },
  {
    id: 5,
    image: "/adams-4.png",
  },
];

export default function HowAdamsWork() {
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
    <section
      id="how-it-works"
      className="grain section-y section-x relative isolate overflow-hidden bg-navy-950"
    >
      {/* Engineered backdrop — hairline grid, faded at both edges */}
      <div
        aria-hidden
        className="grid-lines absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Editorial header — title left, supporting copy right */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="How it works"
            title="How AdAMS works"
            tone="dark"
          />

          <div className="space-y-5">
            <Reveal delay={0.12}>
              <p className="text-lg leading-snug font-semibold text-white md:text-xl">
                One smartphone. One drive. Complete asset intelligence.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-base leading-relaxed text-bluish-white/75 md:text-lg">
                Turn any smartphone into a powerful infrastructure monitoring
                system. Our AI automatically identifies assets, assesses
                conditions, generates inventory reports and delivers prioritized
                maintenance insights—all from a single drive.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Product stills */}
        <div className="mt-14 md:mt-20">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
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
            <CarouselContent className="-ml-4 md:-ml-6">
              {steps.map((step, index) => (
                <CarouselItem
                  key={step.id}
                  className="pl-4 md:basis-full md:pl-6 lg:basis-1/2"
                >
                  <Reveal delay={Math.min(index, 1) * 0.1} className="h-full">
                    <figure className="h-full border border-navy-600 bg-navy-900/50 p-2 shadow-[0_28px_70px_-40px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:border-neon/40 md:p-3">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
                        <img
                          src={step.image}
                          alt={`AdAMS platform view ${step.id} of ${steps.length}`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-2 flex items-center justify-between border-t border-navy-700 px-1 pt-3">
                        <span className="eyebrow text-white/40 tabular-nums">
                          {String(step.id).padStart(2, "0")}
                          <span className="text-white/20">
                            {" / "}
                            {String(steps.length).padStart(2, "0")}
                          </span>
                        </span>
                        <span aria-hidden className="h-px w-8 bg-neon/50" />
                      </figcaption>
                    </figure>
                  </Reveal>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Numbered rail — replaces the anonymous dots */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:mt-10">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                onClick={() => scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={selectedIndex === idx}
                className={cn(
                  "eyebrow cursor-pointer border px-3.5 py-2 tabular-nums transition-all duration-300",
                  selectedIndex === idx
                    ? "border-neon bg-neon/10 text-neon"
                    : "border-navy-700 text-white/50 hover:border-navy-600 hover:text-white/90"
                )}
              >
                {String(idx + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
