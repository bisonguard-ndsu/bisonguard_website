"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const benefits = [
  "Free 30-day trial with full access",
  "No setup fees or hidden costs",
  "24/7 expert support included",
  "Cancel anytime, no questions asked",
];

const trustSignals = ["SOC 2 Certified", "GDPR Compliant", "99.9% Uptime"];

const helperLinks = [
  { label: "Talk to Sales", href: "/#contact" },
  { label: "View Case Studies", href: "/#projects" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Cta({
  title = "Ready to revolutionize your infrastructure management?",
  description = "Join thousands of organizations already using our AI-powered solutions to optimize their infrastructure, reduce costs, and improve safety across their transportation networks.",
  highlightWords = ["infrastructure"],
}: Readonly<{
  title?: string;
  description?: string;
  highlightWords?: string[];
}>) {
  return (
    <section className="grain relative overflow-hidden bg-navy-950">
      {/* Edge hairlines keep the band distinct when it lands between two
          dark sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 0%, #000 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 0%, #000 25%, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="bloom pointer-events-none absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 opacity-45"
      />

      <div className="section-y section-x relative">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Headline */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-neon" aria-hidden="true" />
                  <span className="eyebrow text-neon">Get Started Today</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-6 text-3xl font-bold leading-[1.08] text-white md:text-4xl lg:text-[3rem]">
                  {title.split(" ").map((word, index) => {
                    // Highlight specific words with the neon color

                    const isHighlighted = highlightWords.some((hw) =>
                      word.toLowerCase().includes(hw.toLowerCase()),
                    );
                    return (
                      <span
                        key={index}
                        className={isHighlighted ? "text-neon" : undefined}
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-bluish-white/75 md:text-lg">
                  {description}
                </p>
              </Reveal>
            </div>

            {/* Actions */}
            <Reveal
              delay={0.24}
              className="lg:col-span-5 lg:border-l lg:border-navy-700 lg:pl-12"
            >
              <h3 className="text-xl font-semibold text-white">
                Choose Your Path
              </h3>
              <p className="mt-2 text-sm text-ink-300">
                Start your journey with us today
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  asChild
                  className="group h-auto rounded-none bg-neon px-7 py-4 text-sm font-semibold text-navy-950 transition-colors duration-300 hover:bg-neon-bright has-[>svg]:px-7 sm:flex-1 lg:flex-none"
                >
                  <Link href="/#contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-none border-navy-600 bg-transparent px-7 py-4 text-sm font-semibold text-white shadow-none transition-colors duration-300 hover:border-neon hover:bg-navy-800 hover:text-white has-[>svg]:px-7 sm:flex-1 lg:flex-none"
                >
                  <Link href="/#contact">
                    Schedule Demo
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* What's included */}
          <Reveal delay={0.32}>
            <ul className="mt-16 grid grid-cols-1 gap-y-4 border-y border-navy-700 py-6 sm:grid-cols-2 sm:gap-x-10 lg:mt-20 lg:grid-cols-4 lg:gap-y-0">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className={cn(
                    "flex items-start gap-3 text-sm leading-relaxed text-bluish-white/80",
                    index > 0 && "lg:border-l lg:border-navy-700 lg:pl-6",
                  )}
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-neon"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Reassurance rail */}
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm text-bluish-white/70">
                  Trusted by many organizations worldwide
                </p>
                <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {trustSignals.map((signal) => (
                    <li
                      key={signal}
                      className="flex items-center gap-2 text-xs text-ink-300"
                    >
                      <span
                        className="h-1.5 w-1.5 bg-neon"
                        aria-hidden="true"
                      />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:text-right">
                <p className="text-sm text-bluish-white/70">
                  Need help deciding?
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end">
                  {helperLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium text-neon underline-offset-4 transition-colors duration-300 hover:text-neon-bright hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
