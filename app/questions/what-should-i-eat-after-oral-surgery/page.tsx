import DietContent from '../../../content/questions/what-should-i-eat-after-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-should-i-eat-after-oral-surgery')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatShouldIEatAfterOralSurgeryPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Should I Eat After Oral Surgery?"
      intro="What you eat in the days following oral surgery affects healing, bleeding control, clot stability, and the risk of complications like dry socket. This page covers the general principles that apply after most oral surgery procedures."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What should I eat after oral surgery?',
            answer:
              'In the first 24 hours after oral surgery, eat cold or room-temperature soft foods only — yogurt, smoothies (no straw), applesauce, broth, and mashed potatoes. Avoid straws, alcohol, smoking, hot foods, and anything hard or crunchy. In days 2–7, slightly more variety is tolerable but avoid small particulate foods like seeds, rice, and nuts that can lodge in extraction sockets. Provider-specific instructions should take precedence.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
          { name: 'What Should I Eat After Oral Surgery?', path: '/questions/what-should-i-eat-after-oral-surgery' },
        ]),
      ]}
    >
      <DietContent />
    </PageShell>
  )
}
