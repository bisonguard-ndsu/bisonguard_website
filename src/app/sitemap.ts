import type { MetadataRoute } from "next";
import { productPages } from "@/content/product-pages";
import { site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { projects } from "@/content/work";

const pages = [
  "",
  "/products",
  ...productPages.map((p) => `/products/${p.slug}`),
  "/solutions",
  ...solutions.map((s) => `/solutions/${s.slug}`),
  "/work",
  ...projects.map((p) => `/work/${p.slug}`),
  "/research",
  "/company",
  "/company/team",
  "/company/careers",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") ? 0.9 : path.startsWith("/solutions") ? 0.8 : 0.5,
  }));
}
