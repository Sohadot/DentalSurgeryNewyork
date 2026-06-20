import PrepContent from '../../../content/questions/how-do-i-prepare-for-wisdom-tooth-removal.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-do-i-prepare-for-wisdom-tooth-removal')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function HowToPrepareForWisdomToothRemovalPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Do I Prepare for Wisdom Tooth Removal?"
      intro="Preparation for wisdom tooth removal depends on the complexity of the extraction and what sedation is planned. This page covers the categories of preparation that typically apply and the questions worth asking before the procedure."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How do I prepare for wisdom tooth removal?',
            answer:
              'Preparation depends on whether sedation is involved. For procedures using IV sedation, patients must fast for a provider-specified period, arrange for a responsible adult to drive them home, disclose all medications, and plan recovery time. For extractions under local anesthesia only, requirements are typically less restrictive. In both cases, patients should ask about fasting instructions, medications to pause or continue, and what to stock at home for recovery.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Wisdom Tooth Removal', path: '/procedures/wisdom-tooth-removal' },
          { name: 'How Do I Prepare for Wisdom Tooth Removal?', path: '/questions/how-do-i-prepare-for-wisdom-tooth-removal' },
        ]),
      ]}
    >
      <PrepContent />
    </PageShell>
  )
}
