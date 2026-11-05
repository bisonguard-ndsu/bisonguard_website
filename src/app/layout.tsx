import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ConsentManager } from "@/components/site/consent";
import { siteUrl } from "@/lib/metadata";

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

const serif = localFont({
  src: "./fonts/instrument-serif-italic.ttf",
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InfiniCity Labs — Intelligence for a world in motion",
    template: "%s | InfiniCity Labs",
  },
  description:
    "Applied AI, infrastructure intelligence, and mobility technology. Explore AdAMS, Turnflow, RoadLogger, and the work behind InfiniCity Labs.",
  openGraph: { type: "website", locale: "en_US", siteName: "InfiniCity Labs" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#12171b",
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
    <html
      lang="en"
      className={sans.variable + " " + serif.variable}
      data-scroll-behavior="smooth"
    >
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
      </body>
    </html>
  );
}
