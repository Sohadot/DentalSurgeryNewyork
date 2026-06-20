import EditorialUpdatesContent from '../../content/core/editorial-updates.mdx'
import PageShell from '../../components/page-shell'
import { getRouteByPath } from '../../lib/content-index'
import { buildMetadata } from '../../lib/metadata'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/editorial-updates')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function EditorialUpdatesPage() {
  return (
    <PageShell
      eyebrow="Editorial Log"
      title="Editorial Updates & Review Log"
      intro="A transparent log of content additions, policy changes, and governance decisions on dentalsurgerynewyork.com."
      schemas={[
        buildMedicalWebPageSchema({
          title: route.title,
          description: route.description,
          path: route.path,
        }),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Editorial Updates', path: '/editorial-updates' },
        ]),
      ]}
    >
      <EditorialUpdatesContent />
    </PageShell>
  )
}
