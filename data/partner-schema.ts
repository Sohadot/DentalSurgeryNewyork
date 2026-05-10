export type PartnerTier =
  | 'verified-presence'
  | 'reference-partner'
  | 'category-sponsor'

export type PartnerBorough =
  | 'manhattan'
  | 'brooklyn'
  | 'queens'
  | 'bronx'
  | 'staten-island'
  | 'all'

export type PartnerProcedureFocus =
  | 'dental-implants'
  | 'wisdom-tooth-removal'
  | 'tooth-extraction'
  | 'bone-grafting'
  | 'oral-surgery-sedation'
  | 'emergency-oral-surgery'
  | 'general'

export type Partner = {
  id: string
  name: string
  tier: PartnerTier
  borough: PartnerBorough
  procedureFocus: PartnerProcedureFocus[]
  website: string
  phone?: string
  address?: string
  disclosure: string
  active: boolean
  startDate: string
}

export const PARTNERS: Partner[] = []
