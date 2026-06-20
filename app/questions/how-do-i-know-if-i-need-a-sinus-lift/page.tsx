import SinusLiftContent from '../../../content/questions/how-do-i-know-if-i-need-a-sinus-lift.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-do-i-know-if-i-need-a-sinus-lift')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function SinusLiftPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Do I Know If I Need a Sinus Lift?"
      intro="A sinus lift is needed when there is insufficient bone height in the upper jaw for implant placement. Here is how that determination is made and what to ask your provider."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How do I know if I need a sinus lift?',
            answer:
              'Whether a sinus lift is needed can only be determined through clinical examination and imaging — typically a cone beam CT scan that shows the three-dimensional anatomy of the jaw and the position of the maxillary sinuses. Patients with tooth loss in the upper back jaw, significant bone resorption, or naturally thin bone in that area are more likely to require a sinus lift before dental implant placement. A provider who recommends or rules out a sinus lift without adequate imaging should be asked to explain the basis of that assessment.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: 'How Do I Know If I Need a Sinus Lift?', path: '/questions/how-do-i-know-if-i-need-a-sinus-lift' },
        ]),
      ]}
    >
      <SinusLiftContent />
    </PageShell>
  )
}
