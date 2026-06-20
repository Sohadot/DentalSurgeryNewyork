import Content from '../../../content/questions/how-long-does-a-dental-implant-last.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-long-does-a-dental-implant-last')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function HowLongDoesADentalImplantLastPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Long Does a Dental Implant Last?"
      intro="Dental implants are described as permanent, but the implant post and the crown have different expected lifespans. Here is what the evidence shows and what affects longevity."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How long does a dental implant last?',
            answer:
              'The titanium implant post can last decades — survival rates of 90 to 95 percent or higher at 10 years are well-documented. The crown placed over the implant typically lasts 10 to 15 years before replacement. Longevity depends heavily on oral hygiene, maintenance visits, smoking status, and systemic health conditions.',
          },
          {
            question: 'What causes a dental implant to fail after many years?',
            answer:
              'Late implant failure is most commonly caused by peri-implantitis — a bacterial infection that causes progressive bone loss around the implant until it loses structural support. Regular professional maintenance and early detection of peri-implant disease significantly reduce this risk.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'How Long Does a Dental Implant Last?', path: '/questions/how-long-does-a-dental-implant-last' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
