import Content from '../../../content/questions/what-is-peri-implant-mucositis.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-peri-implant-mucositis')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsPeriImplantMucositisPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Peri-Implant Mucositis?"
      intro="Peri-implant mucositis is reversible gum inflammation around a dental implant. It is the early-stage warning sign before the more serious condition of peri-implantitis develops."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is peri-implant mucositis?',
            answer:
              'Peri-implant mucositis is reversible inflammation of the gum tissue surrounding a dental implant, caused by bacterial plaque accumulation. Unlike peri-implantitis, it does not involve bone loss and can be resolved with professional cleaning and improved oral hygiene.',
          },
          {
            question: 'What is the difference between peri-implant mucositis and peri-implantitis?',
            answer:
              'Peri-implant mucositis is confined to the soft tissue and is reversible. Peri-implantitis involves bone loss around the implant and is not fully reversible. Both originate from bacterial biofilm but differ in how far the inflammatory process has extended.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Peri-Implantitis', path: '/questions/what-is-peri-implantitis' },
          { name: 'What Is Peri-Implant Mucositis?', path: '/questions/what-is-peri-implant-mucositis' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
