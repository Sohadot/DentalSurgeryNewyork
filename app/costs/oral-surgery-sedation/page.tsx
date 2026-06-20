import OralSurgerySedationCostContent from '../../../content/costs/oral-surgery-sedation.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/costs/oral-surgery-sedation')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function OralSurgerySedationCostPage() {
  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Oral Surgery Sedation Cost in New York"
      intro="Understand what sedation adds to procedure fees in New York oral surgery, how billing varies by type and duration, and what to clarify before agreeing to treatment."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Oral Surgery Sedation', path: '/procedures/oral-surgery-sedation' },
          { name: 'Sedation Cost', path: '/costs/oral-surgery-sedation' },
        ]),
      ]}
    >
      <OralSurgerySedationCostContent />
    </PageShell>
  )
}
