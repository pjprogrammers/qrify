import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const siteLastModified = new Date();

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/generate`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/generate/qr`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/generate/barcode`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/generate/contact`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/generate/phone`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/generate/wifi`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/generate/email`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/generate/sms`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/generate/location`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/generate/event`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/generate/whatsapp`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/scan`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/scan/qr`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/scan/barcode`,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}

export function buildSitemapXml(): string {
  const entries = getSitemapEntries();
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${(entry.lastModified as Date).toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
