import OsseointegrationContent from '../../../content/questions/what-is-osseointegration-and-why-does-it-matter.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-osseointegration-and-why-does-it-matter')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function OsseointegrationPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Osseointegration?"
      intro="Osseointegration is the biological process by which jawbone bonds with an implant surface. It is the precondition for implant success and determines the timeline from placement to crown."
      schemas={[
        buildFAQPageSchema([{
          question: 'What is osseointegration and why does it matter for dental implants?',
          answer: 'Osseointegration is the direct structural bond between living bone and an implant surface. It is the precondition for implant stability and determines whether the implant can support a prosthetic crown. The process typically takes 2–6 months depending on jaw location, bone density, and whether bone grafting preceded placement.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'What Is Osseointegration?', path: '/questions/what-is-osseointegration-and-why-does-it-matter' },
        ]),
      ]}
    >
      <OsseointegrationContent />
    </PageShell>
  )
}
