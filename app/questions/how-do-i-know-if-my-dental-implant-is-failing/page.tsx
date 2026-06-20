import ImplantFailingContent from '../../../content/questions/how-do-i-know-if-my-dental-implant-is-failing.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-do-i-know-if-my-dental-implant-is-failing')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function ImplantFailingPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Do I Know If My Dental Implant Is Failing?"
      intro="Dental implant failure is uncommon but real. Understanding the warning signs during osseointegration and after successful integration helps New York patients respond appropriately and seek evaluation at the right time."
      schemas={[
        buildFAQPageSchema([{
          question: 'How do I know if my dental implant is failing?',
          answer: 'Signs of early implant failure (during osseointegration) include implant mobility, pain that worsens after day 3–4, persistent swelling, or discharge from the site. Signs of late failure include bleeding or tenderness around the implant, visible bone or implant surface exposure, and pain in a previously asymptomatic implant. Any perceptible movement in an implant warrants immediate provider evaluation.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'How Do I Know If My Implant Is Failing?', path: '/questions/how-do-i-know-if-my-dental-implant-is-failing' },
        ]),
      ]}
    >
      <ImplantFailingContent />
    </PageShell>
  )
}
