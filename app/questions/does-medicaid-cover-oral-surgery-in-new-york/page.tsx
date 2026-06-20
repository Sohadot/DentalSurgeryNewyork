import MedicaidContent from '../../../content/questions/does-medicaid-cover-oral-surgery-in-new-york.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/does-medicaid-cover-oral-surgery-in-new-york')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function DoesMedicaidCoverOralSurgeryPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Does Medicaid Cover Oral Surgery in New York?"
      intro="New York State Medicaid covers certain oral surgery procedures for adult enrollees, including emergency dental services and tooth extractions. Dental implants are generally excluded. Coverage depends on the procedure, managed care enrollment, and prior authorization requirements."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'Does Medicaid cover oral surgery in New York?',
            answer:
              'New York State Medicaid covers certain oral surgery procedures for adult enrollees, including emergency dental services and tooth extractions — including surgical extractions of impacted teeth — when medically necessary. Dental implants are generally not covered under standard adult Medicaid dental benefits. Coverage varies by procedure and managed care plan. Prior authorization may be required. Patients should verify coverage directly with their plan or the Medicaid program before treatment.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Does Insurance Cover Oral Surgery?', path: '/questions/does-insurance-cover-oral-surgery-in-new-york' },
          { name: 'Does Medicaid Cover Oral Surgery in New York?', path: '/questions/does-medicaid-cover-oral-surgery-in-new-york' },
        ]),
      ]}
    >
      <MedicaidContent />
    </PageShell>
  )
}
