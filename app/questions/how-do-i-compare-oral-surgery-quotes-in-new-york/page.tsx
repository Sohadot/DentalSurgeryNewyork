import CompareQuotesContent from '../../../content/questions/how-do-i-compare-oral-surgery-quotes-in-new-york.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-do-i-compare-oral-surgery-quotes-in-new-york')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function CompareQuotesPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How to Compare Oral Surgery Quotes in New York"
      intro="A quote comparison is only meaningful when you understand what each quote actually covers."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How do I compare oral surgery quotes in New York?',
            answer:
              'Comparing oral surgery quotes in New York requires understanding what each quote includes, not just the total price. Two quotes for the same procedure may cover very different scopes of treatment. Ask each provider for an itemized written estimate that lists whether imaging, sedation, extraction, grafting, the final restoration, and follow-up care are included or billed separately. Once you have itemized estimates, you can compare what is covered rather than totals alone.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Cost Index', path: '/cost-index' },
          { name: 'How to Compare Oral Surgery Quotes', path: '/questions/how-do-i-compare-oral-surgery-quotes-in-new-york' },
        ]),
      ]}
    >
      <CompareQuotesContent />
    </PageShell>
  )
}
