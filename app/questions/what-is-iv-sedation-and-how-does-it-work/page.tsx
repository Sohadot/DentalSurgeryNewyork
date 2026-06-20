import IVSedationContent from '../../../content/questions/what-is-iv-sedation-and-how-does-it-work.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-iv-sedation-and-how-does-it-work')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsIVSedationPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is IV Sedation and How Does It Work?"
      intro="IV sedation delivers sedative medications directly into the bloodstream, producing a rapid and controllable level of deep relaxation for oral surgery procedures. Understanding how it works, who administers it, and what preparation is required helps patients ask the right questions before agreeing to sedation."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is IV sedation and how does it work in oral surgery?',
            answer:
              'IV sedation delivers sedative medications directly into the bloodstream through an intravenous line, producing rapid, controllable deep relaxation or light sleep. Most patients have little to no memory of the procedure. Depth can be adjusted during surgery. A responsible adult must drive the patient home afterward. In New York, IV sedation for oral surgery requires specific state licensure beyond a general dentistry permit.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Oral Surgery Sedation', path: '/procedures/oral-surgery-sedation' },
          { name: 'What Is IV Sedation and How Does It Work?', path: '/questions/what-is-iv-sedation-and-how-does-it-work' },
        ]),
      ]}
    >
      <IVSedationContent />
    </PageShell>
  )
}
