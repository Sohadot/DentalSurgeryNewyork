import GumDiseaseImplantsContent from '../../../content/questions/can-i-get-dental-implants-if-i-have-gum-disease.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/can-i-get-dental-implants-if-i-have-gum-disease')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function GumDiseaseImplantsPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="Can I Get Dental Implants If I Have Gum Disease?"
      intro="Active gum disease must be resolved before dental implant placement in New York. Understanding what that means, and what the treatment sequence looks like, helps patients plan accurately."
      schemas={[
        buildFAQPageSchema([{
          question: 'Can I get dental implants if I have gum disease?',
          answer: 'Active gum disease (periodontitis) must be treated and controlled before dental implant placement. Active periodontal infection significantly increases implant failure risk. Patients with treated and stable gum disease may be implant candidates, depending on the degree of bone loss and tissue health at the intended site. Some cases also require bone grafting to restore volume lost to periodontal disease before implant placement can proceed.'
        }]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'Implants with Gum Disease', path: '/questions/can-i-get-dental-implants-if-i-have-gum-disease' },
        ]),
      ]}
    >
      <GumDiseaseImplantsContent />
    </PageShell>
  )
}
