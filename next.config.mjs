/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'teaposgecjvklykdadhd.supabase.co',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
