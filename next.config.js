/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization is left on: this deploys to Vercel as a server app
  // (the contact form is an API route), so the optimizer is available.
  poweredByHeader: false,
}

module.exports = nextConfig
