import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav } from "@/content/nav";
import { apps } from "@/content/apps";
import { site } from "@/content/site";
import { CookieSettingsLink } from "@/components/cookie-consent";

export default function SiteFooter() {
  const columns = nav.filter((n) => n.panel);
  return (
    <footer className="on-ink bg-ink text-white">
      <div className="wrap pt-16 pb-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-white/70">
              Computer-vision software that turns road and traffic video into the records engineers maintain.
            </p>
            <a href={`mailto:${site.email}`} className="link mt-6 inline-block text-[1.0625rem] font-semibold">
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.id}>
                <h2 className="label text-white/50">{col.label}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.panel!.groups
                    .flatMap((g) => g.links)
                    .map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="link text-[0.9375rem] text-white/85 hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="label text-white/50">Sign in</h2>
              <ul className="mt-4 space-y-2.5">
                {apps
                  .filter((a) => a.url)
                  .map((a) => (
                    <li key={a.key}>
                      <a
                        href={a.url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-[0.9375rem] text-white/85 hover:text-white"
                      >
                        {a.name} <span aria-hidden>↗</span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-rule-dark pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.social.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="link text-sm text-white/70 hover:text-white">
                  {s.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
            <span>© {new Date().getFullYear()} InfiniCity Labs</span>
            <Link href="/privacy" className="link hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="link hover:text-white">
              Cookies
            </Link>
            <CookieSettingsLink className="link cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
