import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/products";
import { ProductCard } from "@/components/site/product-card";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our products",
  "Explore AdAMS, Turnflow, RoadLogger, traffic management, and the tools behind InfiniCity Labs’ applied AI work.",
  "/products",
);

export default function ProductsPage() {
  return (
    <>
      <section className="wrap page-intro page-intro-split">
        <div>
          <p className="eyebrow">The InfiniCity portfolio</p>
          <h1>
            Built around
            <br />
            <em>the real world.</em>
          </h1>
        </div>
        <p>
          From the road beneath your wheels to the patterns in a busy junction.
          Explore the tools that turn observation into understanding.
        </p>
      </section>
      <section className="wrap product-index" aria-label="Product portfolio">
        <div className="product-grid">
          {products
            .filter((product) => product.slug !== "herd-monitoring")
            .map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
        </div>
        <div className="selected-work-heading">
          <h2>Beyond the road.</h2>
          <p>
            Selected work applying our engineering practice to a different
            environment.
          </p>
        </div>
        <Link href="/products/herd-monitoring" className="selected-work-link">
          <div className="selected-work-image">
            <Image
              src="/images/herd-monitoring.webp"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              alt="A herd silhouetted along a ridge at sunset"
            />
          </div>
          <div>
            <p className="eyebrow">Selected system</p>
            <h3>Herd Monitoring</h3>
            <p>
              A system for herd detection and monitoring, built from a focused
              computer vision challenge.
            </p>
          </div>
          <ArrowUpRight size={27} aria-hidden="true" />
        </Link>
      </section>
      <ContactBand
        title="Find the right starting point."
        description="Tell us about your project. We’ll help you explore the product or engineering approach that fits."
      />
    </>
  );
}
