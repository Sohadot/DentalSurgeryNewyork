import CategoryLanguageContent from '../../content/core/category-language.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/category-language')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function CategoryLanguagePage() {
  return (
    <PageShell
      eyebrow="Category Framework"
      title="Oral Surgery Category Language"
      intro="How key terms are defined and used across this reference — the vocabulary layer that makes precise patient decision-making possible."
      schemas={[
        buildMedicalWebPageSchema({ title: route.title, description: route.description, path: route.path }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Oral Surgery Ontology', path: '/ontology' },
          { name: 'Category Language', path: '/category-language' },
        ]),
      ]}
    >
      <CategoryLanguageContent />
    </PageShell>
  )
}
