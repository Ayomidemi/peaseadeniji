import { MetadataRoute } from "next";
import { quantProjects } from "@/app/quantData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://peaseadeniji.com";
  const updated = new Date("2026-09-30");

  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quant`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...quantProjects.map((project) => ({
      url: `${baseUrl}/quant/${project.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/blogs`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return pages;
}
