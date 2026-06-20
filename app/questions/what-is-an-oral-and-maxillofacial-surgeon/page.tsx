import OMFSContent from '../../../content/questions/what-is-an-oral-and-maxillofacial-surgeon.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-an-oral-and-maxillofacial-surgeon')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsAnOralAndMaxillofacialSurgeonPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is an Oral and Maxillofacial Surgeon?"
      intro="An oral and maxillofacial surgeon is a dental specialist trained in a hospital-based surgical residency covering tooth extractions, implant placement, bone grafting, jaw surgery, and anesthesia. Understanding their scope and credentials helps patients ask better questions before treatment."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is an oral and maxillofacial surgeon?',
            answer:
              'An oral and maxillofacial surgeon (OMFS) is a dental specialist trained in a hospital-based surgical residency of four to six years, covering tooth extractions, implant placement, bone grafting, jaw surgery, facial trauma, and anesthesia administration. Their scope extends beyond general dentistry to surgical procedures involving the mouth, jaws, and facial structures. In New York, OMFS residency training typically includes the permits required for IV sedation and general anesthesia.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'How to Choose an Oral Surgeon', path: '/guides/choose-an-oral-surgeon' },
          { name: 'What Is an Oral and Maxillofacial Surgeon?', path: '/questions/what-is-an-oral-and-maxillofacial-surgeon' },
        ]),
      ]}
    >
      <OMFSContent />
    </PageShell>
  )
}
