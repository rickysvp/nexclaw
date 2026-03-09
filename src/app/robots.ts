import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/*",
          "/api/*",
          "/_next/*",
          "/private/*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/dashboard",
          "/api",
        ],
      },
    ],
    sitemap: "https://clawwallet.com/sitemap.xml",
    host: "https://clawwallet.com",
  };
}
