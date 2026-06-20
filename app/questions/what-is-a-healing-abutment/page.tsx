import Content from '../../../content/questions/what-is-a-healing-abutment.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-a-healing-abutment')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsAHealingAbutmentPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is a Healing Abutment?"
      intro="A healing abutment is placed on the implant post after osseointegration to shape the gum tissue before the final crown is placed. It is a standard step in the two-stage implant protocol."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is a healing abutment?',
            answer:
              'A healing abutment — also called a healing cap — is a temporary component placed on top of the dental implant post after initial bone integration. It holds open the gum tissue and shapes it into the correct contour for the final abutment and crown that will be placed later.',
          },
          {
            question: 'Do I need a healing abutment for a dental implant?',
            answer:
              'It depends on the implant protocol. Two-stage surgery involves a separate procedure to place the healing abutment after osseointegration. One-stage protocols place it at the same time as the implant post, eliminating the need for a second procedure.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'What Is a Dental Implant Abutment?', path: '/questions/what-is-a-dental-implant-abutment' },
          { name: 'What Is a Healing Abutment?', path: '/questions/what-is-a-healing-abutment' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
