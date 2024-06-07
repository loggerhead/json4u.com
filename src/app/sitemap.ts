import { MetadataRoute } from "next";

// TODO: https://next-intl-docs.vercel.app/docs/environments/metadata-route-handlers
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://json4u.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      alternates: {
        languages: {
          en: "https://json4u.com/en",
          zh: "https://json4u.com/zh",
        },
      },
    },
    {
      url: "https://json4u.com/editor",
      lastModified: new Date(),
      changeFrequency: "weekly",
      alternates: {
        languages: {
          en: "https://json4u.com/en/editor",
          zh: "https://json4u.com/zh/editor",
        },
      },
    },
  ];
}
