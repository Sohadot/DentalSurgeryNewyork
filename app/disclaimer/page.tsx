import { buildMetadata } from '@/lib/metadata'
import PageShell from '@/components/page-shell'
import { readTextContent } from '@/lib/content'

export const metadata = buildMetadata({
  title: 'Disclaimer | Dental Surgery New York',
  description:
    'Read the disclaimer for DentalSurgeryNewYork.com regarding informational use, medical advice, cost estimates, provider verification, and emergencies.',
  path: '/disclaimer',
})

export default async function DisclaimerPage() {
  const content = await readTextContent('core/disclaimer.mdx')

  return (
    <PageShell
      eyebrow="Notice"
      title="Disclaimer"
      intro="Important limits on how this site should be used."
    >
      <article className="whitespace-pre-wrap text-slate-700">{content}</article>
    </PageShell>
  )
}
