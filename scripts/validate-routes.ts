import fs from 'node:fs'
import { ROUTE_INDEX, resolveProjectPath } from '../lib/content-index'

const errors: string[] = []
const seenPaths = new Set<string>()

for (const entry of ROUTE_INDEX) {
  if (!entry.path.startsWith('/')) {
    errors.push(`Route path must start with "/": ${entry.path}`)
  }

  if (seenPaths.has(entry.path)) {
    errors.push(`Duplicate route path: ${entry.path}`)
  }

  seenPaths.add(entry.path)

  const routeFilePath = resolveProjectPath(entry.routeFile)

  if (!fs.existsSync(routeFilePath)) {
    errors.push(`Missing route file: ${entry.routeFile}`)
  }
}

if (errors.length > 0) {
  console.error('Route validation failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Route validation passed.')
