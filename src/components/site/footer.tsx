import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { CookieSettingsButton } from "./consent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand-column">
          <Brand footer />
          <p>
            Applied intelligence.
            <br />
            Real-world possibilities.
          </p>
          <a href="mailto:info@infinicitylabs.org" className="footer-email">
            info@infinicitylabs.org
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div>
          <h2>Our products</h2>
          <Link href="/products/adams">AdAMS</Link>
          <Link href="/products/turnflow">Turnflow</Link>
          <Link href="/products/roadlogger">RoadLogger</Link>
          <Link href="/products/pavexpert">PaveXpert</Link>
          <Link href="/products">
            Explore all products
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/services">Our expertise</Link>
          <Link href="/research">Research</Link>
          <Link href="/company">Company</Link>
          <Link href="/team">Our people</Link>
          <Link href="/platforms">Platform access</Link>
        </div>
        <div>
          <h2>Connect</h2>
          <Link href="/contact">Start a conversation</Link>
          <a
            href="https://www.linkedin.com/company/infinicity-labs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/InfiniCityLabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} InfiniCity Labs</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <CookieSettingsButton />
        </div>
        <span>Built around what matters.</span>
      </div>
    </footer>
  );
}
