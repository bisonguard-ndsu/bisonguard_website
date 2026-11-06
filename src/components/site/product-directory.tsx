"use client";
import { useState } from "react";
import { products } from "@/content/products";
import { ProductCard } from "./product-card";
const groups = [
  "All products",
  "Infrastructure",
  "Mobility",
  "Applied AI",
] as const;
const membership = {
  Infrastructure: ["adams", "pavexpert", "roadlogger"],
  Mobility: ["tmc", "turnflow"],
  "Applied AI": ["annotate", "bisonguard"],
};
export function ProductDirectory() {
  const [filter, setFilter] = useState<(typeof groups)[number]>("All products");
  const visible =
    filter === "All products"
      ? products
      : products.filter((p) => membership[filter].includes(p.slug));
  return (
    <>
      <div className="catalog-filter" role="group" aria-label="Filter products">
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            aria-pressed={filter === group}
            onClick={() => setFilter(group)}
          >
            {group}
          </button>
        ))}
        <span aria-live="polite">{visible.length} products</span>
      </div>
      <div className="product-grid catalog-grid" key={filter}>
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
