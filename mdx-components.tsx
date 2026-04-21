import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-slate-950"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-12 font-serif text-2xl md:text-3xl leading-tight text-slate-950"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 font-serif text-xl md:text-2xl leading-snug text-slate-950"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mt-5 text-base md:text-lg leading-8 text-slate-700" {...props} />
    ),
    ul: (props) => (
      <ul className="mt-5 list-disc pl-6 space-y-3 text-slate-700" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-5 list-decimal pl-6 space-y-3 text-slate-700" {...props} />
    ),
    li: (props) => <li className="leading-8" {...props} />,
    a: (props) => (
      <a
        className="text-slate-900 underline underline-offset-4 hover:text-slate-700"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-semibold text-slate-950" {...props} />,
    hr: (props) => <hr className="my-10 border-slate-200" {...props} />,
    ...components,
  }
}
