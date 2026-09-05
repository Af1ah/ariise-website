import type { MetadataRoute } from "next";

const siteUrl = "https://ariiseglobal.com";
const lastModified = new Date("2026-09-05T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/aims`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
