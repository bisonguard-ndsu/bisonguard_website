import { CookieSettingsLink } from "@/components/cookie-consent";
import { Logo, MainButton } from "@/components/kit";
import { footerCols } from "@/content/nav";

/**
 * footer.closing: the close (close-type) and the footer (footer-statement) as the
 * page's last screen. footer-dark in place of the dealt footer-statement: the lit slab made a
 * second light band on a dark-first site. The close repeats the main action word for word.
 */
export default function SiteFooter({ title = "Email our team", line }: { title?: string; line?: string }) {
  return (
    <footer className="footer closing footer--dark" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">{title}</h2>
            <p>{line ?? "Tell us about your network and the question you need answered. We set up a demo on your own roads."}</p>
          </div>
          <MainButton className="btn btn--primary btn--xl btn--wide" arrow />
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <Logo />
              <p className="footer__lede">Computer vision for road and traffic agencies in the United States and West Africa.</p>
            </div>
            {footerCols.map((col) => (
              <div className="span-2 footer__col" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__legal">
            <span>
              &copy; {new Date().getFullYear()} InfiniCity Labs &nbsp; <a href="/privacy">Privacy</a> &nbsp; <a href="/terms">Terms</a> &nbsp;{" "}
              <a href="/cookies">Cookies</a> &nbsp; <CookieSettingsLink className="linkbtn" />
            </span>
            <div className="socials" />
          </div>
        </div>
      </div>
    </footer>
  );
}
