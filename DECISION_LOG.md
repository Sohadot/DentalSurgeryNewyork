# Decision Log

## 2026-07-22 - Related Questions Layer (Orphan Reachability Repair)

**Decision:** Add a contextual "Related questions" navigation block to seven authority pages (five procedure guides, the dental-implants cost guide, and the choose-an-oral-surgeon guide), linking the 16 question pages that previously had no internal inbound link.

**Rationale:** An internal-link audit found 16 `/questions/*` pages reachable only from the sitemap — zero inbound internal links — consistent with the Search Console cohort of discovered pages dropped from Google's crawl queue. Authority pages are well-linked (30–44 inbound); these 16 were structurally invisible to crawlers, to patients navigating a decision, and to AI systems that follow site structure. Each question is now linked from the single authority page it topically belongs to, giving it a genuine internal path and a priority signal. This is a priority-architecture layer, not an SEO link block: every link is a real topical relationship, and question titles are resolved from `ROUTE_INDEX` so link text never drifts from each page's own title.

**Artifacts created/changed:**

- `lib/related-questions.ts` — typed parent→questions map and accessor.
- `components/related-questions.tsx` — renders the block; labels resolved from `ROUTE_INDEX`; renders nothing when a parent has no mapped questions.
- `styles/related-questions.css` and its `styles/globals.css` import.
- Seven authority pages render `<RelatedQuestions />` after their content: `/procedures/dental-implants`, `/procedures/tooth-extraction`, `/procedures/wisdom-tooth-removal`, `/procedures/oral-surgery-sedation`, `/procedures/bone-grafting`, `/costs/dental-implants`, `/guides/choose-an-oral-surgeon`.

**Verification:** `npm run typecheck`, the full `npm run validate` governance suite (content, routes, seo, asset-governance, evidence-integrity, cost-content, cost-data), and `next build` all pass. Post-change internal-link audit reports 0 orphan routes (down from 16).

**What this decision does not authorize:** No new pages. No aggressive or purchased link building, and no bulk indexing requests. No ranking, "best," or commercial language — the block is neutral navigation. No change to editorial content, cost data, or commercial posture.

---

## 2026-07-10 - Homepage Reference Priority Layer (Core Reference Map)

**Decision:** Add a "Core Reference Map" section to the homepage that links the asset's authority pages directly from the root, organized as four functional groups: Cost Context, Procedure Guidance, NYC Local Context, and Evidence & Governance.

**Rationale:** Search Console data (as of 2026-06-30) shows 11 pages indexed out of 97 in the sitemap, with a cohort of ~25 discovered pages dropped from Google's crawl queue in late May. Live URL tests confirm pages are technically indexable, so the constraint is crawl priority, not crawlability. The homepage previously linked only 5 internal destinations, giving no signal about which pages are central to the system. This layer places the authority pages one click from the root — for crawlers, for patients navigating decisions, and for any buyer or underwriter evaluating whether the asset is a system or a pile of articles.

**Framing constraint:** This is a priority architecture layer, not an SEO link block. Each group carries a functional description of what the pages do for a patient's decision. No "guaranteed," "best," or ranking language. Externally the layer is described as "a governed reference for oral surgery decisions in New York"; internally it advances the asset's positioning from category asset toward category intelligence source.

**Pages elevated to root-level linking:**

- `/costs/dental-implants`
- `/costs/wisdom-tooth-removal`
- `/cost-index`
- `/questions/what-is-included-in-implant-cost`
- `/procedures/dental-implants`
- `/procedures/wisdom-tooth-removal`
- `/guides/choose-an-oral-surgeon`
- `/locations/manhattan`
- `/locations/brooklyn`
- `/locations/staten-island` (the one page with an open "crawled, currently not indexed" validation in Search Console)
- `/asset-readiness`
- `/methodology`
- `/questions/does-medicaid-cover-oral-surgery-in-new-york`

**Artifacts changed:**

- `app/page.tsx` - Core Reference Map section added after the "What this asset is" block.
- `styles/reference-map.css` - dedicated styles following existing tokens.
- `styles/globals.css` - import added.

**What this decision does not authorize:** No new pages. No aggressive link building, purchased backlinks, or indexing-API use. No bulk indexing requests. Manual indexing requests remain limited to the authority pages above, paced over days. External signals are limited to clean surfaces (owned portfolio/profile links, genuine citations).

