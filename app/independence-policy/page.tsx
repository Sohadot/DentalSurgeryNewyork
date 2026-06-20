import IndependencePolicyContent from '../../content/core/independence-policy.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/independence-policy')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function IndependencePolicyPage() {
  return (
    <PageShell
      eyebrow="Policy"
      title="Editorial Independence Policy"
      intro="How the site approaches commercial separation, provider references, and patient-first guidance."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Independence Policy', path: '/independence-policy' },
        ]),
      ]}
    >
      <IndependencePolicyContent />
    </PageShell>
  )
}
