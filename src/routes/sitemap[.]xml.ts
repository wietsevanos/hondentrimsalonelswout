import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const PATHS = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/over-ons", priority: "0.8", changefreq: "monthly" as const },
  { path: "/behandelingen", priority: "0.9", changefreq: "monthly" as const },
  { path: "/specialisaties", priority: "0.9", changefreq: "monthly" as const },
  { path: "/tarieven", priority: "0.8", changefreq: "monthly" as const },
  { path: "/over-brenda", priority: "0.7", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.8", changefreq: "monthly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
