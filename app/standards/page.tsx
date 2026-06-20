import StandardsContent from '../../content/core/standards.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/standards')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function StandardsPage() {
  return (
    <PageShell
      eyebrow="Decision Standards"
      title="New York Oral Surgery Decision Standards"
      intro="The patient decision framework applied across this site — when to seek a specialist, how to interpret cost estimates, sedation questions, and emergency guidance. Not medical advice."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Decision Standards', path: '/standards' },
        ]),
      ]}
    >
      <StandardsContent />
    </PageShell>
  )
}
