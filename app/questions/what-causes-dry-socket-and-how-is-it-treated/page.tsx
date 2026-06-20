import DrySocketContent from '../../../content/questions/what-causes-dry-socket-and-how-is-it-treated.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-causes-dry-socket-and-how-is-it-treated')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function DrySocketPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Causes Dry Socket and How Is It Treated?"
      intro="Dry socket is the most common complication after tooth extraction. Understanding the risk factors, how to recognize it, and how providers manage it helps New York patients prepare and respond appropriately."
      schemas={[
        buildFAQPageSchema([{
          question: 'What causes dry socket after tooth extraction?',
          answer: 'Dry socket (alveolar osteitis) occurs when the blood clot in an extraction socket is dislodged, dissolves, or fails to form — exposing underlying bone and nerve to the oral environment. Risk factors include smoking, suction actions such as drinking through a straw, oral contraceptives, difficult surgical extractions, and failure to follow post-operative care instructions. Symptoms typically appear 3–5 days after extraction as worsening pain after initial improvement.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
          { name: 'What Causes Dry Socket?', path: '/questions/what-causes-dry-socket-and-how-is-it-treated' },
        ]),
      ]}
    >
      <DrySocketContent />
    </PageShell>
  )
}
