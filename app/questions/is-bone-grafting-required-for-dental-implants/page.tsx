import BoneGraftingRequiredContent from '../../../content/questions/is-bone-grafting-required-for-dental-implants.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/is-bone-grafting-required-for-dental-implants')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function BoneGraftingRequiredPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Is Bone Grafting Required for Dental Implants?"
      intro="Not every implant patient needs bone grafting. Here is what determines whether it applies to your case."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'Is bone grafting required for dental implants?',
            answer:
              'Not every dental implant patient requires bone grafting. Whether grafting is needed depends on the amount and quality of bone remaining at the implant site. Patients with adequate bone volume may proceed without grafting. Those who have experienced bone loss following extraction, gum disease, or other factors may need grafting before or at the time of implant placement. A provider should evaluate bone volume with imaging during treatment planning.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Patient Questions', path: '/questions/what-is-included-in-implant-cost' },
          { name: 'Is Bone Grafting Required for Dental Implants?', path: '/questions/is-bone-grafting-required-for-dental-implants' },
        ]),
      ]}
    >
      <BoneGraftingRequiredContent />
    </PageShell>
  )
}
