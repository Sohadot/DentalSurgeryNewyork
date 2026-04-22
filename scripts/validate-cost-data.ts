import {
  getDentalImplantsCostData,
  getWisdomToothRemovalCostData,
} from '../lib/cost-data'

function validateLastReviewed(dateString: string, procedure: string) {
  const parsed = Date.parse(dateString)

  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid last_reviewed date for ${procedure}: ${dateString}`)
  }
}

function validateProcedureShape(procedure: string) {
  const data =
    procedure === 'dental-implants'
      ? getDentalImplantsCostData()
      : getWisdomToothRemovalCostData()

  validateLastReviewed(data.last_reviewed, data.procedure)

  if (data.market !== 'New York City') {
    throw new Error(
      `Unexpected market for ${data.procedure}: ${data.market}`
    )
  }

  if (data.currency !== 'USD') {
    throw new Error(
      `Unexpected currency for ${data.procedure}: ${data.currency}`
    )
  }

  if (Object.keys(data.directional_ranges).length === 0) {
    throw new Error(`No directional ranges found for ${data.procedure}`)
  }

  if (data.cost_drivers.length < 3) {
    throw new Error(`Not enough cost drivers for ${data.procedure}`)
  }

  if (data.publication_standard.is_quote !== false) {
    throw new Error(`${data.procedure} must not be marked as a quote`)
  }

  if (data.publication_standard.is_directional_context !== true) {
    throw new Error(
      `${data.procedure} must be marked as directional context`
    )
  }

  if (data.publication_standard.requires_written_estimate !== true) {
    throw new Error(
      `${data.procedure} must require a written estimate`
    )
  }
}

try {
  validateProcedureShape('dental-implants')
  validateProcedureShape('wisdom-tooth-removal')
  console.log('Cost data validation passed.')
} catch (error) {
  console.error('Cost data validation failed.\n')
  if (error instanceof Error) {
    console.error(`- ${error.message}`)
  } else {
    console.error('- Unknown validation error')
  }
  process.exit(1)
}
