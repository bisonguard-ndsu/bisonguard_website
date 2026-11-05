import Link from "next/link";

/** Plain page opening used by legal pages and pages still being built. */
export function PageIntro({
  label,
  title,
  lead,
  crumbs,
}: {
  label: string;
  title: string;
  lead?: string;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="border-b border-rule pt-8 pb-14 lg:pt-10 lg:pb-20">
      <div className="wrap">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-10 lg:mb-14">
            <ol className="label flex flex-wrap gap-2 text-ink-3">
              {crumbs.map((c) => (
                <li key={c.href} className="flex gap-2">
                  <Link href={c.href} className="link hover:text-ink">
                    {c.label}
                  </Link>
                  <span aria-hidden>/</span>
                </li>
              ))}
              <li aria-current="page" className="text-ink">
                {title}
              </li>
            </ol>
          </nav>
        )}
        <p className="label text-guide">{label}</p>
        <h1 className="t-h1 mt-5 max-w-[18ch]">{title}</h1>
        {lead && <p className="t-lead mt-6 max-w-[56ch] text-ink-2">{lead}</p>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap section">
      <div className="max-w-[68ch] space-y-5 text-[1.0625rem] leading-relaxed text-ink-2 [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 [&_h2]:pt-8 [&_h2]:text-[1.5rem] [&_h2]:font-bold [&_h2]:text-ink [&_h3]:font-bold [&_h3]:text-ink">
        {children}
      </div>
    </div>
  );
}
