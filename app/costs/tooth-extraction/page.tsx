import ToothExtractionCostContent from '../../../content/costs/tooth-extraction.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/costs/tooth-extraction')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ToothExtractionCostPage() {
  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Tooth Extraction Cost in New York"
      intro="Understand how simple vs. surgical extraction, sedation, imaging, and socket preservation affect total extraction cost in New York."
    >
      <ToothExtractionCostContent />
    </PageShell>
  )
}
