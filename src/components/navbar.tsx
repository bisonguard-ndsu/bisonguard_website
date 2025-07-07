"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-dark-blue px-4 sm:px-6 md:px-8 lg:px-16 sticky top-0 w-full z-50 transition-all duration-300">
      <div className="flex items-center justify-between max-w-6xl mx-auto container min-h-16">
        {/* Logo - Far Left */}
        <Link href="/" className="flex items-center">
          <span className="text-white font-bold text-lg">InfiniCity Labs</span>
        </Link>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
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
            );
          })}
        </div>

        {/* Auth Buttons - Far Right */}
        <div className="flex items-center space-x-3 ml-auto">
          <Link href="/signin">
            <Button className="border border-neon text-neon bg-transparent px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/10 focus:outline-none">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-neon text-dark-blue px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/90 focus:outline-none">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
