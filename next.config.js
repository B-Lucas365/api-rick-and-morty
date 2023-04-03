/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  pageExtensions: ["pages/characters/style", "pages/episodes/style", "pages/favorites/styled", "pages/style"]
}

module.exports = nextConfig