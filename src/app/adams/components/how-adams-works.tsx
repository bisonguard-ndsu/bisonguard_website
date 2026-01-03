import { CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Step = {
    id: number;
    image: string;
}

const steps = [
    {
        id: 1,
        image: "/adams-1.png"
    },
    {
        id: 2,
        image: "/traffic-sign-geolocation_2.png"
    },
    {
        id: 3,
        image: "/adams-2.png"
    },
    {
        id: 4,
        image: "/adams-3.png"
    },
    {
        id: 5,
        image: "/adams-4.png"
    }
]

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
            id="team"
            className="py-20 bg-white px-4 sm:px-6 md:px-8 lg:px-16"
        >
            <div className="text-center mx-auto container mb-16">

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
                    How <span className="text-neon">AdAMS</span> works{" "}
                </h2>
                <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed mb-4">
                    One smartphone. One drive. Complete asset intelligence.
                </p>
                <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed">
                    Turn any smartphone into a powerful infrastructure monitoring system. Our AI automatically identifies assets, assesses conditions, generates inventory reports and delivers prioritized maintenance insights—all from a single drive.
                </p>
            </div>
            <div className="max-w-7xl mx-auto container">
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
                        {steps.map((feature, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 md:basis-full lg:basis-1/2"
                            >
                                <FeatureCardMotion feature={feature} index={index} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-10">
                    {steps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            className={`h-2 w-2 rounded-none transition-all duration-300 focus:outline-none ${selectedIndex === idx
                                ? "bg-neon shadow-lg scale-110"
                                : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeatureCardMotion({
    feature,
    index,
}: Readonly<{
    feature: Step;
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
                className="w-full h-[400px] object-full"
                loading="lazy"
            />
        </motion.div>
    );
}