import Link from 'next/link'
import TrustStrip from '../components/trust-strip'
import { getRouteByPath } from '../lib/content-index'
import { buildMetadata } from '../lib/metadata'

const route = getRouteByPath('/')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-overline">
              Independent Oral Surgery Reference · New York City
            </div>

            <h1 className="hero-title">
              Structured guidance for oral surgery decisions in New York City
            </h1>

            <p className="hero-description">
              Understand procedures, cost structures, surgeon-selection questions,
              and treatment decision factors through an editorially independent oral
              surgery reference built for New York patients.
            </p>

            <div className="hero-actions">
              <Link href="/methodology" className="button-primary">
                Read Our Methodology
              </Link>
              <Link href="/disclaimer" className="button-secondary">
                Read Disclaimer
              </Link>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Core reference areas">
            <div className="hero-panel-head">Core Reference Areas</div>
            <div className="hero-panel-list">
              <Link href="/procedures/dental-implants" className="hero-panel-link">
                Dental Implants
              </Link>
              <Link href="/costs/dental-implants" className="hero-panel-link">
                Dental Implant Cost
              </Link>
              <Link
                href="/guides/choose-an-oral-surgeon"
                className="hero-panel-link"
              >
                Choosing an Oral Surgeon
              </Link>
              <Link href="/methodology" className="hero-panel-link">
                Methodology
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <TrustStrip />

      <section className="container home-section">
        <div className="home-copy-block">
          <div className="page-eyebrow">What this asset is</div>
          <h2 className="section-title">
            A patient-first reference, not a disguised sales funnel
          </h2>
          <p className="section-paragraph">
            DentalSurgeryNewYork.com is being built to improve decision clarity in a
            category where treatment framing, provider positioning, and pricing
            logic are often difficult to interpret. The site is structured to
            explain, not to pressure.
          </p>
        </div>
      </section>
    </main>
  )
}
