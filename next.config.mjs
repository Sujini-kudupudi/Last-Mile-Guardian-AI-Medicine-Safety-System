/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // 🔥 REQUIRED for GitHub Pages

  basePath: "/Last-Mile-Guardian-AI-Medicine-Safety-System",
  assetPrefix: "/Last-Mile-Guardian-AI-Medicine-Safety-System/",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig