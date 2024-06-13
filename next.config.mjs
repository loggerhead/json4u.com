import NextBundleAnalyzer from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
import createNextIntlPlugin from "next-intl/plugin";
import { fileURLToPath } from "node:url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
  additionalPrecacheEntries: [
    "jq/1.7/jq.js",
    "jq/1.7/jq.wasm",
  ]
});

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    typedRoutes: true,
    webVitalsAttribution: ["CLS", "LCP"],
    optimizePackageImports: ["react-use", "lodash-es", "lucide-react", "monaco-editor"],
  },
  webpack(config, { dev, isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": __dirname,
      };
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";

      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ["json"],
          features: [
            "find", // 查找
            "folding", // 折叠
            "bracketMatching", // 高亮匹配的括号
            "contextmenu", // 右键菜单
            "indentation", // 缩进
            "unusualLineTerminators", // invalid 换行符提示
            "wordHighlighter", // 高亮光标停留位置的词
          ],
          filename: "static/[name].[contenthash:8].worker.js",
        }),
      );

      // can't use experiments
      // config.experiments = { asyncWebAssembly: true };
    }

    return config;
  },
};

const config = withSerwist(withNextIntl(nextConfig));
const finalConfig = process.env.ANALYZE === "true" ? withBundleAnalyzer(config) : config;
export default finalConfig;
