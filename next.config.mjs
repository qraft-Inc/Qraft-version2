import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true, images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: 'assets.website-files.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'pbs.twimg.com' },
      { hostname: 'framerusercontent.com' },
      { hostname: 'tailwindui.com' },
    ],
  },
  experimental: {},
  // Retired consumer (B2C) routes and legacy pillars from the 2-offer institutional repositioning
  redirects() {
    return [
      { source: "/for-individuals", destination: "/", permanent: true },
      { source: "/apprenticeship/:path*", destination: "/", permanent: true },
      { source: "/student/:path*", destination: "/", permanent: true },
      { source: "/students/:path*", destination: "/", permanent: true },
      { source: "/courses/:path*", destination: "/", permanent: true },
      { source: "/community", destination: "/", permanent: true },
      { source: "/for-organizations", destination: "/#solutions", permanent: true },
      { source: "/solutions/coursemasters", destination: "/#coursemasters", permanent: true },
      { source: "/talentmasters", destination: "/solutions/talentmasters", permanent: true },
      { source: "/solutions", destination: "/#solutions", permanent: true },
      { source: "/SystemMasters/:path*", destination: "/", permanent: true },
      { source: "/systemmasters/:path*", destination: "/", permanent: true },
      { source: "/capitalmasters", destination: "/", permanent: true },
      { source: "/freelance-business-accelerator", destination: "/solutions/talentmasters", permanent: true },
      { source: "/on-site-classes", destination: "/solutions/talentmasters", permanent: true },
      { source: "/chariot-leadership-institute", destination: "/solutions/talentmasters", permanent: true },
      { source: "/modern-work-fund", destination: "/future-of-work-forum", permanent: true },
      { source: "/spaces", destination: "/contact", permanent: true },
      { source: "/rfp", destination: "/#rfp", permanent: true },
    ]
  },
  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})

export default config
