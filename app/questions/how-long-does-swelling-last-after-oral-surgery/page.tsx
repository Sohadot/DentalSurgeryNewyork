import Content from '../../../content/questions/how-long-does-swelling-last-after-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/how-long-does-swelling-last-after-oral-surgery')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function OralSurgerySwellingPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="How Long Does Swelling Last After Oral Surgery?"
      intro="Swelling usually follows a predictable timeline after oral surgery, but worsening swelling can signal a problem. This guide explains normal recovery patterns and warning signs."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'How long does swelling last after oral surgery?',
            answer:
              'Swelling usually peaks 48 to 72 hours after oral surgery and then gradually improves. Many procedures show visible improvement by days five to seven, while complex surgery can produce swelling for ten to fourteen days or longer.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Emergency Oral Surgery', path: '/procedures/emergency-oral-surgery' },
          { name: 'Swelling After Oral Surgery', path: route.path },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
