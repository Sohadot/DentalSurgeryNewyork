import Content from '../../../content/questions/how-do-blood-thinners-affect-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-do-blood-thinners-affect-oral-surgery')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function HowDoBloodThinnersAffectOralSurgeryPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Do Blood Thinners Affect Oral Surgery?"
      intro="Blood thinners increase bleeding risk after oral surgery but are rarely a reason to cancel a procedure. What patients on anticoagulants or antiplatelet agents need to know before treatment."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'Can I have oral surgery if I am on blood thinners?',
            answer:
              'Yes, in most cases. Oral surgeons can manage increased bleeding risk with local measures such as wound plugs, sutures, and extended pressure. Patients should not stop their medications without explicit guidance from the prescribing physician, as the risk of stopping anticoagulation typically outweighs the added bleeding risk of the procedure.',
          },
          {
            question: 'Should I stop taking blood thinners before oral surgery?',
            answer:
              'Do not stop or adjust blood-thinning medications without direct guidance from your prescribing physician. Independent discontinuation can cause serious cardiovascular events. Your oral surgeon and prescribing physician should coordinate on the appropriate approach for your specific medication and procedure.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Oral Surgery Risks', path: '/questions/what-are-the-risks-of-oral-surgery' },
          { name: 'How Do Blood Thinners Affect Oral Surgery?', path: '/questions/how-do-blood-thinners-affect-oral-surgery' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
