import type { Metadata } from 'next'

type PageMetadataInput = {
  title: string
  description: string
  path?: string
}

const SITE_NAME = 'Dental Surgery New York'
const SITE_URL = 'https://dentalsurgerynewyork.com'

export function buildMetadata({
  title,
  description,
  path = '/',
}: PageMetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString()

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
