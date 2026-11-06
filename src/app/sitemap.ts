import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { solutions } from "@/content/solutions";
import { resources } from "@/content/resources";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/products",
    "/solutions",
    "/technology",
    "/services",
    "/resources",
    "/research",
    "/company",
    "/team",
    "/careers",
    "/contact",
    "/book-a-demo",
    "/platforms",
    "/privacy",
    ...products.map((p) => "/products/" + p.slug),
    ...solutions.map((s) => "/solutions/" + s.slug),
    ...resources.map((r) => "/resources/" + r.slug),
  ];
  return paths.map((path) => ({
    url: siteUrl + path,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/products/") ? 0.8 : 0.7,
  }));
}
