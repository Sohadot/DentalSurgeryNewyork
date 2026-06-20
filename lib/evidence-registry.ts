import type { RouteEntry } from './content-index'

export type EvidenceSourceType =
  | 'official-public-authority'
  | 'official-program-manual'
  | 'internal-editorial-standard'
  | 'internal-data-standard'

export type EvidenceSource = {
  id: string
  title: string
  sourceType: EvidenceSourceType
  url: string
  publisher: string
  lastVerified: string
  reviewCadenceDays: number
  notes: string
}

export type EvidenceRiskTier = 'standard' | 'elevated' | 'high'

export type EvidenceTopic =
  | 'editorial-governance'
  | 'cost'
  | 'coverage'
  | 'medicaid'
  | 'medicare'
  | 'clinical-risk'
  | 'emergency'
  | 'sedation'
  | 'recovery'
  | 'implant'

export type EvidenceProfile = {
  path: string
  riskTier: EvidenceRiskTier
  topics: EvidenceTopic[]
  sourceIds: string[]
  requiredLanguage: Array<{
    label: string
    pattern: RegExp
  }>
}

export const EVIDENCE_SOURCES: EvidenceSource[] = [
  {
    id: 'nys-medicaid-dental-provider-page',
    title: 'Medicaid Dental Benefits - Provider Information',
    sourceType: 'official-public-authority',
    url: 'https://www.health.ny.gov/health_care/medicaid/program/dental/provider/index.htm',
    publisher: 'New York State Department of Health',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 180,
    notes:
      'Used for New York Medicaid dental-benefit orientation and links to current program manuals and fee schedules.',
  },
  {
    id: 'emedny-dental-policy-manual-2026',
    title: 'New York State Medicaid 2026 Dental Policy and Procedure Code Manual',
    sourceType: 'official-program-manual',
    url: 'https://www.emedny.org/providermanuals/dental/pdfs/dental_policy_and_procedure_manual.pdf',
    publisher: 'eMedNY / New York State Medicaid Program',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 180,
    notes:
      'Primary Medicaid dental-policy source for prior approval, oral surgery, implant services, sedation, and managed-care procedural cautions.',
  },
  {
    id: 'medicare-dental-services',
    title: 'Medicare Dental Services Coverage',
    sourceType: 'official-public-authority',
    url: 'https://www.medicare.gov/coverage/dental-services',
    publisher: 'Centers for Medicare & Medicaid Services',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 180,
    notes:
      'Used for Medicare dental-coverage boundaries and exceptions involving medically related dental services.',
  },
  {
    id: 'coverage-verification-standard',
    title: 'Coverage Verification Editorial Standard',
    sourceType: 'internal-editorial-standard',
    url: '/questions/does-insurance-cover-oral-surgery-in-new-york',
    publisher: 'DentalSurgeryNewYork.com',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 180,
    notes:
      'Internal standard requiring plan-specific confirmation, prior authorization or predetermination language, and no automatic coverage claims.',
  },
  {
    id: 'site-methodology',
    title: 'DentalSurgeryNewYork.com Methodology',
    sourceType: 'internal-editorial-standard',
    url: '/methodology',
    publisher: 'DentalSurgeryNewYork.com',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 365,
    notes:
      'Internal editorial standard for cost caution, patient decision support, and non-substitution for diagnosis or individualized advice.',
  },
  {
    id: 'site-accuracy-policy',
    title: 'DentalSurgeryNewYork.com Accuracy Policy',
    sourceType: 'internal-editorial-standard',
    url: '/accuracy-policy',
    publisher: 'DentalSurgeryNewYork.com',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 365,
    notes:
      'Internal standard for updates, revision posture, and limits of informational oral-surgery guidance.',
  },
  {
    id: 'site-disclaimer',
    title: 'DentalSurgeryNewYork.com Disclaimer',
    sourceType: 'internal-editorial-standard',
    url: '/disclaimer',
    publisher: 'DentalSurgeryNewYork.com',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 365,
    notes:
      'Internal standard for medical-advice limits, emergency boundaries, cost-estimate limits, and provider-verification language.',
  },
  {
    id: 'site-cost-data',
    title: 'Structured Cost Data Files',
    sourceType: 'internal-data-standard',
    url: '/data/costs',
    publisher: 'DentalSurgeryNewYork.com',
    lastVerified: '2026-06-20',
    reviewCadenceDays: 180,
    notes:
      'Internal structured data standard requiring directional, non-quote cost framing and written-estimate guidance.',
  },
]

