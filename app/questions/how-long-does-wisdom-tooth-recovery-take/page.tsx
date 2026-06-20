import WisdomToothRecoveryContent from '../../../content/questions/how-long-does-wisdom-tooth-recovery-take.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-long-does-wisdom-tooth-recovery-take')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function WisdomToothRecoveryPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Long Does Wisdom Tooth Recovery Take?"
      intro="Recovery time depends on complexity, sedation, and individual healing — here is how to understand what applies to your case."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How long does wisdom tooth recovery take?',
            answer:
              'Wisdom tooth recovery does not follow a single fixed timeline. Duration depends on extraction complexity, whether the tooth was impacted, how many teeth were removed, sedation type used, and individual healing response. A routine single extraction may feel substantially better within a few days. A more complex surgical removal of multiple impacted teeth typically involves a longer recovery period. Patients should ask their provider what recovery window to expect for their specific case rather than relying on a general estimate.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Wisdom Tooth Removal', path: '/procedures/wisdom-tooth-removal' },
          { name: 'How Long Does Recovery Take?', path: '/questions/how-long-does-wisdom-tooth-recovery-take' },
        ]),
      ]}
    >
      <WisdomToothRecoveryContent />
    </PageShell>
  )
}
