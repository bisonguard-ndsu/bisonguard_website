"use client";
import { sponsors } from "@/lib/constants";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function Accreditations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Responsive slides per view
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update selected index on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi) return;
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [emblaApi]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (intervalId) clearInterval(intervalId);
  };
  const handleMouseLeave = () => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
    setIntervalId(id);
  };

  // Dot click handler
  const scrollTo = (idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
  };

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mx-auto container mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              Accreditations
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
            Trusted By Leading{" "}
            <span className="text-neon">Institutions & Agencies</span>
          </h2>
          <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed">
            We collaborate with prestigious universities, government agencies,
            and research organizations to provide transportation technology
            services and develop innovative solutions for smart cities and
            sustainable infrastructure.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={emblaRef} className="overflow-hidden w-full ">
              <div className="flex">
                {sponsors.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width:
                        slidesToShow === 4
                          ? "25%"
                          : slidesToShow === 2
                          ? "50%"
                          : "100%",
                      minWidth:
                        slidesToShow === 4
                          ? "25%"
                          : slidesToShow === 2
                          ? "50%"
                          : "100%",
                      transition: "width 0.3s",
                    }}
                  >
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={200}
                      height={80}
                      className="object-contain max-h-20 max-w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-10">
              {sponsors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2 w-2 rounded-none transition-all duration-300 focus:outline-none  ${
                    selectedIndex === idx
                      ? "bg-neon shadow-lg scale-110"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
