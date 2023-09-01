/** @type {import('next').NextConfig} */
const apiEndpoint = process.env["NEXT_PUBLIC_API_ENDPOINT"] || ''

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: `${apiEndpoint}/graphql`,
      },
      {
        source: '/drive/upload',
        destination: `${apiEndpoint}/drive/upload`,
      },
    ]
  },
}

module.exports = nextConfig
