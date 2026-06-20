import BoneGraftingContent from '../../../content/questions/how-does-bone-grafting-work.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-does-bone-grafting-work')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function HowDoesBoneGraftingWorkPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Does Bone Grafting Work?"
      intro="Bone grafting rebuilds jaw bone volume using graft material, creating the foundation needed for dental implant placement. Understanding the procedure types, graft materials, and healing timeline is essential before agreeing to a staged implant treatment plan."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How does bone grafting work in oral surgery?',
            answer:
              'Bone grafting places material at a bone-deficient site — from the patient, a donor, animal source, or synthetic origin — which integrates with existing bone over several months to create a stable implant foundation. Common procedures include socket preservation at extraction, ridge augmentation for a narrowed jaw ridge, and sinus lifts for insufficient upper jaw bone height. Healing before implant placement typically takes 3–9 months depending on graft type.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: 'How Does Bone Grafting Work?', path: '/questions/how-does-bone-grafting-work' },
        ]),
      ]}
    >
      <BoneGraftingContent />
    </PageShell>
  )
}
