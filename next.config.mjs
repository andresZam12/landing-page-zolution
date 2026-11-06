/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Lets `next dev` serve the app when it's opened from another device on the
  // same network (e.g. http://192.168.x.x:3000) instead of only localhost.
  // Doesn't affect the production build/deploy.
  allowedDevOrigins: ['192.168.56.1', '192.168.*.*', '10.*.*.*'],
}

export default nextConfig
