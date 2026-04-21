import { TRUST_SIGNALS } from '../lib/site-config'

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust signals">
      <div className="container trust-grid">
        {TRUST_SIGNALS.map((item) => (
          <div key={item} className="trust-item">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
