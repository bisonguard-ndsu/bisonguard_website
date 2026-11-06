"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  return (
    <section className="cinematic-hero" ref={ref}>
      <motion.div className="cinematic-image" style={{ y: reduced ? 0 : y }}>
        <Image
          src="/images/infrastructure-aerial.webp"
          alt="Illustrative aerial infrastructure landscape"
          fill
          sizes="(max-width: 1000px) 180vh, 100vw"
          priority
        />
      </motion.div>
      <div className="cinematic-shade" />
      <motion.div
        className="wrap cinematic-copy"
        style={{ opacity: reduced ? 1 : opacity }}
      >
        <p className="eyebrow hero-enter">
          <span className="eyebrow-line" /> Intelligence, connected to the real
          world
        </p>
        <h1>
          <span className="hero-line">
            <span>See the world.</span>
          </span>
          <span className="hero-line">
            <span>
              Understand <em>what’s next.</em>
            </span>
          </span>
        </h1>
        <div className="hero-introduction hero-enter">
          <p>
            From the roads that connect us to the movement around us. We turn
            real-world complexity into intelligence people can use.
          </p>
          <div className="cinematic-actions">
            <Link href="/products" className="link-button link-button-solid">
              Explore our products
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/book-a-demo" className="link-button hero-demo">
              Book a demo
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="wrap cinematic-bottom">
        <a href="#discover">
          <ArrowDown size={16} />
          <span>Discover InfiniCity</span>
        </a>
        <div className="hero-domain-list">
          <span>Infrastructure</span>
          <i />
          <span>Mobility</span>
          <i />
          <span>Applied AI</span>
        </div>
        <span className="hero-image-note">
          Illustrative infrastructure scene
        </span>
      </div>
      <div className="hero-coordinate" aria-hidden="true">
        <span>OBSERVE</span>
        <i />
        <span>UNDERSTAND</span>
        <i />
        <span>ACT</span>
      </div>
    </section>
  );
}