---

## 2026-06-20 - Public Proof Layer and Strategic Acquisition Posture

**Decision:** Add a public asset-readiness page and an internal strategic acquisition/underwriting brief to shift the asset from page expansion toward proof depth.

**Rationale:** The asset's next value increase should come from visible governance, evidence posture, authority-page depth, and commercial discipline rather than undifferentiated page growth. A serious buyer, underwriter, or partner should be able to see that the site is not merely a domain with articles but a governed reference system.

**Artifacts created:**

- `/asset-readiness` - public summary of validation gates, evidence posture, cost boundaries, and commercial limits.
- `STRATEGIC_ACQUISITION_BRIEF.md` - cautious buyer/underwriter-facing positioning document.

**Authority pages linked to proof layer:**

- `/costs/dental-implants`
- `/procedures/dental-implants`
- `/questions/what-is-included-in-implant-cost`
- `/questions/does-medicaid-cover-oral-surgery-in-new-york`
- `/cost-index`
- `/methodology`
- `/editorial-updates`

**Governance principle established:** The asset should not ask to be bought. It should make non-ownership feel like a missed strategic position. This principle does not permit hype, fake scarcity, traffic guarantees, ranking promises, or clinical authority claims. It requires proof surfaces that make the asset's structure, trust architecture, and commercial boundaries inspectable.

**Search Console posture:** Search Console connection is identified as the next external proof step. Metrics should be used to establish indexed pages, impressions, query movement, and page visibility, not vanity claims. Search data should be interpreted alongside governance depth.

**Expansion restraint:** No broad page expansion is authorized by this decision. New pages should deepen authority, evidence, or internal context before increasing inventory count.

---

## 2026-06-20 - Evidence Integrity Layer and Asset Readiness Report

**Decision:** Add an evidence-integrity layer that maps sensitive content topics to official and internal standards, validates required caution language, and generates an asset readiness report during reference-data refresh.

**Rationale:** The asset should not only be structurally governed; it should be evidence-aware. Pages involving Medicaid, Medicare, insurance, cost, emergency care, sedation, recovery, implants, and clinical risk require stronger controls than ordinary informational pages. This layer makes those controls executable instead of relying on memory or informal editorial intent.

**Artifacts created:**

- `lib/evidence-registry.ts` - source registry and route evidence-profile generator.
- `scripts/validate-evidence-integrity.ts` - validation gate for evidence-source freshness, sensitive-topic source depth, and required caution language.
- `scripts/build-asset-readiness-report.ts` - generator for `data/system/asset-readiness-report.json`.
- `data/system/asset-readiness-report.json` - machine-readable transparency report for route count, evidence sources, risk tiers, topic coverage, and active validation gates.

**Source posture:** The registry includes official sources for New York Medicaid dental policy and Medicare dental coverage, plus internal editorial standards for methodology, accuracy, disclaimer, coverage verification, and cost-data framing. Official program sources are assigned a 180-day verification cadence; internal editorial standards are assigned 180- or 365-day cadence depending on volatility.

**Correction made:** Updated the Medicaid oral surgery page to avoid an outdated blanket statement that implants are generally excluded. The current 2026 NYS Medicaid dental manual states that dental implants and implant-related services may be covered when medically necessary and supported by required documentation and prior approval. The page now reflects this more accurate and conditional posture.

**Governance controls added:**

- Fails if an evidence source is stale beyond its review cadence.
- Fails if an evidence source lacks HTTPS or an internal governed URL.
- Fails if elevated or high-risk routes lack sufficient evidence source depth.
- Fails if cost pages or cost-sensitive pages omit directional/written-estimate language.
- Fails if insurance, Medicaid, or coverage pages omit verification/prior authorization/plan confirmation language.
- Fails if emergency, sedation, recovery, or clinical-risk pages omit topic-specific caution language.

**Publication posture:** This layer does not claim clinical review, legal advice, insurance approval, provider endorsement, or guaranteed pricing. It records what evidence sources are used, when they were last verified, and which automated controls are active.

**Strategic alignment:** Strengthens the asset as a sovereign reference system by making trust inspectable: source registry, high-risk page detection, required caution language, and a generated readiness report that can be audited after every build.

---

## 2026-06-20 - Asset Governance Gate and Orphan Content Closure

