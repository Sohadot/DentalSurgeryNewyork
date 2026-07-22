import BoneGraftingContent from '../../../content/procedures/bone-grafting.mdx'
import PageShell from '../../../components/page-shell'
import RelatedQuestions from '../../../components/related-questions'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/procedures/bone-grafting')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function BoneGraftingPage() {
  return (
    <PageShell
      eyebrow="Procedure Guide"
      title="Bone Grafting for Oral Surgery in New York"
      intro="A reference-grade guide to socket preservation, ridge augmentation, and sinus lift procedures — including graft types, cost factors, and questions to ask before treatment."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Procedures', path: '/procedures' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
        ]),
      ]}
    >
      <BoneGraftingContent />
    <RelatedQuestions parentPath="/procedures/bone-grafting" />
    </PageShell>
  )
}
