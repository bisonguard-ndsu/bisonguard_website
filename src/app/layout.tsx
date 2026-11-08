import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./experience.css";
import "./destinations.css";
import "./home.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ConsentManager } from "@/components/site/consent";
import { siteUrl } from "@/lib/metadata";
import { MotionRuntime } from "@/components/site/motion";

const sans = localFont({
  src: [
    {
      path: "./fonts/instrument-sans-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/instrument-sans-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/instrument-sans-semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

const editorial = localFont({
  src: "./fonts/instrument-serif-italic.ttf",
  variable: "--font-hero-serif",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InfiniCity Labs — Infrastructure, mobility & applied AI",
    template: "%s | InfiniCity Labs",
  },
  description:
    "Applied AI, infrastructure intelligence, and mobility technology. Explore AdAMS, Turnflow, RoadLogger, and the work behind InfiniCity Labs.",
  openGraph: { type: "website", locale: "en_US", siteName: "InfiniCity Labs" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#12151b",
  colorScheme: "dark",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InfiniCity Labs",
  url: siteUrl,
  logo: siteUrl + "/icon.svg",
  email: "info@infinicitylabs.org",
  description:
    "Applied AI, infrastructure intelligence, and mobility technology.",
  sameAs: [
    "https://www.linkedin.com/company/infinicity-labs/",
    "https://github.com/InfiniCityLabs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${editorial.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ConsentManager />
        <MotionRuntime />
      </body>
    </html>
  );
}