**Decision:** Add a strict asset-governance validation layer and close the current orphan-content gap by registering five previously ungoverned question files as public, indexed question pages.

**Rationale:** A reference-grade digital asset cannot rely on page count alone. It needs enforceable controls that keep the route registry, content inventory, metadata, internal links, and publication boundaries aligned. Orphan content weakens governance because it exists outside sitemap, metadata, route validation, and editorial discoverability. Pages without internal links also weaken the conceptual graph and make the asset easier to fragment or imitate.

**Artifacts created:**

- `scripts/validate-asset-governance.ts` - CI-grade validator for strategic asset integrity.
- `/questions/how-do-i-care-for-my-dental-implant`
- `/questions/how-does-age-affect-dental-implant-candidacy`
- `/questions/how-long-does-bone-grafting-take-to-heal`
- `/questions/how-long-does-swelling-last-after-oral-surgery`
- `/questions/what-is-a-mini-dental-implant`

**Governance controls added:**

- Fails if an `app/**/page.tsx` page exists outside `ROUTE_INDEX`.
- Fails if a `content/**/*.mdx` file exists outside `ROUTE_INDEX`.
- Fails if governed content falls below section-specific word floors.
- Fails if governed reference pages lack a minimum internal-link graph.
- Fails if internal Markdown links point to missing governed routes.
- Fails on placeholder language such as TODO, TBD, lorem ipsum, coming soon, or placeholder.
- Fails on high-risk absolute claims such as "best oral surgeon," guaranteed coverage/results/pricing, 100% approval/success, or risk-free language unless used in a clearly negating context.
- Keeps the existing SEO, route, content, cost-content, and cost-data gates intact.

**Content graph repair:** Added contextual internal links to five existing question pages that had no internal links and to the five newly registered pages. These links are topic-relevant and connect implant maintenance, recovery, bone grafting, swelling, crowns, nerve risk, and full-arch pricing back into the broader oral surgery reference graph.

**Publication posture:** This change does not claim clinical review, provider endorsement, ranking authority, or guaranteed medical/insurance outcomes. It strengthens the asset as an independently governed reference system by making quality failures machine-detectable before build/deploy.

**Strategic alignment:** Supports the sovereign reference objective by making imitation harder through enforceable structure: route registry discipline, no orphan content, no broken internal references, no thin governed pages, and no unbounded claims.

---

## 2026-05-11 — Borough Decision Layer (Sprint 7)

**Decision:** Replace shallow borough location pages with comprehensive 11-section patient decision guides for all five NYC boroughs (Manhattan, Brooklyn, Queens, the Bronx, Staten Island). Strengthen the `/locations` hub page.

**Rationale:** The original borough pages (~40 lines each) provided minimal local context. The Inevitable Reference Strategy requires borough-specific infrastructure that meaningfully differentiates each borough's access logistics, procedure complexity framing, cost context, emergency boundaries, and consultation checklists. Shallow content does not serve that objective.

**Governance alignment:** All five borough pages comply with `COMMERCIALIZATION_POSTURE.md`:
- No named practices
- No rankings
- No "best oral surgeon" language
- No unsupported pricing claims
- Partner visibility bridge sentence appears once per page, at the end, after all editorial content
- Emergency sections do not encourage price-shopping

**Content structure per borough page:**
1. Borough decision context
2. Access and follow-up considerations
3. Procedure complexity context (all 6 procedure types addressed)
4. Cost context with cautious language
5. When to search beyond the borough
6. Emergency boundaries
7. Borough consultation checklist
8. Related procedure links
9. Related cost links
10. Editorial note
11. Light partner visibility bridge

**Internal linking note:** Borough pages link only to routes that exist in this version of `lib/content-index.ts`. Routes for tooth extraction, bone grafting, oral surgery sedation, and emergency oral surgery procedures/costs are referenced in prose but not linked, as those routes are not yet present in the local route registry.

**Borough Decision Layer added to strengthen New York-specific reference depth and support the Inevitable Reference strategy.**

No new routes added. All 27 routes validate and build cleanly.

---

## 2026-05-11 — Institutional Trust and Underwriting Layer (Sprint 5)

**Decision:** Add an institutional trust and passive revenue layer to strengthen the site's reference-grade authority and create fixed-fee underwriting surfaces without weakening editorial independence.

