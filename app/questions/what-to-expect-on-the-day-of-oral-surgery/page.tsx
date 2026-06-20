import DayOfSurgeryContent from '../../../content/questions/what-to-expect-on-the-day-of-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-to-expect-on-the-day-of-oral-surgery')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function DayOfSurgeryPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What to Expect on the Day of Oral Surgery"
      intro="Most oral surgery appointments follow a recognizable sequence. Here is what typically happens from arrival through discharge at a New York oral surgery office."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What should I expect on the day of oral surgery?',
            answer:
              'On the day of oral surgery, patients typically arrive, confirm consent documentation, and have their medical history reviewed. Clinical staff then prepare the patient for the procedure, which may involve placing an IV line and monitoring equipment if sedation is planned. The procedure is performed under the agreed anesthesia type. Following the procedure, patients are monitored in a recovery area until they are stable, then discharged with written instructions covering expected symptoms, medications, diet restrictions, and when to contact the office. Patients receiving sedation must arrange transportation in advance and may not drive themselves.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Procedures', path: '/procedures' },
          { name: 'What to Expect on the Day of Surgery', path: '/questions/what-to-expect-on-the-day-of-oral-surgery' },
        ]),
      ]}
    >
      <DayOfSurgeryContent />
    </PageShell>
  )
}
