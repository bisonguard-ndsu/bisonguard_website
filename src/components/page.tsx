/* eslint-disable @next/next/no-img-element */
/**
 * Section recipes for the inner pages, built only from the kit's classes
 * (taste-skill sections-library: hero split, split-text-left, tiles, steps, rows, faq).
 * Every section is one or two screens with its h2 first; nothing animates on scroll.
 */
import type { ReactNode } from "react";
import { MainButton, Section, vars } from "@/components/kit";

export type Pic = { src: string; alt: string; position?: string };
export type Shot = { src: string; alt: string };

/** A photograph filling its frame, or the client's screenshot cut by the frame's right and bottom. */
function Visual({ pic, shot, className, priority }: { pic?: Pic; shot?: Shot; className: string; priority?: boolean }) {
  if (shot)
    return (
      <div className={`frame ${className}`}>
        <div className="stage stage--fade-br">
          <div className="at-corner to-edge" style={vars({ "--ax": "48px", "--ay": "48px", "--w": "920px" })}>
            <img className="shot" src={shot.src} alt={shot.alt} fetchPriority={priority ? "high" : undefined} />
          </div>
        </div>
      </div>
    );
  if (!pic) return null;
  return (
    <div className={`frame frame--photo ${className}`}>
      <img
        className="frame__img"
        src={pic.src}
        alt={pic.alt}
        style={pic.position ? { objectPosition: pic.position } : undefined}
        loading={priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : undefined}
      />
    </div>
  );
}

