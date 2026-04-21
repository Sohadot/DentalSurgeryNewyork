import Link from 'next/link'
import { PRIMARY_NAV } from '../lib/site-config'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container shell-row">
        <Link href="/" className="brand-mark" aria-label="Dental Surgery New York home">
          Dental Surgery <span>New York</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
