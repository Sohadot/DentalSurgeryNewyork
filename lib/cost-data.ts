import dentalImplantsRaw from '../data/costs/dental-implants.json'
import wisdomToothRemovalRaw from '../data/costs/wisdom-tooth-removal.json'

export type CostSourceType =
  | 'professional-association-baseline'
  | 'public-local-anchor'
  | 'payer-baseline'
  | 'institutional-public-facing-care-pathway'

export type DirectionalRange = {
  min?: number
  max?: number
  value?: number
  scope: string
  source_type: CostSourceType | string
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

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value)
}

function isString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function assertDirectionalRange(
  value: unknown,
  key: string,
  procedure: string
): asserts value is DirectionalRange {
  if (!isObject(value)) {
    throw new Error(`Invalid directional range for ${procedure}: ${key}`)
  }

  const hasMin = isNumber(value.min)
  const hasMax = isNumber(value.max)
  const hasValue = isNumber(value.value)

  if (!hasValue && !(hasMin || hasMax)) {
    throw new Error(
      `Directional range must include value or min/max for ${procedure}: ${key}`
    )
  }

  if (!isString(value.scope)) {
    throw new Error(`Directional range missing scope for ${procedure}: ${key}`)
  }

  if (!isString(value.source_type)) {
    throw new Error(
      `Directional range missing source_type for ${procedure}: ${key}`
    )
  }
}

function assertCostData(value: unknown): asserts value is CostData {
  if (!isObject(value)) {
    throw new Error('Cost data must be an object')
  }

  if (!isString(value.procedure)) {
    throw new Error('Cost data missing procedure')
  }

  if (!isString(value.market)) {
    throw new Error(`Cost data missing market for ${value.procedure}`)
  }

  if (!isString(value.currency)) {
    throw new Error(`Cost data missing currency for ${value.procedure}`)
  }

  if (!isString(value.last_reviewed)) {
    throw new Error(`Cost data missing last_reviewed for ${value.procedure}`)
  }

  if (!isObject(value.directional_ranges)) {
    throw new Error(`Cost data missing directional_ranges for ${value.procedure}`)
  }

  for (const [key, range] of Object.entries(value.directional_ranges)) {
    assertDirectionalRange(range, key, value.procedure)
  }

  if (!Array.isArray(value.cost_drivers) || value.cost_drivers.length === 0) {
    throw new Error(`Cost data missing cost_drivers for ${value.procedure}`)
  }

  if (!value.cost_drivers.every(isString)) {
    throw new Error(`Invalid cost_drivers for ${value.procedure}`)
  }

  if (!isObject(value.publication_standard)) {
    throw new Error(`Cost data missing publication_standard for ${value.procedure}`)
  }

  const publicationStandard = value.publication_standard
  if (
    typeof publicationStandard.is_quote !== 'boolean' ||
    typeof publicationStandard.is_directional_context !== 'boolean' ||
    typeof publicationStandard.requires_written_estimate !== 'boolean'
  ) {
    throw new Error(`Invalid publication_standard for ${value.procedure}`)
  }

  if (value.coverage_context !== undefined) {
    if (!isObject(value.coverage_context)) {
      throw new Error(`Invalid coverage_context for ${value.procedure}`)
    }

    const coverage = value.coverage_context
    if (
      typeof coverage.new_york_medicaid_implants_medically_necessary !==
        'boolean' ||
      !isString(coverage.effective_date) ||
      !isString(coverage.note)
    ) {
      throw new Error(`Invalid coverage_context for ${value.procedure}`)
    }
  }

  if (value.institutional_access_pathways !== undefined) {
    if (!Array.isArray(value.institutional_access_pathways)) {
      throw new Error(
        `Invalid institutional_access_pathways for ${value.procedure}`
      )
    }

    for (const pathway of value.institutional_access_pathways) {
      if (!isObject(pathway)) {
        throw new Error(
          `Invalid institutional pathway object for ${value.procedure}`
        )
      }

      if (!isString(pathway.name) || !isString(pathway.type)) {
        throw new Error(
          `Institutional pathway missing name/type for ${value.procedure}`
        )
      }

      if (!Array.isArray(pathway.notes) || !pathway.notes.every(isString)) {
        throw new Error(
          `Institutional pathway notes invalid for ${value.procedure}`
        )
      }
    }
  }
}

function validateCostData(value: unknown): CostData {
  assertCostData(value)
  return value
}

export function getDentalImplantsCostData(): CostData {
  return validateCostData(dentalImplantsRaw)
}

export function getWisdomToothRemovalCostData(): CostData {
  return validateCostData(wisdomToothRemovalRaw)
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
