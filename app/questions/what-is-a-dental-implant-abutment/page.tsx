import AbutmentContent from '../../../content/questions/what-is-a-dental-implant-abutment.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-a-dental-implant-abutment')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsADentalImplantAbutmentPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is a Dental Implant Abutment?"
      intro="A dental implant abutment is the connector between the implant post placed in bone and the crown visible above the gumline. It is one of three components in a complete implant system, and its inclusion in cost estimates is a key transparency question."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is a dental implant abutment?',
            answer:
              'A dental implant abutment is the connector component that attaches to the implant post placed in bone and provides the structure on which the final crown or restoration is seated. It is one of three main components of a dental implant system — along with the implant post and the crown. Abutment placement may be included in the implant quote or billed separately, and patients should confirm inclusion when comparing cost estimates.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'What Is a Dental Implant Abutment?', path: '/questions/what-is-a-dental-implant-abutment' },
        ]),
      ]}
    >
      <AbutmentContent />
    </PageShell>
  )
}
