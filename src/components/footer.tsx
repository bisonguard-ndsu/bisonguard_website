import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { INFINICITY_WEB_APP_LINK, navItems, projects } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white relative overflow-hidden">
      <div className="relative z-10 py-16 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col gap-4">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <span className="text-white font-bold text-lg">
                    InfiniCity Labs
                  </span>
                </Link>
              </div>
              <p className="text-md text-gray-300 leading-relaxed">
                We provide cutting-edge transportation technology services based
                on our research expertise in big data analytics, digital twins,
                and intelligent systems to help cities optimize their
                infrastructure and improve safety.
              </p>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white bg-neon/20 hover:text-foreground hover:bg-neon w-10 h-10 rounded-full"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white bg-neon/20 hover:text-foreground hover:bg-neon w-10 h-10 rounded-full"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white bg-neon/20 hover:text-foreground hover:bg-neon w-10 h-10 rounded-full"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white bg-neon/20 hover:text-foreground hover:bg-neon w-10 h-10 rounded-full"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {navItems
                  .filter((link) => link.name !== "Projects")
                  .map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-neon transition-colors duration-200 flex items-center group"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">Our Solutions</h3>
              <ul className="space-y-3">
                {projects.map((service) => (
                  <li key={service.title}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-neon transition-colors duration-200 flex items-center group"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">info@infinicitylabs.org</p>
                    <p className="text-gray-300">research@infinicitylabs.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+1 (732) 322-8385</p>
                    <p className="text-gray-300">+233 (208) 991-953</p>
                    <p className="text-gray-300">+233 (556) 673-060</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-gray-300">USA</p>
                    </div>
                    <div>
                      <p className="text-gray-300">GHANA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-800 px-4 py-8">
          <div className="max-w-6xl mx-auto container ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Ready to Transform Your Infrastructure Systems?
                </h4>
                <p className="text-gray-300">
                  Join leading institutions and agencies who trust InfiniCity
                  Labs with their transportation technology needs.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href={"https://app.infinicitylabs.org"}
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="border border-neon text-neon bg-transparent px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/10 hover:text-neon focus:outline-none"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button className="bg-neon text-dark-blue px-5 py-1 rounded-none font-medium transition-colors duration-200 hover:bg-neon/90 focus:outline-none">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 py-6">
          <div className="max-w-6xl mx-auto container ">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} InfiniCity Labs. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
