import fs from 'node:fs'
import path from 'node:path'
import { resolveProjectPath } from '../lib/content-index'

const DATA_DIR = resolveProjectPath('data/costs')

if (!fs.existsSync(DATA_DIR)) {
  console.log('Cost data layer not yet initialized — skipping validate:cost-data.')
  process.exit(0)
}

const files = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.json'))

if (files.length === 0) {
  console.log('No cost data files found — skipping validate:cost-data.')
  process.exit(0)
}

const errors: string[] = []

for (const file of files) {
  const filePath = path.join(DATA_DIR, file)
  let data: unknown

  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch {
    errors.push(`Invalid JSON: ${file}`)
    continue
  }

  if (typeof data !== 'object' || data === null) {
    errors.push(`Cost data file is not an object: ${file}`)
    continue
  }

  const record = data as Record<string, unknown>

  if (typeof record.procedure !== 'string' || record.procedure.trim() === '') {
    errors.push(`Missing or empty "procedure" field: ${file}`)
  }

  if (typeof record.lastUpdated !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(record.lastUpdated)) {
    errors.push(`Missing or invalid "lastUpdated" (expected YYYY-MM-DD): ${file}`)
  }

  if (typeof record.source !== 'string' || record.source.trim() === '') {
    errors.push(`Missing or empty "source" field: ${file}`)
  }

  const ranges = record.ranges
  if (
    typeof ranges !== 'object' ||
    ranges === null ||
    typeof (ranges as Record<string, unknown>).low !== 'number' ||
    typeof (ranges as Record<string, unknown>).high !== 'number'
  ) {
    errors.push(`Missing or invalid "ranges" (expected {low: number, high: number}): ${file}`)
  } else {
    const { low, high } = ranges as { low: number; high: number }
    if (low <= 0 || high <= 0 || low >= high) {
      errors.push(`"ranges" values invalid (low must be < high, both > 0): ${file}`)
    }
  }
}

if (errors.length > 0) {
  console.error('Cost data validation failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Cost data validation passed. (${files.length} file(s) checked)`)
