import PeriImplantitisContent from '../../../content/questions/what-is-peri-implantitis.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-peri-implantitis')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsPeriImplantitisPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Peri-Implantitis?"
      intro="Peri-implantitis is a late-stage infection around a dental implant that causes progressive bone loss and is the primary cause of implant failure in patients who initially achieved successful integration. Understanding it before treatment is part of informed consent."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is peri-implantitis?',
            answer:
              'Peri-implantitis is an infection of the tissue and bone surrounding a dental implant, characterized by soft tissue inflammation and progressive bone loss around the implant fixture. It is the primary cause of late-stage implant failure and is more common in patients with a history of periodontal disease, smokers, and those with poorly controlled diabetes.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Dental Implants', path: '/procedures/dental-implants' },
          { name: 'What Is Peri-Implantitis?', path: '/questions/what-is-peri-implantitis' },
        ]),
      ]}
    >
      <PeriImplantitisContent />
    </PageShell>
  )
}
