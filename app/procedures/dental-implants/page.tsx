import DentalImplantsContent from '../../../content/procedures/dental-implants.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/procedures/dental-implants')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function DentalImplantsPage() {
  return (
    <PageShell
      eyebrow="Procedure Guide"
      title="Dental Implants in New York"
      intro="A reference-grade overview of implant treatment, cost structure, and decision factors for New York patients."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Procedures', path: '/procedures' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
        ]),
      ]}
    >
      <DentalImplantsContent />
    </PageShell>
  )
}
