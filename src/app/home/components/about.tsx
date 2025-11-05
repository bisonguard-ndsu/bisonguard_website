"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const headerRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const descInView = useInView(descRef, { once: true, margin: "-100px" });
  const imgInView = useInView(imgRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-dark-blue via-foreground to-dark-blue overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/038/946/939/non_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-6xl container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-neon mr-4" />
              <span className="text-neon text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
              <div className="w-12 h-0.5 bg-neon ml-4" />
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
              Delivering Smart Solutions & Services
            </h2>

            {/* Description */}
            <motion.p
              ref={descRef}
              initial={{ opacity: 0, y: 40 }}
              animate={descInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-gray-300 text-md lg:text-lg leading-relaxed mb-12 max-w-lg"
            >
              At InfiniCity Labs, we are redefining the future of urban and
              rural ecosystems. We&apos;ve combined engineering expertise with
              smart technologies to solve complex challenges across
              infrastructure, mobility, smart systems, and agriculture. Our
              mission is to develop sustainable and data-driven systems that
              make cities more livable and farming more productive. From
              intelligent traffic flow to efficient asset management and smart
              herd monitoring, we bring precision, innovation, and performance
              to every project.
            </motion.p>

            {/* Call to Action Box */}
            <Link href={"/about"}>
              <Button className="bg-neon hover:bg-[#22d18a] text-dark-blue capitalize px-12 py-7 text-base font-semibold tracking-wider transition-all duration-300 rounded-none">
                Learn More
                {/* <ArrowRight className="ml-2" /> */}
              </Button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={imgInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Circular Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://ik.imagekit.io/5kwcgtj3iv/detail-shot-modern-business-buildings%20(1).png?updatedAt=1751966723273"
                  loading="lazy"
                  alt="Architecture team working"
                  className="w-full h-full object-cover bg-dark-blue"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
