import Content from '../../../content/questions/what-is-the-cost-of-full-mouth-reconstruction.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-the-cost-of-full-mouth-reconstruction')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsTheCostOfFullMouthReconstructionPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is the Cost of Full-Mouth Reconstruction?"
      intro="Full-mouth reconstruction is a multi-phase treatment plan with highly variable cost. Understanding the components that drive the total helps patients compare providers on equal terms."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How much does full-mouth reconstruction cost in New York?',
            answer:
              'Full-mouth reconstruction in New York typically costs $30,000 to $90,000 or more depending on the number of implants, bone grafting requirements, crown and prosthetic materials, and provider credentials and facility costs.',
          },
          {
            question: 'Does dental insurance cover full-mouth reconstruction?',
            answer:
              'Dental insurance rarely covers more than a small fraction of full-mouth reconstruction costs. Annual coverage maximums are typically $1,500 to $2,000, which covers only a minor portion of a multi-implant treatment plan.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Full-Mouth Reconstruction', path: '/questions/what-is-full-mouth-reconstruction' },
          { name: 'Cost of Full-Mouth Reconstruction', path: '/questions/what-is-the-cost-of-full-mouth-reconstruction' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
