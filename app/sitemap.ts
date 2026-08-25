import type { MetadataRoute } from "next";
import { facilities } from "@/lib/data";

const BASE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/search", "/favorites"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const facilityRoutes = facilities.map((f) => ({
    url: `${BASE_URL}/facilities/${f.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...facilityRoutes];
}
