/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.PUBLIC_API,
  }
}

module.exports = nextConfig
