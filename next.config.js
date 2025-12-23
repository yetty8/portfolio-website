/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Remove experimental settings that conflict with Turbopack
  compiler: {
    styledComponents: true,
  },
  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
}

// Only enable optimizePackageImports in production
if (process.env.NODE_ENV === 'production') {
  nextConfig.experimental = {
    optimizePackageImports: ['next-themes'],
  };
}

module.exports = nextConfig;