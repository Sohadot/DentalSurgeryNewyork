import AccuracyPolicyContent from '../../content/core/accuracy-policy.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'

const route = getRouteByPath('/accuracy-policy')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function AccuracyPolicyPage() {
  return (
    <PageShell
      eyebrow="Policy"
      title="Accuracy Policy"
      intro="How the site thinks about accuracy, revision discipline, and the limits of informational healthcare content."
    >
      <AccuracyPolicyContent />
    </PageShell>
  )
}
