import { ROUTE_INDEX } from '../lib/content-index'

const errors: string[] = []

for (const entry of ROUTE_INDEX) {
  if (entry.title.length < 10 || entry.title.length > 75) {
    errors.push(`Title length out of range for ${entry.path}: "${entry.title}"`)
  }

  if (entry.description.length < 50 || entry.description.length > 170) {
    errors.push(
      `Description length out of range for ${entry.path}: "${entry.description}"`
    )
  }

  if (!entry.path.startsWith('/')) {
    errors.push(`Canonical path must begin with "/": ${entry.path}`)
  }
}

if (errors.length > 0) {
  console.error('SEO validation failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('SEO validation passed.')
