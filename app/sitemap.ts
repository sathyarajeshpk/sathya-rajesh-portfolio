import { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sathyarajeshpk.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
