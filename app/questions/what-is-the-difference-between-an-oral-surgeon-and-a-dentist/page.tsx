import OralSurgeonVsDentistContent from '../../../content/questions/what-is-the-difference-between-an-oral-surgeon-and-a-dentist.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-the-difference-between-an-oral-surgeon-and-a-dentist')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function OralSurgeonVsDentistPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Oral Surgeon vs. Dentist in New York"
      intro="Understanding the credential difference helps you ask the right questions before any procedure is scheduled."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is the difference between an oral surgeon and a dentist?',
            answer:
              'An oral and maxillofacial surgeon (OMFS) is a dental specialist who has completed dental school followed by a hospital-based surgical residency of four to six years, including advanced training in surgical procedures and anesthesia. A general dentist may perform routine extractions but typically does not hold the same surgical training. For procedures involving complex impactions, bone grafting, implant placement, or IV sedation and general anesthesia, an oral surgeon is usually involved. In New York, providers who administer IV sedation or general anesthesia in outpatient settings must hold specific permits from the New York State Education Department.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Decision Guides', path: '/guides/choose-an-oral-surgeon' },
          { name: 'Oral Surgeon vs. Dentist', path: '/questions/what-is-the-difference-between-an-oral-surgeon-and-a-dentist' },
        ]),
      ]}
    >
      <OralSurgeonVsDentistContent />
    </PageShell>
  )
}
