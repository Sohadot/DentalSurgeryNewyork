import Content from '../../../content/questions/how-are-dental-implants-priced-per-arch.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-are-dental-implants-priced-per-arch')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function ImplantsPricedPerArchPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Are Dental Implants Priced Per Arch for Full-Arch Replacement?"
      intro="Full-arch implant treatment is priced as a per-arch total, not per implant. This page breaks down what that fee typically covers, what is commonly excluded, and how to evaluate a full-arch quote in New York."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How are dental implants priced per arch?',
            answer:
              'Full-arch dental implant treatment is quoted as a per-arch fee covering implant posts, abutments, temporary prosthesis, and the final arch. In New York, All-on-4 treatment with a final zirconia arch typically ranges from $25,000 to $45,000 or more per arch. Common exclusions include CBCT imaging, extractions of remaining teeth, and bone grafting. Request a written itemized breakdown before committing.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'What Is All-on-4?', path: '/questions/what-is-all-on-4-and-how-does-it-differ-from-traditional-implants' },
          { name: 'How Are Implants Priced Per Arch?', path: '/questions/how-are-dental-implants-priced-per-arch' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
