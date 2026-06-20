import Content from '../../../content/questions/how-do-i-know-if-my-extraction-site-is-healing-normally.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-do-i-know-if-my-extraction-site-is-healing-normally')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function ExtractionSiteHealingPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Do I Know If My Extraction Site Is Healing Normally?"
      intro="Extraction healing follows a predictable timeline. Knowing what is normal at each stage — and what is not — helps patients recognize when to wait and when to call their surgeon."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How do I know if my extraction site is healing normally?',
            answer:
              'Normal extraction healing includes clot formation on day 1, swelling peak at 48–72 hours, and gradual soft tissue closure by days 4–7. Red flags include severe pain starting 3–5 days after extraction (dry socket), fever, swelling that increases after day 3, pus or discharge, or numbness that does not resolve within 24–48 hours.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
          { name: 'Is My Extraction Site Healing Normally?', path: '/questions/how-do-i-know-if-my-extraction-site-is-healing-normally' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
