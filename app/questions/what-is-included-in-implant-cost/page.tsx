import ImplantCostQuestionContent from '../../../content/questions/what-is-included-in-implant-cost.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-included-in-implant-cost')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ImplantCostQuestionPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Included in Dental Implant Cost?"
      intro="A focused explanation of what an implant quote may include, omit, or split into separate charges."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is included in dental implant cost?',
            answer:
              'A dental implant quote may refer to one component of treatment rather than the complete replacement. A full implant pathway may include the implant post, abutment, and final crown, as well as consultation, imaging, extraction if needed, bone grafting if needed, and follow-up care. Patients should ask for a written itemized estimate that specifies exactly what is and is not included in the quoted price, since two providers may quote the same procedure at very different levels of completeness.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implant Cost', path: '/costs/dental-implants' },
          { name: 'What Is Included in Implant Cost?', path: '/questions/what-is-included-in-implant-cost' },
        ]),
      ]}
    >
      <ImplantCostQuestionContent />
    </PageShell>
  )
}
