import DecisionCompassContent from '../../content/core/decision-compass.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/decision-compass')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function DecisionCompassPage() {
  return (
    <PageShell
      eyebrow="Patient Tool"
      title="Oral Surgery Decision Compass"
      intro="Structured decision paths for common oral surgery situations — implant candidacy, bone graft need, sedation selection, and emergency recognition. Use this before or after a consultation to sharpen the right questions."
      schemas={[
        buildMedicalWebPageSchema({ title: route.title, description: route.description, path: route.path }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Decision Compass', path: '/decision-compass' },
        ]),
      ]}
    >
      <DecisionCompassContent />
    </PageShell>
  )
}
