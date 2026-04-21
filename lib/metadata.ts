import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './site-config'

type BuildMetadataInput = {
  title: string
  description: string
  path: string
}

export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataInput): Metadata {
  const canonical = new URL(path, SITE_URL).toString()

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