**Rationale:** With 34 registered routes across all editorial sections, the site has sufficient content depth to support dedicated reference infrastructure and to offer underwriting surfaces to qualified partners. The four new pages serve a dual purpose: they strengthen patient decision support and create distinct, editorially independent placement surfaces under the fixed-fee underwriting model.

**Artifacts created:**

- `/standards` (`content/core/standards.mdx`) — Defines the patient decision standards used across the site: when to seek specialist consultation, how to evaluate cost estimates, sedation questions before treatment, emergency vs. non-emergency guidance, and the site's no-ranking and no-endorsement policy.
- `/cost-index` (`content/guides/cost-index.mdx`) — Consolidated cost-factor reference layer aggregating directional ranges from all six procedure cost guides. Includes strong disclaimer language, links to all individual cost and procedure guides, and a summary of cross-procedure cost factors.
- `/checklists` (`content/guides/checklists.mdx`) — Seven practical patient-first checklists: tooth extraction, wisdom tooth removal, dental implant planning, bone grafting, sedation safety, emergency call preparation, and cost estimate clarification.
- `/editorial-updates` (`content/core/editorial-updates.mdx`) — Transparent log of content additions, procedure and cost guide expansions, and governance decisions. Documents that the asset is actively governed without making exaggerated clinical review claims.

**Routes registered:** Four new routes added to `lib/content-index.ts`. Total: 34 routes. Sitemap auto-includes all indexable routes via `buildSitemapEntries()`.

**`/partners` update:** Added an "Educational Guide Underwriting" section explicitly defining what underwriting includes and the six things it does not: no editorial control, no clinical endorsement, no ranking advantage, no pay-per-lead, no revenue share, no patient data transfer.

**`COMMERCIALIZATION_POSTURE.md` update:** Expanded model 4 from a short paragraph to a full governance definition. Added specific language on what underwriting cannot influence: editorial conclusions, cost ranges, safety guidance, provider selection standards, and content outside the specific underwritten resource. Updated Editorial Independence section to enumerate these categories explicitly.

**Governance alignment:** All new pages comply with `COMMERCIALIZATION_POSTURE.md`. No lead forms, no fake practices, no clinical endorsements, no affiliate links, no patient data collection, no medical review claims unsupported by an actual reviewer.

---

## 2026-05-11 — Revenue Activation Readiness (Sprint 4)

**Decision:** Prepare and commit the commercial outreach and partner-acquisition materials needed to begin the Founding Partner Pilot.

**Rationale:** The site now has 30 registered routes across all six procedure areas, six cost guides, five borough pages, three decision guides, and a live `/partners` page. The editorial infrastructure is complete enough to begin limited commercial outreach without the site appearing thin or unfinished to prospective partners.

**Artifacts created:**

- `PARTNER_BRIEF.md` — One-page shareable overview of the partner program for prospective practices. Covers what's included, what's explicitly excluded, pilot pricing, disclosure language, and qualification requirements. Written for a practice owner or manager, not for internal use.
- `FOUNDING_PARTNER_PILOT.md` — Internal operating note defining pilot structure, seat limit (5 practices), pricing ($500/month or $1,200 prepaid for 90 days), included placement surfaces, intake process, governance rules, and pilot review criteria.
- `OUTREACH_DRAFTS.md` — Four email templates: (1) initial outreach, (2) reply to interested practice, (3) full terms reply, (4) no-pressure follow-up. All templates are consistent with `COMMERCIALIZATION_POSTURE.md` — no patient volume promises, no referral language, no clinical ranking.
- `PARTNER_TARGET_CRITERIA.md` — Internal document defining baseline qualification requirements, preferred characteristics, disqualifying factors, and three priority tiers for first outreach. Includes a per-practice qualification checklist.

**Pilot terms:**
- 90-day initial period
- Fixed-fee: $500/month or $1,200 prepaid
- Maximum 5 practices in pilot cohort
- Placement surfaces: partner directory, relevant procedure pages, relevant cost guide pages, borough page where applicable
- Monthly simple visibility report
- No patient referrals, no clinical endorsement, no editorial control, no ranking by payment
- Full disclosure label on every placement: "Partner practice — sponsored placement. Inclusion does not constitute a clinical recommendation."

