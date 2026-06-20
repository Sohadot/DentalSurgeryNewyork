import Content from '../../../content/questions/how-does-diabetes-affect-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-does-diabetes-affect-oral-surgery')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function HowDoesDiabetesAffectOralSurgeryPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Does Diabetes Affect Oral Surgery?"
      intro="Diabetes is a significant risk modifier for oral surgery outcomes — affecting healing, infection risk, and implant osseointegration. It requires disclosure and in some cases pre-surgical management."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How does diabetes affect oral surgery?',
            answer:
              'Diabetes can slow wound healing, increase infection risk, and delay osseointegration for dental implants. Surgeons typically review HbA1c levels before elective procedures, with levels above 9 to 10 percent potentially prompting delay until glycemic control improves.',
          },
          {
            question: 'Can people with diabetes get dental implants?',
            answer:
              'Yes. Dental implants are not contraindicated for most well-controlled diabetic patients. Evidence supports acceptable implant survival rates in patients with HbA1c below 8 percent. Poorly controlled diabetes, however, significantly elevates implant failure risk and may require improved glycemic management before proceeding.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'How Does Diabetes Affect Oral Surgery?', path: '/questions/how-does-diabetes-affect-oral-surgery' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
