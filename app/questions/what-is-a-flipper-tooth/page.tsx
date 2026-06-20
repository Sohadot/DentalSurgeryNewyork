import Content from '../../../content/questions/what-is-a-flipper-tooth.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-a-flipper-tooth')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsAFlipperToothPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is a Flipper Tooth and When Is One Used After an Extraction?"
      intro="A flipper tooth is a removable partial denture used to replace a visible tooth temporarily while an implant site heals. This page explains when flippers are appropriate, what they cost in New York, and how they compare to fixed temporary options."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is a flipper tooth?',
            answer:
              'A flipper tooth is a removable acrylic partial denture used as a temporary replacement for a missing tooth. It is most commonly placed during the healing period between a tooth extraction and a dental implant crown — typically three to six months. It clasps onto adjacent teeth and is inserted and removed by the patient. It is not a long-term solution.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
          { name: 'What Is a Flipper Tooth?', path: '/questions/what-is-a-flipper-tooth' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
