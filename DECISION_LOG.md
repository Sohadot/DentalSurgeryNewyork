# Decision Log

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
