import Content from '../../../content/questions/how-does-age-affect-dental-implant-candidacy.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-does-age-affect-dental-implant-candidacy')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function AgeImplantCandidacyPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Does Age Affect Dental Implant Candidacy?"
      intro="Age matters differently for younger and older patients. This page explains jaw growth, bone volume, systemic health, medication issues, and what New York patients should clarify before implant planning."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'Is there an upper age limit for dental implants?',
            answer:
              'There is no fixed upper age limit for dental implants. Bone volume, systemic health, medications, hygiene capacity, and surgical risk are usually more important than age alone. Younger patients must wait until jaw growth is complete before implant placement.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'Age and Implant Candidacy', path: route.path },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
