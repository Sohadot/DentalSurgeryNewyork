import fs from 'node:fs'
import path from 'node:path'
import { ROUTE_INDEX } from '../lib/content-index'
import { EVIDENCE_SOURCES, getEvidenceProfile } from '../lib/evidence-registry'

const outputDir = path.join(process.cwd(), 'data', 'system')
const outputFile = path.join(outputDir, 'asset-readiness-report.json')

const profiles = ROUTE_INDEX.map((entry) => getEvidenceProfile(entry))
const riskCounts = profiles.reduce<Record<string, number>>((acc, profile) => {
  acc[profile.riskTier] = (acc[profile.riskTier] ?? 0) + 1
  return acc
}, {})

const topicCounts = profiles.reduce<Record<string, number>>((acc, profile) => {
  for (const topic of profile.topics) {
    acc[topic] = (acc[topic] ?? 0) + 1
  }
  return acc
}, {})

const report = {
  generated_at: new Date().toISOString(),
  route_count: ROUTE_INDEX.length,
  indexable_route_count: ROUTE_INDEX.filter((entry) => entry.indexable).length,
  content_file_count: ROUTE_INDEX.filter((entry) => entry.contentFile).length,
  evidence_source_count: EVIDENCE_SOURCES.length,
  evidence_sources: EVIDENCE_SOURCES.map((source) => ({
    id: source.id,
    source_type: source.sourceType,
    publisher: source.publisher,
    last_verified: source.lastVerified,
    review_cadence_days: source.reviewCadenceDays,
  })),
  risk_counts: riskCounts,
  topic_counts: topicCounts,
  validation_gates: [
    'typecheck',
    'validate:content',
    'validate:routes',
    'validate:seo',
    'validate:asset-governance',
    'validate:evidence-integrity',
    'validate:cost-content',
    'validate:cost-data',
    'next build',
  ],
  governance_posture: {
    orphan_app_pages_allowed: false,
    orphan_content_files_allowed: false,
    broken_internal_links_allowed: false,
    placeholder_language_allowed: false,
    high_risk_absolute_claims_allowed: false,
    stale_evidence_sources_allowed: false,
    clinical_review_claimed: false,
    provider_endorsement_claimed: false,
  },
}

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(outputFile, JSON.stringify(report, null, 2) + '\n', 'utf8')

console.log(`Wrote ${outputFile}`)
