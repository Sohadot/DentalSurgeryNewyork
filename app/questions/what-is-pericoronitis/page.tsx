import PericoronitisContent from '../../../content/questions/what-is-pericoronitis.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-pericoronitis')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsPericoronitisPage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Pericoronitis?"
      intro="Pericoronitis is an infection of the gum tissue surrounding a partially erupted wisdom tooth. It is one of the most common reasons patients seek emergency oral surgery care related to wisdom teeth, and recurring episodes are a frequent indication for removal."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is pericoronitis?',
            answer:
              'Pericoronitis is an infection of the gum tissue surrounding a partially erupted tooth — most often a lower wisdom tooth. The partially covered tooth creates a space where bacteria accumulate, causing pain, swelling, difficulty opening the mouth, and sometimes fever. Mild cases may be managed with cleaning and antibiotics. Recurring pericoronitis is one of the most common clinical indications for wisdom tooth removal.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Wisdom Tooth Removal', path: '/procedures/wisdom-tooth-removal' },
          { name: 'What Is Pericoronitis?', path: '/questions/what-is-pericoronitis' },
        ]),
      ]}
    >
      <PericoronitisContent />
    </PageShell>
  )
}
