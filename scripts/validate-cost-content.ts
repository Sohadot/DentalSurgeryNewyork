import fs from 'node:fs'
import { ROUTE_INDEX, resolveProjectPath } from '../lib/content-index'

const errors: string[] = []

const costRoutes = ROUTE_INDEX.filter((entry) => entry.section === 'cost')

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

  if (trimmed.length < 700) {
    errors.push(`Cost content too short: ${entry.contentFile}`)
  }

  if (!/##\s+(Market Context|Structured Market Context|Introduction)/i.test(raw)) {
    errors.push(
      `Cost content lacks market-context or introduction section: ${entry.contentFile}`
    )
  }

  if (!/\b(what to (ask|request|clarify|know)|written estimate|in writing)\b/i.test(raw)) {
    errors.push(
      `Cost content lacks patient guidance language: ${entry.contentFile}`
    )
  }

  if (!/##\s+Related Reading/i.test(raw)) {
    errors.push(`Cost content lacks Related Reading section: ${entry.contentFile}`)
  }

  if (!/\[[^\]]+\]\(\/[^)]+\)/.test(raw)) {
    errors.push(`Cost content lacks internal links: ${entry.contentFile}`)
  }

  if (!/##\s+Final Note/i.test(raw)) {
    errors.push(`Cost content lacks Final Note section: ${entry.contentFile}`)
  }
}

if (errors.length > 0) {
  console.error('Cost content validation failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Cost content validation passed.')
