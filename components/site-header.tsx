import Link from 'next/link'

const navItems = [
  { href: '/methodology', label: 'Methodology' },
  { href: '/guides/choose-an-oral-surgeon', label: 'Choose a Surgeon' },
  { href: '/costs/dental-implants', label: 'Cost Guides' },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg text-slate-950">
          Dental Surgery <span className="italic text-slate-700">New York</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
