import ToothExtractionContent from '../../../content/procedures/tooth-extraction.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/procedures/tooth-extraction')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ToothExtractionPage() {
  return (
    <PageShell
      eyebrow="Procedure Guide"
      title="Tooth Extraction in New York"
      intro="A reference-grade guide to simple and surgical extraction, cost structure, what often follows removal, and the questions that matter before treatment."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Procedures', path: '/procedures' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
        ]),
      ]}
    >
      <ToothExtractionContent />
    </PageShell>
  )
}
