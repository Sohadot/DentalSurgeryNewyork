import QueensContent from '../../../content/locations/queens.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/locations/queens')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function QueensPage() {
  return (
    <PageShell
      eyebrow="Location Guide"
      title="Oral Surgery in Queens"
      intro="A Queens-focused decision guide covering cost context, provider structure, and what patients should clarify before treatment."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'NYC Borough Guides', path: '/locations' },
          { name: 'Queens', path: '/locations/queens' },
        ]),
      ]}
    >
      <QueensContent />
    </PageShell>
  )
}
