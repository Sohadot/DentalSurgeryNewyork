import type { MetadataRoute } from 'next'
import { buildSitemapEntries } from '../lib/content-index'

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries()
}
