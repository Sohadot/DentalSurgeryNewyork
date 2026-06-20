import ToothExtractionCostContent from '../../../content/costs/tooth-extraction.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

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
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
          { name: 'Tooth Extraction Cost', path: '/costs/tooth-extraction' },
        ]),
      ]}
    >
      <ToothExtractionCostContent />
    </PageShell>
  )
}
