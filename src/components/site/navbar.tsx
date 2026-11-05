"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { expertise, products } from "@/content/products";

type MenuName = "Products" | "Expertise" | "Company";

const menuIntros = {
  Products: {
    title: "Built for the real world.",
    text: "Explore the tools that connect observation, understanding, and action.",
    href: "/products",
    link: "All products",
  },
  Expertise: {
    title: "A problem worth solving.",
    text: "Bring your domain knowledge. We bring applied AI and engineering.",
    href: "/services",
    link: "Explore our expertise",
  },
  Company: {
    title: "Curiosity. Put to work.",
    text: "Meet the thinking behind InfiniCity Labs and the work we take on.",
    href: "/company",
    link: "About InfiniCity",
  },
};

function MenuLinks({ name }: { name: MenuName }) {
  if (name === "Products") {
    return (
      <div className="mega-product-columns">
        <div>
          <p className="menu-group-label">Infrastructure</p>
          {products
            .filter((p) =>
              ["adams", "roadlogger", "pavexpert"].includes(p.slug),
            )
            .map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="mega-link"
              >
                <span>
                  {p.name}
                  {p.inDevelopment && <small>In development</small>}
                </span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
        </div>
        <div>
          <p className="menu-group-label">Mobility & tools</p>
          {products
            .filter((p) =>
              ["turnflow", "traffic-management", "annotate"].includes(p.slug),
            )
            .map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="mega-link"
              >
                <span>{p.name}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          <Link className="menu-small-link" href="/products/herd-monitoring">
            Selected work · Herd monitoring
          </Link>
        </div>
      </div>
    );
  }
  if (name === "Expertise") {
    return (
      <div className="mega-service-links">
        {expertise.map((item) => (
          <Link
            key={item.id}
            href={`/services#${item.id}`}
            className="mega-link"
          >
            <span>
              {item.title}
              <small>{item.summary}</small>
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="mega-service-links">
      {[
        {
          title: "Our company",
          text: "What we do and how we work",
          href: "/company",
        },
        {
          title: "Our people",
          text: "Engineering, research, and collaboration",
          href: "/team",
        },
        {
          title: "Get in touch",
          text: "Start a conversation about your project",
          href: "/contact",
        },
      ].map((item) => (
        <Link key={item.href} href={item.href} className="mega-link">
          <span>
            {item.title}
            <small>{item.text}</small>
          </span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<
    Partial<Record<MenuName, HTMLButtonElement | null>>
  >({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedByHover = useRef(false);
  const pathname = usePathname();

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
    // Clicking a trigger that just opened on hover should keep it expanded.
    if (openMenu === name && openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    openedByHover.current = false;
    setOpenMenu(openMenu === name ? null : name);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }

  useEffect(() => {
    setOpenMenu(null);
    dialogRef.current?.close();
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
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
    if (name === "Products") return pathname.startsWith("/products");
    if (name === "Expertise") return pathname === "/services";
    return ["/company", "/team"].includes(pathname);
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${openMenu ? " has-open-menu" : ""}`}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") scheduleClose();
        }}
        onPointerEnter={cancelClose}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && openMenu) {
            triggerRefs.current[openMenu]?.focus();
            closeMenu();
          }
        }}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) closeMenu();
        }}
      >
        <div className="header-inner wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {(["Products", "Expertise"] as MenuName[]).map((name) => (
              <button
                key={name}
                ref={(node) => {
                  triggerRefs.current[name] = node;
                }}
                type="button"
                className={`nav-trigger${isActive(name) ? " active" : ""}`}
                aria-expanded={openMenu === name}
                aria-controls={`menu-${name.toLowerCase()}`}
                onClick={() => toggleMenu(name)}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") {
                    openOnHover(name);
                  }
                }}
              >
                {name}
                <ChevronDown size={13} aria-hidden="true" />
              </button>
            ))}
            <Link
              href="/research"
              className={pathname === "/research" ? "active" : ""}
              aria-current={pathname === "/research" ? "page" : undefined}
              onPointerEnter={() => closeMenu()}
            >
              Research
            </Link>
            <button
              ref={(node) => {
                triggerRefs.current.Company = node;
              }}
              type="button"
              className={`nav-trigger${isActive("Company") ? " active" : ""}`}
              aria-expanded={openMenu === "Company"}
              aria-controls="menu-company"
              onClick={() => toggleMenu("Company")}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") {
                  openOnHover("Company");
                }
              }}
            >
              Company
              <ChevronDown size={13} aria-hidden="true" />
            </button>
          </nav>
          <div className="header-actions">
            <Link href="/platforms" className="platform-link">
              Platforms
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="header-contact">
              Let’s talk
              <ArrowUpRight size={16} aria-hidden="true" />
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
        {openMenu && (
          <div className="mega-menu" id={`menu-${openMenu.toLowerCase()}`}>
            <div className="wrap mega-layout">
              <div className="mega-intro">
                <p className="eyebrow">{openMenu}</p>
                <h2>{menuIntros[openMenu].title}</h2>
                <p>{menuIntros[openMenu].text}</p>
                <Link href={menuIntros[openMenu].href} className="text-link">
                  {menuIntros[openMenu].link}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <MenuLinks name={openMenu} />
              <Link
                href={openMenu === "Products" ? "/products/adams" : "/research"}
                className="mega-feature"
              >
                <div className="mega-feature-image">
                  <Image
                    src="/images/infrastructure-aerial.webp"
                    fill
                    sizes="300px"
                    alt=""
                  />
                </div>
                <span>
                  {openMenu === "Products"
                    ? "A closer look at AdAMS"
                    : "Research that asks better questions"}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </header>
      {openMenu && <div className="nav-scrim" aria-hidden="true" />}
      <dialog
        ref={dialogRef}
        className="mobile-menu"
        aria-labelledby="mobile-nav-title"
      >
        <div className="mobile-menu-top">
          <span id="mobile-nav-title">Explore InfiniCity</span>
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
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a"))
              dialogRef.current?.close();
          }}
        >
          <Link href="/" className="mobile-main-link">
            Home
            <ArrowUpRight size={19} />
          </Link>
          <details>
            <summary>
              Products
              <ChevronDown size={20} />
            </summary>
            <Link href="/products">All products</Link>
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}>
                {p.name}
                {p.inDevelopment && <small>In development</small>}
              </Link>
            ))}
          </details>
          <details>
            <summary>
              Expertise
              <ChevronDown size={20} />
            </summary>
            <Link href="/services">Our expertise</Link>
            {expertise.map((e) => (
              <Link key={e.id} href={`/services#${e.id}`}>
                {e.title}
              </Link>
            ))}
          </details>
          <Link href="/research" className="mobile-main-link">
            Research
            <ArrowUpRight size={19} />
          </Link>
          <details>
            <summary>
              Company
              <ChevronDown size={20} />
            </summary>
            <Link href="/company">About InfiniCity</Link>
            <Link href="/team">Our people</Link>
            <Link href="/contact">Contact</Link>
          </details>
          <Link href="/platforms" className="mobile-main-link">
            Platform access
            <ArrowUpRight size={19} />
          </Link>
          <Link href="/contact" className="link-button link-button-solid">
            Let’s talk
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      </dialog>
    </>
  );
}
