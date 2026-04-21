import { buildMetadata } from '@/lib/metadata'
import PageShell from '@/components/page-shell'
import { readTextContent } from '@/lib/content'

export const metadata = buildMetadata({
  title: 'Methodology | Dental Surgery New York',
  description:
    'Learn how DentalSurgeryNewYork.com researches procedure guidance, cost information, and patient decision content for oral surgery in New York.',
  path: '/methodology',
})

export default async function MethodologyPage() {
  const content = await readTextContent('core/methodology.mdx')

  return (
    <PageShell
      eyebrow="Methodology"
      title="Our Methodology"
      intro="How this reference approaches procedure explanation, cost guidance, and patient decision support."
    >
      <article className="whitespace-pre-wrap text-slate-700">{content}</article>
    </PageShell>
  )
}
