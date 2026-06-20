import OntologyContent from '../../content/core/ontology.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/ontology')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function OntologyPage() {
  return (
    <PageShell
      eyebrow="Category Framework"
      title="Oral Surgery Ontology"
      intro="The conceptual map of terms, procedures, and relationships that structure this reference. Understanding how concepts connect helps patients ask better questions and interpret information more accurately."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Oral Surgery Ontology', path: '/ontology' },
        ]),
      ]}
    >
      <OntologyContent />
    </PageShell>
  )
}
