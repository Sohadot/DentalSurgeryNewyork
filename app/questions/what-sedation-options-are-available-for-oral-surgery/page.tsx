import SedationOptionsContent from '../../../content/questions/what-sedation-options-are-available-for-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-sedation-options-are-available-for-oral-surgery')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function SedationOptionsPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Sedation Options for Oral Surgery in New York"
      intro="From local anesthesia to general anesthesia — what each type involves and what to clarify before treatment."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What sedation options are available for oral surgery in New York?',
            answer:
              'Sedation options for oral surgery in New York include local anesthesia, nitrous oxide, oral sedation, IV conscious sedation, and general anesthesia. The appropriate type depends on the procedure, patient factors, and provider credentials. In New York, providers who administer IV sedation or general anesthesia in outpatient settings must hold specific permits from the New York State Education Department. Patients should ask which sedation is recommended, who will administer it, what credentials apply, and whether sedation cost is included in the quoted price.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Oral Surgery Sedation', path: '/procedures/oral-surgery-sedation' },
          { name: 'Sedation Options for Oral Surgery', path: '/questions/what-sedation-options-are-available-for-oral-surgery' },
        ]),
      ]}
    >
      <SedationOptionsContent />
    </PageShell>
  )
}
