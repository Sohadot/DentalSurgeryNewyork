import RisksContent from '../../../content/questions/what-are-the-risks-of-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-are-the-risks-of-oral-surgery')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatAreRisksOfOralSurgeryPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Are the Risks of Oral Surgery?"
      intro="Oral surgery carries recognized risk categories — from bleeding and infection to nerve involvement and sedation response. Understanding these risks, the factors that influence them, and the questions to ask before treatment is part of informed decision-making."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What are the common risks of oral surgery?',
            answer:
              'Common risks include bleeding, post-operative infection, dry socket after extractions, nerve involvement resulting in temporary or persistent numbness, adverse responses to sedation or anesthesia, and — for implant or grafting procedures — failure to integrate. Risk level is influenced by procedure complexity, the patient\'s health history, provider credentials, and how thoroughly pre-operative assessment was conducted.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Emergency Oral Surgery', path: '/procedures/emergency-oral-surgery' },
          { name: 'What Are the Risks of Oral Surgery?', path: '/questions/what-are-the-risks-of-oral-surgery' },
        ]),
      ]}
    >
      <RisksContent />
    </PageShell>
  )
}
