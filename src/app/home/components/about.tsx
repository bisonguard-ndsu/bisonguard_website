"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";

/** Client-approved copy — do not reword. */
const ABOUT_COPY =
  "At InfiniCity Labs, we are redefining the future of urban and rural ecosystems. We combine engineering expertise, artificial intelligence, and robotics with smart technologies to solve complex challenges across infrastructure, mobility, smart systems, and agriculture. Our mission is to develop sustainable and data-driven systems that make cities more livable and farming more productive. From intelligent traffic flow to efficient asset management, autonomous field robotics, and smart herd monitoring, we bring precision, innovation, and performance to every project.";

const FADE_DOWN = "linear-gradient(to bottom, black 10%, transparent 85%)";

export default function About() {
  return (
    <section className="grain relative section-y section-x overflow-hidden bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
      {/* Backdrop — hairline grid fading out, plus one soft bloom behind the
          image pair. Replaces the stock construction photo that sat here. */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-70"
        style={{ maskImage: FADE_DOWN, WebkitMaskImage: FADE_DOWN }}
      />
      <div
        aria-hidden="true"
        className="bloom pointer-events-none absolute -top-40 right-[-20%] hidden h-[36rem] w-[36rem] opacity-25 lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Editorial column */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="About Us"
              title="Delivering Smart Solutions & Services"
              tone="dark"
            />

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[52ch] border-l border-navy-600 pl-5 text-base leading-relaxed text-bluish-white/80 sm:pl-6 md:text-lg">
                {ABOUT_COPY}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <Button
                asChild
                className="group mt-10 h-auto rounded-none bg-neon px-10 py-5 text-sm font-semibold tracking-[0.08em] text-navy-950 transition-all duration-300 hover:bg-neon-bright"
              >
                <Link href={"/about"}>
                  Learn More
                  <ArrowRight
                    className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </Reveal>
          </div>

          {/* Offset image pair — one large panel, one smaller inset overlapping
              its lower-left corner, separated by a navy gutter + neon hairline. */}
          <Reveal
            delay={0.12}
            y={32}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="relative mx-auto aspect-[5/6] w-full max-w-[26rem] sm:max-w-[28rem] lg:max-w-none">
              {/* Corner bracket, top-left of the composition */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-neon to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-20 w-px bg-gradient-to-b from-neon to-transparent"
              />

              {/* Hairline frame offset behind the inset panel, for depth */}
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-[46%] w-[58%] border border-navy-600"
              />

              {/* Primary panel */}
              <figure className="group absolute right-0 top-0 h-[68%] w-[80%] overflow-hidden border border-navy-600">
                <img
                  src="https://ik.imagekit.io/5kwcgtj3iv/detail-shot-modern-business-buildings%20(1).png?updatedAt=1751966723273"
                  loading="lazy"
                  alt="InfiniCity Labs civil engineering and smart city technology team in a modern business building"
                  className="h-full w-full bg-navy-900 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/10 to-transparent"
                />
              </figure>

              {/* Inset panel, overlapping the primary */}
              <figure className="group absolute bottom-0 left-0 h-[46%] w-[58%] bg-navy-950 p-1.5 sm:p-2">
                <div className="relative h-full w-full overflow-hidden ring-1 ring-neon/30">
                  <img
                    src="/robotics.webp"
                    loading="lazy"
                    alt="Robotic arms used in InfiniCity Labs automation and robotics research"
                    className="h-full w-full bg-navy-900 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
