import type { Metadata } from "next";
import { JetBrains_Mono, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";
import CookieConsent from "@/components/cookie-consent";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://infinicitylabs.org"),
  title: "InfiniCity Labs | Computer vision for roads and traffic",
  description:
    "InfiniCity Labs pioneers smart infrastructure and mobility solutions through advanced big data analytics, digital twins, and intelligent systems for civil engineering",
  keywords: [
    "civil engineering",
    "AI",
    "smart cities",
    "infrastructure management",
    "mobility",
    "digital twins",
    "transportation technology",
    "pavement management",
    "intelligent systems",
  ],
  authors: [{ name: "InfiniCity Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infinicitylabs.org",
    title: "InfiniCity Labs | Engineering the Future of Smart Cities",
    description:
      "Transforming urban infrastructure with AI-driven analytics, digital twins, and intelligent mobility systems.",
    siteName: "InfiniCity Labs",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "InfiniCity Labs — Pioneering Intelligent Futures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfiniCity Labs | Engineering the Future of Smart Cities",
    description:
      "Transforming urban infrastructure with AI-driven analytics, digital twins, and intelligent mobility systems.",
    images: ["/og.png"],
    creator: "@InfiniCityLabs",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/icon.png",
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "https://infinicitylabs.org",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InfiniCity Labs",
  url: "https://infinicitylabs.org",
  logo: "https://infinicitylabs.org/icon.png",
  description:
    "Pioneering the future of infrastructure, mobility, and smart systems with cutting-edge big data analytics and digital twins.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@infinicitylabs.org",
  },
  sameAs: [
    "https://twitter.com/InfiniCityLabs",
    "https://github.com/InfiniCityLabs",
    "https://www.instagram.com/infinicitylabs/",
    "https://www.linkedin.com/company/infinicity-labs/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} ${mono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
