import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "en",
});

// https://next-intl-docs.vercel.app/docs/routing/middleware#matcher-config
export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh)/:path*"],
};
