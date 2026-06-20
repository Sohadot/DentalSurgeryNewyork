import AfterImplantContent from '../../../content/questions/what-happens-after-dental-implant-placement.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-happens-after-dental-implant-placement')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function AfterImplantPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Happens After Dental Implant Placement?"
      intro="Implant placement is one phase in a multi-phase process. Understanding osseointegration, the restorative timeline, and what to watch for helps New York patients set accurate expectations."
      schemas={[
        buildFAQPageSchema([{
          question: 'What happens after dental implant placement?',
          answer: 'After implant placement, the site heals over 1–2 weeks, followed by an osseointegration period of 2–6 months during which the bone integrates with the implant surface. Once stability is confirmed, the restorative phase begins — abutment placement, crown fabrication, and final crown delivery. Total time from placement to final crown is typically 3–8 months, longer if bone grafting preceded placement.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'After Implant Placement', path: '/questions/what-happens-after-dental-implant-placement' },
        ]),
      ]}
    >
      <AfterImplantContent />
    </PageShell>
  )
}
