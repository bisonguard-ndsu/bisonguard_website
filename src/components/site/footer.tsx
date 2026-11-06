import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { CookieSettingsButton } from "./consent";
import { products } from "@/content/products";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand-column">
          <Brand footer />
          <p>
            Software and engineering for infrastructure, mobility, and applied
            AI.
          </p>
          <a href="mailto:info@infinicitylabs.org" className="footer-email">
            info@infinicitylabs.org
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div>
          <h2>Products</h2>
          {products.map((p) => (
            <Link key={p.slug} href={"/products/" + p.slug}>
              {p.name}
            </Link>
          ))}
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/solutions">Solutions</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/services">Our expertise</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/research">Research</Link>
          <Link href="/platforms">Platform access</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/company">About InfiniCity</Link>
          <Link href="/team">Our people</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book-a-demo">Book a demo</Link>
          <a
            href="https://www.linkedin.com/company/infinicity-labs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={12} />
          </a>
          <a
            href="https://github.com/InfiniCityLabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} InfiniCity Labs</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
