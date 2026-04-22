import LocationsIndexContent from '../../content/locations/index.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'

const route = getRouteByPath('/locations')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function LocationsIndexPage() {
  return (
    <PageShell
      eyebrow="Location Guides"
      title="Oral Surgery in New York City"
      intro="A borough-by-borough decision layer for understanding treatment context, pricing interpretation, and provider-comparison questions across New York City."
    >
      <LocationsIndexContent />
    </PageShell>
  )
}
