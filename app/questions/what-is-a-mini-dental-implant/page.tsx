import Content from '../../../content/questions/what-is-a-mini-dental-implant.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-a-mini-dental-implant')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function MiniDentalImplantPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is a Mini Dental Implant?"
      intro="Mini dental implants have narrower dimensions than standard implants and are used for specific treatment goals. This page explains where they fit and what patients should ask."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is a mini dental implant?',
            answer:
              'A mini dental implant is a narrow dental implant, typically under 3 millimeters in diameter. Mini implants are most often used for denture stabilization when bone volume, health factors, or treatment goals make standard implants less suitable.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'Mini Dental Implant', path: route.path },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
