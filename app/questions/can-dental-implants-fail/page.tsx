import ImplantFailContent from '../../../content/questions/can-dental-implants-fail.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/can-dental-implants-fail')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ImplantFailPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Can Dental Implants Fail?"
      intro="Dental implants have a high success rate, but failure is possible. Here is what patients in New York should understand about risk factors and what to ask before treatment."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'Can dental implants fail?',
            answer:
              'Yes, dental implants can fail. Early failure occurs when the implant does not integrate with the surrounding bone during the healing phase. Late failure can occur after initial integration and is often associated with infection around the implant, bone loss, or excessive mechanical stress. Risk factors include insufficient bone volume at the implant site, uncontrolled systemic health conditions, smoking, and poor implant placement or prosthetic design. Thorough pre-treatment assessment — including imaging and a full health history review — is part of managing implant failure risk.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'Can Dental Implants Fail?', path: '/questions/can-dental-implants-fail' },
        ]),
      ]}
    >
      <ImplantFailContent />
    </PageShell>
  )
}
