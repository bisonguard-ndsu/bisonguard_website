"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";

interface HerdSlide {
  id: number;
  image: string;
  alt: string;
}

const RIDGE_ALT =
  "A bison herd silhouetted along a ridgeline at sunset on open range.";
const GRAZING_ALT =
  "A bison herd with a young calf grazing across open prairie grassland.";

const slides: HerdSlide[] = [
  { id: 1, image: "/herd.JPG", alt: RIDGE_ALT },
  { id: 2, image: "/herd2.JPEG", alt: GRAZING_ALT },
  { id: 3, image: "/herd.JPG", alt: RIDGE_ALT },
  { id: 4, image: "/herd2.JPEG", alt: GRAZING_ALT },
  { id: 5, image: "/herd.JPG", alt: RIDGE_ALT },
  { id: 6, image: "/herd2.JPEG", alt: GRAZING_ALT },
];

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
    <section className="section-y section-x bg-ink-50">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="In The Field"
          title="Built For Open Range Conditions"
          lede="Bison, cattle, and wildlife move across terrain that fences and headcounts can't keep up with. Our herd monitoring platform is designed for exactly this — wide, unpredictable, always-on ground."
          tone="light"
          align="left"
        />

        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 4500,
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
            aria-label="Photographs of herds on open range"
          >
            <CarouselContent className="-ml-4 lg:-ml-6">
              {slides.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 lg:pl-6"
                >
                  <figure className="group relative overflow-hidden border border-ink-100 bg-navy-900">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-navy-950/15 transition-colors duration-500 group-hover:bg-navy-950/0"
                      aria-hidden="true"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Position markers — hairline bars rather than dots, to match the brand */}
          <div className="mt-10 flex justify-center gap-2 lg:justify-start">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={selectedIndex === idx}
                className="group/marker py-3"
              >
                <span
                  className={`block h-0.5 w-10 transition-colors duration-300 ${
                    selectedIndex === idx
                      ? "bg-neon"
                      : "bg-ink-100 group-hover/marker:bg-ink-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
