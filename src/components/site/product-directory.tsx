"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/content/products";
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
      <div className="catalog-rows" key={filter}>
        {visible.map((p) => (
          <article className="catalog-row" key={p.slug}>
            <div>
              <p className="eyebrow">{p.category}</p>
              <h2>
                <Link href={"/products/" + p.slug}>{p.name}</Link>
              </h2>
            </div>
            <div>
              <p>{p.summary}</p>
              <ul>
                {p.outputs.slice(0, 3).map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </div>
            <Link
              href={"/products/" + p.slug}
              className="catalog-row-link"
              aria-label={"Explore " + p.name}
            >
              Explore <ArrowUpRight size={20} />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
