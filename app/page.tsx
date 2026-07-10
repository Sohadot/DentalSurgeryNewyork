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
              treatment decision factors, and borough-level context through an
              editorially independent oral surgery reference built for New York patients.
            </p>

            <div className="hero-actions">
              <Link href="/methodology" className="button-primary">
                Read Our Methodology
              </Link>
              <Link href="/locations" className="button-secondary">
                Explore Borough Guides
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
              <Link href="/guides/choose-an-oral-surgeon" className="hero-panel-link">
                Choosing an Oral Surgeon
              </Link>
              <Link href="/locations" className="hero-panel-link">
                New York City Borough Guides
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
            DentalSurgeryNewYork.com is built to improve decision clarity in a
            category where treatment framing, provider positioning, and pricing
            logic are often difficult to interpret. The site is structured to
            explain, not to pressure.
          </p>
        </div>
      </section>

      <section className="reference-map" aria-label="Core reference map">
        <div className="container">
          <div className="reference-map-head">
            <div className="page-eyebrow">Core Reference Map</div>
            <h2 className="section-title">
              A governed reference for oral surgery decisions in New York
            </h2>
            <p className="section-paragraph">
              The pages below form the core of this reference. They are the
              places to start when weighing procedure scope, cost context,
              surgeon-selection questions, borough considerations, and
              coverage boundaries.
            </p>
          </div>

          <nav className="reference-map-grid" aria-label="Core reference pages">
            <div className="reference-map-card">
              <h3 className="reference-map-card-title">Cost Context</h3>
              <p className="reference-map-card-description">
                Directional cost structures and the factors behind them,
                independent of any single practice&apos;s fee schedule.
              </p>
              <div className="reference-map-links">
                <Link href="/costs/dental-implants" className="reference-map-link">
                  Dental Implant Cost in New York
                </Link>
                <Link href="/costs/wisdom-tooth-removal" className="reference-map-link">
                  Wisdom Tooth Removal Cost
                </Link>
                <Link href="/cost-index" className="reference-map-link">
                  Oral Surgery Cost Index
                </Link>
                <Link
                  href="/questions/what-is-included-in-implant-cost"
                  className="reference-map-link"
                >
                  What an Implant Quote Includes
                </Link>
              </div>
            </div>

            <div className="reference-map-card">
              <h3 className="reference-map-card-title">Procedure Guidance</h3>
              <p className="reference-map-card-description">
                What each procedure involves, and how to evaluate the surgeon
                who would perform it.
              </p>
              <div className="reference-map-links">
                <Link href="/procedures/dental-implants" className="reference-map-link">
                  Dental Implants
                </Link>
                <Link href="/procedures/wisdom-tooth-removal" className="reference-map-link">
                  Wisdom Tooth Removal
                </Link>
                <Link href="/guides/choose-an-oral-surgeon" className="reference-map-link">
                  Choosing an Oral Surgeon
                </Link>
              </div>
            </div>

            <div className="reference-map-card">
              <h3 className="reference-map-card-title">NYC Local Context</h3>
              <p className="reference-map-card-description">
                Borough-level considerations for patients comparing oral
                surgery care across New York City.
              </p>
              <div className="reference-map-links">
                <Link href="/locations/manhattan" className="reference-map-link">
                  Manhattan
                </Link>
                <Link href="/locations/brooklyn" className="reference-map-link">
                  Brooklyn
                </Link>
                <Link href="/locations/staten-island" className="reference-map-link">
                  Staten Island
                </Link>
              </div>
            </div>

            <div className="reference-map-card">
              <h3 className="reference-map-card-title">Evidence &amp; Governance</h3>
              <p className="reference-map-card-description">
                How this reference is produced, validated, and kept editorially
                independent.
              </p>
              <div className="reference-map-links">
                <Link href="/asset-readiness" className="reference-map-link">
                  Asset Readiness
                </Link>
                <Link href="/methodology" className="reference-map-link">
                  Methodology
                </Link>
                <Link
                  href="/questions/does-medicaid-cover-oral-surgery-in-new-york"
                  className="reference-map-link"
                >
                  Medicaid Coverage Guide
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </main>
  )
}
