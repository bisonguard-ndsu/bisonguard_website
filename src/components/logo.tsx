import { useId } from "react";
import { cn } from "@/lib/utils";

/** The three rising bars, in a teal-to-violet gradient, with rounded tops. */
export function LogoMark({ className }: { className?: string; tone?: "dark" | "light" }) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.82 0.12 185)" />
          <stop offset="0.6" stopColor="oklch(0.74 0.125 185)" />
          <stop offset="1" stopColor="oklch(0.7 0.16 285)" />
        </linearGradient>
      </defs>
      <rect x="2" y="11.2" width="5.6" height="10.8" rx="1.2" fill={`url(#${id})`} />
      <rect x="9.2" y="7.4" width="5.6" height="14.6" rx="1.2" fill={`url(#${id})`} />
      <rect x="16.4" y="2" width="5.6" height="20" rx="1.2" fill={`url(#${id})`} />
    </svg>
  );
}

export function Logo({ className }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-7" />
      <span className="font-display text-[1.125rem] leading-none font-semibold tracking-[-0.02em] whitespace-nowrap text-fg">
        InfiniCity<span className="text-fg-3"> Labs</span>
      </span>
    </span>
  );
}