/** The inner-page hero: words on the left half, the picture on the right half, one screen. */
export function PageHero({
  h1,
  lead,
  notice,
  second,
  facts,
  pic,
  shot,
}: {
  h1: string;
  lead: string;
  notice?: string;
  second?: { label: string; href: string };
  facts?: [string, string][];
  pic?: Pic;
  shot?: Shot;
}) {
  return (
    <section className="hero hero--split" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero-split">
          <div className="hero-copy span-6">
            {notice && <p className="hero-notice">{notice}</p>}
            <h1 id="hero-h">{h1}</h1>
            <p className="t-lead">{lead}</p>
            <div className="btn-row">
              <MainButton arrow />
              {second && (
                <a className="btn btn--secondary" href={second.href}>
                  {second.label}
                </a>
              )}
            </div>
            {facts && (
              <dl className="hero-facts">
                {facts.map(([dt, dd]) => (
                  <div key={dt}>
                    <dt>{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <Visual pic={pic} shot={shot} className="hero-visual span-6 start-7" priority />
        </div>
      </div>
    </section>
  );
}

/** split-text-left: the words on span-5, the picture on span-6 start-7, down to the section's foot. */
export function SplitText({
  id,
  h2,
  lead,
  lines,
  link,
  pic,
  shot,
  ground,
  children,
}: {
  id: string;
  h2: string;
  lead: string;
  lines?: string[];
  link?: { label: string; href: string };
  pic?: Pic;
  shot?: Shot;
  ground?: "inverse" | "surface";
  children?: ReactNode;
}) {
  return (
    <Section id={id} className={ground ? `ground-${ground}` : ""}>
      <div className="grid fill">
        <div className="span-5 stack-5">
          <h2 id={`${id}-h`}>{h2}</h2>
          <p className="t-lead">{lead}</p>
          {lines && (
            <ul className="lines">
              {lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          )}
          {children}
          {link && (
            <p>
              <a className="link" href={link.href}>
                {link.label}
              </a>
            </p>
          )}
        </div>
        <Visual pic={pic} shot={shot} className="frame--split frame--fill span-6 start-7" />
      </div>
    </Section>
  );
}

export type Tile = { href: string; img: string; alt: string; title: string; fact: string; position?: string };

function TileRow({ items }: { items: Tile[] }) {
  const span = items.length === 2 ? "span-6" : "span-4";
  return (
    <div className="grid tiles">
      {items.map((t) => (
        <a className={`tile ${span}`} href={t.href} key={t.href}>
          <div className="tile__media">
            <img src={t.img} alt={t.alt} loading="lazy" style={t.position ? { objectPosition: t.position } : undefined} />
          </div>
          <div className="tile__head">
            <h3>{t.title}</h3>
            <span className="tile__price">{t.fact}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

/** Open tiles with photographs: one row (one screen) or two rows (two screens). */
export function Tiles({
  id,
  h2,
  muted,
  link,
  items,
  ratio = "1 / 1",
}: {
  id: string;
  h2: string;
  muted?: string;
  link?: { label: string; href: string };
  items: Tile[];
  ratio?: string;
}) {
  const perRow = items.length === 2 || items.length === 4 ? 2 : 3;
  const rows = items.length > perRow ? [items.slice(0, perRow), items.slice(perRow)] : [items];
  const head = (
    <div className={`section-head ${link ? "section-head--row" : ""}`}>
      <div>
        <h2 id={`${id}-h`}>
          {h2} {muted && <span className="muted">{muted}</span>}
        </h2>
      </div>
      {link && (
        <a className="link" href={link.href}>
          {link.label}
        </a>
      )}
    </div>
  );
  return (
    <section
      className={`section ${rows.length > 1 ? "g2" : ""}`}
      id={id}
      aria-labelledby={`${id}-h`}
      style={vars({ "--tile-ratio": ratio, ...(rows.length > 1 ? { "--h": 2 } : {}) })}
    >
      <div className="wrap">
        {rows.length > 1 ? (
          <>
            <div className="group">
              {head}
              <TileRow items={rows[0]} />
            </div>
            <TileRow items={rows[1]} />
          </>
        ) : (
          <>
            {head}
            <TileRow items={rows[0]} />
          </>
        )}
      </div>
    </section>
  );
}

/** steps: three cards, each a step with its photograph in the panel. */
export function StepCards({ id, h2, steps }: { id: string; h2: string; steps: { title: string; text: string; img: string; alt: string }[] }) {
  return (
    <Section id={id}>
      <div className="section-head">
        <h2 id={`${id}-h`}>{h2}</h2>
      </div>
      <div className="grid steps">
        {steps.map((s, i) => (
          <article className="card card--row span-4 m-nolift" key={s.title}>
            <span className="step-num">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="panel panel--flush">
              <img className="frame__img" src={s.img} alt={s.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/** A list read across (features, values, roles) beside one photograph. */
export function RowsSplit({
  id,
  h2,
  muted,
  items,
  pic,
  ground,
}: {
  id: string;
  h2: string;
  muted?: string;
  items: { title: string; text: string; value?: string }[];
  pic: Pic;
  ground?: "inverse" | "surface";
}) {
  return (
    <Section id={id} className={ground ? `ground-${ground}` : ""}>
      <div className="section-head">
        <h2 id={`${id}-h`}>
          {h2} {muted && <span className="muted">{muted}</span>}
        </h2>
      </div>
      <div className="grid fill">
        <ul className="rows span-6">
          {items.map((r) => (
            <li key={r.title}>
              <span className="rows__name">{r.title}</span>
              {r.value && <span className="rows__value">{r.value}</span>}
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
        <Visual pic={pic} className="frame--split frame--fill span-6 start-7" />
      </div>
    </Section>
  );
}

/** FAQ: every answer open, in two columns. */
export function Faq({ id = "faq", h2, items }: { id?: string; h2: string; items: { q: string; a: string }[] }) {
  const half = Math.ceil(items.length / 2);
  return (
    <Section id={id}>
      <div className="section-head">
        <h2 id={`${id}-h`}>{h2}</h2>
      </div>
      <div className="grid grid--top">
        {[items.slice(0, half), items.slice(half)].map((col, i) => (
          <div className="faq span-6" key={i}>
            {col.map((f) => (
              <div className="faq__item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

/** Legal and policy text: a long page of plain prose (the one place sections run past a screen). */
export function LegalPage({ h1, updated, children }: { h1: string; updated: string; children: ReactNode }) {
  return (
    <section className="legal" aria-labelledby="legal-h">
      <div className="wrap">
        <div className="measure prose">
          <p className="t-label muted">Last updated {updated}</p>
          <h1 id="legal-h">{h1}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
