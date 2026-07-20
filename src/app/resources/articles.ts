import data from "./articles.json";

export type Article = {
  slug: string;
  title: string;
  author: string;
  date: string; // ISO YYYY-MM-DD
  dateDisplay: string;
  category: string;
  excerpt: string;
  body: string; // Markdown
  image: string;
  imageAlt: string;
};

// Ported from the IntegriLytics Learning Center, newest first.
export const articles: Article[] = data as Article[];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const categories: string[] = Array.from(new Set(articles.map((a) => a.category)));

// Rough reading time from body word count (~200 wpm).
export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
