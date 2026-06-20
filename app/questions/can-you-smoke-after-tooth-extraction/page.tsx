import Content from '../../../content/questions/can-you-smoke-after-tooth-extraction.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/can-you-smoke-after-tooth-extraction')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function CanYouSmokeAfterToothExtractionPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Can You Smoke After Tooth Extraction?"
      intro="Smoking after an extraction significantly increases the risk of dry socket — a painful complication caused when the blood clot in the socket is disrupted. Here is what patients should know."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How long should I wait to smoke after a tooth extraction?',
            answer:
              'Most oral surgeons recommend waiting at least 48 to 72 hours after a simple extraction. For surgical extractions or impacted wisdom teeth, 5 to 7 days is a safer minimum. The longer the abstinence, the lower the risk of dry socket and delayed healing.',
          },
          {
            question: 'Why does smoking cause dry socket after tooth extraction?',
            answer:
              'Smoking causes dry socket through two mechanisms: the suction created by inhaling can physically dislodge the blood clot in the extraction socket, and nicotine constricts blood vessels, reducing circulation needed for clot formation and tissue healing.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Tooth Extraction', path: '/procedures/tooth-extraction' },
          { name: 'Can You Smoke After Tooth Extraction?', path: '/questions/can-you-smoke-after-tooth-extraction' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
