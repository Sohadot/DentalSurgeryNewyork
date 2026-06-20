import Content from '../../../content/questions/what-is-a-dental-crown.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-a-dental-crown')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsADentalCrownPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is a Dental Crown and When Is One Placed After Oral Surgery?"
      intro="A dental crown is the tooth-shaped restoration placed over a dental implant or a compromised natural tooth. This page explains crown materials, timing after implant surgery, and what patients should know about the crown component of implant treatment."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is a dental crown?',
            answer:
              'A dental crown is a tooth-shaped restoration placed over a prepared natural tooth or a dental implant. In oral surgery contexts, crowns appear most commonly as the final prosthetic component of a dental implant, placed after osseointegration is complete. Crown materials include zirconia, porcelain-fused-to-metal, and lithium disilicate, selected based on tooth position and bite force.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'What Is a Dental Crown?', path: '/questions/what-is-a-dental-crown' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
