import ImplantsAfterDenturesContent from '../../../content/questions/is-it-possible-to-get-dental-implants-after-dentures.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/is-it-possible-to-get-dental-implants-after-dentures')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function ImplantsAfterDenturesPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Can You Get Dental Implants After Dentures?"
      intro="Dental implants are possible for many denture wearers, but bone loss from years without functional tooth roots is the key variable. Here is what New York patients should understand about the evaluation process and what determines candidacy."
      schemas={[
        buildFAQPageSchema([{
          question: 'Can you get dental implants after wearing dentures?',
          answer: 'Yes, in many cases. The key variable is how much bone resorption has occurred during the time dentures have been worn. Long-term denture wearers often have significant bone loss, which affects how many implants are feasible, where they can be placed, and whether bone grafting is required first. A CBCT scan is the starting point for evaluation. Options range from implant-supported overdentures (2–4 implants, removable) to fixed full-arch systems (All-on-4), depending on bone volume and patient goals.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'Implants After Dentures', path: '/questions/is-it-possible-to-get-dental-implants-after-dentures' },
        ]),
      ]}
    >
      <ImplantsAfterDenturesContent />
    </PageShell>
  )
}
