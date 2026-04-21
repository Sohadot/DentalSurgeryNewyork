import DentalImplantCostContent from '../../../content/costs/dental-implants.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/costs/dental-implants')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function DentalImplantCostPage() {
  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Dental Implant Cost in New York"
      intro="Understand the structure behind implant pricing rather than relying on headline numbers alone."
    >
      <DentalImplantCostContent />
    </PageShell>
  )
}
