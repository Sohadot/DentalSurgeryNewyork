import MissingToothContent from '../../../content/questions/what-happens-if-you-dont-replace-a-missing-tooth.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-happens-if-you-dont-replace-a-missing-tooth')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function MissingToothPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Happens If You Don't Replace a Missing Tooth?"
      intro="The effects of a missing tooth extend beyond appearance. Here is what patients in New York should understand about bone loss, shifting teeth, and future treatment options."
      schemas={[
        buildFAQPageSchema([
          {
            question: "What happens if you don't replace a missing tooth?",
            answer:
              'When a tooth is not replaced, the jawbone at the extraction site gradually loses density through a process called resorption. Neighboring teeth may shift or tilt into the gap, and the opposing tooth may over-erupt. Over time, these changes can reduce the amount of bone available for a future dental implant, potentially requiring additional grafting procedures that would not have been necessary if treatment had begun earlier. The rate and severity of bone loss varies by patient and location in the mouth.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Bone Grafting', path: '/procedures/bone-grafting' },
          { name: "What Happens If You Don't Replace a Missing Tooth?", path: '/questions/what-happens-if-you-dont-replace-a-missing-tooth' },
        ]),
      ]}
    >
      <MissingToothContent />
    </PageShell>
  )
}
