import EmergencyOralSurgeryContent from '../../../content/procedures/emergency-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/procedures/emergency-oral-surgery')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function EmergencyOralSurgeryPage() {
  return (
    <PageShell
      eyebrow="Procedure Guide"
      title="Emergency Oral Surgery in New York"
      intro="A reference-grade guide to recognizing urgent oral situations, understanding when to seek emergency care, and what to expect when time matters."
    >
      <EmergencyOralSurgeryContent />
    </PageShell>
  )
}
