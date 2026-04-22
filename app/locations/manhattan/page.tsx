import ManhattanContent from '../../../content/locations/manhattan.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/locations/manhattan')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ManhattanPage() {
  return (
    <PageShell
      eyebrow="Location Guide"
      title="Oral Surgery in Manhattan"
      intro="A local decision layer for comparing treatment structure, pricing context, and transparency expectations in Manhattan."
    >
      <ManhattanContent />
    </PageShell>
  )
}
