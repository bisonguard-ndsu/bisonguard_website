"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navItems, projects } from "@/lib/constants";
import { useHash } from "@/hooks/useHash";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Hairline that sits on the navbar's bottom edge — draws in on hover, stays
 * put (and thickens) when the link points at the current page. Defined at
 * module scope so it isn't torn down and rebuilt on every navbar re-render.
 */
function Indicator({ isActive }: { isActive: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-3 bottom-0 origin-left bg-neon transition-transform duration-300 ease-out ${
        isActive
          ? "h-[2px] scale-x-100"
          : "h-px scale-x-0 group-hover/nav:scale-x-100"
      }`}
    />
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const currentHash = useHash(); // Get the current hash from our custom hook
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleScroll(latest: number) {
      setHasScrolled(latest > 10);
    }
    // Seed the state so a refresh mid-page doesn't render the top-of-page bar.
    handleScroll(scrollY.get());
    const unsub = scrollY.on("change", handleScroll);
    return () => unsub();
  }, [scrollY]);

  // Never leave the dropdown hanging open across a navigation.
  useEffect(() => {
    setIsProjectsOpen(false);
  }, [pathname, currentHash]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  const openProjects = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsProjectsOpen(true);
  };

  // Small grace period so brushing past the gap between trigger and panel
  // doesn't make the menu flicker shut.
  const closeProjects = (delay = 160) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsProjectsOpen(false), delay);
  };

  const isLinkActive = (href: string, name?: string) => {
    // 1. Handle "Projects" special case
    if (name === "Services") {
      if (projects.map((project) => project.href).includes(pathname)) {
        return true;
      }
    }

    // 2. Handle hash links (e.g., "/#team", "/#contact")
    if (href.includes("#")) {
      // Split the href into path and hash parts
      const [linkPath, linkHash] = href.split("#");

      // Check if the current pathname matches the link's path
      // AND if the current browser hash matches the link's hash
      // Important: Ensure linkPath is explicitly checked against '/' if the hash link is for the home page.
      const pathMatches =
        linkPath === pathname || (linkPath === "" && pathname === "/");

      return pathMatches && currentHash === `#${linkHash}`;
    }

    // 3. Handle the "Home" link without a hash
    // This ensures that "/" is only active when there's no hash present
    if (href === "/") {
      return pathname === "/" && currentHash === ""; // `currentHash` will be '' if no hash
    }

    // 4. Default case: Check if pathname exactly matches href for regular links
    return pathname === href;
  };

  return (
    <nav
      aria-label="Main"
      className={`sticky top-0 z-50 w-full section-x transition-colors duration-300 ${
        hasScrolled
          ? "bg-navy-950/85 backdrop-blur-xl border-b border-navy-600/60"
          : "bg-navy-950 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-stretch justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] lg:gap-6">
        {/* Logo — far left */}
        <div className="flex items-center justify-self-start">
          <Link
            href="/"
            className="flex items-center"
            aria-label="InfiniCity Labs — home"
          >
            <Image
              src="/logo-wordmark.png"
              alt="InfiniCity Labs"
              width={1108}
              height={330}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </Link>
        </div>

        {/* Navigation links — centered (hidden on mobile) */}
        <div className="hidden items-stretch justify-self-center md:flex">
          {navItems.map((item) => {
            const isActive = isLinkActive(item.href, item.name);
            const isProjects = item.name === "Services";

            if (isProjects) {
              return (
                <div
                  key={item.name}
                  className="relative flex items-stretch"
                  onMouseEnter={openProjects}
                  onMouseLeave={() => closeProjects()}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isProjectsOpen}
                    onClick={() =>
                      isProjectsOpen ? closeProjects(0) : openProjects()
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Escape") closeProjects(0);
                    }}
                    className={`group/nav relative flex items-center gap-1.5 px-3 text-sm font-medium transition-colors duration-300 lg:px-4 ${
                      isActive
                        ? "text-white"
                        : "text-bluish-white/70 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        isProjectsOpen ? "rotate-180 text-neon" : ""
                      }`}
                    />
                    <Indicator isActive={isActive} />
                  </button>

                  {/* Services dropdown */}
                  <AnimatePresence>
                    {isProjectsOpen && (
                      <motion.div
                        // `x: "-50%"` centres the panel on the trigger from
                        // inside the same transform framer-motion owns —
                        // a `-translate-x-1/2` class would be overwritten.
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 6, x: "-50%" }}
                        transition={{
                          duration: 0.24,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute left-1/2 top-full z-50 w-[24rem] max-w-[calc(100vw-3rem)] lg:w-[28rem]"
                      >
                        <div className="relative mt-px border border-navy-600 bg-navy-950/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-neon/70 via-neon/20 to-transparent"
                          />
                          {projects.map((project) => {
                            const isCurrent = pathname === project.href;

                            return (
                              <Link
                                key={project.title}
                                href={project.href}
                                onClick={() => closeProjects(0)}
                                className={`group/item relative block border-l-2 px-4 py-3.5 transition-colors duration-300 ${
                                  isCurrent
                                    ? "border-neon bg-neon/5"
                                    : "border-transparent hover:border-neon/60 hover:bg-white/[0.04]"
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <span
                                    className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
                                      isCurrent
                                        ? "text-neon"
                                        : "text-white group-hover/item:text-neon"
                                    }`}
                                  >
                                    {project.title}
                                  </span>
                                  <ArrowUpRight
                                    aria-hidden="true"
                                    className="mt-0.5 h-4 w-4 shrink-0 text-bluish-white/30 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-neon"
                                  />
                                </div>
                                <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-bluish-white/55">
                                  {project.description}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group/nav relative flex items-center px-3 text-sm font-medium transition-colors duration-300 lg:px-4 ${
                  isActive
                    ? "text-white"
                    : "text-bluish-white/70 hover:text-white"
                }`}
              >
                {item.name}
                <Indicator isActive={isActive} />
              </Link>
            );
          })}
        </div>

        {/* Auth buttons — far right (hidden on mobile) */}
        <div className="hidden items-center gap-2 justify-self-end md:flex">
          <Link
            href="https://app.infinicitylabs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-9 rounded-none border border-navy-600 bg-transparent px-4 text-[0.8125rem] font-medium text-bluish-white transition-all duration-300 hover:border-neon hover:bg-neon/5 hover:text-neon">
              Sign In
            </Button>
          </Link>
          <Link href="/#contact">
            <Button className="h-9 rounded-none bg-neon px-5 text-[0.8125rem] font-semibold text-navy-950 transition-all duration-300 hover:bg-neon-bright">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button — far right */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="h-9 items-center gap-2 rounded-none border border-navy-600 bg-transparent px-3.5 text-[0.8125rem] font-medium text-bluish-white transition-all duration-300 hover:border-neon hover:bg-neon/5 hover:text-neon"
                aria-label="Open menu"
              >
                <Menu aria-hidden="true" className="h-4 w-4" />
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby={undefined}
              className="w-[88vw] max-w-sm border-l border-navy-700 bg-navy-950 p-0 gap-0 [&>button]:hidden"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>

              <div className="flex h-full flex-col">
                {/* Header with close button */}
                <div className="flex items-center justify-between border-b border-navy-700 px-5 h-16 shrink-0">
                  <Image
                    src="/logo-wordmark.png"
                    alt="InfiniCity Labs"
                    width={1108}
                    height={330}
                    className="h-6 w-auto"
                  />
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      aria-label="Close menu"
                      className="h-9 w-9 rounded-none p-0 text-bluish-white transition-colors duration-300 hover:bg-white/5 hover:text-neon"
                    >
                      <X aria-hidden="true" className="h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col px-5 py-6">
                    {navItems.map((item) => {
                      const isActive = isLinkActive(item.href, item.name);
                      const isServices = item.name === "Services";

                      if (isServices) {
                        return (
                          <div
                            key={item.name}
                            className="border-b border-navy-800/80"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setIsMobileServicesOpen(!isMobileServicesOpen)
                              }
                              aria-expanded={isMobileServicesOpen}
                              className={`flex w-full items-center justify-between py-4 text-base font-medium transition-colors duration-300 ${
                                isActive
                                  ? "text-neon"
                                  : "text-bluish-white hover:text-white"
                              }`}
                            >
                              <span>Services</span>
                              <ChevronDown
                                aria-hidden="true"
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  isMobileServicesOpen
                                    ? "rotate-180 text-neon"
                                    : "text-bluish-white/50"
                                }`}
                              />
                            </button>

                            <AnimatePresence initial={false}>
                              {isMobileServicesOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{
                                    duration: 0.28,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-px pb-4">
                                    {projects.map((project) => (
                                      <SheetClose asChild key={project.title}>
                                        <Link
                                          href={project.href}
                                          className={`border-l-2 py-2.5 pl-4 text-sm leading-snug transition-colors duration-300 ${
                                            pathname === project.href
                                              ? "border-neon bg-neon/5 text-neon"
                                              : "border-navy-700 text-bluish-white/65 hover:border-neon/60 hover:text-white"
                                          }`}
                                          onClick={() =>
                                            setIsMobileServicesOpen(false)
                                          }
                                        >
                                          {project.title}
                                        </Link>
                                      </SheetClose>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.name}
                          className="border-b border-navy-800/80"
                        >
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={`flex items-center justify-between py-4 text-base font-medium transition-colors duration-300 ${
                                isActive
                                  ? "text-neon"
                                  : "text-bluish-white hover:text-white"
                              }`}
                            >
                              {item.name}
                              {isActive && (
                                <span
                                  aria-hidden="true"
                                  className="h-1.5 w-1.5 bg-neon"
                                />
                              )}
                            </Link>
                          </SheetClose>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex shrink-0 flex-col gap-3 border-t border-navy-700 px-5 py-6">
                  <SheetClose asChild>
                    <Link
                      href="https://app.infinicitylabs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="h-11 w-full rounded-none border border-navy-600 bg-transparent text-sm font-medium text-bluish-white transition-all duration-300 hover:border-neon hover:bg-neon/5 hover:text-neon">
                        Sign In
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#contact">
                      <Button className="h-11 w-full rounded-none bg-neon text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-neon-bright">
                        Get Started
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
