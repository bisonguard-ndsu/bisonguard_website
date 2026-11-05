/**
 * Small pieces shared by every page, written against the taste-skill kit
 * (public/assets/system.css and friends). Pages use the kit's classes directly;
 * these only save repeating markup.
 */
import type { CSSProperties, ReactNode } from "react";
import { site } from "@/content/site";

/** Inline style with CSS custom properties, e.g. vars({ "--h": 2 }). */
export const vars = (o: Record<string, string | number>) => o as CSSProperties;

export const MAIN_ACTION = "Email our team";
export const MAIN_HREF = `mailto:${site.email}?subject=${encodeURIComponent("InfiniCity Labs enquiry")}`;
export const SIGN_IN_HREF = "https://app.infinicitylabs.org";

export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function Chev() {
  return (
    <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The client's mark: three rising bars, flat accent. */
export function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="11.2" width="5.6" height="10.8" rx="1.2" />
      <rect x="9.2" y="7.4" width="5.6" height="14.6" rx="1.2" />
      <rect x="16.4" y="2" width="5.6" height="20" rx="1.2" />
    </svg>
  );
}

export function Logo() {
  return (
    <a className="nav__logo" href="/">
      <LogoMark />
      InfiniCity Labs
    </a>
  );
}

export function MainButton({ className = "btn btn--primary", arrow = false }: { className?: string; arrow?: boolean }) {
  return (
    <a className={className} href={MAIN_HREF}>
      {MAIN_ACTION}
      {arrow && <Arrow />}
    </a>
  );
}

/** One page section: exactly one or two screens, its h2 first. */
export function Section({
  id,
  h = 1,
  hm,
  className = "",
  label,
  children,
}: {
  id: string;
  h?: 1 | 2;
  hm?: 1 | 2;
  className?: string;
  label?: string;
  children: ReactNode;
}) {
  const style: Record<string, number> = {};
  if (h === 2) style["--h"] = 2;
  if (hm) style["--hm"] = hm;
  return (
    <section
      className={`section ${h === 2 ? "g2" : ""} ${className}`.trim()}
      id={id}
      aria-labelledby={label ?? `${id}-h`}
      style={Object.keys(style).length ? vars(style) : undefined}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

/** A heading that runs on in grey: <H2 id="x">Plain claim. <Muted>One sentence.</Muted></H2> */
export function Muted({ children }: { children: ReactNode }) {
  return <span className="muted">{children}</span>;
}
