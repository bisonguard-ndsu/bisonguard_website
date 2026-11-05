import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The signature composition: a road frame with the detections our software
 * drew on it, and beside it the record that was written from that frame.
 * Rule: every field in `record` must come from the same run as the frame.
 */

export type Box = {
  /** Position and size as fractions of the frame (0–1) */
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

export type RecordRow = { k: string; v: string; emphasis?: boolean };

type Props = {
  image: { src: string; alt: string; width: number; height: number };
  boxes: Box[];
  meta: string[];
  recordTitle: string;
  record: RecordRow[];
  list?: { name: string; count: number }[];
  link?: { label: string; href: string };
  priority?: boolean;
  className?: string;
};

export default function FrameRecord({ image, boxes, meta, recordTitle, record, list, link, priority, className }: Props) {
  const recordDelay = 300 + boxes.length * 120;
  return (
    <figure className={cn("grid gap-px bg-rule-dark lg:grid-cols-12", className)}>
      {/* Frame */}
      <div className="relative flex flex-col bg-ink lg:col-span-8">
        {/* The outer box fills the column; the inner box reproduces object-fit: cover
            with container units, so detection boxes stay locked to the photo. */}
        <div
          className="relative overflow-hidden lg:min-h-[22rem] lg:flex-1 lg:[aspect-ratio:auto]"
          style={{ aspectRatio: `${image.width} / ${image.height}`, containerType: "size" }}
        >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `max(100cqw, calc(100cqh * ${image.width / image.height}))`,
            height: `max(100cqh, calc(100cqw / ${image.width / image.height}))`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 820px, (min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
          {boxes.map((b, i) => (
            <div
              key={i}
              aria-hidden
              className="anim-box absolute border-2 border-survey"
              style={{
                left: `${b.x * 100}%`,
                top: `${b.y * 100}%`,
                width: `${b.w * 100}%`,
                height: `${b.h * 100}%`,
                animationDelay: `${300 + i * 120}ms`,
              }}
            >
              <span className="label absolute bottom-full left-[-2px] mb-0 bg-survey px-1.5 py-0.5 text-[0.625rem] whitespace-nowrap text-ink sm:text-[0.6875rem]">
                {b.label}
              </span>
            </div>
          ))}
        </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-rule-dark px-4 py-3 text-white/60">
          {meta.map((m) => (
            <span key={m} className="label">
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Record */}
      <figcaption className="on-ink flex flex-col bg-ink p-5 text-white sm:p-6 lg:col-span-4">
        <p className="label text-survey">{recordTitle}</p>
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1 lg:gap-y-0">
          {record.map((r, i) => (
            <div
              key={r.k}
              className="anim-row flex flex-col lg:flex-row lg:items-baseline lg:justify-between lg:border-b lg:border-rule-dark lg:py-2.5"
              style={{ animationDelay: `${recordDelay + i * 70}ms` }}
            >
              <dt className="label text-white/50">{r.k}</dt>
              <dd className={cn("font-mono text-[0.9375rem] tabular-nums", r.emphasis ? "text-survey" : "text-white")}>{r.v}</dd>
            </div>
          ))}
        </dl>
        {list && (
          <ul className="mt-5 hidden space-y-1.5 lg:block">
            {list.map((c, i) => (
              <li
                key={c.name}
                className="anim-row grid grid-cols-[1fr_auto] items-center gap-3"
                style={{ animationDelay: `${recordDelay + (record.length + i) * 70}ms` }}
              >
                <span className="truncate text-[0.8125rem] text-white/75">{c.name}</span>
                <span className="flex items-center gap-2">
                  <span aria-hidden className="h-1 bg-survey/80" style={{ width: `${c.count * 14}px` }} />
                  <span className="w-3 text-right font-mono text-[0.8125rem] text-white/75 tabular-nums">{c.count}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
        {link && (
          <Link href={link.href} className="group mt-auto inline-flex items-center gap-2 pt-6 text-[0.9375rem] font-semibold text-white">
            <span className="link">{link.label}</span>
            <span className="arrow" aria-hidden>
              →
            </span>
          </Link>
        )}
      </figcaption>
    </figure>
  );
}
