import BoneGraftingCostContent from '../../../content/costs/bone-grafting.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/costs/bone-grafting')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function BoneGraftingCostPage() {
  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Bone Grafting Cost in New York"
      intro="Understand how graft type, material, membrane use, and sedation affect bone grafting cost in New York, from socket preservation through sinus lift procedures."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: 'Bone Grafting Cost', path: '/costs/bone-grafting' },
        ]),
      ]}
    >
      <BoneGraftingCostContent />
    </PageShell>
  )
}
