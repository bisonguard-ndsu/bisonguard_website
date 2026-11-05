import { cn } from "@/lib/utils";

/**
 * The three rising bars, redrawn as vectors from the original mark
 * (bar widths and heights measured from logo-full.png), with the name set in
 * Overpass. `tone="light"` is for ink backgrounds.
 */
export function LogoMark({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <rect x="2" y="11.2" width="5.6" height="10.8" fill={tone === "light" ? "#3fbf8a" : "var(--color-guide)"} />
      <rect x="9.2" y="7.4" width="5.6" height="14.6" fill={tone === "light" ? "#3fbf8a" : "var(--color-guide)"} />
      <rect x="16.4" y="2" width="5.6" height="20" fill={tone === "light" ? "#3fbf8a" : "var(--color-guide)"} />
    </svg>
  );
}

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-6 w-6" tone={tone} />
      <span
        className={cn(
          "text-[1.0625rem] leading-none font-bold tracking-[-0.01em] whitespace-nowrap",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        InfiniCity Labs
      </span>
    </span>
  );
}
