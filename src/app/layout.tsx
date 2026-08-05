import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import CookieConsent from "@/components/cookie-consent";

// One family across the site. Headings lean on weight and tight optical
// tracking for hierarchy rather than a second face.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://infinicitylabs.org"),
  title: "InfiniCity Labs | AI-Powered Smart Infrastructure",
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
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
