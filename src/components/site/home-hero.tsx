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
import { ArrowUpRight } from "lucide-react";

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
          src="/images/highway-interchange.jpg"
          alt="Aerial photograph of a highway interchange and the infrastructure around it"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="corporate-hero-shade" />
      <div className="wrap corporate-hero-content">
        <div className="corporate-introduction">
          <p className="eyebrow">InfiniCity Labs</p>
          <h1 id="home-title">
            Advancing
            <br />
            infrastructure
            <br />& mobility.
          </h1>
          <p>
            We bring research, engineering, and applied AI to the roads,
            traffic, and physical systems people depend on.
          </p>
          <div className="corporate-hero-actions">
            <Link href="/products" className="link-button">
              Explore our products <ArrowUpRight size={18} />
            </Link>
            <Link href="/book-a-demo" className="text-link">
              Book a demo <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      <nav
        className="wrap corporate-hero-topics"
        aria-label="Explore our areas of work"
      >
        <Link href="/solutions/infrastructure-management">
          <span>
            <small>Roads, assets & inspection</small>
            <strong>Infrastructure</strong>
          </span>
          <ArrowUpRight size={23} />
        </Link>
        <Link href="/solutions/traffic-engineering">
          <span>
            <small>Traffic, movement & analysis</small>
            <strong>Mobility</strong>
          </span>
          <ArrowUpRight size={23} />
        </Link>
        <Link href="/solutions/visual-ai">
          <span>
            <small>Vision, data & understanding</small>
            <strong>Applied AI</strong>
          </span>
          <ArrowUpRight size={23} />
        </Link>
      </nav>
    </section>
  );
}
