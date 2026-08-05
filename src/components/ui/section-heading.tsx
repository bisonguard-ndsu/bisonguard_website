"use client";

import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/reveal";

type SectionHeadingProps = {
  /** Small tracked-out label above the title. */
  eyebrow?: string;
  title: string;
  /** Supporting paragraph under the title. */
  lede?: string;
  /** `dark` for light text on navy sections, `light` for dark text on white. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

/**
 * The standard section header: rule + eyebrow, title, optional lede.
 * Used across every section so headings share one rhythm and scale.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const onDark = tone === "dark";
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "flex items-center gap-4 mb-6",
              centered && "justify-center"
            )}
          >
            <span className="h-px w-10 bg-neon" aria-hidden="true" />
            <span className="eyebrow text-neon">{eyebrow}</span>
            {centered && (
              <span className="h-px w-10 bg-neon" aria-hidden="true" />
            )}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.08}>
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.12]",
            onDark ? "text-white" : "text-ink-900"
          )}
        >
          {title}
        </h2>
      </Reveal>

      {lede && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 text-base md:text-lg leading-relaxed",
              onDark ? "text-bluish-white/80" : "text-ink-500"
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
