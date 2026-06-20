import BrooklynContent from '../../../content/locations/brooklyn.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/locations/brooklyn')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function BrooklynPage() {
  return (
    <PageShell
      eyebrow="Location Guide"
      title="Oral Surgery in Brooklyn"
      intro="A Brooklyn-specific guide to cost interpretation, treatment transparency, and how to compare oral surgery options more intelligently."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'NYC Borough Guides', path: '/locations' },
          { name: 'Brooklyn', path: '/locations/brooklyn' },
        ]),
      ]}
    >
      <BrooklynContent />
    </PageShell>
  )
}
