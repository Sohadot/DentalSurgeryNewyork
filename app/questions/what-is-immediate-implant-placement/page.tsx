import Content from '../../../content/questions/what-is-immediate-implant-placement.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-immediate-implant-placement')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsImmediateImplantPlacementPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Immediate Implant Placement?"
      intro="Immediate implant placement means placing the implant post on the same day as tooth extraction, rather than waiting for the socket to heal. When it is indicated and when it is not."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is immediate implant placement?',
            answer:
              'Immediate implant placement is the technique of placing a dental implant into the extraction socket on the same day the tooth is removed. It requires adequate bone volume, absence of active infection, and sufficient primary stability. It is not appropriate for every extraction case.',
          },
          {
            question: 'Does immediate implant placement mean I get a tooth the same day?',
            answer:
              'Not necessarily. Immediate placement refers to when the implant post is placed, not when the final crown is delivered. Some cases involve a temporary crown placed the same day (immediate loading), but osseointegration still takes 3 to 6 months regardless of when the post was placed.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'What Is Immediate Implant Placement?', path: '/questions/what-is-immediate-implant-placement' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
