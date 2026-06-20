import BoneResorptionContent from '../../../content/questions/what-is-bone-resorption-and-why-does-it-happen.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-bone-resorption-and-why-does-it-happen')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function BoneResorptionPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Bone Resorption and Why Does It Happen?"
      intro="Bone resorption is the shrinking of jawbone that begins after a tooth is lost. Understanding why it happens and how fast it progresses helps New York patients make better decisions about the timing of tooth replacement and bone grafting."
      schemas={[
        buildFAQPageSchema([{
          question: 'What is bone resorption and why does it happen after tooth loss?',
          answer: 'Bone resorption is the loss of alveolar bone density and volume that occurs when a tooth is removed and not replaced. The jawbone is maintained by functional stimulation from tooth roots. Without a tooth, that stimulation disappears and the body gradually breaks down bone at the site. Significant width loss can occur within the first 6 months, and resorption continues at a slower rate for years. This is why socket preservation at extraction and timely implant consideration matter for patients planning tooth replacement.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: 'What Is Bone Resorption?', path: '/questions/what-is-bone-resorption-and-why-does-it-happen' },
        ]),
      ]}
    >
      <BoneResorptionContent />
    </PageShell>
  )
}
