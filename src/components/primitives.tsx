import Link from "next/link";
import type { Metric } from "@/content/evidence";
import type { Publication } from "@/content/publications";
import { statusLabel, type ProductStatus } from "@/content/products";
import { cn } from "@/lib/utils";

const showDraft = process.env.NEXT_PUBLIC_SHOW_DRAFT_MARKERS === "1";

/** A number from evidence.ts. Unverified figures get a visible marker in draft mode. */
export function Figure({ metric, className }: { metric: Metric; className?: string }) {
  return (
    <span
      className={cn(className, showDraft && !metric.verified && "underline decoration-survey decoration-dashed decoration-2 underline-offset-8")}
      title={showDraft && !metric.verified ? `Unverified: ${metric.source}` : undefined}
    >
      {metric.value}
    </span>
  );
}

export function SectionHead({
  label,
  title,
  lead,
  className,
  id,
}: {
  label?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-7">
        {label && <p className="label mb-5 text-ink-3">{label}</p>}
        <h2 id={id} className="t-h2 max-w-[20ch]">
          {title}
        </h2>
      </div>
      {lead && <div className="t-lead max-w-[46ch] text-ink-2 lg:col-span-5">{lead}</div>}
    </div>
  );
}

export function Status({ status, className }: { status: ProductStatus; className?: string }) {
  const tone = status === "in-service" ? "text-guide" : status === "in-development" ? "text-[#8a5a00]" : "text-ink-3";
  return <span className={cn("status", tone, className)}>{statusLabel[status]}</span>;
}

export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-2 font-semibold text-guide", className)}>
      <span className="link">{children}</span>
      <span className="arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

export function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ol className="border-t border-rule">
      {items.map((p) => (
        <li key={p.title} className="border-b border-rule">
          <a
            href={p.url ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-x-8 gap-y-2 py-6 md:grid-cols-12 md:items-baseline"
          >
            <span className="label text-ink-3 md:col-span-2">
              {p.venue.match(/CVPR|TRB|Transportation Research Board|HFES|IEEE|Journal/)?.[0]?.replace("Transportation Research Board", "TRB") ?? "Paper"}
              {p.year ? ` · ${p.year}` : ""}
            </span>
            <span className="md:col-span-9">
              <span className="block text-[1.125rem] leading-snug font-bold text-ink group-hover:text-guide">{p.title}</span>
              <span className="mt-1.5 block text-sm text-ink-2">
                {p.authors} — {p.venue}
              </span>
            </span>
            <span className="hidden text-right text-ink-3 group-hover:text-guide md:col-span-1 md:block" aria-hidden>
              ↗
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
