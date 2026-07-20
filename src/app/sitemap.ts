import type { MetadataRoute } from "next";
import { articles } from "./resources/articles";

const SITE = "https://integrilytics.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("", 1),
    page("/services/accounting", 0.9),
    page("/services/hr", 0.9),
    page("/services/operations", 0.9),
    page("/about", 0.7),
    page("/book", 0.8),
    page("/resources", 0.7),
    ...articles.map((a) => ({
      url: `${SITE}/resources/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    page("/privacy-policy", 0.3),
    page("/terms-and-conditions", 0.3),
  ];
}
