import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav } from "@/content/nav";
import { apps } from "@/content/apps";
import { site } from "@/content/site";
import { CookieSettingsLink } from "@/components/cookie-consent";

export default function SiteFooter() {
  const columns = nav.filter((n) => n.panel);
  return (
    <footer className="border-t border-white/10 bg-deep text-white">

      <div className="wrap pt-16 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-white/65">
              Computer-vision software that turns road and traffic video into the records engineers maintain.
            </p>
            <p className="mt-10 text-sm font-semibold text-white">Write to us</p>
            <a
              href={`mailto:${site.email}`}
              className="group mt-3 inline-flex items-center gap-2 font-display text-[1.375rem] font-semibold text-white transition-colors hover:text-primary-strong sm:text-2xl"
            >
              <span className="link">{site.email}</span>
              <span className="arrow text-primary-strong" aria-hidden>
                →
              </span>
            </a>
            <ul className="mt-8 flex flex-wrap gap-2">
              {site.social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center rounded-full border border-white/15 px-4 text-sm text-white/75 transition-colors hover:border-primary/60 hover:text-white"
                  >
                    {s.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.id}>
                <h2 className="text-sm font-semibold text-white">
                  <Link href={col.href} className="transition-colors hover:text-white">
                    {col.label}
                  </Link>
                </h2>
                <ul className="mt-5 space-y-3">
                  {col.panel!.groups
                    .flatMap((g) => g.links)
                    .map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="link text-[0.9375rem] text-white/80 transition-colors hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-sm font-semibold text-white">Sign in</h2>
              <ul className="mt-5 space-y-3">
                {apps
                  .filter((a) => a.url)
                  .map((a) => (
                    <li key={a.key}>
                      <a
                        href={a.url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-[0.9375rem] text-white/80 transition-colors hover:text-white"
                      >
                        {a.name} <span aria-hidden>↗</span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
              </ul>
              <h2 className="mt-10 text-sm font-semibold text-white">
                <Link href="/work" className="transition-colors hover:text-white">
                  Work
                </Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} InfiniCity Labs. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="link hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="link hover:text-white">
              Cookies
            </Link>
            <Link href="/terms" className="link hover:text-white">
              Terms
            </Link>
            <CookieSettingsLink className="link cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

    </footer>
  );
}
