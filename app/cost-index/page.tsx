import CostIndexContent from '../../content/guides/cost-index.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/cost-index')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function CostIndexPage() {
  return (
    <PageShell
      eyebrow="Cost Index"
      title="New York Oral Surgery Cost Index"
      intro="Directional cost ranges for oral surgery procedures in New York City. Not a quote and not a treatment recommendation — a consolidated reference for patients preparing for consultation or reviewing an estimate."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Cost Index', path: '/cost-index' },
        ]),
      ]}
    >
      <CostIndexContent />
    </PageShell>
  )
}
