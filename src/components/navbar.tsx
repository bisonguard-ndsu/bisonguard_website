"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navItems, socialItems } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-dark-blue px-4 sm:px-6 md:px-8 lg:px-16 sticky top-0 w-full z-50 transition-all duration-300">
      <div className="flex items-center justify-between max-w-6xl mx-auto container min-h-16">
        {/* Logo - Far Left */}
        <Link href="/" className="flex items-center">
          <span className="text-white font-bold text-lg">InfiniCityLabs</span>
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
                  isActive ? "text-[#27ea9c]" : "text-gray-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <>
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-[#27ea9c]"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-[#27ea9c]"></span>
                  </>
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Social Icons - Far Right */}
        <div className="flex items-center gap-2">
          {socialItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-[#27ea9c] p-2 h-auto"
            >
              <item.icon className="w-4 h-4" />
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
