import Link from 'next/link'
import TrustStrip from '@/components/trust-strip'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Independent Oral Surgery Guidance for New York City',
  description:
    'Understand procedures, cost structures, surgeon-selection questions, and treatment decision factors through an editorially independent oral surgery reference built for New York patients.',
  path: '/',
})

export default function HomePage() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.18em] text-slate-300">
              Independent Oral Surgery Reference · New York City
            </div>

            <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Structured guidance for oral surgery decisions in New York City
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Understand procedures, cost structures, surgeon-selection questions,
              and treatment decision factors through an editorially independent oral
              surgery reference built for New York patients.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/methodology"
                className="bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
              >
                Read Our Methodology
              </Link>
              <Link
                href="/disclaimer"
                className="border border-slate-500 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-300"
              >
                Read Disclaimer
              </Link>
            </div>
          </div>

          <div className="border border-slate-800 bg-slate-900">
            <div className="border-b border-slate-800 px-6 py-4 text-xs uppercase tracking-[0.16em] text-slate-400">
              Core Reference Areas
            </div>

            <div className="grid">
              {[
                ['/procedures/dental-implants', 'Dental Implants'],
                ['/costs/dental-implants', 'Dental Implant Cost'],
                ['/guides/choose-an-oral-surgeon', 'Choosing an Oral Surgeon'],
                ['/methodology', 'Methodology'],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="border-b border-slate-800 px-6 py-5 text-slate-200 transition hover:bg-slate-800"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
            What this asset is
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-slate-950 md:text-4xl">
            A patient-first reference, not a disguised sales funnel
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            DentalSurgeryNewYork.com is being built to improve decision clarity in a
            category where treatment framing, provider positioning, and pricing logic
            are often difficult to interpret. The site is structured to explain, not
            to pressure.
          </p>
        </div>
      </section>
    </main>
  )
}
