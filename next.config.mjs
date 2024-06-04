import NextBundleAnalyzer from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";
import createNextIntlPlugin from "next-intl/plugin";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
      // can't use experiments
      // config.experiments = { asyncWebAssembly: true };
    }

    return config;
  },
};

const i18nConfig = withNextIntl(nextConfig);
const bundleAnalyzerConfig = withBundleAnalyzer(i18nConfig);

const finalConfig = process.env.ANALYZE === "true" ? bundleAnalyzerConfig : i18nConfig;
export default finalConfig;
