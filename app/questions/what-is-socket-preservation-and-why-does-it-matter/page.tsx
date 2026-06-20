import SocketPreservationContent from '../../../content/questions/what-is-socket-preservation-and-why-does-it-matter.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-socket-preservation-and-why-does-it-matter')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function SocketPreservationPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Socket Preservation and Why Does It Matter?"
      intro="Socket preservation is a preventive procedure performed at the time of extraction. Here is what New York patients should understand before any tooth is removed."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is socket preservation and why does it matter?',
            answer:
              'Socket preservation is a procedure performed at the time of tooth extraction that places bone grafting material into the empty socket to slow post-extraction bone loss. It matters because the jawbone naturally resorbs after a tooth is removed, and significant bone loss can reduce or eliminate the option for dental implant placement later without additional and more extensive grafting. Socket preservation is a preventive step intended to maintain bone volume while the patient decides on a tooth replacement strategy.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: 'What Is Socket Preservation?', path: '/questions/what-is-socket-preservation-and-why-does-it-matter' },
        ]),
      ]}
    >
      <SocketPreservationContent />
    </PageShell>
  )
}
