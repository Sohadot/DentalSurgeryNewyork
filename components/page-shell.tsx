import type { ReactNode } from 'react'

type PageShellProps = {
  eyebrow?: string
  title: string
  intro?: string
  children: ReactNode
}

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: PageShellProps) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {eyebrow ? (
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            {eyebrow}
          </div>
        ) : null}

        <h1 className="font-serif text-4xl leading-tight tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h1>

        {intro ? (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{intro}</p>
        ) : null}

        <div className="mt-12 prose prose-slate max-w-none">{children}</div>
      </section>
    </main>
  )
}
