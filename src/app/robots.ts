import { MetadataRoute } from "next";

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "*",
    },
    sitemap: "https://json4u.com/sitemap.xml",
  };
}
