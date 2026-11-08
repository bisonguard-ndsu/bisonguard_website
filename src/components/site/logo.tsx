/** Horizontal lockup of the brand mark: three rising bars, then the wordmark. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 26 26" className="h-[26px] w-[26px]" aria-hidden="true">
        <rect x="2" y="12" width="6" height="13" fill="#6cf3c5" />
        <rect x="10" y="7" width="6" height="18" fill="#6cf3c5" />
        <rect x="18" y="1" width="6" height="24" fill="#6cf3c5" />
      </svg>
      <span className="whitespace-nowrap text-[15px] uppercase leading-none tracking-[0.2em]">
        <span className="font-light text-ink">Infinicity</span>{" "}
        <span className="font-semibold text-[#2fe0a0]">Labs</span>
      </span>
    </span>
  );
}
