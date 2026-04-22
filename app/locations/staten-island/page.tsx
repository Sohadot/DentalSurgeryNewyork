import StatenIslandContent from '../../../content/locations/staten-island.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/locations/staten-island')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function StatenIslandPage() {
  return (
    <PageShell
      eyebrow="Location Guide"
      title="Oral Surgery in Staten Island"
      intro="A Staten Island decision guide focused on local treatment context, cost structure, and how to compare options with clarity."
    >
      <StatenIslandContent />
    </PageShell>
  )
}
