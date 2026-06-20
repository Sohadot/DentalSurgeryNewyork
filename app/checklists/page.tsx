import ChecklistsContent from '../../content/guides/checklists.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/checklists')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ChecklistsPage() {
  return (
    <PageShell
      eyebrow="Patient Checklists"
      title="Oral Surgery Consultation Checklists"
      intro="Practical patient-first checklists for oral surgery consultations in New York. Use these to prepare questions before treatment, review estimates, or navigate urgent situations."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Consultation Checklists', path: '/checklists' },
        ]),
      ]}
    >
      <ChecklistsContent />
    </PageShell>
  )
}
