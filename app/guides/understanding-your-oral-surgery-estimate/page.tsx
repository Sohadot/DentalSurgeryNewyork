import EstimateContent from '../../../content/guides/understanding-your-oral-surgery-estimate.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/guides/understanding-your-oral-surgery-estimate')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function OralSurgeryEstimatePage() {
  return (
    <PageShell
      eyebrow="Patient Guide"
      title="Understanding Your Oral Surgery Estimate"
      intro="Estimates vary widely in format and scope. Here is what a complete written estimate should contain, and what to ask when something appears to be missing."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Cost Index', path: '/cost-index' },
          { name: 'Understanding Your Oral Surgery Estimate', path: '/guides/understanding-your-oral-surgery-estimate' },
        ]),
      ]}
    >
      <EstimateContent />
    </PageShell>
  )
}
