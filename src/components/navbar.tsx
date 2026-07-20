"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, projects } from "@/lib/constants";
import { useHash } from "@/hooks/useHash";
import { useScroll, motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const currentHash = useHash(); // Get the current hash from our custom hook
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll(latest: number) {
      setHasScrolled(latest > 10);
    }
    scrollY.on("change", handleScroll);
    return () => scrollY.clearListeners();
  }, [scrollY]);

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

  // Mobile Services Dropdown Component
  const MobileServicesDropdown = () => {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
          className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-none transition-all duration-200"
        >
          <span>Services</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""
              }`}
          />
        </button>

        {isMobileServicesOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 space-y-1"
          >
            {projects.map((project) => (
              <SheetClose asChild key={project.title}>
                <Link
                  href={project.href}
                  className={`block px-3 py-2 text-sm rounded-none transition-all duration-200 ${pathname === project.href
                    ? "text-neon bg-neon/10 border-l-2 border-neon"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                    }`}
                  onClick={() => setIsMobileServicesOpen(false)}
                >
                  {project.title}
                </Link>
              </SheetClose>
            ))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <nav
      className={`bg-dark-blue px-4 sm:px-6 md:px-8 lg:px-16 sticky top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "shadow-md" : ""
        }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto container min-h-16">
        {/* Logo - Far Left */}
        <Link href="/" className="flex items-center" aria-label="InfiniCity Labs — home">
          <Image
            src="/logo-wordmark.png"
            alt="InfiniCity Labs"
            width={1108}
            height={330}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Navigation Links - Centered (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = isLinkActive(item.href, item.name);
            const isProjects = item.name === "Services";

            return (
              <div key={item.name} className="relative">
                {isProjects ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors duration-200 px-6 py-1 relative flex items-center gap-1 ${isActive
                        ? "text-neon"
                        : "text-gray-300 hover:text-white"
                        }`}
                    >
                      {isActive && (
                        <>
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-neon"></span>
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-neon"></span>
                        </>
                      )}
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Projects Dropdown */}
                    {isProjectsOpen && (
                      <div className="absolute top-full left-0 mt-0 w-64 bg-dark-blue shadow-lg py-2 z-50 rounded-none">
                        {projects.map((project) => (
                          <Link
                            key={project.title}
                            href={project.href}
                            className={`block px-4 py-2 hover:bg-gray-700 transition-colors duration-200`}
                            onClick={() => setIsProjectsOpen(false)}
                          >
                            <div
                              className={`text-sm text-white ${pathname === project.href ? "text-neon" : ""
                                }`}
                            >
                              {project.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 px-6 py-1 relative ${isActive ? "text-neon" : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {isActive && (
                      <>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-neon"></span>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-neon"></span>
                      </>
                    )}
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Auth Buttons - Far Right (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-3 ml-auto">
          <Link
            href="https://app.infinicitylabs.org"
            target="_blank"
          >
            <Button className="border border-neon text-neon bg-transparent px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/10 focus:outline-none">
              Sign In
            </Button>
          </Link>
          <Link href="/#contact">
            <Button className="bg-neon text-dark-blue px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/90 focus:outline-none">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button - Far Right */}
        <div className="flex md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="border border-neon text-neon bg-transparent px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/10 focus:outline-none flex items-center gap-2"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="p-0 w-[90vw] max-w-sm bg-dark-blue border-l-0"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col h-full"
              >
                {/* Header with close button */}
                <div className="flex items-center justify-end p-4 border-b border-gray-700">
                  {/* <h2 className="text-white font-semibold text-lg">Menu</h2> */}
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-700"
                    >
                      <X className="h-4 w-4 text-white" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col p-4 space-y-1">
                    {navItems.map((item) => {
                      const isActive = isLinkActive(item.href, item.name);
                      const isServices = item.name === "Services";

                      return (
                        <div key={item.name}>
                          {isServices ? (
                            <MobileServicesDropdown />
                          ) : (
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className={`block px-3 py-2.5 text-sm font-medium rounded-none transition-all duration-200 ${isActive
                                  ? "text-neon bg-neon/10 border-l-2 border-neon"
                                  : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                                  }`}
                              >
                                {item.name}
                              </Link>
                            </SheetClose>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Auth Buttons */}
                <div className="p-4 border-t border-gray-700 space-y-3 flex flex-col gap-1">
                  <SheetClose asChild>
                    <Link
                      href="https://app.infinicitylabs.org"
                      target="_blank"
                    >
                      <Button className="border border-neon text-neon bg-transparent w-full py-2.5 rounded-none font-medium transition-colors duration-200 hover:bg-neon/10 focus:outline-none">
                        Sign In
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#contact">
                      <Button className="bg-neon text-dark-blue w-full py-2.5 rounded-none font-medium transition-colors duration-200 hover:bg-neon/90 focus:outline-none">
                        Get Started
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
