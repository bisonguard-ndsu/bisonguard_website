import { Crumbs } from "@/components/sections";

/** Plain page opening on the dark band, used by legal pages and the contact page. */
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
    <section className="-mt-[4.5rem] bg-deep pt-[4.5rem]">
      <div className="wrap pt-12 pb-14 lg:pt-20 lg:pb-20">
        {crumbs ? <Crumbs items={crumbs} current={title} /> : <p className="text-sm font-semibold text-primary">{label}</p>}
        <h1 className="mt-6 max-w-[18ch] font-display text-[2.375rem] leading-[1.06] font-semibold tracking-[-0.03em] text-white sm:text-[3.25rem] lg:text-[3.75rem]">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-[56ch] text-[1.0625rem] leading-relaxed text-white/70 sm:text-lg">{lead}</p>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg">
      <div className="wrap section">
        <div className="max-w-[68ch] space-y-5 text-[1.0625rem] leading-relaxed text-fg-2 [&_a]:font-semibold [&_a]:text-fg [&_a]:underline [&_a]:underline-offset-2 [&_h2]:pt-8 [&_h2]:font-display [&_h2]:text-[1.5rem] [&_h2]:font-semibold [&_h2]:text-fg [&_h3]:font-semibold [&_h3]:text-fg">
          {children}
        </div>
      </div>
    </div>
  );
}
