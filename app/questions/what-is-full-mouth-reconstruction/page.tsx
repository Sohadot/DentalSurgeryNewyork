import FMRContent from '../../../content/questions/what-is-full-mouth-reconstruction.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-full-mouth-reconstruction')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsFullMouthReconstructionPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Full Mouth Reconstruction?"
      intro="Full mouth reconstruction is a coordinated treatment plan — not a single surgery — that addresses multiple missing, damaged, or failing teeth through a staged sequence of oral surgery, bone grafting, implant placement, and restorative dentistry."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is full mouth reconstruction?',
            answer:
              'Full mouth reconstruction is a coordinated treatment plan that addresses multiple missing, damaged, or failing teeth through a staged sequence typically involving extractions, bone grafting, dental implant placement, and restorative dentistry. It differs from a single implant in scope, cost complexity, and the number of providers involved. Written itemization at each stage is essential for understanding the full treatment cost.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'What Is Full Mouth Reconstruction?', path: '/questions/what-is-full-mouth-reconstruction' },
        ]),
      ]}
    >
      <FMRContent />
    </PageShell>
  )
}
