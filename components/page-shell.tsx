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
    <main className="page-main">
      <section className="container page-section">
        {eyebrow ? <div className="page-eyebrow">{eyebrow}</div> : null}
        <h1 className="page-title">{title}</h1>
        {intro ? <p className="page-intro">{intro}</p> : null}
        <div className="prose-wrap">{children}</div>
      </section>
    </main>
  )
}
