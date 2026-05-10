import { buildMetadata } from '../../lib/metadata'
import { getRouteByPath } from '../../lib/content-index'
import Link from 'next/link'

const route = getRouteByPath('/procedures')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

const PROCEDURES = [
  {
    href: '/procedures/dental-implants',
    title: 'Dental Implants',
    description:
      'Understand the multi-component structure of implant treatment, common pricing misconceptions, and the questions a written estimate should answer.',
    costHref: '/costs/dental-implants',
    costLabel: 'Dental implant cost guide',
  },
  {
    href: '/procedures/wisdom-tooth-removal',
    title: 'Wisdom Tooth Removal',
    description:
      'Learn how extraction complexity, sedation type, imaging, and tooth position affect total cost and recovery for wisdom tooth cases in New York.',
    costHref: '/costs/wisdom-tooth-removal',
    costLabel: 'Wisdom tooth removal cost guide',
  },
  {
    href: '/procedures/tooth-extraction',
    title: 'Tooth Extraction',
    description:
      'Understand the difference between simple and surgical extraction, what often follows removal, and the questions worth asking before treatment.',
    costHref: '/costs/tooth-extraction',
    costLabel: 'Tooth extraction cost guide',
  },
  {
    href: '/procedures/bone-grafting',
    title: 'Bone Grafting',
    description:
      'Learn when bone grafting is recommended, what graft types exist, how material and complexity affect cost, and why it matters for implant planning.',
    costHref: '/costs/bone-grafting',
    costLabel: 'Bone grafting cost guide',
  },
  {
    href: '/procedures/oral-surgery-sedation',
    title: 'Oral Surgery Sedation',
    description:
      'Understand sedation types used in oral surgery, New York State credential requirements, cost structure, and what recovery looks like for each approach.',
    costHref: '/costs/oral-surgery-sedation',
    costLabel: 'Sedation cost guide',
  },
  {
    href: '/procedures/emergency-oral-surgery',
    title: 'Emergency Oral Surgery',
    description:
      'Know when to go to an ER versus contact an oral surgeon directly, what signs indicate urgency, and what cost factors are common in urgent situations.',
    costHref: '/costs/emergency-oral-surgery',
    costLabel: 'Emergency oral surgery cost guide',
  },
]

export default function ProceduresPage() {
  return (
    <main>
      <section className="procedures-intro">
        <div className="container">
          <div className="page-eyebrow">Procedure Reference</div>
          <h1 className="page-title">Oral Surgery Procedures</h1>
          <p className="page-intro">
            Independent patient-first guides to the oral surgery procedures most
            frequently encountered by New York patients. Each section explains
            procedure structure, cost factors, and the questions worth asking
            before treatment.
          </p>
        </div>
      </section>

      <section className="container procedures-section">
        <div className="procedures-grid">
          {PROCEDURES.map((proc) => (
            <div key={proc.href} className="procedure-card">
              <h2 className="procedure-card-title">
                <Link href={proc.href}>{proc.title}</Link>
              </h2>
              <p className="procedure-card-description">{proc.description}</p>
              <div className="procedure-card-links">
                <Link href={proc.href} className="procedure-card-link">
                  Procedure guide →
                </Link>
                <Link
                  href={proc.costHref}
                  className="procedure-card-link procedure-card-link--cost"
                >
                  {proc.costLabel} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
