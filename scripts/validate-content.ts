import fs from 'node:fs'
import { ROUTE_INDEX, resolveProjectPath } from '../lib/content-index'

const errors: string[] = []

for (const entry of ROUTE_INDEX) {
  if (entry.contentFile) {
    const contentPath = resolveProjectPath(entry.contentFile)

    if (!fs.existsSync(contentPath)) {
      errors.push(`Missing content file: ${entry.contentFile}`)
      continue
    }

    const raw = fs.readFileSync(contentPath, 'utf8').trim()

    if (raw.length < 120) {
      errors.push(`Content file too short: ${entry.contentFile}`)
    }

    if (!raw.includes('## ')) {
      errors.push(`Content file lacks section headings: ${entry.contentFile}`)
    }
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Content validation passed.')
