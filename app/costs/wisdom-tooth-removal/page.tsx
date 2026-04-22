import WisdomToothRemovalCostContent from '../../../content/costs/wisdom-tooth-removal.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/costs/wisdom-tooth-removal')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function WisdomToothRemovalCostPage() {
  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Wisdom Tooth Removal Cost in NYC"
      intro="A patient-first guide to how extraction complexity, sedation, imaging, and aftercare can change total cost."
    >
      <WisdomToothRemovalCostContent />
    </PageShell>
  )
}
