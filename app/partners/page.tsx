import { buildMetadata } from '../../lib/metadata'
import { getRouteByPath } from '../../lib/content-index'
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from '../../lib/schema'

const route = getRouteByPath('/partners')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

const TIERS = [
  {
    name: 'Verified Practice Presence',
    price: '$300 – $500',
    period: 'per month',
    description:
      'Entry-level transparent placement for licensed practices entering the program.',
    includes: [
      'Practice profile card in the partner directory',
      'Visible in your relevant borough section',
      'Outbound link to your practice website',
      'Contact information displayed',
      'Clear “Partner Practice” disclosure label',
    ],
    note: 'Suitable for founding partners. No traffic guarantees. No clinical claims.',
    featured: false,
  },
  {
    name: 'Reference Partner',
    price: '$750 – $1,250',
    period: 'per month',
    description:
      'Standard placement for practices wanting visibility across procedure and location pages.',
    includes: [
      'Everything in Verified Practice Presence',
      'Visible on relevant procedure pages',
      'Visible on relevant cost guide pages',
      'Visible on relevant borough pages',
      'Monthly impression and click report',
      'Priority review for new content sections',
    ],
    note: 'The core program tier. Designed for practices seeking consistent, transparent presence inside a trusted reference environment.',
    featured: true,
  },
  {
    name: 'Category Sponsor',
    price: 'From $2,500',
    period: 'per month',
    description:
      'Limited sponsorship of a specific procedure, cost guide, or borough section, with underwritten guide option.',
    includes: [
      'Everything in Reference Partner',
      'Named sponsorship of a procedure, cost guide, or borough section',
      'Option to underwrite a relevant educational guide',
      'Monthly aggregated demand intelligence report',
      'Limited availability — reviewed individually',
    ],
    note: 'Available once relevant content depth is established. Limited to one sponsor per category.',
    featured: false,
  },
]

const PRINCIPLES = [
  {
    heading: 'Editorial independence is absolute',
    body: 'Partner placement does not influence procedure guides, cost guides, or decision content. Partners do not review, edit, or approve editorial content.',
  },
  {
    heading: 'All placements are disclosed',
    body: 'Every partner appearance carries a visible disclosure. Visitors are never misled about the commercial nature of a placement.',
  },
  {
    heading: 'No clinical ranking is sold',
    body: 'Placement does not make a practice “best,” “recommended,” or “preferred” in any clinical sense. The site does not compare clinical outcomes.',
  },
  {
    heading: 'No pay-per-patient structure',
    body: 'Fees are fixed monthly amounts. No revenue is derived from patient referral counts, treatment volumes, or clinical outcomes.',
  },
  {
    heading: 'Licensed providers only',
    body: 'Placement is open to practices holding a valid New York State license in oral and maxillofacial surgery, periodontology, or relevant dental specialties.',
  },
]

