"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  APP_HREF,
  DEMO_HREF,
  companyLinks,
  mainNav,
  productGroups,
  solutionLinks,
  type MenuLink,
} from "@/content/nav";
import { Logo } from "./logo";

type MenuKey = "products" | "solutions" | "company";

const featured: Record<MenuKey, { href: string; image: string; alt: string; title: string; text: string }> = {
  products: {
    href: "/products/adams",
    image: "/images/road-survey.webp",
    alt: "A phone mounted on a dashboard recording the road ahead",
    title: "A survey from a phone on the dashboard",
    text: "AdAMS reads the video, finds every sign and places it on the network map.",
  },
  solutions: {
    href: "/solutions/traffic-engineering",
    image: "/images/urban-intersection.jpg",
    alt: "A city intersection seen from above",
    title: "Turning counts without the clipboard",
    text: "Draw the movements once. Turnflow counts them from your video.",
  },
  company: {
    href: "/team",
    image: "/team.jpg",
    alt: "The InfiniCity Labs team",
    title: "Transportation engineers who write the models",
    text: "Meet the people behind the products.",
  },
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuItem({ link, onNavigate }: { link: MenuLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group -mx-3 block rounded-md px-3 py-2.5 transition-colors hover:bg-raised"
    >
      <span className="flex items-center gap-2 text-[15px] font-medium text-ink">
        {link.name}
        <span aria-hidden className="text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
          →
        </span>
      </span>
      <span className="mt-0.5 block text-[13.5px] text-muted">{link.note}</span>
    </Link>
  );
}

function MenuPanel({ menu, onNavigate }: { menu: MenuKey; onNavigate: () => void }) {
  const card = featured[menu];
  return (
    <div className="wrap grid-12 gap-y-8 py-10">
      <div className="col-span-8">
        {menu === "products" && (
          <div className="grid grid-cols-3 gap-8">
            {productGroups.map((group) => (
              <div key={group.title}>
                <p className="label mb-3">{group.title}</p>
                {group.links.map((link) => (
                  <MenuItem key={link.href} link={link} onNavigate={onNavigate} />
                ))}
              </div>
            ))}
          </div>
        )}
        {menu !== "products" && (
          <div>
            <p className="label mb-3">{menu === "solutions" ? "By the work you do" : "InfiniCity Labs"}</p>
            <div className="grid grid-cols-2 gap-x-8">
              {(menu === "solutions" ? solutionLinks : companyLinks).map((link) => (
                <MenuItem key={link.href} link={link} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}
        <div className="mt-8 flex items-center gap-6 border-t border-line pt-5 text-[14px]">
          <Link href={menu === "products" ? "/products" : menu === "solutions" ? "/solutions" : "/company"} onClick={onNavigate} className="link-draw text-ink">
            {menu === "products" ? "All products" : menu === "solutions" ? "All solutions" : "About InfiniCity Labs"}
          </Link>
          <a href={APP_HREF} className="link-draw text-muted hover:text-ink">
            Sign in to the platform
          </a>
        </div>
      </div>
      <Link
        href={card.href}
        onClick={onNavigate}
        className="photo-zoom group col-span-4 overflow-hidden rounded-lg border border-line bg-surface transition-transform duration-300 hover:-translate-y-0.5"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image src={card.image} alt={card.alt} fill sizes="400px" className="object-cover" />
        </div>
        <div className="p-5">
          <p className="text-[15px] font-medium text-ink">{card.title}</p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{card.text}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Close menus on route change.
  useEffect(() => {
    close();
  }, [pathname, close]);

  const enter = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  const solid = scrolled || open !== null || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-bg/92 backdrop-blur-md" : "border-b border-transparent"
      }`}
      onMouseLeave={leave}
      style={solid ? undefined : ({ "--muted": "rgb(255 255 255 / 0.88)", "--ink": "#ffffff" } as React.CSSProperties)}
    >
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label="InfiniCity Labs home" className="shrink-0" onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            if (!item.menu) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setOpen(null)}
                  className={`rounded-full px-4 py-2 text-[15px] transition-colors hover:text-ink ${
                    active ? "text-ink" : "text-muted"
                  }`}
                >
                  {item.name}
                </Link>
              );
            }
            const key = item.menu;
            const isOpen = open === key;
            return (
              <button
                key={item.name}
                type="button"
                aria-expanded={isOpen}
                aria-controls="mega-menu"
                onMouseEnter={() => enter(key)}
                onClick={() => setOpen(isOpen ? null : key)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] transition-colors hover:text-ink ${
                  isOpen || active ? "text-ink" : "text-muted"
                }`}
              >
                {item.name}
                <Chevron open={isOpen} />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={APP_HREF} className="rounded-full px-4 py-2 text-[15px] text-muted transition-colors hover:text-ink">
            Sign in
          </a>
          <Link href={DEMO_HREF} className="btn btn-primary btn-sm">
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-full text-ink lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {mobileOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mega-menu"
            key="mega"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => open && enter(open)}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-bg lg:block"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open}
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.16 }}
              >
                <MenuPanel menu={open} onNavigate={close} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto bg-bg lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pb-8 pt-4">
              {mainNav.map((item) => {
                if (!item.menu) {
                  return (
                    <Link key={item.name} href={item.href} onClick={close} className="border-b border-line py-5 text-[22px] text-ink">
                      {item.name}
                    </Link>
                  );
                }
                const key = item.menu;
                const isOpen = mobileGroup === key;
                const links =
                  key === "products" ? productGroups.flatMap((g) => g.links) : key === "solutions" ? solutionLinks : companyLinks;
                return (
                  <div key={item.name} className="border-b border-line">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setMobileGroup(isOpen ? null : key)}
                      className="flex w-full items-center justify-between py-5 text-left text-[22px] text-ink"
                    >
                      {item.name}
                      <Chevron open={isOpen} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4">
                            {links.map((link) => (
                              <Link key={link.href} href={link.href} onClick={close} className="block py-2.5">
                                <span className="block text-[16px] text-ink">{link.name}</span>
                                <span className="block text-[14px] text-muted">{link.note}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="mt-auto flex flex-col gap-3 pt-10">
                <Link href={DEMO_HREF} onClick={close} className="btn btn-primary w-full">
                  Book a demo
                </Link>
                <a href={APP_HREF} className="btn btn-secondary w-full">
                  Sign in
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
