"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { nav, type NavItem, type NavPanel } from "@/content/nav";
import { apps } from "@/content/apps";
import { cn } from "@/lib/utils";

const OPEN_DELAY = 80;
const CLOSE_GRACE = 200;

/* ------------------------------------------------------------------------ */
/* Desktop                                                                   */
/* ------------------------------------------------------------------------ */

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLElement | null>>({});
  const scrollAtOpen = useRef(0);

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const close = useCallback((returnFocusTo?: string) => {
    clearTimers();
    setOpen(null);
    if (returnFocusTo) triggerRefs.current[returnFocusTo]?.focus();
  }, []);

  // Close on navigation.
  useEffect(() => {
    clearTimers();
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close after the page scrolls a little — the panel shouldn't follow you down the page.
  useEffect(() => {
    if (!open) return;
    scrollAtOpen.current = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - scrollAtOpen.current) > 80) close();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, close]);

  useEffect(() => () => clearTimers(), []);

  // ArrowDown on a trigger: move focus to the panel's first link once it has rendered.
  const focusPanel = useRef<string | null>(null);
  useEffect(() => {
    if (open && focusPanel.current === open) {
      document.querySelector<HTMLElement>(`#panel-${open} a`)?.focus();
    }
    focusPanel.current = null;
  }, [open]);

  // Hover intent: open after a short delay (instant when switching), close after a grace period.
  const hoverOpen = (id: string, e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    clearTimers();
    if (open) setOpen(id);
    else openTimer.current = setTimeout(() => setOpen(id), OPEN_DELAY);
  };
  const hoverLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), CLOSE_GRACE);
  };
  const hoverStay = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const topIds = [...nav.map((n) => n.id)];

  const moveTrigger = (fromId: string, dir: 1 | -1) => {
    const i = topIds.indexOf(fromId);
    const next = topIds[(i + dir + topIds.length) % topIds.length];
    triggerRefs.current[next]?.focus();
    if (open) {
      const item = nav.find((n) => n.id === next);
      setOpen(item?.panel ? next : null);
    }
  };

  const onTriggerKey = (item: NavItem, e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      moveTrigger(item.id, 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveTrigger(item.id, -1);
    } else if (e.key === "ArrowDown" && item.panel) {
      e.preventDefault();
      focusPanel.current = item.id;
      if (open === item.id) document.querySelector<HTMLElement>(`#panel-${item.id} a`)?.focus();
      else setOpen(item.id);
    } else if (e.key === "Escape") {
      close(item.id);
    }
  };

  const isActive = (item: NavItem) => pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <header
        className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/90"
        onPointerLeave={hoverLeave}
        onPointerEnter={hoverStay}
        onKeyDown={(e) => {
          if (e.key === "Escape" && open) {
            const id = open;
            close(id);
          }
        }}
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label="InfiniCity Labs — home" className="shrink-0 py-2" onPointerEnter={hoverLeave}>
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden h-full lg:block">
            <ul className="flex h-full items-stretch">
              {nav.map((item) => (
                <li
                  key={item.id}
                  className="flex"
                  onBlur={(e) => {
                    // Focus left this item and its panel → close it.
                    if (open === item.id && !e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpen((cur) => (cur === item.id ? null : cur));
                    }
                  }}
                >
                  {item.panel ? (
                    <>
                      <button
                        ref={(el) => {
                          triggerRefs.current[item.id] = el;
                        }}
                        type="button"
                        aria-expanded={open === item.id}
                        aria-controls={`panel-${item.id}`}
                        onPointerEnter={(e) => hoverOpen(item.id, e)}
                        onClick={() => {
                          clearTimers();
                          setOpen((cur) => (cur === item.id ? null : item.id));
                        }}
                        onKeyDown={(e) => onTriggerKey(item, e)}
                        className={cn(
                          "relative flex cursor-pointer items-center gap-1.5 px-3.5 text-[0.9375rem] font-semibold transition-colors xl:px-4",
                          open === item.id || isActive(item) ? "text-ink" : "text-ink-2 hover:text-ink",
                        )}
                      >
                        {item.label}
                        <Chevron open={open === item.id} />
                        <span
                          aria-hidden
                          className={cn(
                            "absolute inset-x-3.5 bottom-0 h-[2px] origin-left bg-guide transition-transform duration-200 xl:inset-x-4",
                            open === item.id || isActive(item) ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </button>
                      {open === item.id && <MegaPanel id={item.id} label={item.label} panel={item.panel} onNavigate={() => close()} />}
                    </>
                  ) : (
                    <Link
                      ref={(el) => {
                        triggerRefs.current[item.id] = el;
                      }}
                      href={item.href}
                      onPointerEnter={hoverLeave}
                      onKeyDown={(e) => onTriggerKey(item, e)}
                      aria-current={isActive(item) ? "page" : undefined}
                      className={cn(
                        "relative flex items-center px-3.5 text-[0.9375rem] font-semibold transition-colors xl:px-4",
                        isActive(item) ? "text-ink" : "text-ink-2 hover:text-ink",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-3.5 bottom-0 h-[2px] bg-guide xl:inset-x-4",
                          isActive(item) ? "block" : "hidden",
                        )}
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <SignInMenu
              open={open === "signin"}
              onToggle={() => setOpen((cur) => (cur === "signin" ? null : "signin"))}
              onClose={() => setOpen(null)}
              onPointerEnter={hoverLeave}
            />
            <Link href="/contact" className="btn btn-primary min-h-11" onPointerEnter={hoverLeave}>
              Contact us
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/contact" className="btn btn-primary min-h-11 px-4 text-sm">
              Contact
            </Link>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
              className="btn btn-secondary min-h-11 px-4 text-sm"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Scrim under an open panel */}
      {open && open !== "signin" && (
        <div
          aria-hidden
          className="anim-panel fixed inset-x-0 top-[4.5rem] bottom-0 z-40 hidden bg-ink/20 lg:block"
          onClick={() => close()}
        />
      )}

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={cn("h-3 w-3 transition-transform duration-200", open && "rotate-180")}
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/* ------------------------------------------------------------------------ */
/* Mega panel                                                                */
/* ------------------------------------------------------------------------ */

function MegaPanel({
  id,
  label,
  panel,
  onNavigate,
}: {
  id: string;
  label: string;
  panel: NavPanel;
  onNavigate: () => void;
}) {
  const multiGroup = panel.groups.length > 1;
  return (
    <div
      id={`panel-${id}`}
      role="region"
      aria-label={label}
      className="absolute inset-x-0 top-full border-b border-rule bg-paper shadow-[0_24px_48px_-24px_rgba(17,19,17,0.25)]"
    >
      {/* Only the contents fade, so switching panels never shows the page through. */}
      <div className="anim-panel wrap grid grid-cols-12 gap-10 py-10 xl:py-12">
        {/* Intro */}
        <div className="col-span-3 flex flex-col">
          <p className="label text-ink-3">{label}</p>
          <p className="mt-4 max-w-[30ch] text-[1.0625rem] leading-snug text-ink">{panel.intro}</p>
          <Link
            href={panel.all.href}
            onClick={onNavigate}
            className="group mt-6 inline-flex items-center gap-2 self-start text-[0.9375rem] font-semibold text-guide"
          >
            <span className="link">{panel.all.label}</span>
            <span className="arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className={cn("col-span-5", multiGroup && "grid grid-cols-2 gap-x-8 gap-y-6")}>
          {panel.groups.map((group, gi) => (
            <div key={gi}>
              {group.heading && <p className="label mb-2 text-ink-3">{group.heading}</p>}
              <ul className="border-t border-rule">
                {group.links.map((l, li) => (
                  <li key={l.href} className="border-b border-rule">
                    <Link
                      href={l.href}
                      onClick={onNavigate}
                      className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-3.5 transition-colors hover:bg-stone focus-visible:bg-stone"
                    >
                      {!multiGroup && (
                        <span className="label w-6 text-ink-3" aria-hidden>
                          {String(li + 1).padStart(2, "0")}
                        </span>
                      )}
                      <span className={cn(multiGroup && "col-span-2")}>
                        <span className="block text-[1rem] font-bold text-ink group-hover:text-guide">{l.label}</span>
                        {l.description && (
                          <span className="mt-0.5 block text-[0.875rem] leading-snug text-ink-2">{l.description}</span>
                        )}
                      </span>
                      {l.status ? (
                        <span className="status pr-2 text-guide">{l.status}</span>
                      ) : (
                        <span className="arrow pr-2 text-ink-3" aria-hidden>
                          →
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature */}
        <div className="col-span-4">
          <Link href={panel.feature.href} onClick={onNavigate} className="group block bg-stone">
            {panel.feature.image ? (
              <div className="frame-zoom relative aspect-[16/9] overflow-hidden bg-ink">
                <Image
                  src={panel.feature.image.src}
                  alt={panel.feature.image.alt}
                  fill
                  sizes="(min-width: 1280px) 400px, 30vw"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <div className="flex aspect-[16/9] items-end bg-ink p-5">
                <span aria-hidden className="flex items-end gap-1.5">
                  <span className="h-5 w-3 bg-[#3fbf8a]" />
                  <span className="h-8 w-3 bg-[#3fbf8a]" />
                  <span className="h-11 w-3 bg-[#3fbf8a]" />
                </span>
              </div>
            )}
            <div className="p-5">
              <p className="label text-ink-3">{panel.feature.eyebrow}</p>
              <p className="mt-2 text-[1.0625rem] leading-snug font-bold text-ink">
                {panel.feature.title} <span className="arrow text-guide" aria-hidden>→</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Sign-in menu                                                              */
/* ------------------------------------------------------------------------ */

function SignInMenu({
  open,
  onToggle,
  onClose,
  onPointerEnter,
}: {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onPointerEnter: (e: React.PointerEvent) => void;
}) {
  const id = useId();
  const btn = useRef<HTMLButtonElement>(null);
  const focusFirst = useRef(false);
  useEffect(() => {
    if (open && focusFirst.current) document.getElementById(id)?.querySelector<HTMLElement>("a")?.focus();
    focusFirst.current = false;
  }, [open, id]);
  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (open && !e.currentTarget.contains(e.relatedTarget as Node)) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          onClose();
          btn.current?.focus();
        }
      }}
    >
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        onPointerEnter={onPointerEnter}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            focusFirst.current = true;
            if (open) document.getElementById(id)?.querySelector<HTMLElement>("a")?.focus();
            else onToggle();
          }
        }}
        className="flex min-h-11 cursor-pointer items-center gap-1.5 px-3 text-[0.9375rem] font-semibold text-ink-2 transition-colors hover:text-ink"
      >
        Sign in
        <Chevron open={open} />
      </button>
      {open && (
        <div
          id={id}
          className="anim-panel absolute top-[calc(100%+0.75rem)] right-0 w-72 border border-rule bg-paper p-2 shadow-[0_16px_40px_-16px_rgba(17,19,17,0.3)]"
        >
          <p className="label px-3 pt-2 pb-3 text-ink-3">Sign in to</p>
          <ul>
            {apps.map((app) => (
              <li key={app.key}>
                {app.url ? (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="group flex items-center justify-between px-3 py-2.5 text-[0.9375rem] font-semibold text-ink hover:bg-stone focus-visible:bg-stone"
                  >
                    {app.name}
                    <span aria-hidden className="text-ink-3 group-hover:text-guide">
                      ↗
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="flex items-center justify-between px-3 py-2.5 text-[0.9375rem] font-semibold text-ink-3">
                    {app.name}
                    <span className="text-xs font-normal">{app.note}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Mobile menu                                                               */
/* ------------------------------------------------------------------------ */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [section, setSection] = useState<string | null>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // The dialog is committed before effects run, so focus can move now.
    dialog.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = prev;
      lastFocus.current?.focus();
    };
  }, [open]);

  // Close if the viewport grows into the desktop layout.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && onClose();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open, onClose]);

  if (!open) return null;

  const trap = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return onClose();
    if (e.key !== "Tab" || !dialog.current) return;
    const items = dialog.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      id="mobile-menu"
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onKeyDown={trap}
      className="anim-panel fixed inset-0 z-[60] flex flex-col bg-paper lg:hidden"
    >
      <div className="wrap flex h-[4.5rem] shrink-0 items-center justify-between border-b border-rule">
        <Link href="/" onClick={onClose} aria-label="InfiniCity Labs — home">
          <Logo />
        </Link>
        <button type="button" onClick={onClose} className="btn btn-secondary min-h-11 px-4 text-sm">
          Close
        </button>
      </div>

      <nav aria-label="Main" className="wrap flex-1 overflow-y-auto overscroll-contain py-2">
        <ul>
          {nav.map((item) => (
            <li key={item.id} className="border-b border-rule">
              {item.panel ? (
                <>
                  <button
                    type="button"
                    aria-expanded={section === item.id}
                    aria-controls={`m-${item.id}`}
                    onClick={() => setSection((s) => (s === item.id ? null : item.id))}
                    className="flex min-h-14 w-full cursor-pointer items-center justify-between text-left text-[1.25rem] font-bold"
                  >
                    {item.label}
                    <Chevron open={section === item.id} />
                  </button>
                  {section === item.id && (
                    <div id={`m-${item.id}`} className="pb-4">
                      {item.panel.groups.map((g, gi) => (
                        <div key={gi} className={cn(gi > 0 && "mt-3")}>
                          {g.heading && <p className="label mb-1 text-ink-3">{g.heading}</p>}
                          <ul>
                            {g.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} onClick={onClose} className="flex min-h-12 flex-col justify-center py-2">
                                  <span className="flex items-center gap-3 font-semibold text-ink">
                                    {l.label}
                                    {l.status && <span className="status text-guide">{l.status}</span>}
                                  </span>
                                  {l.description && <span className="text-sm leading-snug text-ink-2">{l.description}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link href={item.panel.all.href} onClick={onClose} className="mt-2 flex min-h-12 items-center font-semibold text-guide">
                        {item.panel.all.label} →
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={onClose} className="flex min-h-14 items-center text-[1.25rem] font-bold">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="border-b border-rule">
            <button
              type="button"
              aria-expanded={section === "signin"}
              aria-controls="m-signin"
              onClick={() => setSection((s) => (s === "signin" ? null : "signin"))}
              className="flex min-h-14 w-full cursor-pointer items-center justify-between text-left text-[1.25rem] font-bold"
            >
              Sign in
              <Chevron open={section === "signin"} />
            </button>
            {section === "signin" && (
              <ul id="m-signin" className="pb-4">
                {apps.map((app) => (
                  <li key={app.key}>
                    {app.url ? (
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-12 items-center justify-between font-semibold"
                      >
                        {app.name} <span aria-hidden>↗</span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <span className="flex min-h-12 items-center justify-between text-ink-3">
                        {app.name} <span className="text-sm">{app.note}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="wrap shrink-0 border-t border-rule py-4">
        <Link href="/contact" onClick={onClose} className="btn btn-primary w-full">
          Contact us
        </Link>
      </div>
    </div>
  );
}