export default function PartnersPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildMedicalWebPageSchema({
              title: route.title,
              description: route.description,
              path: route.path,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Partner Practice Program', path: '/partners' },
            ])
          ),
        }}
      />

      <section className="partners-hero">
        <div className="container">
          <div className="page-eyebrow">Partner Practice Program</div>
          <h1 className="partners-title">
            Transparent placement inside an independent oral surgery reference
          </h1>
          <p className="partners-intro">
            dentalsurgerynewyork.com is an editorially independent oral surgery
            guidance platform for New York City patients. We offer a limited
            number of disclosed partner-practice placements for licensed
            providers who want to be visible inside a trusted educational
            environment — without influencing editorial content.
          </p>
        </div>
      </section>

      <section className="container partners-section">
        <div className="partners-copy-block">
          <h2 className="partners-section-title">What this program is</h2>
          <p className="partners-body-text">
            This is not a lead generation service, an advertising network, or a
            ranking system where payment determines clinical position.
          </p>
          <p className="partners-body-text">
            Partner placement gives licensed oral surgery and dental implant
            practices transparent visibility within a structured, patient-first
            reference — alongside clear disclosure of the commercial
            relationship. Patients see who the partners are. Partners do not
            control what patients read.
          </p>
          <p className="partners-body-text">
            Placement surfaces include procedure guides, cost guides, and borough
            location pages. Reference Partners and Category Sponsors are visible
            across all relevant content surfaces within their tier.
          </p>
        </div>
      </section>

      <section className="container partners-section">
        <h2 className="partners-section-title">Program tiers</h2>
        <div className="tier-grid">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`tier-card${tier.featured ? ' tier-card--featured' : ''}`}
            >
              {tier.featured && <div className="tier-badge">Core Tier</div>}
              <div className="tier-header">
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price">
                  <span className="tier-price-amount">{tier.price}</span>
                  <span className="tier-price-period"> / {tier.period}</span>
                </div>
              </div>
              <p className="tier-description">{tier.description}</p>
              <ul className="tier-includes">
                {tier.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="tier-note">{tier.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container partners-section">
        <div className="partners-copy-block">
          <h2 className="partners-section-title">Educational guide underwriting</h2>
          <p className="partners-body-text">
            Qualified practices may support selected reference guides, cost-index
            pages, or checklist resources through fixed-fee, disclosed
            underwriting. Underwriting places the practice’s name on a specific
            resource as a financial supporter — not as an editorial contributor.
          </p>
          <p className="partners-body-text">
            Underwriting is available to Reference Partner and Category Sponsor
            tier practices. Available surfaces include procedure guides, cost
            guides, the cost index, and consultation checklists.
          </p>
          <ul className="tier-includes">
            <li>
              <strong>No editorial control</strong> — the underwriter does not
              review, approve, or modify content on the underwritten page
            </li>
            <li>
              <strong>No clinical endorsement</strong> — underwriting is not a
              clinical recommendation or ranking of any kind
            </li>
            <li>
              <strong>No ranking advantage</strong> — underwriting does not
              affect practice ordering or positioning relative to other practices
            </li>
            <li>
              <strong>No pay-per-lead</strong> — underwriting is a fixed fee
              unrelated to patient volume or inquiries
            </li>
            <li>
              <strong>No revenue share</strong> — fees are flat; no percentage
              of clinical revenue is exchanged
            </li>
            <li>
              <strong>No patient data transfer</strong> — the site does not
              collect or share patient contact information
            </li>
          </ul>
          <p className="partners-disclosure">
            All underwritten pages carry a visible disclosure: “This page is
            underwritten by [Practice Name]. Editorial content is independently
            produced and is not subject to the underwriter’s review or
            approval.”
          </p>
        </div>
      </section>

      <section className="container partners-section">
        <h2 className="partners-section-title">Governing principles</h2>
        <div className="principles-list">
          {PRINCIPLES.map((p) => (
            <div key={p.heading} className="principle-item">
              <h3 className="principle-heading">{p.heading}</h3>
              <p className="principle-body">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container partners-section partners-section--last">
        <div className="partners-copy-block">
          <h2 className="partners-section-title">How to inquire</h2>
          <p className="partners-body-text">
            Partner placement is reviewed individually. To be considered, a
            practice should hold a valid New York State license and have no
            active disciplinary action from the Office of the Professions.
          </p>
          <p className="partners-body-text">
            To open a conversation, email{' '}
            <a
              href="mailto:partners@dentalsurgerynewyork.com"
              className="partners-email-link"
            >
              partners@dentalsurgerynewyork.com
            </a>{' '}
            with your practice name, borough, and primary procedure focus.
            Placement availability is limited and reviewed on a rolling basis.
          </p>
          <p className="partners-disclosure">
            Inclusion in the partner program does not constitute a clinical
            endorsement, recommendation, or ranking. This site does not verify
            clinical outcomes. All partner placements are disclosed to visitors.
            Practices remain fully responsible for their own clinical care,
            pricing, and patient communication.
          </p>
        </div>
      </section>
    </main>
  )
}
