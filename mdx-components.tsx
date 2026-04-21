import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    h4: (props) => <h4 {...props} />,
    p: (props) => <p {...props} />,
    ul: (props) => <ul {...props} />,
    ol: (props) => <ol {...props} />,
    li: (props) => <li {...props} />,
    a: (props) => <a {...props} />,
    strong: (props) => <strong {...props} />,
    em: (props) => <em {...props} />,
    hr: (props) => <hr {...props} />,
    blockquote: (props) => <blockquote {...props} />,
    ...components,
  }
}
