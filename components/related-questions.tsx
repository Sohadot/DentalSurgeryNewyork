import Link from 'next/link'
import { getRouteByPath } from '../lib/content-index'
import { getRelatedQuestions } from '../lib/related-questions'

// Renders a contextual "Related questions" navigation block on an authority
// page. Link labels are resolved from ROUTE_INDEX (single source of truth) so
// they always match each question page's own title. Renders nothing when the
// parent has no mapped questions.

export default function RelatedQuestions({ parentPath }: { parentPath: string }) {
  const paths = getRelatedQuestions(parentPath)

  if (paths.length === 0) {
    return null
  }

  return (
    <nav className="related-questions" aria-label="Related questions">
      <h2 className="related-questions-title">Related questions</h2>
      <ul className="related-questions-list">
        {paths.map((path) => {
          const label = getRouteByPath(path).title.split(' | ')[0]
          return (
            <li key={path}>
              <Link href={path}>{label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
