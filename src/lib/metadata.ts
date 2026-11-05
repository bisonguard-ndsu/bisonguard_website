import type { Metadata } from "next";

export const siteUrl = "https://infinicitylabs.org";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: path === "/" ? { absolute: `${title} | InfiniCity Labs` } : title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: `${title} | InfiniCity Labs`,
      description,
      url: `${siteUrl}${path}`,
      siteName: "InfiniCity Labs",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}
