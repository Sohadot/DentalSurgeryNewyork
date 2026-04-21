import fs from 'node:fs'
import path from 'node:path'
import { SITE_URL } from './site-config'

export type RouteEntry = {
  path: string
  title: string
  description: string
  section: 'core' | 'procedure' | 'cost' | 'guide' | 'home'
  contentFile?: string
  routeFile: string
  priority: number
  changeFrequency:
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
  indexable: boolean
}

export const ROUTE_INDEX: RouteEntry[] = [
  {
    path: '/',
    title: 'Independent Oral Surgery Guidance for New York City',
    description:
      'Understand procedures, cost structures, surgeon-selection questions, and treatment decision factors through an editorially independent oral surgery reference built for New York patients.',
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
      'Dental Implants in New York | Procedure Guide, Cost Factors, and What to Ask',
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
    path: '/guides/choose-an-oral-surgeon',
    title:
      'How to Choose an Oral Surgeon in New York | Credentials, Transparency, and What to Ask',
    description:
      'Learn how to choose an oral surgeon in New York by understanding credentials, written estimates, anesthesia questions, and transparency standards.',
    section: 'guide',
    contentFile: 'content/guides/choose-an-oral-surgeon.mdx',
    routeFile: 'app/guides/choose-an-oral-surgeon/page.tsx',
    priority: 0.85,
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
