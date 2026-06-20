import Content from '../../../content/questions/what-is-nerve-damage-after-oral-surgery.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import { buildMetadata } from '../../../lib/metadata'
import { buildFAQPageSchema, buildBreadcrumbSchema } from '../../../lib/schema'

const route = getRouteByPath('/questions/what-is-nerve-damage-after-oral-surgery')
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path })

export default function WhatIsNerveDamagePage() {
  return (
    <PageShell
      eyebrow="Question"
      title="What Is Nerve Damage After Oral Surgery and How Is It Identified?"
      intro="Nerve injury is among the most significant risks disclosed before lower wisdom tooth removal and lower implant placement. This page explains which nerves are at risk, what symptoms indicate involvement, and what evaluation follows if sensation does not return."
      schemas={[
        buildFAQPageSchema([
          {
            question: 'What is nerve damage after oral surgery?',
            answer:
              'Nerve damage after oral surgery refers to injury to a sensory nerve, most commonly the inferior alveolar nerve or lingual nerve, resulting in numbness, tingling, or altered sensation. Most cases are temporary neuropraxia that resolves within weeks to a few months. Persistent symptoms beyond three months warrant referral to an oral medicine specialist or microsurgeon for evaluation.',
          },
        ]),
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Risks of Oral Surgery', path: '/questions/what-are-the-risks-of-oral-surgery' },
          { name: 'What Is Nerve Damage After Oral Surgery?', path: '/questions/what-is-nerve-damage-after-oral-surgery' },
        ]),
      ]}
    >
      <Content />
    </PageShell>
  )
}
