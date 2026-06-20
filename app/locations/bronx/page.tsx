import BronxContent from '../../../content/locations/bronx.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/locations/bronx')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function BronxPage() {
  return (
    <PageShell
      eyebrow="Location Guide"
      title="Oral Surgery in the Bronx"
      intro="A practical local layer for understanding access, pricing interpretation, and treatment-comparison questions in the Bronx."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'NYC Borough Guides', path: '/locations' },
          { name: 'The Bronx', path: '/locations/bronx' },
        ]),
      ]}
    >
      <BronxContent />
    </PageShell>
  )
}
