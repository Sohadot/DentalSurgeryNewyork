import AssetReadinessContent from '../../content/core/asset-readiness.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/asset-readiness')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function AssetReadinessPage() {
  return (
    <PageShell
      eyebrow="Governance"
      title="Asset Readiness & Governance"
      intro="A transparent summary of the validation gates, evidence posture, cost boundaries, and commercial limits behind this New York oral surgery reference."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Asset Readiness', path: '/asset-readiness' },
        ]),
      ]}
    >
      <AssetReadinessContent />
    </PageShell>
  )
}
