import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, projects, socialItems } from "@/lib/constants";

const emails = ["info@infinicitylabs.org", "research@infinicitylabs.org"];

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-navy-950 text-white">
      {/* Hairline that separates the footer from whatever section precedes it */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="bloom pointer-events-none absolute -top-40 right-0 h-80 w-80 opacity-[0.18]"
      />

      {/* CTA Section */}
      <div className="section-x relative border-b border-navy-800">
        <div className="mx-auto w-full max-w-6xl py-14 md:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold leading-[1.15] text-white md:text-3xl lg:text-[2rem]">
                Ready to Transform Your Infrastructure Systems?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-bluish-white/70">
                Join leading institutions and agencies who trust InfiniCity Labs
                with their transportation technology needs.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Link
                href="https://app.infinicitylabs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-11 rounded-none border border-navy-600 bg-transparent px-6 text-sm font-medium text-bluish-white transition-all duration-300 hover:border-neon hover:bg-neon/5 hover:text-neon">
                  Sign In
                </Button>
              </Link>
              <Link href="/#contact">
                <Button className="h-11 rounded-none bg-neon px-6 text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-neon-bright">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-x relative">
        <div className="mx-auto w-full max-w-6xl py-14 md:py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="InfiniCity Labs — home"
              >
                <Image
                  src="/logo-full.png"
                  alt="InfiniCity Labs — Pioneering Intelligent Futures"
                  width={1108}
                  height={417}
                  className="h-14 w-auto"
                />
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-bluish-white/65">
                We provide cutting-edge transportation technology services based
                on our research expertise in big data analytics, digital twins,
                and intelligent systems to help cities optimize their
                infrastructure and improve safety.
              </p>
              <div className="mt-8 flex items-center gap-2">
                {socialItems.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`InfiniCity Labs on ${social.name}`}
                      className="flex h-10 w-10 items-center justify-center border border-navy-600 text-bluish-white/70 transition-all duration-300 hover:border-neon hover:bg-neon/5 hover:text-neon"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="eyebrow text-bluish-white/45">Quick Links</h3>
              <ul className="mt-6 space-y-3.5">
                {navItems
                  .filter((link) => link.name !== "Projects")
                  .map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-start gap-1 text-sm text-bluish-white/70 transition-colors duration-300 hover:text-neon"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="eyebrow text-bluish-white/45">Our Solutions</h3>
              <ul className="mt-6 space-y-3.5">
                {projects.map((service) => (
                  <li key={service.title}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-start gap-1 text-sm leading-snug text-bluish-white/70 transition-colors duration-300 hover:text-neon"
                    >
                      <span className="max-w-[15rem]">{service.title}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="eyebrow text-bluish-white/45">Get In Touch</h3>
              <ul className="mt-6 space-y-3.5">
                {emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="group flex items-start gap-3 text-sm text-bluish-white/70 transition-colors duration-300 hover:text-neon"
                    >
                      <Mail
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-neon"
                      />
                      <span className="break-words">{email}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-x relative border-t border-navy-800">
        <div className="mx-auto w-full max-w-6xl py-6">
          <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-[0.8125rem] text-bluish-white/45">
              © {new Date().getFullYear()} InfiniCity Labs. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-[0.8125rem] text-bluish-white/45 transition-colors duration-300 hover:text-neon"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-[0.8125rem] text-bluish-white/45 transition-colors duration-300 hover:text-neon"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
