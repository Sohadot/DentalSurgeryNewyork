import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
