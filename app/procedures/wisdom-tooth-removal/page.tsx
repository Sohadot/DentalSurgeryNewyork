import WisdomToothRemovalContent from '../../../content/procedures/wisdom-tooth-removal.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/procedures/wisdom-tooth-removal')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function WisdomToothRemovalPage() {
  return (
    <PageShell
      eyebrow="Procedure Guide"
      title="Wisdom Tooth Removal in New York City"
      intro="A reference-grade guide to extraction complexity, sedation structure, cost drivers, and the questions that matter before treatment."
    >
      <WisdomToothRemovalContent />
    </PageShell>
  )
}
