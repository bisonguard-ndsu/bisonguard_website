import type { Metadata, Viewport } from "next";
import Script from "next/script";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CookieConsent from "@/components/cookie-consent";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "InfiniCity Labs: video analytics for road agencies",
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
  other: { "site-kind": "software", "page-type": "software" },
};

export const viewport: Viewport = { themeColor: "#0e1116", viewportFit: "cover" };

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

/* The kit's stylesheets, in the order the skill sets; site.css (the :root palette and page CSS) last. */
const styles = [
  "/assets/system.css",
  "/assets/ui/cards.css",
  "/assets/motion/motion.css",
  "/assets/backgrounds/backgrounds.css",
  "/assets/layout/layout.css",
  "/assets/icons/icon.css",
  "/assets/ui/base.css",
  "/assets/ui/window/fragment.css",
  "/assets/ui/notify/fragment.css",
  "/assets/ui/stat/fragment.css",
  "/assets/ui/checklist/fragment.css",
  "/assets/site.css",
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-type="software" data-radius="soft" data-ground="sky" data-buttons="solid" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400..700&family=JetBrains+Mono:wght@400..500&display=swap" rel="stylesheet" />
        {styles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/assets/backgrounds/backgrounds.js" />
      </head>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
        <CookieConsent />
        {/* Loaded after React hydrates, so the kit's DOM work is never undone. */}
        <Script src="/assets/system.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/motion/motion.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/layout/layout.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  );
}
