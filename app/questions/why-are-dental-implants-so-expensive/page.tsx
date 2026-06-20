import CostContent from '../../../content/questions/why-are-dental-implants-so-expensive.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/why-are-dental-implants-so-expensive')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhyAreDentalImplantsSoExpensivePage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Why Are Dental Implants So Expensive?"
      intro="Dental implants are expensive because the treatment involves multiple separately billed components, often plus imaging, sedation, and bone grafting — not just the surgical post. Understanding what drives the cost is the first step toward comparing estimates accurately."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'Why are dental implants so expensive?',
            answer:
              'Dental implants involve multiple separately billed components — the implant post, abutment, and crown — often plus imaging, sedation, bone grafting, and follow-up. Low advertised prices typically refer to the surgical post only. In New York, provider overhead, surgical complexity, and materials all affect cost. A written itemized estimate covering all components is the most reliable way to understand and compare the true treatment cost.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implant Cost', path: '/costs/dental-implants' },
          { name: 'Why Are Dental Implants So Expensive?', path: '/questions/why-are-dental-implants-so-expensive' },
        ]),
      ]}
    >
      <CostContent />
    </PageShell>
  )
}
