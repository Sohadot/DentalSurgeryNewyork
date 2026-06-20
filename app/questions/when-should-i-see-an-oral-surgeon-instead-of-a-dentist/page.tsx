import WhenSeeOralSurgeonContent from '../../../content/questions/when-should-i-see-an-oral-surgeon-instead-of-a-dentist.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/when-should-i-see-an-oral-surgeon-instead-of-a-dentist')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhenSeeOralSurgeonPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="When Should I See an Oral Surgeon Instead of a Dentist?"
      intro="General dentists handle many dental surgical procedures. An oral maxillofacial surgeon is the appropriate specialist when cases involve impacted teeth, IV sedation, bone grafting, systemic complexity, or jaw conditions beyond general dentistry scope."
      schemas={[
        buildFAQPageSchema([{
          question: 'When should I see an oral surgeon instead of a general dentist?',
          answer: 'An oral surgeon is typically more appropriate when the procedure involves impacted teeth, IV sedation or general anesthesia, bone grafting, complex implant placement near anatomical structures, dental infections with systemic involvement, or jaw-related conditions such as fractures, cysts, or TMJ disorders. General dentists handle routine simple extractions and many basic surgical procedures, but complex surgical scope or anesthesia requirements point toward an oral maxillofacial surgeon.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'How to Choose an Oral Surgeon', path: '/guides/choose-an-oral-surgeon' },
          { name: 'When to See an Oral Surgeon', path: '/questions/when-should-i-see-an-oral-surgeon-instead-of-a-dentist' },
        ]),
      ]}
    >
      <WhenSeeOralSurgeonContent />
    </PageShell>
  )
}
