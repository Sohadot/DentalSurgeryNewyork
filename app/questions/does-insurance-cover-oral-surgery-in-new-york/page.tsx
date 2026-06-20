import InsuranceContent from '../../../content/questions/does-insurance-cover-oral-surgery-in-new-york.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/does-insurance-cover-oral-surgery-in-new-york')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function InsurancePage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Does Insurance Cover Oral Surgery in New York?"
      intro="Coverage depends on the procedure, the type of insurance, and how the claim is categorized. Here is what New York patients should clarify before treatment."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'Does insurance cover oral surgery in New York?',
            answer:
              'Whether insurance covers oral surgery in New York depends on the procedure, the type of insurance policy in place, and how the claim is categorized. Dental insurance often covers a portion of extractions and wisdom tooth removal, but may exclude implants or limit bone grafting coverage. Medical insurance may apply when a procedure has a documented medical necessity component. Sedation coverage is inconsistent across plans. Patients should contact their insurer before scheduling treatment to confirm coverage, ask about prior authorization requirements, and request a predetermination of benefits in writing.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Cost Index', path: '/cost-index' },
          { name: 'Does Insurance Cover Oral Surgery?', path: '/questions/does-insurance-cover-oral-surgery-in-new-york' },
        ]),
      ]}
    >
      <InsuranceContent />
    </PageShell>
  )
}
