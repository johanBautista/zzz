/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: '(fill|stroke)'
                  }
                }
              ]
            }
          }
        }
      ]
    })
    return config
  }
}

module.exports = nextConfig
