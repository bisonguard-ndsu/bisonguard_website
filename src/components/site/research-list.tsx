"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { publications } from "@/content/publications";

const filters = ["All research", "Pavement", "Mobility"] as const;

export function ResearchList() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All research");
  const visible = publications.filter(
    (publication) => filter === "All research" || publication.topic === filter,
  );

  return (
    <div>
      <div
        className="research-filters"
        role="group"
        aria-label="Filter publications by topic"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} publications shown
      </p>
      <div className="publication-list">
        {visible.map((publication) => (
          <article className="publication" key={publication.url}>
            <div className="publication-year">
              {publication.year}
              <span>{publication.topic}</span>
            </div>
            <div>
              <p className="eyebrow">{publication.venue}</p>
              <h2>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publication.title}
                  <ArrowUpRight size={21} aria-hidden="true" />
                </a>
              </h2>
              <p>{publication.summary}</p>
              <p className="publication-authors">{publication.authors}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
