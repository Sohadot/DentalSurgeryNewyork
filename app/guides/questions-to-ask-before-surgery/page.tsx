import QuestionsBeforeSurgeryContent from '../../../content/guides/questions-to-ask-before-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

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
    >
      <QuestionsBeforeSurgeryContent />
    </PageShell>
  )
}
