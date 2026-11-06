"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { products } from "@/content/products";
import { solutions } from "@/content/solutions";
type MenuName = "Products" | "Solutions" | "Resources" | "Company";
const intros = {
  Products: {
    title: "The product portfolio.",
    text: "Software for asset management, traffic analysis, field inspections, and visual AI.",
    href: "/products",
    link: "All products",
  },
  Solutions: {
    title: "Your engineering workflow.",
    text: "Explore applications in road networks, traffic studies, and field operations.",
    href: "/solutions",
    link: "Explore solutions",
  },
  Resources: {
    title: "Research & practical guides.",
    text: "Read about pavement assessment, traffic studies, and computer vision.",
    href: "/resources",
    link: "Resource library",
  },
  Company: {
    title: "About InfiniCity Labs.",
    text: "The company behind the products, our engineering approach, and ways to work with us.",
    href: "/company",
    link: "About InfiniCity",
  },
};
const resourceLinks = [
  {
    title: "Research library",
    description: "Selected publications and ideas",
    href: "/research",
  },
  {
    title: "Infrastructure field guide",
    description: "From surveys to maintenance decisions",
    href: "/resources/from-road-surveys-to-maintenance-decisions",
  },
  {
    title: "Traffic study guide",
    description: "Building a useful turning-movement study",
    href: "/resources/building-a-useful-turning-movement-study",
  },
  {
    title: "Human review in AI",
    description: "The people behind better visual data",
    href: "/resources/human-review-in-computer-vision-workflows",
  },
];
const companyLinks = [
  {
    title: "Our company",
    description: "What we do and how we think",
    href: "/company",
  },
  {
    title: "Our people",
    description: "Engineering, research, and collaboration",
    href: "/team",
  },
  { title: "Careers", description: "Bring your perspective", href: "/careers" },
  { title: "Contact", description: "Start a conversation", href: "/contact" },
];
function MenuLinks({ name }: { name: MenuName }) {
  if (name === "Products")
    return (
      <div className="mega-product-columns">
        {[
          ["adams", "pavexpert", "roadlogger"],
          ["tmc", "turnflow", "annotate", "bisonguard"],
        ].map((slugs, i) => (
          <div key={i}>
            <p className="menu-group-label">
              {i === 0 ? "Infrastructure & field" : "Mobility & applied AI"}
            </p>
            {slugs.map((slug) => {
              const p = products.find((p) => p.slug === slug)!;
              return (
                <Link
                  key={slug}
                  href={"/products/" + slug}
                  className="mega-link"
                >
                  <span>
                    {p.name}
                    <small>{p.category}</small>
                  </span>
                  <ArrowUpRight size={15} />
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    );
  const links =
    name === "Solutions"
      ? solutions.map((s) => ({
          title: s.shortTitle,
          description: s.summary,
          href: "/solutions/" + s.slug,
        }))
      : name === "Resources"
        ? resourceLinks
        : companyLinks;
  return (
    <div className="mega-service-links">
      {links.map((item) => (
        <Link key={item.href} href={item.href} className="mega-link">
          <span>
            {item.title}
            <small>{item.description}</small>
          </span>
          <ArrowUpRight size={17} />
        </Link>
      ))}
    </div>
  );
}
export function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<
    Partial<Record<MenuName, HTMLButtonElement | null>>
  >({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedByHover = useRef(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }
  function closeMenu() {
    cancelClose();
    openedByHover.current = false;
    setOpenMenu(null);
  }
  function openOnHover(name: MenuName) {
    cancelClose();
    if (openMenu !== name) {
      openedByHover.current = true;
      setOpenMenu(name);
    }
  }
  function toggleMenu(name: MenuName) {
    cancelClose();
    if (openMenu === name && openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    openedByHover.current = false;
    setOpenMenu(openMenu === name ? null : name);
  }
  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      openedByHover.current = false;
      setOpenMenu(null);
    }, 180);
  }
  useEffect(() => {
    setOpenMenu(null);
    dialogRef.current?.close();
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [pathname]);
  useEffect(() => {
    let frame = 0;
    function update() {
      setScrolled(window.scrollY > 24);
      const range = document.documentElement.scrollHeight - window.innerHeight;
      headerRef.current?.style.setProperty(
        "--page-progress",
        String(range > 0 ? Math.min(window.scrollY / range, 1) : 0),
      );
      frame = 0;
    }
    function scroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
  useEffect(() => {
    if (!openMenu) return;
    function dismiss(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [openMenu]);
  function isActive(name: MenuName) {
    return name === "Products"
      ? pathname.startsWith("/products")
      : name === "Solutions"
        ? pathname.startsWith("/solutions") || pathname === "/services"
        : name === "Resources"
          ? pathname.startsWith("/resources") || pathname === "/research"
          : ["/company", "/team", "/careers"].includes(pathname);
  }
  return (
    <>
      <header
        ref={headerRef}
        className={"site-header" + (openMenu ? " has-open-menu" : "")}
        data-home={pathname === "/"}
        data-scrolled={scrolled}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") scheduleClose();
        }}
        onPointerEnter={cancelClose}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) closeMenu();
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape" && openMenu) {
            triggerRefs.current[openMenu]?.focus();
            closeMenu();
          }
        }}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) closeMenu();
        }}
      >
        <div className="header-inner wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {(
              ["Company", "Solutions", "Products", "Resources"] as MenuName[]
            ).map((name) => (
              <button
                key={name}
                type="button"
                ref={(node) => {
                  triggerRefs.current[name] = node;
                }}
                className={"nav-trigger" + (isActive(name) ? " active" : "")}
                aria-expanded={openMenu === name}
                aria-controls={"menu-" + name.toLowerCase()}
                onClick={() => toggleMenu(name)}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") openOnHover(name);
                }}
              >
                {name === "Resources" ? "Research & insights" : name}
                <ChevronDown size={12} />
              </button>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/platforms" className="platform-link">
              Platforms
              <ArrowUpRight size={14} />
            </Link>
            <Link href="/book-a-demo" className="header-contact">
              Book a demo
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Open navigation"
            onClick={() => {
              closeMenu();
              dialogRef.current?.showModal();
            }}
          >
            <Menu size={25} />
          </button>
        </div>
        <span className="header-progress" aria-hidden="true" />
        <AnimatePresence>
          {openMenu && (
            <motion.div
              key={openMenu}
              className="mega-menu"
              id={"menu-" + openMenu.toLowerCase()}
              initial={{ opacity: 0, y: reduced ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -5 }}
              transition={{ duration: reduced ? 0 : 0.2 }}
            >
              <div className="wrap mega-layout">
                <div className="mega-intro">
                  <p className="eyebrow">{openMenu}</p>
                  <h2>{intros[openMenu].title}</h2>
                  <p>{intros[openMenu].text}</p>
                  <Link href={intros[openMenu].href} className="text-link">
                    {intros[openMenu].link}
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
                <MenuLinks name={openMenu} />
                <div className="mega-feature-column">
                  <Link
                    href={
                      openMenu === "Products"
                        ? "/products/adams"
                        : "/technology"
                    }
                    className="mega-feature"
                  >
                    <div className="mega-feature-image">
                      <Image
                        src={
                          openMenu === "Products"
                            ? "/images/adams-inspection.webp"
                            : "/images/urban-intersection.jpg"
                        }
                        fill
                        sizes="320px"
                        alt=""
                      />
                    </div>
                    <span>
                      {openMenu === "Products"
                        ? "A closer look at AdAMS"
                        : "The technology behind the work"}
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                  <Link href="/services" className="mega-secondary-link">
                    Our expertise
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link href="/book-a-demo" className="mega-secondary-link">
                    See it in a demo
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {openMenu && <div className="nav-scrim" aria-hidden="true" />}
      <dialog
        ref={dialogRef}
        className="mobile-menu"
        aria-labelledby="mobile-nav-title"
      >
        <div className="mobile-menu-top">
          <span id="mobile-nav-title">Explore InfiniCity Labs</span>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => dialogRef.current?.close()}
          >
            <X size={26} />
          </button>
        </div>
        <nav
          aria-label="Mobile navigation"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a"))
              dialogRef.current?.close();
          }}
        >
          <Link href="/" className="mobile-main-link">
            Home
            <ArrowUpRight size={19} />
          </Link>
          {(
            ["Company", "Solutions", "Products", "Resources"] as MenuName[]
          ).map((name) => (
            <details key={name}>
              <summary>
                {name === "Resources" ? "Research & insights" : name}
                <ChevronDown size={20} />
              </summary>
              <Link href={intros[name].href}>{intros[name].link}</Link>
              {name === "Products"
                ? products.map((p) => (
                    <Link key={p.slug} href={"/products/" + p.slug}>
                      {p.name}
                    </Link>
                  ))
                : name === "Solutions"
                  ? solutions.map((s) => (
                      <Link key={s.slug} href={"/solutions/" + s.slug}>
                        {s.shortTitle}
                      </Link>
                    ))
                  : (name === "Resources" ? resourceLinks : companyLinks).map(
                      (l) => (
                        <Link key={l.href} href={l.href}>
                          {l.title}
                        </Link>
                      ),
                    )}
            </details>
          ))}
          <Link href="/technology" className="mobile-main-link">
            Technology
            <ArrowUpRight size={19} />
          </Link>
          <Link href="/platforms" className="mobile-main-link">
            Platform access
            <ArrowUpRight size={19} />
          </Link>
          <Link href="/book-a-demo" className="link-button link-button-solid">
            Book a demo
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      </dialog>
    </>
  );
}
