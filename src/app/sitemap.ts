import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  // Dynamic project case-study routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date("2026-10-17"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Dynamic insight article routes
  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date("2026-10-17"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
