import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/products",
    "/services",
    "/research",
    "/company",
    "/team",
    "/contact",
    "/platforms",
    "/privacy",
  ];
  return [
    ...paths.map((path) => ({
      url: siteUrl + path,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: siteUrl + "/products/" + product.slug,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
