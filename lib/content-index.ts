import fs from 'node:fs'
import path from 'node:path'
import { SITE_URL } from './site-config'

export type RouteSection =
  | 'home'
  | 'core'
  | 'procedure'
  | 'cost'
  | 'guide'
  | 'location'
  | 'question'

export type ChangeFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly'

export type RouteEntry = {
  path: string
  title: string
  description: string
  section: RouteSection
  contentFile?: string
  routeFile: string
  priority: number
  changeFrequency: ChangeFrequency
  indexable: boolean
}

export const ROUTE_INDEX: RouteEntry[] = [
  {
    path: '/',
    title: 'Independent Oral Surgery Guidance for New York City',
    description:
      'Understand procedures, cost structures, surgeon-selection questions, and treatment factors through an independent oral surgery reference for New York patients.',
    section: 'home',
    routeFile: 'app/page.tsx',
    priority: 1,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/methodology',
    title: 'Methodology | Dental Surgery New York',
    description:
      'Learn how DentalSurgeryNewYork.com researches procedure guidance, cost information, and patient decision content for oral surgery in New York.',
    section: 'core',
    contentFile: 'content/core/methodology.mdx',
    routeFile: 'app/methodology/page.tsx',
    priority: 0.8,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/independence-policy',
    title: 'Independence Policy | Dental Surgery New York',
    description:
      'Read the editorial independence policy for DentalSurgeryNewYork.com and learn how the site approaches provider references and commercial separation.',
    section: 'core',
    contentFile: 'content/core/independence-policy.mdx',
    routeFile: 'app/independence-policy/page.tsx',
    priority: 0.7,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/accuracy-policy',
    title: 'Accuracy Policy | Dental Surgery New York',
    description:
      'Read how DentalSurgeryNewYork.com approaches informational accuracy, updates, revisions, and the limits of oral surgery guidance.',
    section: 'core',
    contentFile: 'content/core/accuracy-policy.mdx',
    routeFile: 'app/accuracy-policy/page.tsx',
    priority: 0.7,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer | Dental Surgery New York',
    description:
      'Read the disclaimer for DentalSurgeryNewYork.com regarding informational use, medical advice, cost estimates, provider verification, and emergencies.',
    section: 'core',
    contentFile: 'content/core/disclaimer.mdx',
    routeFile: 'app/disclaimer/page.tsx',
    priority: 0.5,
    changeFrequency: 'monthly',
    indexable: true,
  },

  {
    path: '/procedures/dental-implants',
    title:
      'Dental Implants in New York | Procedure Guide, Cost Factors, What to Ask',
    description:
      'Understand dental implants in New York, including what the procedure involves, major cost drivers, common misunderstandings, and questions to ask before treatment.',
    section: 'procedure',
    contentFile: 'content/procedures/dental-implants.mdx',
    routeFile: 'app/procedures/dental-implants/page.tsx',
    priority: 0.9,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/procedures/wisdom-tooth-removal',
    title:
      'Wisdom Tooth Removal NYC | Procedure Guide, Cost Factors, and What to Know',
    description:
      'Understand wisdom tooth removal in New York City, including simple vs surgical extraction, sedation questions, cost factors, and what to clarify before treatment.',
    section: 'procedure',
    contentFile: 'content/procedures/wisdom-tooth-removal.mdx',
    routeFile: 'app/procedures/wisdom-tooth-removal/page.tsx',
    priority: 0.88,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/costs/dental-implants',
    title:
      'Dental Implant Cost in New York | What the Price Often Includes and Omits',
    description:
      'Learn how dental implant cost works in New York, including the components of treatment, what low advertised pricing may leave out, and what to request in writing.',
    section: 'cost',
    contentFile: 'content/costs/dental-implants.mdx',
    routeFile: 'app/costs/dental-implants/page.tsx',
    priority: 0.9,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/costs/wisdom-tooth-removal',
    title: 'Wisdom Tooth Removal Cost in NYC | What Changes the Price',
    description:
      'Understand wisdom tooth removal cost in New York City, including simple vs surgical extraction, sedation, imaging, and how to compare estimates more carefully.',
    section: 'cost',
    contentFile: 'content/costs/wisdom-tooth-removal.mdx',
    routeFile: 'app/costs/wisdom-tooth-removal/page.tsx',
    priority: 0.86,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/guides/choose-an-oral-surgeon',
    title:
      'How to Choose an Oral Surgeon in New York | Credentials and What to Ask',
    description:
      'Learn how to choose an oral surgeon in New York by understanding credentials, written estimates, anesthesia questions, and transparency standards.',
    section: 'guide',
    contentFile: 'content/guides/choose-an-oral-surgeon.mdx',
    routeFile: 'app/guides/choose-an-oral-surgeon/page.tsx',
    priority: 0.85,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/guides/questions-to-ask-before-surgery',
    title:
      'Questions to Ask Before Oral Surgery in New York | A Patient Decision Guide',
    description:
      'Learn which questions to ask before oral surgery in New York, including treatment scope, anesthesia, cost structure, follow-up care, and provider transparency.',
    section: 'guide',
    contentFile: 'content/guides/questions-to-ask-before-surgery.mdx',
    routeFile: 'app/guides/questions-to-ask-before-surgery/page.tsx',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/guides/anesthesia-credentials-explained',
    title:
      'Anesthesia Credentials for Oral Surgery | What NYC Patients Should Ask',
    description:
      'Understand what to ask about anesthesia credentials before oral surgery in New York, including sedation roles, monitoring, and why the structure matters.',
    section: 'guide',
    contentFile: 'content/guides/anesthesia-credentials-explained.mdx',
    routeFile: 'app/guides/anesthesia-credentials-explained/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/locations',
    title:
      'Oral Surgery in New York City | Borough Guides and Decision Support',
    description:
      'Explore oral surgery guidance across New York City, including borough-specific decision context, pricing interpretation, and provider-comparison considerations.',
    section: 'location',
    contentFile: 'content/locations/index.mdx',
    routeFile: 'app/locations/page.tsx',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/manhattan',
    title:
      'Oral Surgery in Manhattan | Cost, Provider Comparison, and What to Consider',
    description:
      'Understand oral surgery decisions in Manhattan, including pricing context, provider comparison issues, transparency questions, and how to evaluate options more carefully.',
    section: 'location',
    contentFile: 'content/locations/manhattan.mdx',
    routeFile: 'app/locations/manhattan/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/brooklyn',
    title:
      'Oral Surgery in Brooklyn | Cost, Transparency, and How to Compare Options',
    description:
      'Understand oral surgery decisions in Brooklyn, including local pricing context, treatment transparency, and how to compare providers more carefully.',
    section: 'location',
    contentFile: 'content/locations/brooklyn.mdx',
    routeFile: 'app/locations/brooklyn/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/queens',
    title:
      'Oral Surgery in Queens | Cost Context, Provider Structure, and What to Ask',
    description:
      'Explore oral surgery decisions in Queens, including pricing variation, provider structure, and the questions that matter before treatment.',
    section: 'location',
    contentFile: 'content/locations/queens.mdx',
    routeFile: 'app/locations/queens/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/bronx',
    title:
      'Oral Surgery in the Bronx | Cost, Access, and Decision Guidance',
    description:
      'Understand oral surgery decisions in the Bronx, including practical access questions, pricing interpretation, and provider-comparison guidance.',
    section: 'location',
    contentFile: 'content/locations/bronx.mdx',
    routeFile: 'app/locations/bronx/page.tsx',
    priority: 0.72,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/staten-island',
    title:
      'Oral Surgery in Staten Island | Local Decision and Cost Context',
    description:
      'Understand oral surgery decisions in Staten Island, including local provider context, treatment transparency, and how to compare options more carefully.',
    section: 'location',
    contentFile: 'content/locations/staten-island.mdx',
    routeFile: 'app/locations/staten-island/page.tsx',
    priority: 0.7,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/questions/what-is-included-in-implant-cost',
    title:
      'What Is Included in Dental Implant Cost? | A New York Patient Guide',
    description:
      'Learn what a dental implant quote may or may not include in New York, from the implant post to the crown, imaging, grafting, and follow-up care.',
    section: 'question',
    contentFile: 'content/questions/what-is-included-in-implant-cost.mdx',
    routeFile: 'app/questions/what-is-included-in-implant-cost/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-long-does-wisdom-tooth-recovery-take',
    title:
      'How Long Does Wisdom Tooth Recovery Take? | What NYC Patients Should Know',
    description:
      'Understand what affects wisdom tooth recovery time, including extraction complexity, swelling, sedation, aftercare, and why recovery varies from case to case.',
    section: 'question',
    contentFile: 'content/questions/how-long-does-wisdom-tooth-recovery-take.mdx',
    routeFile: 'app/questions/how-long-does-wisdom-tooth-recovery-take/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
]

export function getRouteByPath(routePath: string): RouteEntry {
  const route = ROUTE_INDEX.find((entry) => entry.path === routePath)

  if (!route) {
    throw new Error(`Route not found in ROUTE_INDEX: ${routePath}`)
  }

  return route
}

export function getAllPublicRoutes(): RouteEntry[] {
  return ROUTE_INDEX.filter((entry) => entry.indexable)
}

export function absoluteUrl(routePath: string): string {
  return new URL(routePath, SITE_URL).toString()
}

export function resolveProjectPath(relativePath: string): string {
  return path.join(process.cwd(), relativePath)
}

export function getRouteLastModified(entry: RouteEntry): Date {
  const candidates = [entry.contentFile, entry.routeFile].filter(
    Boolean
  ) as string[]

  const mtimes = candidates
    .map((file) => resolveProjectPath(file))
    .filter((filePath) => fs.existsSync(filePath))
    .map((filePath) => fs.statSync(filePath).mtime)

  if (mtimes.length === 0) {
    return new Date()
  }

  return mtimes.sort((a, b) => b.getTime() - a.getTime())[0]
}

export function buildSitemapEntries() {
  return getAllPublicRoutes().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: getRouteLastModified(entry),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
