import WisdomToothRemovalCostContent from '../../../content/costs/wisdom-tooth-removal.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import {
  formatDirectionalRange,
  getWisdomToothRemovalCostData,
} from '../../../lib/cost-data'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/costs/wisdom-tooth-removal')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

const rangeLabels: Record<string, string> = {
  payer_facing_baseline_single_surgical_impacted_tooth:
    'Payer baseline: single impacted tooth',
  payer_facing_baseline_four_surgical_with_anesthesia:
    'Payer baseline: four surgical removals with anesthesia',
  payer_facing_baseline_four_non_surgical_fully_erupted:
    'Payer baseline: four non-surgical removals',
  public_manhattan_anchor_total_case: 'Public Manhattan anchor',
}

export default function WisdomToothRemovalCostPage() {
  const data = getWisdomToothRemovalCostData()

  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Wisdom Tooth Removal Cost in NYC"
      intro="A patient-first guide to how extraction complexity, sedation, imaging, and aftercare can change total cost."
    >
      <WisdomToothRemovalCostContent />

      <h2>Structured Market Context</h2>
      <table>
        <thead>
          <tr>
            <th>Reference point</th>
            <th>Directional figure</th>
            <th>Scope</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data.directional_ranges).map(([key, range]) => (
            <tr key={key}>
              <td>{rangeLabels[key] ?? key}</td>
              <td>{formatDirectionalRange(range)}</td>
              <td>{range.scope}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Key Cost Drivers</h2>
      <ul>
        {data.cost_drivers.map((driver) => (
          <li key={driver}>{driver}</li>
        ))}
      </ul>

      <h2>Publication Standard</h2>
      <p>
        These figures are directional context only. They are not provider quotes,
        and they should not replace a written estimate tailored to the actual
        complexity of the case.
      </p>
    </PageShell>
  )
}
