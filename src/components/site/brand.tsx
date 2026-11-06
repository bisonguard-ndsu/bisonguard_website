import Link from "next/link";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={`brand-mark ${className}`}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M0 20h9v16H0zM13 10h9v26h-9zM26 0h9v36h-9z" />
    </svg>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand${footer ? " brand-footer" : ""}`}
      aria-label="InfiniCity Labs home"
    >
      <BrandMark />
      <span>
        InfiniCity <span className="brand-labs">Labs</span>
      </span>
    </Link>
  );
}