const costLanguage = {
  label: 'directional cost / written estimate language',
  pattern: /\b(not a quote|not a price quote|directional|written estimate|itemized estimate|in writing)\b/i,
}

const coverageLanguage = {
  label: 'coverage verification language',
  pattern: /\b(verify|verified|confirm|contact|plan|insurer|prior authorization|prior approval|predetermination)\b/i,
}

const clinicalLanguage = {
  label: 'provider-specific clinical caution language',
  pattern: /\b(provider|surgeon|clinician|treating|evaluation|diagnosis|medical advice|ask|disclose)\b/i,
}

const emergencyLanguage = {
  label: 'urgent care / emergency boundary language',
  pattern: /\b(emergency|urgent|ER|call|seek immediate|immediate care|difficulty breathing|difficulty swallowing)\b/i,
}

const sedationLanguage = {
  label: 'sedation credentials / monitoring language',
  pattern: /\b(sedation|anesthesia|credentials|monitoring|certificate|certification)\b/i,
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term))
}

export function getEvidenceProfile(entry: RouteEntry): EvidenceProfile {
  const haystack = `${entry.path} ${entry.title} ${entry.section}`.toLowerCase()
  const topics = new Set<EvidenceTopic>(['editorial-governance'])
  const sourceIds = new Set<string>([
    'site-methodology',
    'site-accuracy-policy',
    'site-disclaimer',
  ])
  const requiredLanguage: EvidenceProfile['requiredLanguage'] = []
  let riskTier: EvidenceRiskTier = 'standard'

  if (entry.section === 'cost' || includesAny(haystack, ['cost', 'price', 'pricing', 'estimate'])) {
    topics.add('cost')
    sourceIds.add('site-cost-data')
    requiredLanguage.push(costLanguage)
    riskTier = 'elevated'
  }

  if (includesAny(haystack, ['insurance', 'coverage', 'covered', 'benefit'])) {
    topics.add('coverage')
    sourceIds.add('coverage-verification-standard')
    sourceIds.add('medicare-dental-services')
    requiredLanguage.push(coverageLanguage)
    riskTier = 'high'
  }

  if (includesAny(haystack, ['medicaid'])) {
    topics.add('medicaid')
    sourceIds.add('nys-medicaid-dental-provider-page')
    sourceIds.add('emedny-dental-policy-manual-2026')
    requiredLanguage.push(coverageLanguage)
    riskTier = 'high'
  }

  if (includesAny(haystack, ['medicare'])) {
    topics.add('medicare')
    sourceIds.add('medicare-dental-services')
    requiredLanguage.push(coverageLanguage)
    riskTier = 'high'
  }

  if (includesAny(haystack, ['risk', 'diabetes', 'blood thinner', 'nerve damage', 'smoking', 'infection'])) {
    topics.add('clinical-risk')
    requiredLanguage.push(clinicalLanguage)
    riskTier = riskTier === 'standard' ? 'elevated' : riskTier
  }

  if (includesAny(haystack, ['emergency', 'urgent', 'swelling'])) {
    topics.add('emergency')
    requiredLanguage.push(emergencyLanguage)
    riskTier = 'high'
  }

  if (includesAny(haystack, ['sedation', 'anesthesia'])) {
    topics.add('sedation')
    sourceIds.add('emedny-dental-policy-manual-2026')
    requiredLanguage.push(sedationLanguage)
    riskTier = 'high'
  }

  if (includesAny(haystack, ['recovery', 'healing', 'after oral surgery'])) {
    topics.add('recovery')
    requiredLanguage.push(clinicalLanguage)
    riskTier = riskTier === 'standard' ? 'elevated' : riskTier
  }

  if (includesAny(haystack, ['implant', 'all-on-4', 'abutment', 'osseointegration'])) {
    topics.add('implant')
    riskTier = riskTier === 'standard' ? 'elevated' : riskTier
  }

  return {
    path: entry.path,
    riskTier,
    topics: Array.from(topics),
    sourceIds: Array.from(sourceIds),
    requiredLanguage,
  }
}
