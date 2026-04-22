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

  if (!/\$[\d,]+/.test(raw)) {
    errors.push(
      `Cost content lacks price reference (e.g. $3,000): ${entry.contentFile}`
    )
  }

  if (!/what to (ask|request|clarify|know)|in writing/i.test(raw)) {
    errors.push(
      `Cost content lacks patient guidance section: ${entry.contentFile}`
    )
  }

  if (raw.trim().length < 500) {
    errors.push(`Cost content too short: ${entry.contentFile}`)
  }
}

if (errors.length > 0) {
  console.error('Cost data validation failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Cost data validation passed.')
