import dentalImplantsRaw from '../data/costs/dental-implants.json'
import wisdomToothRemovalRaw from '../data/costs/wisdom-tooth-removal.json'

export type CostSourceType =
  | 'professional-association-baseline'
  | 'public-local-anchor'
  | 'payer-baseline'
  | 'institutional-public-facing-care-pathway'
  | string

export type DirectionalRange = {
  min?: number
  max?: number
  value?: number
  scope: string
  source_type: CostSourceType
}

export type CoverageContext = {
  new_york_medicaid_implants_medically_necessary: boolean
  effective_date: string
  note: string
}

export type InstitutionalAccessPathway = {
  name: string
  type: string
  notes: string[]
}

export type PublicationStandard = {
  is_quote: boolean
  is_directional_context: boolean
  requires_written_estimate: boolean
}

export type CostData = {
  procedure: string
  market: string
  currency: string
  last_reviewed: string
  directional_ranges: Record<string, DirectionalRange>
  cost_drivers: string[]
  coverage_context?: CoverageContext
  institutional_access_pathways?: InstitutionalAccessPathway[]
  publication_standard: PublicationStandard
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value)
}

function parseDirectionalRange(
  value: unknown,
  procedure: string,
  key: string
): DirectionalRange {
  if (!isRecord(value)) {
    throw new Error(`Invalid directional range object for ${procedure}: ${key}`)
  }

  const { min, max, value: exactValue, scope, source_type } = value

  const hasMin = isFiniteNumber(min)
  const hasMax = isFiniteNumber(max)
  const hasValue = isFiniteNumber(exactValue)

  if (!hasValue && !hasMin && !hasMax) {
    throw new Error(
      `Directional range must include value or min/max for ${procedure}: ${key}`
    )
  }

  if (!isNonEmptyString(scope)) {
    throw new Error(`Directional range missing scope for ${procedure}: ${key}`)
  }

  if (!isNonEmptyString(source_type)) {
    throw new Error(
      `Directional range missing source_type for ${procedure}: ${key}`
    )
  }

  if (hasMin && min <= 0) {
    throw new Error(`Directional range min must be positive for ${procedure}: ${key}`)
  }

  if (hasMax && max <= 0) {
    throw new Error(`Directional range max must be positive for ${procedure}: ${key}`)
  }

  if (hasValue && exactValue <= 0) {
    throw new Error(
      `Directional range value must be positive for ${procedure}: ${key}`
    )
  }

  if (hasMin && hasMax && min > max) {
    throw new Error(
      `Directional range min cannot exceed max for ${procedure}: ${key}`
    )
  }

  return {
    ...(hasMin ? { min } : {}),
    ...(hasMax ? { max } : {}),
    ...(hasValue ? { value: exactValue } : {}),
    scope,
    source_type,
  }
}

function parseCoverageContext(
  value: unknown,
  procedure: string
): CoverageContext | undefined {
  if (value === undefined) {
    return undefined
  }

  if (!isRecord(value)) {
    throw new Error(`Invalid coverage_context for ${procedure}`)
  }

  const {
    new_york_medicaid_implants_medically_necessary,
    effective_date,
    note,
  } = value

  if (
    typeof new_york_medicaid_implants_medically_necessary !== 'boolean' ||
    !isNonEmptyString(effective_date) ||
    !isNonEmptyString(note)
  ) {
    throw new Error(`Invalid coverage_context shape for ${procedure}`)
  }

  return {
    new_york_medicaid_implants_medically_necessary,
    effective_date,
    note,
  }
}

