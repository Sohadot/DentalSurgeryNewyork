import fs from 'node:fs'
import path from 'node:path'
import {
  ROUTE_INDEX,
  type RouteEntry,
  type RouteSection,
  resolveProjectPath,
} from '../lib/content-index'

const errors: string[] = []

const governedContentSections = new Set<RouteSection>([
  'procedure',
  'cost',
  'guide',
  'location',
  'question',
])

const minWordsBySection: Record<RouteSection, number> = {
  home: 0,
  core: 120,
  commercial: 0,
  procedure: 400,
  cost: 400,
  guide: 250,
  location: 550,
  question: 220,
}

const minInternalLinksBySection: Record<RouteSection, number> = {
  home: 0,
  core: 0,
  commercial: 0,
  procedure: 3,
  cost: 4,
  guide: 3,
  location: 5,
  question: 3,
}

const placeholderPatterns = [
  /\bTODO\b/i,
  /\bTBD\b/i,
  /\blorem ipsum\b/i,
  /\bcoming soon\b/i,
  /\bplaceholder\b/i,
]

const highRiskClaimPatterns = [
  /\bbest oral surgeons?\b/i,
  /\bguaranteed (coverage|approval|results?|success|pricing|price)\b/i,
  /\b100%\s+(coverage|approval|success|guarantee[sd]?)\b/i,
  /\brisk[-\s]?free\b/i,
  /\bno[-\s]?risk\b/i,
]

const contentOptionalRoutes = new Set(['/', '/procedures', '/partners'])

function walkFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    return entry.isDirectory() ? walkFiles(fullPath) : [fullPath]
  })
}

function normalizeProjectPath(filePath: string): string {
  return path.relative(process.cwd(), filePath).replaceAll(path.sep, '/')
}

function routePathFromAppPage(routeFile: string): string {
  if (routeFile === 'app/page.tsx') return '/'

  const withoutPrefix = routeFile.replace(/^app\//, '').replace(/\/page\.tsx$/, '')
  return withoutPrefix === '' ? '/' : `/${withoutPrefix}`
}

function wordCount(raw: string): number {
  return raw.replace(/```[\s\S]*?```/g, ' ').match(/\b[\w'-]+\b/g)?.length ?? 0
}

function internalLinks(raw: string): string[] {
  const matches = raw.matchAll(/\[[^\]]+\]\((\/[^)#?\s]+)(?:[#?][^)]+)?\)/g)
  return Array.from(matches, (match) => match[1])
}

function validateMetadata(entry: RouteEntry) {
  if (entry.priority < 0 || entry.priority > 1) {
    errors.push(`Route priority must be between 0 and 1: ${entry.path}`)
  }

  if (entry.indexable && entry.priority === 0) {
    errors.push(`Indexable route must have non-zero priority: ${entry.path}`)
  }
}

function validateContent(entry: RouteEntry, routePaths: Set<string>) {
  if (!entry.contentFile) return

  const contentPath = resolveProjectPath(entry.contentFile)
  if (!fs.existsSync(contentPath)) return

  const raw = fs.readFileSync(contentPath, 'utf8')
  const words = wordCount(raw)
  const links = internalLinks(raw)

  const minWords = minWordsBySection[entry.section]
  if (words < minWords) {
    errors.push(
      `Content below governed word floor (${words}/${minWords}): ${entry.contentFile}`
    )
  }

  const minLinks = minInternalLinksBySection[entry.section]
  if (links.length < minLinks) {
    errors.push(
      `Insufficient internal links (${links.length}/${minLinks}): ${entry.contentFile}`
    )
  }

  for (const link of links) {
    if (!routePaths.has(link)) {
      errors.push(`Broken internal content link in ${entry.contentFile}: ${link}`)
    }
  }

  for (const pattern of placeholderPatterns) {
    if (pattern.test(raw)) {
      errors.push(`Placeholder language detected in ${entry.contentFile}: ${pattern}`)
    }
  }

  const lines = raw.split(/\r?\n/)
  for (const [index, line] of lines.entries()) {
    for (const pattern of highRiskClaimPatterns) {
      if (pattern.test(line) && !/\b(not|no|does not|do not|cannot|without)\b/i.test(line)) {
        errors.push(
          `High-risk absolute claim detected in ${entry.contentFile}:${index + 1}: ${pattern}`
        )
      }
    }
  }
}

const routePaths = new Set(ROUTE_INDEX.map((entry) => entry.path))
const routeFiles = new Set(ROUTE_INDEX.map((entry) => entry.routeFile))
const contentFiles = new Set(
  ROUTE_INDEX.map((entry) => entry.contentFile).filter(Boolean) as string[]
)

for (const entry of ROUTE_INDEX) {
  validateMetadata(entry)

  if (
    governedContentSections.has(entry.section) &&
    !entry.contentFile &&
    !contentOptionalRoutes.has(entry.path)
  ) {
    errors.push(`Governed route missing contentFile: ${entry.path}`)
  }

  validateContent(entry, routePaths)
}

const appPages = walkFiles(resolveProjectPath('app'))
  .filter((file) => file.endsWith(`${path.sep}page.tsx`))
  .map(normalizeProjectPath)

for (const page of appPages) {
  if (!routeFiles.has(page)) {
    errors.push(`App page exists outside ROUTE_INDEX governance: ${page}`)
  }

  const derivedPath = routePathFromAppPage(page)
  if (!routePaths.has(derivedPath)) {
    errors.push(`App page has no matching route path in ROUTE_INDEX: ${page}`)
  }
}

const mdxFiles = walkFiles(resolveProjectPath('content'))
  .filter((file) => file.endsWith('.mdx'))
  .map(normalizeProjectPath)

for (const file of mdxFiles) {
  if (!contentFiles.has(file)) {
    errors.push(`Content file exists outside ROUTE_INDEX governance: ${file}`)
  }
}

if (errors.length > 0) {
  console.error('Asset governance validation failed.\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Asset governance validation passed.')
