import ImplantTimelineContent from '../../../content/questions/how-long-does-dental-implant-treatment-take.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-long-does-dental-implant-treatment-take')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ImplantTimelinePage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Long Does Dental Implant Treatment Take?"
      intro="The timeline varies by case. Here is what determines the duration and what to ask your provider."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How long does dental implant treatment take?',
            answer:
              'Dental implant treatment in New York does not follow a single fixed timeline. Treatment may span several months to over a year depending on whether extraction, bone grafting, and an osseointegration period are required before the final restoration. A patient who needs extraction and grafting before implant placement will have a longer timeline than one with adequate bone who proceeds directly to implant surgery. Patients should ask their provider for a timeline estimate specific to their case, including whether bone grafting is planned and how long the integration period is expected to take.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'How Long Does Implant Treatment Take?', path: '/questions/how-long-does-dental-implant-treatment-take' },
        ]),
      ]}
    >
      <ImplantTimelineContent />
    </PageShell>
  )
}
