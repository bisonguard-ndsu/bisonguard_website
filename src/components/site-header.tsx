import { Chev, Logo, MAIN_ACTION, MAIN_HREF, SIGN_IN_HREF } from "@/components/kit";
import { nav } from "@/content/nav";

/** nav-mega: one fixed, opaque bar. system.js adds the phone sheet, Escape and aria-expanded. */
export default function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip" href="#top">
          Skip to content
        </a>
        <Logo />
        <nav className="nav__links" aria-label="Main">
          {nav.map((item) => (
            <div className="nav__item" key={item.label}>
              <a className="nav__link" href={item.href} aria-current={current === item.href ? "page" : undefined}>
                {item.label}
                {item.cols && <Chev />}
              </a>
              {item.cols && (
                <div className="nav__menu">
                  <div className="wrap grid">
                    {item.cols.map((col) => (
                      <div className="menu-col span-3" key={col.heading}>
                        <p className="t-label">{col.heading}</p>
                        {col.links.map((l) => (
                          <a href={l.href} key={l.href}>
                            {l.label}
                            <span>{l.line}</span>
                          </a>
                        ))}
                      </div>
                    ))}
                    {item.card && (
                      <a className="menu-card span-3 start-10" href={item.card.href}>
                        <div className="panel">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img className="frame__img" src={item.card.img} alt={item.card.alt} loading="lazy" />
                        </div>
                        <span className="t-card">{item.card.title}</span>
                        <span className="t-small muted">{item.card.line}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="nav__link" href={SIGN_IN_HREF}>
            Sign in
          </a>
          <a className="btn btn--primary" href={MAIN_HREF}>
            {MAIN_ACTION}
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
