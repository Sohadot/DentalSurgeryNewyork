import Content from '../../../content/questions/how-do-i-care-for-my-dental-implant.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-do-i-care-for-my-dental-implant')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function DentalImplantCarePage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Do I Care for My Dental Implant?"
      intro="Long-term implant health depends on daily cleaning, professional maintenance, and early response to inflammation. This guide explains practical care expectations for New York patients."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How do I care for my dental implant?',
            answer:
              'Dental implant care includes twice-daily brushing, daily cleaning around the implant crown, regular professional maintenance, monitoring for bleeding or mobility, and managing risk factors such as smoking, uncontrolled diabetes, and teeth grinding.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'How Do I Care for My Dental Implant?', path: route.path },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
