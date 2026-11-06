"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Maximize2, X } from "lucide-react";

export function HomeHero() {
  const imageDialog = useRef<HTMLDialogElement>(null);
  return (
    <section className="company-hero" aria-labelledby="home-title">
      <div className="wrap company-hero-grid">
        <div className="company-hero-copy">
          <p className="eyebrow">InfiniCity Labs / Engineering & applied AI</p>
          <h1 id="home-title">
            Software for
            <br />
            infrastructure
            <br />
            <span>& mobility.</span>
          </h1>
          <p className="company-hero-description">
            Inspect road networks. Understand traffic. Manage field operations.
            We build the software that brings your data and your engineering
            work together.
          </p>
          <div className="company-hero-actions">
            <Link href="/products" className="link-button link-button-solid">
              Explore our products <ArrowUpRight size={18} />
            </Link>
            <Link href="/book-a-demo" className="link-button company-demo">
              Book a demo <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <figure className="hero-product">
          <div className="hero-product-topline">
            <span>Inside AdAMS</span>
            <span>Asset inspection</span>
          </div>
          <button
            type="button"
            className="hero-product-image"
            aria-label="Enlarge the AdAMS inspection interface"
            onClick={() => imageDialog.current?.showModal()}
          >
            <Image
              src="/images/adams-inspection.webp"
              alt="AdAMS interface showing survey video, detected traffic signs, and inspection records"
              width={1918}
              height={1021}
              sizes="(max-width: 900px) 100vw, 55vw"
              priority
            />
            <span className="image-expand">
              <Maximize2 size={16} />
              <span>View interface</span>
            </span>
          </button>
          <figcaption>
            <div>
              <strong>Every finding, with its evidence.</strong>
              <p>
                Review survey footage and detected assets in the same workspace.
              </p>
            </div>
            <Link href="/products/adams" aria-label="Explore AdAMS">
              <ArrowUpRight size={23} />
            </Link>
          </figcaption>
        </figure>
      </div>
      <div className="wrap company-hero-bottom">
        <a href="#products">
          <ArrowDown size={16} /> Discover the portfolio
        </a>
        <p>
          Infrastructure management <span>/</span> Traffic analysis{" "}
          <span>/</span> Applied AI
        </p>
      </div>
      <dialog
        className="interface-dialog"
        ref={imageDialog}
        aria-labelledby="interface-title"
        onClick={(event) => {
          if (event.target === event.currentTarget)
            imageDialog.current?.close();
        }}
      >
        <div className="interface-dialog-heading">
          <h2 id="interface-title">AdAMS · Inspection workspace</h2>
          <button
            type="button"
            aria-label="Close interface preview"
            onClick={() => imageDialog.current?.close()}
          >
            <X size={23} />
          </button>
        </div>
        <Image
          src="/images/adams-inspection.webp"
          alt="Full AdAMS inspection interface with survey video and traffic sign analysis"
          width={1918}
          height={1021}
          sizes="95vw"
        />
        <p>
          Product interface shown for illustration. Project data is an example.
        </p>
      </dialog>
    </section>
  );
}
