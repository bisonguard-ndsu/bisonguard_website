"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import Members from "./components/members";

const Team = () => {
  return (
    <main>
      <Hero
        items={[
          {
            badge: "Meet the Team",
            title: "Dedicated Experts Driving Innovation",
            description:
              "Our team is composed of passionate professionals with diverse backgrounds in AI, engineering, and urban planning. Together, we are committed to delivering cutting-edge solutions and making a positive impact in smart city development.",
            buttonText: "MEET OUR TEAM",
            buttonHref: "/team#members",
            target: "_self",
            backgroundImage: "/team.jpg",
            highlightWords: ["experts", "innovation"],
          },
        ]}
      />

      <Members />

      {/* Closing band — a single, quiet route into a conversation. */}
      <section className="grain section-y section-x relative overflow-hidden bg-navy-950">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_25%,transparent_80%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-neon" aria-hidden="true" />
                  <span className="eyebrow text-neon">Join Us</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-6 text-3xl leading-[1.12] font-bold text-white md:text-4xl lg:text-[2.75rem]">
                  We are always looking for people who want their work in the
                  field
                </h2>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-bluish-white/75 md:text-lg">
                  Engineers, researchers, and operators who would rather see a
                  model running on a live network than sitting in a paper. Tell
                  us what you are working on.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.24} className="lg:col-span-4 lg:col-start-9">
              <Button
                asChild
                className="group h-auto w-full rounded-none bg-neon px-9 py-5 text-sm font-semibold tracking-[0.08em] text-navy-950 transition-colors duration-300 hover:bg-neon-bright sm:w-auto"
              >
                <Link href="/#contact">
                  Get in touch
                  <ArrowRight
                    className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
