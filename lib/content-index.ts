import fs from 'node:fs'
import path from 'node:path'
import { SITE_URL } from './site-config'

export type RouteSection =
  | 'home'
  | 'core'
  | 'commercial'
  | 'procedure'
  | 'cost'
  | 'guide'
  | 'location'
  | 'question'

export type ChangeFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly'

export type RouteEntry = {
  path: string
  title: string
  description: string
  section: RouteSection
  contentFile?: string
  routeFile: string
  priority: number
  changeFrequency: ChangeFrequency
  indexable: boolean
}

export const ROUTE_INDEX: RouteEntry[] = [
  {
    path: '/',
    title: 'Independent Oral Surgery Guidance for New York City',
    description:
      'Understand procedures, cost structures, surgeon-selection questions, and treatment factors through an independent oral surgery reference for New York patients.',
    section: 'home',
    routeFile: 'app/page.tsx',
    priority: 1,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/methodology',
    title: 'Methodology | Dental Surgery New York',
    description:
      'Learn how DentalSurgeryNewYork.com researches procedure guidance, cost information, and patient decision content for oral surgery in New York.',
    section: 'core',
    contentFile: 'content/core/methodology.mdx',
    routeFile: 'app/methodology/page.tsx',
    priority: 0.8,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/independence-policy',
    title: 'Independence Policy | Dental Surgery New York',
    description:
      'Read the editorial independence policy for DentalSurgeryNewYork.com and learn how the site approaches provider references and commercial separation.',
    section: 'core',
    contentFile: 'content/core/independence-policy.mdx',
    routeFile: 'app/independence-policy/page.tsx',
    priority: 0.7,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/accuracy-policy',
    title: 'Accuracy Policy | Dental Surgery New York',
    description:
      'Read how DentalSurgeryNewYork.com approaches informational accuracy, updates, revisions, and the limits of oral surgery guidance.',
    section: 'core',
    contentFile: 'content/core/accuracy-policy.mdx',
    routeFile: 'app/accuracy-policy/page.tsx',
    priority: 0.7,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer | Dental Surgery New York',
    description:
      'Read the disclaimer for DentalSurgeryNewYork.com regarding informational use, medical advice, cost estimates, provider verification, and emergencies.',
    section: 'core',
    contentFile: 'content/core/disclaimer.mdx',
    routeFile: 'app/disclaimer/page.tsx',
    priority: 0.5,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/standards',
    title: 'Oral Surgery Decision Standards | New York Patient Reference',
    description:
      'Patient decision standards used across dentalsurgerynewyork.com — when to seek specialist consultation, how to evaluate cost estimates, and sedation questions.',
    section: 'core',
    contentFile: 'content/core/standards.mdx',
    routeFile: 'app/standards/page.tsx',
    priority: 0.82,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/editorial-updates',
    title: 'Editorial Updates & Review Log | Dental Surgery New York',
    description:
      'A transparent log of content additions, procedure expansions, cost guide launches, and governance decisions made on dentalsurgerynewyork.com.',
    section: 'core',
    contentFile: 'content/core/editorial-updates.mdx',
    routeFile: 'app/editorial-updates/page.tsx',
    priority: 0.65,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/ontology',
    title: 'Oral Surgery Ontology | New York Patient Reference Framework',
    description:
      'A conceptual map of oral surgery terms, procedures, decisions, and relationships — the knowledge framework underlying this independent New York reference.',
    section: 'core',
    contentFile: 'content/core/ontology.mdx',
    routeFile: 'app/ontology/page.tsx',
    priority: 0.88,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/protocol',
    title: 'Oral Surgery Navigation Protocol | New York Patient Reference',
    description:
      'A structured framework for navigating the oral surgery process in New York — from first symptoms through treatment completion, with decision checkpoints at each stage.',
    section: 'core',
    contentFile: 'content/core/protocol.mdx',
    routeFile: 'app/protocol/page.tsx',
    priority: 0.87,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/decision-compass',
    title: 'Oral Surgery Decision Compass | New York Patient Self-Triage',
    description:
      'A structured self-triage framework for New York patients — decision paths for implant candidacy, bone graft need, sedation selection, and emergency recognition.',
    section: 'core',
    contentFile: 'content/core/decision-compass.mdx',
    routeFile: 'app/decision-compass/page.tsx',
    priority: 0.9,
    changeFrequency: 'monthly',
    indexable: true,
  },
  {
    path: '/category-language',
    title: 'Oral Surgery Category Language | New York Reference Vocabulary',
    description:
      'The definitional vocabulary used across this reference — how key oral surgery terms are defined and why precise language matters for patient decision-making.',
    section: 'core',
    contentFile: 'content/core/category-language.mdx',
    routeFile: 'app/category-language/page.tsx',
    priority: 0.86,
    changeFrequency: 'monthly',
    indexable: true,
  },

  {
    path: '/partners',
    title: 'Partner Practice Program | Dental Surgery New York',
    description:
      'Licensed oral surgery and dental implant practices in New York can apply for transparent partner placement within this independent patient guidance platform.',
    section: 'commercial',
    routeFile: 'app/partners/page.tsx',
    priority: 0.6,
    changeFrequency: 'monthly',
    indexable: true,
  },

  {
    path: '/procedures',
    title: 'Oral Surgery Procedures | New York Patient Reference',
    description:
      'Independent patient-first guides to oral surgery procedures most frequently encountered by New York patients — procedure structure, cost factors, and questions to ask.',
    section: 'procedure',
    routeFile: 'app/procedures/page.tsx',
    priority: 0.92,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/procedures/dental-implants',
    title:
      'Dental Implants in New York | Procedure Guide, Cost Factors, What to Ask',
    description:
      'Understand dental implants in New York, including what the procedure involves, major cost drivers, common misunderstandings, and questions to ask before treatment.',
    section: 'procedure',
    contentFile: 'content/procedures/dental-implants.mdx',
    routeFile: 'app/procedures/dental-implants/page.tsx',
    priority: 0.9,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/procedures/wisdom-tooth-removal',
    title:
      'Wisdom Tooth Removal NYC | Procedure Guide, Cost Factors, and What to Know',
    description:
      'Understand wisdom tooth removal in New York City, including simple vs surgical extraction, sedation questions, cost factors, and what to clarify before treatment.',
    section: 'procedure',
    contentFile: 'content/procedures/wisdom-tooth-removal.mdx',
    routeFile: 'app/procedures/wisdom-tooth-removal/page.tsx',
    priority: 0.88,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/procedures/tooth-extraction',
    title:
      'Tooth Extraction in New York | Simple vs Surgical, Cost, What to Ask',
    description:
      'Understand tooth extraction in New York, including simple vs surgical removal, cost factors, what follows extraction, and questions to ask before treatment.',
    section: 'procedure',
    contentFile: 'content/procedures/tooth-extraction.mdx',
    routeFile: 'app/procedures/tooth-extraction/page.tsx',
    priority: 0.87,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/procedures/bone-grafting',
    title: 'Bone Grafting in New York | Socket Preservation to Sinus Lift',
    description:
      'Understand bone grafting in New York, including socket preservation, ridge augmentation, and sinus lift, with cost factors and questions to ask before treatment.',
    section: 'procedure',
    contentFile: 'content/procedures/bone-grafting.mdx',
    routeFile: 'app/procedures/bone-grafting/page.tsx',
    priority: 0.85,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/procedures/oral-surgery-sedation',
    title:
      'Oral Surgery Sedation in New York | Types, Credentials, Cost, and Recovery',
    description:
      'Understand sedation options for oral surgery in New York, including types of sedation, provider credentials, cost structure, and what recovery looks like.',
    section: 'procedure',
    contentFile: 'content/procedures/oral-surgery-sedation.mdx',
    routeFile: 'app/procedures/oral-surgery-sedation/page.tsx',
    priority: 0.84,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/procedures/emergency-oral-surgery',
    title:
      'Emergency Oral Surgery in New York | Urgent Care and What to Expect',
    description:
      'Understand emergency oral surgery situations in New York, including when to go to an ER vs an oral surgeon, infection warning signs, and urgent care considerations.',
    section: 'procedure',
    contentFile: 'content/procedures/emergency-oral-surgery.mdx',
    routeFile: 'app/procedures/emergency-oral-surgery/page.tsx',
    priority: 0.86,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/costs/dental-implants',
    title:
      'Dental Implant Cost in New York | What the Price Often Includes and Omits',
    description:
      'Learn how dental implant cost works in New York, including the components of treatment, what low advertised pricing may leave out, and what to request in writing.',
    section: 'cost',
    contentFile: 'content/costs/dental-implants.mdx',
    routeFile: 'app/costs/dental-implants/page.tsx',
    priority: 0.9,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/costs/wisdom-tooth-removal',
    title: 'Wisdom Tooth Removal Cost in NYC | What Changes the Price',
    description:
      'Understand wisdom tooth removal cost in New York City, including simple vs surgical extraction, sedation, imaging, and how to compare estimates more carefully.',
    section: 'cost',
    contentFile: 'content/costs/wisdom-tooth-removal.mdx',
    routeFile: 'app/costs/wisdom-tooth-removal/page.tsx',
    priority: 0.86,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/costs/tooth-extraction',
    title:
      'Tooth Extraction Cost in New York | Simple vs. Surgical and Sedation',
    description:
      'Understand how simple vs. surgical extraction, sedation, imaging, and socket preservation affect tooth extraction cost in New York.',
    section: 'cost',
    contentFile: 'content/costs/tooth-extraction.mdx',
    routeFile: 'app/costs/tooth-extraction/page.tsx',
    priority: 0.84,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/costs/bone-grafting',
    title: 'Bone Grafting Cost in New York | Socket Preservation to Sinus Lift',
    description:
      'Understand how graft type, material, membrane use, and sedation affect bone grafting cost in New York, from socket preservation through sinus lift procedures.',
    section: 'cost',
    contentFile: 'content/costs/bone-grafting.mdx',
    routeFile: 'app/costs/bone-grafting/page.tsx',
    priority: 0.83,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/costs/oral-surgery-sedation',
    title:
      'Oral Surgery Sedation Cost in New York | What It Adds to Fees',
    description:
      'Understand how sedation type, duration, and provider credentials affect sedation cost in New York oral surgery, and what to clarify before agreeing to treatment.',
    section: 'cost',
    contentFile: 'content/costs/oral-surgery-sedation.mdx',
    routeFile: 'app/costs/oral-surgery-sedation/page.tsx',
    priority: 0.82,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/costs/emergency-oral-surgery',
    title:
      'Emergency Oral Surgery Cost in New York | Urgent Fees Explained',
    description:
      'Understand the cost structure of emergency oral surgery in New York, including urgent appointment fees, imaging, sedation, and what to clarify when contacting a provider.',
    section: 'cost',
    contentFile: 'content/costs/emergency-oral-surgery.mdx',
    routeFile: 'app/costs/emergency-oral-surgery/page.tsx',
    priority: 0.81,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/cost-index',
    title: 'New York Oral Surgery Cost Index | Directional Ranges',
    description:
      'Directional cost ranges for oral surgery procedures in New York — tooth extraction, implants, bone grafting, sedation, and emergency care. Not a quote.',
    section: 'guide',
    contentFile: 'content/guides/cost-index.mdx',
    routeFile: 'app/cost-index/page.tsx',
    priority: 0.87,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/checklists',
    title: 'Oral Surgery Consultation Checklists | New York Patients',
    description:
      'Practical patient-first checklists for oral surgery consultations in New York — implants, extraction, bone grafting, sedation, and cost estimate review.',
    section: 'guide',
    contentFile: 'content/guides/checklists.mdx',
    routeFile: 'app/checklists/page.tsx',
    priority: 0.84,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/guides/choose-an-oral-surgeon',
    title:
      'How to Choose an Oral Surgeon in New York | Credentials and What to Ask',
    description:
      'Learn how to choose an oral surgeon in New York by understanding credentials, written estimates, anesthesia questions, and transparency standards.',
    section: 'guide',
    contentFile: 'content/guides/choose-an-oral-surgeon.mdx',
    routeFile: 'app/guides/choose-an-oral-surgeon/page.tsx',
    priority: 0.85,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/guides/questions-to-ask-before-surgery',
    title:
      'Questions to Ask Before Oral Surgery in New York | A Patient Decision Guide',
    description:
      'Learn which questions to ask before oral surgery in New York, including treatment scope, anesthesia, cost structure, follow-up care, and provider transparency.',
    section: 'guide',
    contentFile: 'content/guides/questions-to-ask-before-surgery.mdx',
    routeFile: 'app/guides/questions-to-ask-before-surgery/page.tsx',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/guides/anesthesia-credentials-explained',
    title:
      'Anesthesia Credentials for Oral Surgery | What NYC Patients Should Ask',
    description:
      'Understand what to ask about anesthesia credentials before oral surgery in New York, including sedation roles, monitoring, and why the structure matters.',
    section: 'guide',
    contentFile: 'content/guides/anesthesia-credentials-explained.mdx',
    routeFile: 'app/guides/anesthesia-credentials-explained/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/guides/understanding-your-oral-surgery-estimate',
    title: 'Understanding Your Oral Surgery Estimate | New York Guide',
    description:
      'A patient guide to reading and comparing oral surgery estimates in New York — what should be itemized, what to question, and what to request in writing.',
    section: 'guide',
    contentFile: 'content/guides/understanding-your-oral-surgery-estimate.mdx',
    routeFile: 'app/guides/understanding-your-oral-surgery-estimate/page.tsx',
    priority: 0.83,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/locations',
    title:
      'Oral Surgery in New York City | Borough Guides and Decision Support',
    description:
      'Explore oral surgery guidance across New York City, including borough-specific decision context, pricing interpretation, and provider-comparison considerations.',
    section: 'location',
    contentFile: 'content/locations/index.mdx',
    routeFile: 'app/locations/page.tsx',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/manhattan',
    title:
      'Oral Surgery in Manhattan | Cost, Provider Comparison, and What to Consider',
    description:
      'Understand oral surgery decisions in Manhattan, including pricing context, provider comparison issues, transparency questions, and how to evaluate options more carefully.',
    section: 'location',
    contentFile: 'content/locations/manhattan.mdx',
    routeFile: 'app/locations/manhattan/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/brooklyn',
    title:
      'Oral Surgery in Brooklyn | Cost, Transparency, and How to Compare Options',
    description:
      'Understand oral surgery decisions in Brooklyn, including local pricing context, treatment transparency, and how to compare providers more carefully.',
    section: 'location',
    contentFile: 'content/locations/brooklyn.mdx',
    routeFile: 'app/locations/brooklyn/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/queens',
    title:
      'Oral Surgery in Queens | Cost Context, Provider Structure, and What to Ask',
    description:
      'Explore oral surgery decisions in Queens, including pricing variation, provider structure, and the questions that matter before treatment.',
    section: 'location',
    contentFile: 'content/locations/queens.mdx',
    routeFile: 'app/locations/queens/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/bronx',
    title:
      'Oral Surgery in the Bronx | Cost, Access, and Decision Guidance',
    description:
      'Understand oral surgery decisions in the Bronx, including practical access questions, pricing interpretation, and provider-comparison guidance.',
    section: 'location',
    contentFile: 'content/locations/bronx.mdx',
    routeFile: 'app/locations/bronx/page.tsx',
    priority: 0.72,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/locations/staten-island',
    title:
      'Oral Surgery in Staten Island | Local Decision and Cost Context',
    description:
      'Understand oral surgery decisions in Staten Island, including local provider context, treatment transparency, and how to compare options more carefully.',
    section: 'location',
    contentFile: 'content/locations/staten-island.mdx',
    routeFile: 'app/locations/staten-island/page.tsx',
    priority: 0.7,
    changeFrequency: 'weekly',
    indexable: true,
  },

  {
    path: '/questions/what-is-included-in-implant-cost',
    title:
      'What Is Included in Dental Implant Cost? | A New York Patient Guide',
    description:
      'Learn what a dental implant quote may or may not include in New York, from the implant post to the crown, imaging, grafting, and follow-up care.',
    section: 'question',
    contentFile: 'content/questions/what-is-included-in-implant-cost.mdx',
    routeFile: 'app/questions/what-is-included-in-implant-cost/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-long-does-wisdom-tooth-recovery-take',
    title:
      'How Long Does Wisdom Tooth Recovery Take? | What NYC Patients Should Know',
    description:
      'Understand what affects wisdom tooth recovery time, including extraction complexity, swelling, sedation, aftercare, and why recovery varies from case to case.',
    section: 'question',
    contentFile: 'content/questions/how-long-does-wisdom-tooth-recovery-take.mdx',
    routeFile: 'app/questions/how-long-does-wisdom-tooth-recovery-take/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/is-bone-grafting-required-for-dental-implants',
    title: 'Is Bone Grafting Required for Dental Implants? | New York',
    description:
      'Understand when bone grafting is and is not required before dental implants in New York, and what to ask your provider about bone volume assessment.',
    section: 'question',
    contentFile: 'content/questions/is-bone-grafting-required-for-dental-implants.mdx',
    routeFile: 'app/questions/is-bone-grafting-required-for-dental-implants/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-do-i-compare-oral-surgery-quotes-in-new-york',
    title: 'How to Compare Oral Surgery Quotes in New York | Guide',
    description:
      'Learn how to compare oral surgery quotes in New York, including what a complete estimate includes, what low quotes often omit, and what to request in writing.',
    section: 'question',
    contentFile: 'content/questions/how-do-i-compare-oral-surgery-quotes-in-new-york.mdx',
    routeFile: 'app/questions/how-do-i-compare-oral-surgery-quotes-in-new-york/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-the-difference-between-an-oral-surgeon-and-a-dentist',
    title: 'Oral Surgeon vs. Dentist in New York | What Patients Should Know',
    description:
      'Understand the difference between an oral surgeon and a general dentist in New York, when specialist involvement matters, and how to verify credentials.',
    section: 'question',
    contentFile: 'content/questions/what-is-the-difference-between-an-oral-surgeon-and-a-dentist.mdx',
    routeFile: 'app/questions/what-is-the-difference-between-an-oral-surgeon-and-a-dentist/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-sedation-options-are-available-for-oral-surgery',
    title: 'Sedation Options for Oral Surgery in New York | What to Ask',
    description:
      'Understand sedation types for oral surgery in New York, including local anesthesia, conscious sedation, and general anesthesia, and what to clarify before treatment.',
    section: 'question',
    contentFile: 'content/questions/what-sedation-options-are-available-for-oral-surgery.mdx',
    routeFile: 'app/questions/what-sedation-options-are-available-for-oral-surgery/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-long-does-dental-implant-treatment-take',
    title: 'How Long Does Dental Implant Treatment Take? | New York Guide',
    description:
      'Understand the dental implant treatment timeline in New York, including what affects duration from implant placement through final restoration.',
    section: 'question',
    contentFile: 'content/questions/how-long-does-dental-implant-treatment-take.mdx',
    routeFile: 'app/questions/how-long-does-dental-implant-treatment-take/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-happens-if-you-dont-replace-a-missing-tooth',
    title: "What Happens If You Don't Replace a Missing Tooth? | New York",
    description:
      'Understand what can happen over time when a missing tooth is not replaced, including bone loss, shifting teeth, and how this affects implant eligibility later.',
    section: 'question',
    contentFile: 'content/questions/what-happens-if-you-dont-replace-a-missing-tooth.mdx',
    routeFile: 'app/questions/what-happens-if-you-dont-replace-a-missing-tooth/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-socket-preservation-and-why-does-it-matter',
    title: 'What Is Socket Preservation? | New York Oral Surgery Guide',
    description:
      'Understand what socket preservation is, when it is performed after tooth extraction in New York, and how it affects bone grafting and implant options later.',
    section: 'question',
    contentFile: 'content/questions/what-is-socket-preservation-and-why-does-it-matter.mdx',
    routeFile: 'app/questions/what-is-socket-preservation-and-why-does-it-matter/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/can-dental-implants-fail',
    title: 'Can Dental Implants Fail? | Causes and What Patients Should Know',
    description:
      'Understand why dental implants can fail, including bone integration issues, infection, and patient factors, and what questions to ask before treatment in New York.',
    section: 'question',
    contentFile: 'content/questions/can-dental-implants-fail.mdx',
    routeFile: 'app/questions/can-dental-implants-fail/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/does-insurance-cover-oral-surgery-in-new-york',
    title: 'Does Insurance Cover Oral Surgery in New York? | What to Know',
    description:
      'Understand how dental and medical insurance may apply to oral surgery in New York, what procedures are commonly covered, and what to clarify before treatment.',
    section: 'question',
    contentFile: 'content/questions/does-insurance-cover-oral-surgery-in-new-york.mdx',
    routeFile: 'app/questions/does-insurance-cover-oral-surgery-in-new-york/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-to-expect-on-the-day-of-oral-surgery',
    title: 'What to Expect on the Day of Oral Surgery | New York Guide',
    description:
      'Understand what typically happens on the day of oral surgery in New York, from arrival and consent to sedation, the procedure, recovery room, and going home.',
    section: 'question',
    contentFile: 'content/questions/what-to-expect-on-the-day-of-oral-surgery.mdx',
    routeFile: 'app/questions/what-to-expect-on-the-day-of-oral-surgery/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-do-i-know-if-i-need-a-sinus-lift',
    title: 'How Do I Know If I Need a Sinus Lift? | New York Implant Guide',
    description:
      'Understand what a sinus lift is, when it is needed before dental implants in the upper jaw, and what to ask your provider about sinus anatomy assessment in New York.',
    section: 'question',
    contentFile: 'content/questions/how-do-i-know-if-i-need-a-sinus-lift.mdx',
    routeFile: 'app/questions/how-do-i-know-if-i-need-a-sinus-lift/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-the-difference-between-a-periodontist-and-an-oral-surgeon',
    title: 'Periodontist vs. Oral Surgeon in New York | What Patients Should Know',
    description:
      'Understand the difference between a periodontist and an oral surgeon in New York, when each specialist is relevant, and how to ask the right credential questions.',
    section: 'question',
    contentFile: 'content/questions/what-is-the-difference-between-a-periodontist-and-an-oral-surgeon.mdx',
    routeFile: 'app/questions/what-is-the-difference-between-a-periodontist-and-an-oral-surgeon/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-osseointegration-and-why-does-it-matter',
    title: 'What Is Osseointegration? | Dental Implant Basics for New York Patients',
    description:
      'Understand what osseointegration means for dental implants in New York, how the process works, what affects it, and what questions to ask before treatment.',
    section: 'question',
    contentFile: 'content/questions/what-is-osseointegration-and-why-does-it-matter.mdx',
    routeFile: 'app/questions/what-is-osseointegration-and-why-does-it-matter/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/can-i-get-dental-implants-if-i-have-gum-disease',
    title: 'Can I Get Dental Implants If I Have Gum Disease? | New York Guide',
    description:
      'Understand how active gum disease affects dental implant candidacy in New York, what needs to be resolved first, and what questions to ask your provider.',
    section: 'question',
    contentFile: 'content/questions/can-i-get-dental-implants-if-i-have-gum-disease.mdx',
    routeFile: 'app/questions/can-i-get-dental-implants-if-i-have-gum-disease/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-causes-dry-socket-and-how-is-it-treated',
    title: 'What Causes Dry Socket and How Is It Treated? | New York Patients',
    description:
      'Understand what dry socket is, why it occurs after tooth extraction in New York, what the symptoms are, and how providers typically manage it.',
    section: 'question',
    contentFile: 'content/questions/what-causes-dry-socket-and-how-is-it-treated.mdx',
    routeFile: 'app/questions/what-causes-dry-socket-and-how-is-it-treated/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/when-should-i-see-an-oral-surgeon-instead-of-a-dentist',
    title: 'When Should I See an Oral Surgeon Instead of a Dentist? | New York',
    description:
      'Understand when a general dentist scope is sufficient versus when an oral surgeon is appropriate for your situation in New York, and how to evaluate referrals.',
    section: 'question',
    contentFile: 'content/questions/when-should-i-see-an-oral-surgeon-instead-of-a-dentist.mdx',
    routeFile: 'app/questions/when-should-i-see-an-oral-surgeon-instead-of-a-dentist/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-happens-after-dental-implant-placement',
    title: 'What Happens After Dental Implant Placement? | New York Patient Guide',
    description:
      'Understand what to expect after dental implant surgery in New York, including the osseointegration timeline, follow-up appointments, and when the crown is placed.',
    section: 'question',
    contentFile: 'content/questions/what-happens-after-dental-implant-placement.mdx',
    routeFile: 'app/questions/what-happens-after-dental-implant-placement/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-all-on-4-and-how-does-it-differ-from-traditional-implants',
    title: 'What Is All-on-4 and How Does It Differ from Traditional Implants?',
    description:
      'Understand what All-on-4 dental implants are, how they compare to single implants and dentures, and what to ask before choosing a full-arch solution in New York.',
    section: 'question',
    contentFile: 'content/questions/what-is-all-on-4-and-how-does-it-differ-from-traditional-implants.mdx',
    routeFile: 'app/questions/what-is-all-on-4-and-how-does-it-differ-from-traditional-implants/page.tsx',
    priority: 0.79,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-do-i-know-if-my-dental-implant-is-failing',
    title: 'How Do I Know If My Dental Implant Is Failing? | New York Guide',
    description:
      'Understand the signs that a dental implant may be failing, what early vs. late failure looks like, and when to contact your provider in New York.',
    section: 'question',
    contentFile: 'content/questions/how-do-i-know-if-my-dental-implant-is-failing.mdx',
    routeFile: 'app/questions/how-do-i-know-if-my-dental-implant-is-failing/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/can-wisdom-teeth-cause-problems-if-left-in-place',
    title: 'Can Wisdom Teeth Cause Problems If Left in Place? | New York',
    description:
      'Understand what issues impacted or erupted wisdom teeth can cause over time in New York, including infection, decay, cysts, and when removal is indicated.',
    section: 'question',
    contentFile: 'content/questions/can-wisdom-teeth-cause-problems-if-left-in-place.mdx',
    routeFile: 'app/questions/can-wisdom-teeth-cause-problems-if-left-in-place/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-bone-resorption-and-why-does-it-happen',
    title: 'What Is Bone Resorption and Why Does It Happen? | New York Guide',
    description:
      'Understand what bone resorption means after tooth loss in New York, why jawbone shrinks over time, and how this affects implant candidacy and treatment timing.',
    section: 'question',
    contentFile: 'content/questions/what-is-bone-resorption-and-why-does-it-happen.mdx',
    routeFile: 'app/questions/what-is-bone-resorption-and-why-does-it-happen/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/is-it-possible-to-get-dental-implants-after-dentures',
    title: 'Can You Get Dental Implants After Dentures? | New York Guide',
    description:
      'Understand whether dental implants are possible after conventional dentures in New York, what bone loss means for candidacy, and what the evaluation process involves.',
    section: 'question',
    contentFile: 'content/questions/is-it-possible-to-get-dental-implants-after-dentures.mdx',
    routeFile: 'app/questions/is-it-possible-to-get-dental-implants-after-dentures/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-are-the-risks-of-oral-surgery',
    title: 'What Are the Risks of Oral Surgery? | New York Patient Guide',
    description:
      'Learn about oral surgery risk categories in New York — infection, bleeding, nerve involvement, and sedation response — and what to ask providers before treatment.',
    section: 'question',
    contentFile: 'content/questions/what-are-the-risks-of-oral-surgery.mdx',
    routeFile: 'app/questions/what-are-the-risks-of-oral-surgery/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-do-i-prepare-for-wisdom-tooth-removal',
    title: 'How Do I Prepare for Wisdom Tooth Removal? | New York Guide',
    description:
      'Understand how to prepare for wisdom tooth removal in New York, from fasting and medication considerations to transport arrangements and recovery planning.',
    section: 'question',
    contentFile: 'content/questions/how-do-i-prepare-for-wisdom-tooth-removal.mdx',
    routeFile: 'app/questions/how-do-i-prepare-for-wisdom-tooth-removal/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-full-mouth-reconstruction',
    title: 'What Is Full Mouth Reconstruction? | New York Patient Reference',
    description:
      'Understand what full mouth reconstruction involves in New York, how it differs from single-tooth implants, its cost complexity, and what to clarify before treatment.',
    section: 'question',
    contentFile: 'content/questions/what-is-full-mouth-reconstruction.mdx',
    routeFile: 'app/questions/what-is-full-mouth-reconstruction/page.tsx',
    priority: 0.79,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-does-smoking-affect-dental-implants',
    title: 'How Does Smoking Affect Dental Implants? | New York Guide',
    description:
      'Understand how smoking affects dental implant healing, osseointegration, and long-term implant health, and what to ask your provider before treatment in New York.',
    section: 'question',
    contentFile: 'content/questions/how-does-smoking-affect-dental-implants.mdx',
    routeFile: 'app/questions/how-does-smoking-affect-dental-implants/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-a-dental-implant-abutment',
    title: 'What Is a Dental Implant Abutment? | New York Patient Guide',
    description:
      'Understand the role of the abutment in a dental implant system, why it matters for cost estimates, and what questions to ask before treatment in New York.',
    section: 'question',
    contentFile: 'content/questions/what-is-a-dental-implant-abutment.mdx',
    routeFile: 'app/questions/what-is-a-dental-implant-abutment/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-peri-implantitis',
    title: 'What Is Peri-Implantitis? | Dental Implant Complication Explained',
    description:
      'Understand what peri-implantitis is, how it differs from early implant failure, what causes it, and what to ask about long-term implant maintenance in New York.',
    section: 'question',
    contentFile: 'content/questions/what-is-peri-implantitis.mdx',
    routeFile: 'app/questions/what-is-peri-implantitis/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-a-cbct-scan',
    title: 'What Is a CBCT Scan? | Oral Surgery Imaging Explained for Patients',
    description:
      'Understand what a CBCT scan is, when it is used in oral surgery and implant planning in New York, and how it differs from standard dental X-rays.',
    section: 'question',
    contentFile: 'content/questions/what-is-a-cbct-scan.mdx',
    routeFile: 'app/questions/what-is-a-cbct-scan/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-iv-sedation-and-how-does-it-work',
    title: 'What Is IV Sedation and How Does It Work? | Oral Surgery Guide',
    description:
      'Understand what IV sedation involves in oral surgery, how it differs from other sedation types, who administers it, and what to ask before agreeing to it in New York.',
    section: 'question',
    contentFile: 'content/questions/what-is-iv-sedation-and-how-does-it-work.mdx',
    routeFile: 'app/questions/what-is-iv-sedation-and-how-does-it-work/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-does-bone-grafting-work',
    title: 'How Does Bone Grafting Work? | Oral Surgery Procedure Explained',
    description:
      'Understand how bone grafting works in oral surgery, the types of graft material and procedures, healing timelines, and how it fits into the implant sequence in New York.',
    section: 'question',
    contentFile: 'content/questions/how-does-bone-grafting-work.mdx',
    routeFile: 'app/questions/how-does-bone-grafting-work/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-should-i-eat-after-oral-surgery',
    title: 'What Should I Eat After Oral Surgery? | New York Recovery Guide',
    description:
      'Understand diet guidelines after oral surgery in New York, including what to eat and avoid in the first days after extraction or implant procedures.',
    section: 'question',
    contentFile: 'content/questions/what-should-i-eat-after-oral-surgery.mdx',
    routeFile: 'app/questions/what-should-i-eat-after-oral-surgery/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/why-are-dental-implants-so-expensive',
    title: 'Why Are Dental Implants So Expensive? | New York Cost Guide',
    description:
      'Understand why dental implants cost what they do in New York, what drives price variation, and why advertised pricing rarely reflects the full treatment cost.',
    section: 'question',
    contentFile: 'content/questions/why-are-dental-implants-so-expensive.mdx',
    routeFile: 'app/questions/why-are-dental-implants-so-expensive/page.tsx',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-the-difference-between-a-dental-implant-and-a-bridge',
    title: 'Dental Implant vs. Bridge | New York Patient Decision Guide',
    description:
      'Understand the differences between a dental implant and a bridge in New York, including bone preservation, adjacent tooth impact, cost, and longevity.',
    section: 'question',
    contentFile: 'content/questions/what-is-the-difference-between-a-dental-implant-and-a-bridge.mdx',
    routeFile: 'app/questions/what-is-the-difference-between-a-dental-implant-and-a-bridge/page.tsx',
    priority: 0.79,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-pericoronitis',
    title: 'What Is Pericoronitis? | Wisdom Tooth Infection Explained',
    description:
      'Understand what pericoronitis is, why it occurs around partially erupted wisdom teeth, what the symptoms are, and when it indicates removal in New York.',
    section: 'question',
    contentFile: 'content/questions/what-is-pericoronitis.mdx',
    routeFile: 'app/questions/what-is-pericoronitis/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/does-medicaid-cover-oral-surgery-in-new-york',
    title: 'Does Medicaid Cover Oral Surgery in New York? | Benefits Guide',
    description:
      'Understand how New York State Medicaid covers oral surgery, including tooth extractions and emergency dental services, and what is generally excluded from adult dental benefits.',
    section: 'question',
    contentFile: 'content/questions/does-medicaid-cover-oral-surgery-in-new-york.mdx',
    routeFile: 'app/questions/does-medicaid-cover-oral-surgery-in-new-york/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-an-oral-and-maxillofacial-surgeon',
    title: 'What Is an Oral and Maxillofacial Surgeon? | New York Guide',
    description:
      'Understand what oral and maxillofacial surgeons do, how their training differs from general dentistry, and when their involvement is relevant in New York.',
    section: 'question',
    contentFile: 'content/questions/what-is-an-oral-and-maxillofacial-surgeon.mdx',
    routeFile: 'app/questions/what-is-an-oral-and-maxillofacial-surgeon/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-long-does-a-tooth-extraction-take',
    title: 'How Long Does a Tooth Extraction Take? | New York Patient Guide',
    description:
      'Simple extractions take 20–40 minutes. Surgical cases with impaction or multiple roots typically take 45–90 minutes. Key variables explained.',
    section: 'question',
    contentFile: 'content/questions/how-long-does-a-tooth-extraction-take.mdx',
    routeFile: 'app/questions/how-long-does-a-tooth-extraction-take/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-the-cost-of-full-mouth-reconstruction',
    title: 'What Is the Cost of Full-Mouth Reconstruction? | New York Guide',
    description:
      'Full-mouth reconstruction in New York typically costs $30,000–$90,000 or more depending on implant count, grafting needs, and material choices.',
    section: 'question',
    contentFile: 'content/questions/what-is-the-cost-of-full-mouth-reconstruction.mdx',
    routeFile: 'app/questions/what-is-the-cost-of-full-mouth-reconstruction/page.tsx',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-peri-implant-mucositis',
    title: 'What Is Peri-Implant Mucositis? | Implant Health Explained',
    description:
      'Peri-implant mucositis is reversible gum inflammation around a dental implant — an early warning sign that can be resolved before bone loss begins.',
    section: 'question',
    contentFile: 'content/questions/what-is-peri-implant-mucositis.mdx',
    routeFile: 'app/questions/what-is-peri-implant-mucositis/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-does-board-certified-mean-for-oral-surgeons',
    title: 'What Does Board Certified Mean for Oral Surgeons? | New York',
    description:
      'Board certification by ABOMS is a voluntary credential beyond state licensure. What it requires, what it signals, and how to verify certification status.',
    section: 'question',
    contentFile: 'content/questions/what-does-board-certified-mean-for-oral-surgeons.mdx',
    routeFile: 'app/questions/what-does-board-certified-mean-for-oral-surgeons/page.tsx',
    priority: 0.79,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-does-diabetes-affect-oral-surgery',
    title: 'How Does Diabetes Affect Oral Surgery? | New York Patient Guide',
    description:
      'Diabetes affects healing, infection risk, and osseointegration. What patients with diabetes should disclose before oral surgery and what to ask providers.',
    section: 'question',
    contentFile: 'content/questions/how-does-diabetes-affect-oral-surgery.mdx',
    routeFile: 'app/questions/how-does-diabetes-affect-oral-surgery/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-long-does-a-dental-implant-last',
    title: 'How Long Does a Dental Implant Last? | New York Patient Guide',
    description:
      'Understand how long dental implants typically last in New York, what affects longevity, the difference between the implant post and crown, and maintenance requirements.',
    section: 'question',
    contentFile: 'content/questions/how-long-does-a-dental-implant-last.mdx',
    routeFile: 'app/questions/how-long-does-a-dental-implant-last/page.tsx',
    priority: 0.8,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/can-you-smoke-after-tooth-extraction',
    title: 'Can You Smoke After Tooth Extraction? | New York Recovery Guide',
    description:
      'Smoking significantly increases dry socket risk after tooth extraction. Why it matters, how long to wait, and what to watch for during recovery in New York.',
    section: 'question',
    contentFile: 'content/questions/can-you-smoke-after-tooth-extraction.mdx',
    routeFile: 'app/questions/can-you-smoke-after-tooth-extraction/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-a-healing-abutment',
    title: 'What Is a Healing Abutment? | Dental Implant Process Explained',
    description:
      'A healing abutment shapes the gum tissue around the implant during the transition from bone integration to final crown placement. The role explained.',
    section: 'question',
    contentFile: 'content/questions/what-is-a-healing-abutment.mdx',
    routeFile: 'app/questions/what-is-a-healing-abutment/page.tsx',
    priority: 0.76,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-immediate-implant-placement',
    title: 'What Is Immediate Implant Placement? | New York Patient Guide',
    description:
      'Immediate implant placement means placing the implant on the same day as tooth extraction. When it is appropriate, when it is not, and what to ask.',
    section: 'question',
    contentFile: 'content/questions/what-is-immediate-implant-placement.mdx',
    routeFile: 'app/questions/what-is-immediate-implant-placement/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-do-blood-thinners-affect-oral-surgery',
    title: 'How Do Blood Thinners Affect Oral Surgery? | New York Guide',
    description:
      'Blood thinners affect clotting and healing after oral surgery. What to disclose, how surgeons manage the risk, and what to ask your prescribing physician.',
    section: 'question',
    contentFile: 'content/questions/how-do-blood-thinners-affect-oral-surgery.mdx',
    routeFile: 'app/questions/how-do-blood-thinners-affect-oral-surgery/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-a-dental-crown',
    title: 'What Is a Dental Crown and When Is One Placed After Oral Surgery?',
    description:
      'A dental crown is a tooth-shaped cap placed over an implant or natural tooth. Materials, timing after implant placement, cemented vs. screw-retained, and cost context.',
    section: 'question',
    contentFile: 'content/questions/what-is-a-dental-crown.mdx',
    routeFile: 'app/questions/what-is-a-dental-crown/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-do-i-know-if-my-extraction-site-is-healing-normally',
    title: 'How Do I Know If My Extraction Site Is Healing Normally?',
    description:
      'Normal extraction healing by day: clot formation, swelling timeline, soft tissue closure. Red flags for dry socket, infection, or incomplete healing that warrant a call.',
    section: 'question',
    contentFile: 'content/questions/how-do-i-know-if-my-extraction-site-is-healing-normally.mdx',
    routeFile: 'app/questions/how-do-i-know-if-my-extraction-site-is-healing-normally/page.tsx',
    priority: 0.77,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-a-flipper-tooth',
    title: 'What Is a Flipper Tooth and When Is One Used After an Extraction?',
    description:
      'A flipper is a removable acrylic partial denture for temporary tooth replacement. When it is appropriate, NYC cost context, and limitations versus fixed alternatives.',
    section: 'question',
    contentFile: 'content/questions/what-is-a-flipper-tooth.mdx',
    routeFile: 'app/questions/what-is-a-flipper-tooth/page.tsx',
    priority: 0.75,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/what-is-nerve-damage-after-oral-surgery',
    title: 'What Is Nerve Damage After Oral Surgery and How Is It Identified?',
    description:
      'Nerve injury risk in oral surgery: inferior alveolar nerve and lingual nerve. Distinguishing temporary numbness from lasting paresthesia, and what evaluations follow.',
    section: 'question',
    contentFile: 'content/questions/what-is-nerve-damage-after-oral-surgery.mdx',
    routeFile: 'app/questions/what-is-nerve-damage-after-oral-surgery/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
  {
    path: '/questions/how-are-dental-implants-priced-per-arch',
    title: 'How Are Dental Implants Priced Per Arch for Full-Arch Replacement?',
    description:
      'Full-arch implant pricing in NYC: per-arch quote structure, what All-on-4 includes and excludes, difference from per-implant pricing, and written estimate guidance.',
    section: 'question',
    contentFile: 'content/questions/how-are-dental-implants-priced-per-arch.mdx',
    routeFile: 'app/questions/how-are-dental-implants-priced-per-arch/page.tsx',
    priority: 0.78,
    changeFrequency: 'weekly',
    indexable: true,
  },
]

export function getRouteByPath(routePath: string): RouteEntry {
  const route = ROUTE_INDEX.find((entry) => entry.path === routePath)

  if (!route) {
    throw new Error(`Route not found in ROUTE_INDEX: ${routePath}`)
  }

  return route
}

export function getAllPublicRoutes(): RouteEntry[] {
  return ROUTE_INDEX.filter((entry) => entry.indexable)
}

export function absoluteUrl(routePath: string): string {
  return new URL(routePath, SITE_URL).toString()
}

export function resolveProjectPath(relativePath: string): string {
  return path.join(process.cwd(), relativePath)
}

export function getRouteLastModified(entry: RouteEntry): Date {
  const candidates = [entry.contentFile, entry.routeFile].filter(
    Boolean
  ) as string[]

  const mtimes = candidates
    .map((file) => resolveProjectPath(file))
    .filter((filePath) => fs.existsSync(filePath))
    .map((filePath) => fs.statSync(filePath).mtime)

  if (mtimes.length === 0) {
    return new Date()
  }

  return mtimes.sort((a, b) => b.getTime() - a.getTime())[0]
}

export function buildSitemapEntries() {
  return getAllPublicRoutes().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: getRouteLastModified(entry),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
