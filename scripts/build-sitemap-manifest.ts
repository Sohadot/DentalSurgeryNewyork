import fs from 'node:fs'
import path from 'node:path'
import { buildSitemapEntries } from '../lib/content-index'

const outputDir = path.join(process.cwd(), 'data', 'system')
const outputFile = path.join(outputDir, 'sitemap-manifest.json')

const manifest = buildSitemapEntries().map((entry) => ({
  ...entry,
  lastModified:
    entry.lastModified instanceof Date
      ? entry.lastModified.toISOString()
      : entry.lastModified,
}))

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2) + '\n', 'utf8')

console.log(`Wrote ${outputFile}`)
