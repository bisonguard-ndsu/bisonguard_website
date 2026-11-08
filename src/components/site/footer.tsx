import Link from "next/link";
import {
  APP_HREF,
  CONTACT_EMAIL,
  DEMO_HREF,
  companyLinks,
  productGroups,
  socials,
  solutionLinks,
} from "@/content/nav";
import { Logo } from "./logo";

const columns = [
  { title: "Products", links: productGroups.flatMap((g) => g.links) },
  { title: "Solutions", links: solutionLinks },
  { title: "Company", links: [...companyLinks, { name: "Contact", href: "/contact", note: "" }] },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      {/* Closing call */}
      <div className="wrap grid-12 gap-y-8 py-20 lg:py-28">
        <h2 className="col-span-12 text-[36px] leading-[1.04] tracking-[-0.035em] sm:text-[48px] lg:col-span-8 xl:text-[60px]">
          Bring us a road network, a camera or a survey drive.
        </h2>
        <div className="col-span-12 flex flex-col justify-end gap-5 lg:col-span-4">
          <p className="max-w-sm text-[16px] leading-relaxed text-muted">
            We will show you what our products find in your own footage, and what it would take to run them on your network.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={DEMO_HREF} className="btn btn-primary">
              Book a demo <span className="arrow" aria-hidden>→</span>
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-secondary">
              Email our team
            </a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="grid-12 gap-y-12 border-t border-line py-16">
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
            <Logo />
            <p className="max-w-xs text-[14.5px] leading-relaxed text-muted">
              Computer vision and data products for roads, traffic and the people who keep them working.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-draw w-fit text-[14.5px] text-ink">
              {CONTACT_EMAIL}
            </a>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="col-span-6 sm:col-span-4 lg:col-span-2 lg:first-of-type:col-start-7">
              <p className="label mb-5">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-draw text-[14.5px] text-muted transition-colors hover:text-ink">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 text-[13px] text-subtle md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} InfiniCity Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="link-draw transition-colors hover:text-ink">
                {s.name}
              </a>
            ))}
            <span className="hidden h-3 w-px bg-line-strong md:block" aria-hidden />
            <Link href="/privacy" className="link-draw transition-colors hover:text-ink">
              Privacy
            </Link>
            <a href={APP_HREF} className="link-draw transition-colors hover:text-ink">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
