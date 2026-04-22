import RecoveryContent from '../../../content/questions/how-long-does-wisdom-tooth-recovery-take.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/questions/how-long-does-wisdom-tooth-recovery-take')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function WisdomToothRecoveryQuestionPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Long Does Wisdom Tooth Recovery Take?"
      intro="A focused explanation of what affects recovery time, why timelines vary, and what patients should clarify before treatment."
    >
      <RecoveryContent />
    </PageShell>
  )
}
