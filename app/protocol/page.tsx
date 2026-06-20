import ProtocolContent from '../../content/core/protocol.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/protocol')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function ProtocolPage() {
  return (
    <PageShell
      eyebrow="Patient Framework"
      title="Oral Surgery Navigation Protocol"
      intro="A structured map of the oral surgery process in New York — the phases, decision points, and documentation standards that matter at each stage."
      schemas={[
        buildMedicalWebPageSchema({ title: route.title, description: route.description, path: route.path }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Oral Surgery Navigation Protocol', path: '/protocol' },
        ]),
      ]}
    >
      <ProtocolContent />
    </PageShell>
  )
}
