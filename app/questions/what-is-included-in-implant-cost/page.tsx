import ImplantCostQuestionContent from '../../../content/questions/what-is-included-in-implant-cost.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/questions/what-is-included-in-implant-cost')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function ImplantCostQuestionPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Included in Dental Implant Cost?"
      intro="A focused explanation of what an implant quote may include, omit, or split into separate charges."
    >
      <ImplantCostQuestionContent />
    </PageShell>
  )
}
