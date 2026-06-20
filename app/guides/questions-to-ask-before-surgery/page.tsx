import QuestionsBeforeSurgeryContent from '../../../content/guides/questions-to-ask-before-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/guides/questions-to-ask-before-surgery')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function QuestionsBeforeSurgeryPage() {
  return (
    <PageShell
      eyebrow="Decision Guide"
      title="Questions to Ask Before Oral Surgery in New York"
      intro="A practical decision framework for understanding treatment scope, anesthesia, cost structure, follow-up, and provider transparency before commitment."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Questions to Ask Before Surgery', path: '/guides/questions-to-ask-before-surgery' },
        ]),
      ]}
    >
      <QuestionsBeforeSurgeryContent />
    </PageShell>
  )
}
