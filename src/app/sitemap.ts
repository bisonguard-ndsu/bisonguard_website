import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Built pages only. Pending pages (src/content/pending.ts) join when they ship. */
const built = ["", "/products/adams", "/contact", "/privacy", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  return built.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") ? 0.9 : 0.4,
  }));
}
