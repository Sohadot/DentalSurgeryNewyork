import ManhattanContent from '../../../content/locations/manhattan.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/locations/manhattan')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ManhattanPage() {
  return (
    <PageShell
      eyebrow="Location Guide"
      title="Oral Surgery in Manhattan"
      intro="A local decision layer for comparing treatment structure, pricing context, and transparency expectations in Manhattan."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'NYC Borough Guides', path: '/locations' },
          { name: 'Manhattan', path: '/locations/manhattan' },
        ]),
      ]}
    >
      <ManhattanContent />
    </PageShell>
  )
}
