import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const ibmPlex = Barlow({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InfiniCity Labs | Engineering the Future of Smart Cities",
  description:
    "Leading innovation in civil engineering and AI. We pioneer the future of infrastructure, mobility, and smart systems with cutting-edge big data analytics and digital twins.",
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
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "InfiniCity Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfiniCity Labs | Engineering the Future of Smart Cities",
    description:
      "Transforming urban infrastructure with AI-driven analytics, digital twins, and intelligent mobility systems.",
    images: ["/favicon.png"],
    creator: "@InfiniCityLabs",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
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
  logo: "https://infinicitylabs.org/favicon.png",
  description:
    "Pioneering the future of infrastructure, mobility, and smart systems with cutting-edge big data analytics and digital twins.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-732-322-8385",
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
        className={`${ibmPlex.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
