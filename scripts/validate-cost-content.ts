import fs from 'node:fs'
import { ROUTE_INDEX, resolveProjectPath } from '../lib/content-index'

const errors: string[] = []

const costRoutes = ROUTE_INDEX.filter((entry) => entry.section === 'cost')

if (costRoutes.length === 0) {
  errors.push('No cost routes found in ROUTE_INDEX.')
}

const forbiddenPlaceholderPatterns = [
  /\bTODO\b/i,
  /\bTBD\b/i,
  /\blorem ipsum\b/i,
  /\bcoming soon\b/i,
  /\bplaceholder\b/i,
]

for (const entry of costRoutes) {
  if (!entry.contentFile) {
    errors.push(`Cost route missing contentFile: ${entry.path}`)
    continue
  }

  const filePath = resolveProjectPath(entry.contentFile)

  if (!fs.existsSync(filePath)) {
    errors.push(`Missing cost content file: ${entry.contentFile}`)
    continue
  }

  const raw = fs.readFileSync(filePath, 'utf8')
  const trimmed = raw.trim()

  if (trimmed.length < 900) {
    errors.push(`Cost content too short: ${entry.contentFile}`)
  }

  if (!/##\s+Introduction/i.test(raw)) {
    errors.push(`Missing Introduction section: ${entry.contentFile}`)
  }

  if (!/##\s+(Market Context Snapshot|Structured Market Context|Market Context)/i.test(raw)) {
    errors.push(`Missing market context section: ${entry.contentFile}`)
  }

  if (
    !/\b(what to (ask|request|clarify|know)|written estimate|in writing)\b/i.test(
      raw
    )
  ) {
    errors.push(`Missing patient guidance language: ${entry.contentFile}`)
  }

  if (!/##\s+Related Reading/i.test(raw)) {
    errors.push(`Missing Related Reading section: ${entry.contentFile}`)
  }

  if (!/##\s+Final Note/i.test(raw)) {
    errors.push(`Missing Final Note section: ${entry.contentFile}`)
  }

  const internalLinks = raw.match(/\[[^\]]+\]\(\/[^)]+\)/g) ?? []
  if (internalLinks.length < 4) {
    errors.push(
      `Cost content must include at least 4 internal links: ${entry.contentFile}`
    )
  }

  if (
    !/\b(not a quote|not a price quote|directional context|written itemized estimate|written estimate)\b/i.test(
      raw
    )
  ) {
    errors.push(
      `Cost content must clearly state publication limits/disclaimer language: ${entry.contentFile}`
    )
  }

  for (const pattern of forbiddenPlaceholderPatterns) {
    if (pattern.test(raw)) {
      errors.push(
        `Cost content contains placeholder language (${pattern}): ${entry.contentFile}`
      )
    }
  }
}

if (errors.length > 0) {
  console.error('Cost content validation failed.\n')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Cost content validation passed.')