**Governance alignment:** All documents align with `COMMERCIALIZATION_POSTURE.md`. No new commercial mechanisms are introduced — the pilot uses the fixed-fee placement model already defined in the posture document. No changes to editorial content, site structure, or partner program public page were made as part of this sprint.

---

## 2026-05-10 — Procedure Hub and Cost Decision Layer (Sprint 3)

**Decision:** Build the `/procedures` hub page and add four cost guide pages (tooth extraction, bone grafting, oral surgery sedation, emergency oral surgery).

**Rationale:** Each artifact serves dual purposes:

1. **Reference function** — The procedure hub provides indexed access to all six procedure areas from a single navigational surface. Cost guide pages give patients a structured way to interpret pricing before consultation.
2. **Commercial inventory** — Each cost guide page is a potential procedure-level sponsorship slot (cost layer) governed by `COMMERCIALIZATION_POSTURE.md`. The Reference Partner tier now explicitly includes cost guide visibility as a distinct placement surface.

**Governance alignment:** All new pages comply with `COMMERCIALIZATION_POSTURE.md`:
- No lead forms
- No unnamed or fake practices
- All pricing figures published as directional context, not quotes
- Practice visibility uses the standardized single-paragraph note
- No clinical superiority claims

**Route registration:** Five new routes registered in `lib/content-index.ts`: `/procedures` (hub), `/costs/tooth-extraction`, `/costs/bone-grafting`, `/costs/oral-surgery-sedation`, `/costs/emergency-oral-surgery`.

**Navigation:** Primary nav "Procedures" link updated from `/procedures/dental-implants` to the `/procedures` hub, so the first nav click lands on a page that indexes all six procedure areas.

**Commercial tier update:** Reference Partner tier includes updated to reflect visibility on cost guide pages as a distinct surface alongside procedure and borough pages. Category Sponsor description updated to surface cost guide as a sponsorable category.

**Commercial tier alignment:**
- `/costs/tooth-extraction` → eligible for procedure sponsorship at the Verified/Reference tier
- `/costs/bone-grafting` → eligible for procedure sponsorship at the Reference/Category tier (high implant-adjacent value)
- `/costs/oral-surgery-sedation` → eligible for procedure sponsorship at the Reference tier
- `/costs/emergency-oral-surgery` → eligible for procedure sponsorship at the Reference tier (high urgency intent)

---

## 2026-05-10 — Procedure Inventory Expansion (Sprint 2)

**Decision:** Expand the oral surgery procedure inventory from 2 pages (dental implants, wisdom tooth removal) to 6 pages by adding tooth extraction, bone grafting, oral surgery sedation, and emergency oral surgery.

**Rationale:** Each additional procedure page serves dual purposes:

1. **Reference function** — Provides independent, patient-first decision guidance on a high-demand oral surgery topic for New York patients.
2. **Commercial inventory** — Each procedure page is a potential procedure-level sponsorship slot governed by `COMMERCIALIZATION_POSTURE.md`. No commercial language was introduced into editorial content; the only commercial signal is the standardized "Practice Visibility" note linking to `/partners`.

**Governance alignment:** All four pages comply with `COMMERCIALIZATION_POSTURE.md`:
- No lead forms
- No fake or unnamed practices
- No "best surgeon" or superiority claims
- No clinical promises
- Practice visibility is disclosed via a standardized single-paragraph note, not embedded advertising

**Internal linking:** Cross-links added between all procedure pages to strengthen the reference network and reduce bounce for high-intent users navigating between related topics. Existing pages (dental implants, wisdom tooth removal) updated to link to the new procedure surfaces.

**Commercial tier alignment:**
- `tooth-extraction` → eligible for borough or procedure sponsorship at the Verified/Reference tier
- `bone-grafting` → eligible for procedure sponsorship at the Reference/Category tier (high implant-adjacent value)
- `oral-surgery-sedation` → eligible for procedure sponsorship at the Reference tier
- `emergency-oral-surgery` → eligible for procedure sponsorship at the Reference tier (high urgency intent)

---

## 2026-05-10 — Commercialization Layer Opened (Sprint 1)

**Decision:** Establish the commercial governance framework and open the Partner Practice Program as a live page.

**Artifacts created:**
- `COMMERCIALIZATION_POSTURE.md` — internal governance document
- `/partners` page — public-facing partner program with three tiers
- `data/partner-schema.ts` — typed schema for future partner directory
- Navigation and footer updated to surface the partner program
