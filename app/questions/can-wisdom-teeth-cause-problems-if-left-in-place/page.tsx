import WisdomTeethProblemsContent from '../../../content/questions/can-wisdom-teeth-cause-problems-if-left-in-place.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/can-wisdom-teeth-cause-problems-if-left-in-place')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WisdomTeethProblemsPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Can Wisdom Teeth Cause Problems If Left in Place?"
      intro="Whether to remove wisdom teeth depends on their position, pathology risk, and symptoms. Here is what New York patients should understand about the problems wisdom teeth can cause and how they are evaluated."
      schemas={[
        buildFAQPageSchema([{
          question: 'Can wisdom teeth cause problems if left in place?',
          answer: 'Yes. Partially erupted wisdom teeth create openings where bacteria accumulate, causing pericoronitis (gum infection), decay on the wisdom tooth and adjacent second molar, and cleaning difficulties. Impacted wisdom teeth can cause cysts, adjacent tooth resorption, and pressure pain. Fully erupted wisdom teeth carry lower but ongoing risk. Whether removal is indicated depends on imaging and clinical assessment of each case.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Wisdom Tooth Removal', path: '/procedures/wisdom-tooth-removal' },
          { name: 'Wisdom Teeth Problems', path: '/questions/can-wisdom-teeth-cause-problems-if-left-in-place' },
        ]),
      ]}
    >
      <WisdomTeethProblemsContent />
    </PageShell>
  )
}
