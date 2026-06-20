import CBCTContent from '../../../content/questions/what-is-a-cbct-scan.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-a-cbct-scan')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsACBCTScanPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is a CBCT Scan?"
      intro="A CBCT (cone beam computed tomography) scan is a three-dimensional imaging technique used to assess bone volume, nerve proximity, and sinus anatomy before dental implants, bone grafting, or complex extractions. Understanding when it is used and how it affects cost helps patients ask better pre-treatment questions."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is a CBCT scan in oral surgery?',
            answer:
              'A CBCT scan is a three-dimensional imaging technique that provides significantly more detail than a standard dental X-ray, allowing providers to measure bone height and width, assess nerve proximity, and plan implant placement with precision. It is commonly used before dental implants, bone grafting, sinus lifts, and complex extractions. The scan fee is typically billed separately from the surgical fee.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: 'What Is a CBCT Scan?', path: '/questions/what-is-a-cbct-scan' },
        ]),
      ]}
    >
      <CBCTContent />
    </PageShell>
  )
}