function parseInstitutionalAccessPathways(
  value: unknown,
  procedure: string
): InstitutionalAccessPathway[] | undefined {
  if (value === undefined) {
    return undefined
  }

  if (!Array.isArray(value)) {
    throw new Error(`institutional_access_pathways must be an array for ${procedure}`)
  }

  return value.map((item, index) => {
    if (!isRecord(item)) {
      throw new Error(
        `Invalid institutional access pathway object for ${procedure} at index ${index}`
      )
    }

    const { name, type, notes } = item

    if (!isNonEmptyString(name) || !isNonEmptyString(type)) {
      throw new Error(
        `Institutional access pathway missing name/type for ${procedure} at index ${index}`
      )
    }

    if (!Array.isArray(notes) || !notes.every(isNonEmptyString)) {
      throw new Error(
        `Institutional access pathway notes invalid for ${procedure} at index ${index}`
      )
    }

    return {
      name,
      type,
      notes,
    }
  })
}

function parsePublicationStandard(
  value: unknown,
  procedure: string
): PublicationStandard {
  if (!isRecord(value)) {
    throw new Error(`Invalid publication_standard for ${procedure}`)
  }

  const {
    is_quote,
    is_directional_context,
    requires_written_estimate,
  } = value

  if (
    typeof is_quote !== 'boolean' ||
    typeof is_directional_context !== 'boolean' ||
    typeof requires_written_estimate !== 'boolean'
  ) {
    throw new Error(`Invalid publication_standard shape for ${procedure}`)
  }

  return {
    is_quote,
    is_directional_context,
    requires_written_estimate,
  }
}

function parseCostData(raw: unknown): CostData {
  if (!isRecord(raw)) {
    throw new Error('Cost data must be an object')
  }

  const {
    procedure,
    market,
    currency,
    last_reviewed,
    directional_ranges,
    cost_drivers,
    coverage_context,
    institutional_access_pathways,
    publication_standard,
  } = raw

  if (!isNonEmptyString(procedure)) {
    throw new Error('Cost data missing procedure')
  }

  if (!isNonEmptyString(market)) {
    throw new Error(`Cost data missing market for ${procedure}`)
  }

  if (!isNonEmptyString(currency)) {
    throw new Error(`Cost data missing currency for ${procedure}`)
  }

  if (!isNonEmptyString(last_reviewed)) {
    throw new Error(`Cost data missing last_reviewed for ${procedure}`)
  }

  if (!isRecord(directional_ranges)) {
    throw new Error(`Cost data missing directional_ranges for ${procedure}`)
  }

  if (!Array.isArray(cost_drivers) || !cost_drivers.every(isNonEmptyString)) {
    throw new Error(`Cost data missing or invalid cost_drivers for ${procedure}`)
  }

  const parsedRanges: Record<string, DirectionalRange> = {}
  for (const [key, value] of Object.entries(directional_ranges)) {
    parsedRanges[key] = parseDirectionalRange(value, procedure, key)
  }

  return {
    procedure,
    market,
    currency,
    last_reviewed,
    directional_ranges: parsedRanges,
    cost_drivers,
    coverage_context: parseCoverageContext(coverage_context, procedure),
    institutional_access_pathways: parseInstitutionalAccessPathways(
      institutional_access_pathways,
      procedure
    ),
    publication_standard: parsePublicationStandard(publication_standard, procedure),
  }
}

let dentalImplantsCache: CostData | null = null
let wisdomToothRemovalCache: CostData | null = null

export function getDentalImplantsCostData(): CostData {
  if (!dentalImplantsCache) {
    dentalImplantsCache = parseCostData(dentalImplantsRaw)
  }
  return dentalImplantsCache
}

export function getWisdomToothRemovalCostData(): CostData {
  if (!wisdomToothRemovalCache) {
    wisdomToothRemovalCache = parseCostData(wisdomToothRemovalRaw)
  }
  return wisdomToothRemovalCache
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDirectionalRange(range: DirectionalRange): string {
  if (typeof range.value === 'number') {
    return formatUsd(range.value)
  }

  if (typeof range.min === 'number' && typeof range.max === 'number') {
    return `${formatUsd(range.min)} – ${formatUsd(range.max)}`
  }

  if (typeof range.min === 'number') {
    return `From ${formatUsd(range.min)}`
  }

  if (typeof range.max === 'number') {
    return `Up to ${formatUsd(range.max)}`
  }

  return 'See scope'
}
