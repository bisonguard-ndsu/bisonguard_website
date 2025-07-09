"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, projects } from "@/lib/constants";
import { useHash } from "@/hooks/useHash";
import { useScroll } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
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

  return (
    <nav
      className={`bg-dark-blue px-4 sm:px-6 md:px-8 lg:px-16 sticky top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto container min-h-16">
        {/* Logo - Far Left */}
        <Link href="/" className="flex items-center">
          <span className="text-white font-bold text-lg">InfiniCity Labs</span>
        </Link>

        {/* Navigation Links - Centered */}
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
                      className={`text-sm font-medium transition-colors duration-200 px-6 py-1 relative flex items-center gap-1 ${
                        isActive
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
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isProjectsOpen ? "rotate-180" : ""
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
                              className={`text-sm text-white ${
                                pathname === project.href ? "text-neon" : ""
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
                    className={`text-sm font-medium transition-colors duration-200 px-6 py-1 relative ${
                      isActive ? "text-neon" : "text-gray-300 hover:text-white"
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

        {/* Auth Buttons - Far Right */}
        <div className="flex items-center space-x-3 ml-auto">
          <Link
            href="https://appinfinicitylabs.vercel.app/auth/signin"
            target="_blank"
          >
            <Button className="border border-neon text-neon bg-transparent px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/10 focus:outline-none">
              Sign In
            </Button>
          </Link>
          <Link
            href="https://appinfinicitylabs.vercel.app/auth/signup"
            target="_blank"
          >
            <Button className="bg-neon text-dark-blue px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/90 focus:outline-none">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
