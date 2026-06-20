import MethodologyContent from '../../content/core/methodology.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/methodology')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function MethodologyPage() {
  return (
    <PageShell
      eyebrow="Methodology"
      title="Our Methodology"
      intro="How this reference approaches procedure explanation, cost guidance, and patient decision support."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Methodology', path: '/methodology' },
        ]),
      ]}
    >
      <MethodologyContent />
    </PageShell>
  )
}
