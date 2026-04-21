import DisclaimerContent from '../../content/core/disclaimer.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'

const route = getRouteByPath('/disclaimer')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function DisclaimerPage() {
  return (
    <PageShell
      eyebrow="Notice"
      title="Disclaimer"
      intro="Important limits on how this site should be used."
    >
      <DisclaimerContent />
    </PageShell>
  )
}
