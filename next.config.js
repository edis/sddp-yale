/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (cfg) => {
    cfg.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] }
        }
    )
    return cfg;
  },
    env: {
        SPACE: process.env.NEXT_PUBLIC_SPACE,
        TOKEN: process.env.NEXT_PUBLIC_TOKEN,
    },
}

module.exports = nextConfig
