import type { Metadata, Viewport } from "next";
import { Overpass, Overpass_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CookieConsent from "@/components/cookie-consent";
import { site } from "@/content/site";

const overpass = Overpass({ subsets: ["latin"], variable: "--font-overpass", display: "swap" });
const overpassMono = Overpass_Mono({ subsets: ["latin"], variable: "--font-overpass-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "InfiniCity Labs — Computer vision for road agencies and engineers",
    template: "%s · InfiniCity Labs",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "InfiniCity Labs" }],
  },
  twitter: { card: "summary_large_image", creator: "@InfiniCityLabs" },
  icons: { icon: "/icon.svg", apple: "/icon.png" },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.png`,
  description: site.description,
  email: site.email,
  sameAs: site.social.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${overpass.variable} ${overpassMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
