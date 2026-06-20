import AllOn4Content from '../../../content/questions/what-is-all-on-4-and-how-does-it-differ-from-traditional-implants.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-all-on-4-and-how-does-it-differ-from-traditional-implants')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function AllOn4Page() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is All-on-4 and How Does It Differ from Traditional Implants?"
      intro="All-on-4 uses four implants to support a full arch of fixed teeth — a different approach from single-tooth implants and from removable dentures. Here is what New York patients should understand before evaluating full-arch options."
      schemas={[
        buildFAQPageSchema([{
          question: 'What is All-on-4 and how does it differ from traditional dental implants?',
          answer: 'All-on-4 is a full-arch implant system that uses four strategically placed implants — two vertical at the front and two angled at the back — to support a complete fixed prosthesis per jaw. Unlike traditional single-tooth implants, which replace individual teeth one-to-one, All-on-4 replaces all teeth in an arch with four implants. Unlike conventional dentures, the All-on-4 prosthesis is fixed and non-removable, transmits functional load to the jawbone, and does not require adhesive.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'What Is All-on-4?', path: '/questions/what-is-all-on-4-and-how-does-it-differ-from-traditional-implants' },
        ]),
      ]}
    >
      <AllOn4Content />
    </PageShell>
  )
}
