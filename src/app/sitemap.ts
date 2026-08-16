import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/about", "/contact", "/services", "/privacy", "/terms"];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route || "/"}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${site.url}${service.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
