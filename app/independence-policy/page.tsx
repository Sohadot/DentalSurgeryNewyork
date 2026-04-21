import { buildMetadata } from '@/lib/metadata'
import PageShell from '@/components/page-shell'
import { readTextContent } from '@/lib/content'

export const metadata = buildMetadata({
  title: 'Independence Policy | Dental Surgery New York',
  description:
    'Read the editorial independence policy for DentalSurgeryNewYork.com and learn how the site approaches provider references and commercial separation.',
  path: '/independence-policy',
})

export default async function IndependencePolicyPage() {
  const content = await readTextContent('core/independence-policy.mdx')

  return (
    <PageShell
      eyebrow="Policy"
      title="Editorial Independence Policy"
      intro="How the site approaches commercial separation, provider references, and patient-first guidance."
    >
      <article className="whitespace-pre-wrap text-slate-700">{content}</article>
    </PageShell>
  )
}
