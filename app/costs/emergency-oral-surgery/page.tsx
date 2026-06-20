import EmergencyOralSurgeryCostContent from '../../../content/costs/emergency-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/costs/emergency-oral-surgery')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function EmergencyOralSurgeryCostPage() {
  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Emergency Oral Surgery Cost in New York"
      intro="Understand urgent appointment fees, imaging, sedation, and the cost structure of emergency oral surgery situations in New York."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Emergency Oral Surgery', path: '/procedures/emergency-oral-surgery' },
          { name: 'Emergency Oral Surgery Cost', path: '/costs/emergency-oral-surgery' },
        ]),
      ]}
    >
      <EmergencyOralSurgeryCostContent />
    </PageShell>
  )
}
