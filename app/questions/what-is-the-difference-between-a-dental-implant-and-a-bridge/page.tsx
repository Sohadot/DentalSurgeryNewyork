import ImplantVsBridgeContent from '../../../content/questions/what-is-the-difference-between-a-dental-implant-and-a-bridge.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-the-difference-between-a-dental-implant-and-a-bridge')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function ImplantVsBridgePage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Dental Implant vs. Bridge: What’s the Difference?"
      intro="A dental implant and a bridge both replace a missing tooth, but they work differently, involve different procedures, and have different long-term implications for adjacent teeth and jawbone. Understanding the distinction is essential before committing to either."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is the difference between a dental implant and a bridge?',
            answer:
              'A dental implant places a titanium post in the jawbone that integrates with bone and supports a standalone crown without involving adjacent teeth. A bridge spans the gap using a prosthetic tooth supported by crowns on adjacent teeth, which must be filed down. Implants preserve jawbone, do not affect neighboring teeth, and typically last longer, but cost more and require a healing period. Bridges cost less initially but alter adjacent teeth permanently and allow underlying bone to resorb over time.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'Dental Implant vs. Bridge', path: '/questions/what-is-the-difference-between-a-dental-implant-and-a-bridge' },
        ]),
      ]}
    >
      <ImplantVsBridgeContent />
    </PageShell>
  )
}
