import SmokingContent from '../../../content/questions/how-does-smoking-affect-dental-implants.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-does-smoking-affect-dental-implants')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function HowSmokingAffectsDentalImplantsPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Does Smoking Affect Dental Implants?"
      intro="Smoking is one of the most commonly discussed modifiable risk factors for dental implant outcomes. Its effects span the full treatment sequence — from extraction site healing through osseointegration and long-term implant maintenance."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How does smoking affect dental implants?',
            answer:
              'Smoking reduces blood flow, impairs bone healing, significantly increases dry socket risk after extraction, slows or disrupts osseointegration, and raises the long-term risk of peri-implantitis — an infection around the implant that causes progressive bone loss. Dental implant failure rates are consistently higher in smokers than non-smokers. Most providers discuss smoking cessation or reduction as part of the pre-treatment assessment and planning process.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'How Does Smoking Affect Dental Implants?', path: '/questions/how-does-smoking-affect-dental-implants' },
        ]),
      ]}
    >
      <SmokingContent />
    </PageShell>
  )
}
