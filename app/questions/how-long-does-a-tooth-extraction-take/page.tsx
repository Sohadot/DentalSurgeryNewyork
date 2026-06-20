import Content from '../../../content/questions/how-long-does-a-tooth-extraction-take.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-long-does-a-tooth-extraction-take')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function HowLongDoesAToothExtractionTakePage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Long Does a Tooth Extraction Take?"
      intro="The time depends on whether the procedure is simple or surgical, plus the position and anatomy of the tooth. Here is what affects appointment length."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How long does a simple tooth extraction take?',
            answer:
              'A simple extraction typically takes 20 to 40 minutes total. The extraction itself usually takes 5 to 15 minutes; the remaining time covers preparation, anesthesia, and post-extraction instructions.',
          },
          {
            question: 'How long does a surgical tooth extraction take?',
            answer:
              'Surgical extractions — for impacted, broken, or multi-rooted teeth — typically take 45 to 90 minutes depending on impaction depth, root anatomy, and bone density.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
          { name: 'How Long Does a Tooth Extraction Take?', path: '/questions/how-long-does-a-tooth-extraction-take' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
