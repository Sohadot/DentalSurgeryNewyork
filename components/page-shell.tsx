import type { ReactNode } from 'react'

type PageShellProps = {
  eyebrow?: string
  title: string
  intro?: string
  children: ReactNode
  schemas?: object[]
}

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
  schemas,
}: PageShellProps) {
  return (
    <main className="page-main">
      {schemas?.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <section className="container page-section">
        {eyebrow ? <div className="page-eyebrow">{eyebrow}</div> : null}
        <h1 className="page-title">{title}</h1>
        {intro ? <p className="page-intro">{intro}</p> : null}
        <div className="prose-wrap">{children}</div>
      </section>
    </main>
  )
}
