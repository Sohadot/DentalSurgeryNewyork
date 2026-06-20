import fs from 'node:fs'
import { ROUTE_INDEX, resolveProjectPath } from '../lib/content-index'
import { EVIDENCE_SOURCES, getEvidenceProfile } from '../lib/evidence-registry'

const errors: string[] = []
const sourceIds = new Set<string>()
const today = new Date()
const oneDayMs = 24 * 60 * 60 * 1000

function isInternalUrl(url: string) {
  return url.startsWith('/')
}

function readContent(relativePath: string) {
  return fs.readFileSync(resolveProjectPath(relativePath), 'utf8')
}

for (const source of EVIDENCE_SOURCES) {
  if (sourceIds.has(source.id)) {
    errors.push(`Duplicate evidence source id: ${source.id}`)
  }
  sourceIds.add(source.id)

  if (!source.title.trim()) {
    errors.push(`Evidence source missing title: ${source.id}`)
  }

  if (!source.publisher.trim()) {
    errors.push(`Evidence source missing publisher: ${source.id}`)
  }

  if (!isInternalUrl(source.url) && !source.url.startsWith('https://')) {
    errors.push(`Evidence source must use HTTPS or an internal path: ${source.id}`)
  }

  const verified = Date.parse(source.lastVerified)
  if (Number.isNaN(verified)) {
    errors.push(`Evidence source has invalid lastVerified date: ${source.id}`)
    continue
  }

  const ageDays = Math.floor((today.getTime() - verified) / oneDayMs)
  if (ageDays > source.reviewCadenceDays) {
    errors.push(
      `Evidence source is stale (${ageDays}/${source.reviewCadenceDays} days): ${source.id}`
    )
  }
}

for (const entry of ROUTE_INDEX) {
  const profile = getEvidenceProfile(entry)

  for (const sourceId of profile.sourceIds) {
    if (!sourceIds.has(sourceId)) {
      errors.push(`Route references unknown evidence source ${sourceId}: ${entry.path}`)
    }
  }

  if (profile.riskTier !== 'standard' && profile.sourceIds.length < 3) {
    errors.push(`Elevated/high-risk route lacks evidence source depth: ${entry.path}`)
  }

  const needsAuthorityDepth = profile.topics.some((topic) =>
    ['coverage', 'medicaid', 'medicare'].includes(topic)
  )

  if (profile.riskTier === 'high' && needsAuthorityDepth && profile.sourceIds.length < 4) {
    errors.push(`High-risk route lacks high-risk evidence source depth: ${entry.path}`)
  }

  if (!entry.contentFile) {
    continue
  }

  const raw = readContent(entry.contentFile)

  for (const requirement of profile.requiredLanguage) {
    if (!requirement.pattern.test(raw)) {
      errors.push(
        `Missing ${requirement.label} in ${entry.contentFile} for ${entry.path}`
      )
    }
  }
}

if (errors.length > 0) {
  console.error('Evidence integrity validation failed.\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Evidence integrity validation passed.')
