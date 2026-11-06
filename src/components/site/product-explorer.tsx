"use client";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/products";
import { ProductVisual } from "./product-visual";
const featured = products.filter((p) =>
  ["adams", "pavexpert", "tmc", "turnflow", "bisonguard"].includes(p.slug),
);
export function ProductExplorer() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const product = featured[active];
  return (
    <div className="product-explorer">
      <div
        className="product-tabs"
        role="tablist"
        aria-label="Explore our products"
        onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          event.preventDefault();
          const next =
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? featured.length - 1
                : (active +
                    (event.key === "ArrowRight" ? 1 : -1) +
                    featured.length) %
                  featured.length;
          setActive(next);
          event.currentTarget
            .querySelectorAll<HTMLButtonElement>('[role="tab"]')
            [next]?.focus();
        }}
      >
        {featured.map((p, i) => (
          <button
            key={p.slug}
            id={"product-tab-" + p.slug}
            type="button"
            role="tab"
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            aria-controls={"product-panel-" + p.slug}
            onClick={() => setActive(i)}
          >
            <span className="tab-index">0{i + 1}</span>
            <span>{p.name}</span>
            <ArrowUpRight size={16} />
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={product.slug}
          id={"product-panel-" + product.slug}
          role="tabpanel"
          aria-labelledby={"product-tab-" + product.slug}
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : -6 }}
          transition={{ duration: reduced ? 0 : 0.24 }}
          className="explorer-panel"
        >
          <div className="explorer-copy">
            <p className="eyebrow">{product.category}</p>
            <h3>{product.headline}</h3>
            <p>{product.summary}</p>
            <Link href={"/products/" + product.slug} className="text-link">
              Explore {product.name}
              <ArrowUpRight size={17} />
            </Link>
            <div className="explorer-tags">
              {product.outputs.slice(0, 3).map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
          <ProductVisual slug={product.slug} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
