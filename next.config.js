/** @type {import('next').NextConfig} */
/*
module.exports = {
  reactStrictMode: true,
}
*/


const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: '' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: "default-src * 'unsafe-inline' 'unsafe-eval' blob:; img-src * data: blob:; frame-src *; font-src * data:" }

]

const config = {
  webpack5: true,
  reactStrictMode: false,
  poweredByHeader: false,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000,
    API_URL: "https://app-metrogas-middleware-qa.azurewebsites.net/api"
},  
  async headers() {
    return [
      { 
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(config)