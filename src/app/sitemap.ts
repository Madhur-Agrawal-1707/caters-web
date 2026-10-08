import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { events } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.url;
  const staticRoutes = [
    "",
    "/about",
    "/catering",
    "/menu",
    "/events",
    "/gallery",
    "/locations",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const eventRoutes = events.map((event) => ({
    url: `${base}/events/${event.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...eventRoutes];
}
