import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-serif text-lg text-slate-950">
              Dental Surgery <span className="italic text-slate-700">New York</span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Independent oral surgery guidance for patients seeking clearer procedure,
              cost, and decision information in New York.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-slate-600">
            <Link href="/methodology" className="hover:text-slate-950">
              Methodology
            </Link>
            <Link href="/independence-policy" className="hover:text-slate-950">
              Independence Policy
            </Link>
            <Link href="/accuracy-policy" className="hover:text-slate-950">
              Accuracy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-950">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
