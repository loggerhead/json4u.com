import NextBundleAnalyzer from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";
import createNextIntlPlugin from "next-intl/plugin";
import { fileURLToPath } from "node:url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: ["https://cdn.json4u.com/jq/1.7/jq.js", "https://cdn.json4u.com/jq/1.7/jq.wasm"],
});

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizePackageImports: [
      'react-use',
      'lodash-es',
      'lucide-react',
    ]
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": __dirname,
      };
      // can't use experiments
      // config.experiments = { asyncWebAssembly: true };
    }

    return config;
  },
};

const config = withSerwist(withNextIntl(nextConfig));
const finalConfig = process.env.ANALYZE === "true" ? withBundleAnalyzer(config) : config;
export default finalConfig;
