"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function Cta({
  title = "Ready to revolutionize your infrastructure management?",
  description = "Join thousands of organizations already using our AI-powered solutions to optimize their infrastructure, reduce costs, and improve safety across their transportation networks.",
  highlightWords = ["infrastructure"],
}: Readonly<{
  title?: string;
  description?: string;
  highlightWords?: string[];
}>) {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-20">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={containerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto container max-w-6xl grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#0b243a] to-[#0f2a42] rounded-none p-8 md:p-16 shadow-2xl relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #27ea9c 0px,
                #27ea9c 1px,
                transparent 1px,
                transparent 40px
              ), repeating-linear-gradient(
                -45deg,
                #27ea9c 0px,
                #27ea9c 1px,
                transparent 1px,
                transparent 40px
              )`,
            }}
          />
        </div>

        {/* Left Side - CTA Content */}
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-neon/30 rounded-full px-4 py-2">
            <Sparkles className="w-3 h-3 mr-2 text-neon" />
            <span className="text-gray-200 font-medium text-sm">
              Get Started Today
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title.split(" ").map((word, index) => {
              // Highlight specific words with the neon color

              const isHighlighted = highlightWords.some((hw) =>
                word.toLowerCase().includes(hw.toLowerCase()),
              );
              return (
                <span
                  key={index}
                  className={isHighlighted ? "text-neon" : "text-white"}
                >
                  {word}{" "}
                </span>
              );
            })}
          </h2>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            {description}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-gray-200">
              <CheckCircle className="w-5 h-5 text-neon flex-shrink-0" />
              <span>Free 30-day trial with full access</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-200">
              <CheckCircle className="w-5 h-5 text-neon flex-shrink-0" />
              <span>No setup fees or hidden costs</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-200">
              <CheckCircle className="w-5 h-5 text-neon flex-shrink-0" />
              <span>24/7 expert support included</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-200">
              <CheckCircle className="w-5 h-5 text-neon flex-shrink-0" />
              <span>Cancel anytime, no questions asked</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-gray-300">
            {/* <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-neon/20 border-2 border-neon flex items-center justify-center">
                <img
                  src="/farms.avif"
                  alt="ndsu"
                  className="w-full h-full rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-neon/30 border-2 border-neon">
                <img
                  src="/ndsu.png"
                  alt="ndsu"
                  className="w-full h-full rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-neon/40 border-2 border-neon">
                <img
                  src="/usnsf.jpg"
                  alt="sustein"
                  className="w-full h-full rounded-full"
                  loading="lazy"
                />
              </div>
            </div> */}
            <span className="text-sm">
              Trusted by many organizations worldwide
            </span>
          </div>
        </div>

        {/* Right Side - CTA Actions */}
        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-none p-6 space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Choose Your Path
              </h3>
              <p className="text-gray-300 text-sm">
                Start your journey with us today
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <Link href="/#contact" className="mb-4">
                <Button className="w-full rounded-lg bg-neon hover:bg-[#22d18a] text-[#0b243a] shadow-lg shadow-neon/20 transition-all duration-300 py-7 font-semibold focus:outline-none">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="w-full rounded-lg border-2 border-neon/50 text-white hover:text-white hover:bg-neon/10 hover:border-neon transition-all duration-300 py-7 font-semibold bg-transparent"
                >
                  Schedule Demo
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="border-t border-gray-600/30 pt-6">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-3">
                  Need help deciding?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/#contact">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neon hover:text-white hover:bg-neon/20 transition-all duration-300"
                    >
                      Talk to Sales
                    </Button>
                  </Link>
                  <Link href="/#projects">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neon hover:text-white hover:bg-neon/20 transition-all duration-300"
                    >
                      View Case Studies
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neon hover:text-white hover:bg-neon/20 transition-all duration-300"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 text-center">
            <div className="flex justify-center items-center space-x-6 text-gray-400 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
