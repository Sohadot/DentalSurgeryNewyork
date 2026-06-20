import Content from '../../../content/questions/what-does-board-certified-mean-for-oral-surgeons.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-does-board-certified-mean-for-oral-surgeons')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatDoesBoardCertifiedMeanForOralSurgeonsPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Does Board Certified Mean for Oral Surgeons?"
      intro="Board certification by ABOMS is a voluntary credential beyond state licensure. It signals additional peer-assessed competency — and knowing how to verify it puts patients in a stronger position."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What does board certified mean for an oral surgeon?',
            answer:
              'Board certification by the American Board of Oral and Maxillofacial Surgery (ABOMS) means the surgeon has passed written and oral examinations, submitted documented case evidence, and completed an accredited residency — all beyond state licensure requirements. Certification must be renewed on a 10-year cycle.',
          },
          {
            question: 'Is board certification required to practice as an oral surgeon in New York?',
            answer:
              'No. State licensure is the legal requirement. Board certification by ABOMS is voluntary and represents an additional credential above licensure. A surgeon can legally practice without being board certified. Patients can verify certification status directly at aboms.org.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Choosing an Oral Surgeon', path: '/guides/choose-an-oral-surgeon' },
          { name: 'What Does Board Certified Mean?', path: '/questions/what-does-board-certified-mean-for-oral-surgeons' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
