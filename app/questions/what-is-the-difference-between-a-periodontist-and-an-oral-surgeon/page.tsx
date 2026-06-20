import PeriodontistContent from '../../../content/questions/what-is-the-difference-between-a-periodontist-and-an-oral-surgeon.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-the-difference-between-a-periodontist-and-an-oral-surgeon')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function PeriodontistVsOralSurgeonPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Periodontist vs. Oral Surgeon: What’s the Difference?"
      intro="Both periodontists and oral surgeons place implants in New York. Their training pathways, sedation credentials, and scope of practice differ in ways that matter for complex cases."
      schemas={[
        buildFAQPageSchema([{
          question: 'What is the difference between a periodontist and an oral surgeon?',
          answer: 'A periodontist specializes in gum tissue, supporting bone structures, and periodontal disease treatment. An oral and maxillofacial surgeon (OMFS) completes a 4–6 year hospital surgical residency covering jaw and facial surgery, anesthesia administration, and medical-dental crossover cases. Both may place implants, but their training pathways, credential structures, and scope of practice differ significantly.'
        }])
        ,
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'How to Choose an Oral Surgeon', path: '/guides/choose-an-oral-surgeon' },
          { name: 'Periodontist vs. Oral Surgeon', path: '/questions/what-is-the-difference-between-a-periodontist-and-an-oral-surgeon' },
        ]),
      ]}
    >
      <PeriodontistContent />
    </PageShell>
  )
}
