import AnesthesiaCredentialsContent from '../../../content/guides/anesthesia-credentials-explained.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/guides/anesthesia-credentials-explained')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function AnesthesiaCredentialsExplainedPage() {
  return (
    <PageShell
      eyebrow="Decision Guide"
      title="Anesthesia Credentials Explained for Oral Surgery"
      intro="A patient-first guide to understanding sedation roles, qualifications, monitoring, and why anesthesia structure matters in oral surgery decisions."
    >
      <AnesthesiaCredentialsContent />
    </PageShell>
  )
}
