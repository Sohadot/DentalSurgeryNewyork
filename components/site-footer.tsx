import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark footer-brand">
            Dental Surgery <span>New York</span>
          </div>
          <p className="footer-copy-intro">
            Independent oral surgery guidance for patients seeking clearer
            procedure, cost, and decision information in New York.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/methodology">Methodology</Link>
          <Link href="/independence-policy">Independence Policy</Link>
          <Link href="/accuracy-policy">Accuracy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  )
}
