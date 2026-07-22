import ChooseSurgeonContent from '../../../content/guides/choose-an-oral-surgeon.mdx'
import PageShell from '../../../components/page-shell'
import RelatedQuestions from '../../../components/related-questions'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/guides/choose-an-oral-surgeon')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ChooseOralSurgeonPage() {
  return (
    <PageShell
      eyebrow="Decision Guide"
      title="How to Choose an Oral Surgeon in New York"
      intro="A disciplined framework for evaluating credentials, transparency, treatment structure, and decision quality."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'How to Choose an Oral Surgeon', path: '/guides/choose-an-oral-surgeon' },
        ]),
      ]}
    >
      <ChooseSurgeonContent />
    <RelatedQuestions parentPath="/guides/choose-an-oral-surgeon" />
    </PageShell>
  )
}
