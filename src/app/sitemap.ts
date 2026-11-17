import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Required so this metadata route is prerendered under `output: "export"`.
export const dynamic = "force-static";

const routes = ["/", "/services", "/about", "/how-we-work", "/contact", "/privacy-policy"];

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
