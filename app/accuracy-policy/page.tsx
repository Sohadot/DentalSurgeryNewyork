import { buildMetadata } from '@/lib/metadata'
import PageShell from '@/components/page-shell'
import { readTextContent } from '@/lib/content'

export const metadata = buildMetadata({
  title: 'Accuracy Policy | Dental Surgery New York',
  description:
    'Read how DentalSurgeryNewYork.com approaches informational accuracy, updates, revisions, and the limits of oral surgery guidance.',
  path: '/accuracy-policy',
})

export default async function AccuracyPolicyPage() {
  const content = await readTextContent('core/accuracy-policy.mdx')

  return (
    <PageShell
      eyebrow="Policy"
      title="Accuracy Policy"
      intro="How the site thinks about accuracy, revision discipline, and the limits of informational healthcare content."
    >
      <article className="whitespace-pre-wrap text-slate-700">{content}</article>
    </PageShell>
  )
}
