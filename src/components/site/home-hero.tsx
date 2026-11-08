"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HomeHero() {
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  return (
    <section className="corporate-hero" ref={hero} aria-labelledby="home-title">
      <motion.div
        className="corporate-hero-image"
        style={{ y: reduced ? 0 : imageY }}
      >
        <Image
          src="/images/infrastructure-aerial.webp"
          alt="Illustrative aerial scene of a bridge, roads, and a city skyline"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="corporate-hero-shade" />
      <div className="wrap corporate-hero-content">
        <div className="corporate-introduction">
          <p className="eyebrow">Infrastructure. Mobility. Applied AI.</p>
          <h1 id="home-title">
            Intelligence for
            <br />
            a world <em>in motion.</em>
          </h1>
          <p>
            We bring research and engineering together to help people
            understand roads, movement, and the world around them.
          </p>
          <div className="corporate-hero-actions">
            <Link href="/products" className="link-button">
              Explore our products <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/book-a-demo" className="text-link">
              Book a demo <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <div className="wrap corporate-hero-bottom">
        <a href="#company-introduction">
          <ArrowDown size={17} aria-hidden="true" /> Discover our work
        </a>
        <span>Illustrative infrastructure scene</span>
      </div>
    </section>
  );
}
