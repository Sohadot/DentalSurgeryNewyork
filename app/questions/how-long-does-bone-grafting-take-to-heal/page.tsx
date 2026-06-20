import Content from '../../../content/questions/how-long-does-bone-grafting-take-to-heal.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-long-does-bone-grafting-take-to-heal')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function BoneGraftingHealingPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Long Does Bone Grafting Take to Heal?"
      intro="Bone graft healing depends on procedure type, graft material, patient health, and implant timing. This guide explains the practical healing windows patients commonly need to understand."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How long does bone grafting take to heal before an implant?',
            answer:
              'Socket preservation commonly requires four to six months before implant placement. Larger ridge augmentation may require six to nine months, and lateral sinus lift grafts may require eight to twelve months. Imaging is used to confirm readiness.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: 'Bone Grafting Healing Time', path: route.path },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
