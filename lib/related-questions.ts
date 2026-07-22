// Related-questions map: parent authority page -> related question routes.
//
// Purpose: give patient-facing question pages an internal, contextual inbound
// link from the authority page they belong to. This is a priority-architecture
// layer (crawl reachability + reader navigation), not an SEO link block. Every
// mapping is a genuine topical relationship; question titles are resolved from
// ROUTE_INDEX so link text never drifts from the page's own title.
//
// Governance: no new pages, no ranking or "best" language, no commercial signal.
// Every path below must exist in lib/content-index.ts ROUTE_INDEX.

export const RELATED_QUESTIONS: Record<string, string[]> = {
  '/procedures/dental-implants': [
    '/questions/how-do-i-care-for-my-dental-implant',
    '/questions/how-does-age-affect-dental-implant-candidacy',
    '/questions/what-is-a-mini-dental-implant',
    '/questions/what-is-a-dental-crown',
    '/questions/what-is-immediate-implant-placement',
    '/questions/what-is-a-healing-abutment',
  ],
  '/costs/dental-implants': [
    '/questions/how-are-dental-implants-priced-per-arch',
  ],
  '/procedures/tooth-extraction': [
    '/questions/can-you-smoke-after-tooth-extraction',
    '/questions/how-long-does-a-tooth-extraction-take',
    '/questions/what-is-a-flipper-tooth',
  ],
  '/procedures/wisdom-tooth-removal': [
    '/questions/what-is-pericoronitis',
    '/questions/what-is-nerve-damage-after-oral-surgery',
  ],
  '/procedures/oral-surgery-sedation': [
    '/questions/what-is-iv-sedation-and-how-does-it-work',
    '/questions/how-do-blood-thinners-affect-oral-surgery',
  ],
  '/procedures/bone-grafting': [
    '/questions/how-long-does-bone-grafting-take-to-heal',
  ],
  '/guides/choose-an-oral-surgeon': [
    '/questions/what-does-board-certified-mean-for-oral-surgeons',
  ],
}

export function getRelatedQuestions(parentPath: string): string[] {
  return RELATED_QUESTIONS[parentPath] ?? []
}
