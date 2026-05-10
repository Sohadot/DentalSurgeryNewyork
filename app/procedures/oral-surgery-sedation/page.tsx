import OralSurgerySedationContent from '../../../content/procedures/oral-surgery-sedation.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/procedures/oral-surgery-sedation')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function OralSurgerySedationPage() {
  return (
    <PageShell
      eyebrow="Procedure Guide"
      title="Oral Surgery Sedation in New York"
      intro="A reference-grade guide to sedation types, provider credentials, cost structure, and recovery expectations for oral surgery patients in New York."
    >
      <OralSurgerySedationContent />
    </PageShell>
  )
}
