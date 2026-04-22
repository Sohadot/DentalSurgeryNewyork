import DentalImplantCostContent from '../../../content/costs/dental-implants.mdx'
import PageShell from '../../../components/page-shell'
import { getRouteByPath } from '../../../lib/content-index'
import {
  formatDirectionalRange,
  getDentalImplantsCostData,
} from '../../../lib/cost-data'
import { buildMetadata } from '../../../lib/metadata'

const route = getRouteByPath('/costs/dental-implants')

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
})

const rangeLabels: Record<string, string> = {
  professional_baseline_total_single_tooth: 'Professional baseline',
  public_manhattan_anchor_single_tooth: 'Public Manhattan anchor',
}

export default function DentalImplantCostPage() {
  const data = getDentalImplantsCostData()

  return (
    <PageShell
      eyebrow="Cost Guide"
      title="Dental Implant Cost in New York"
      intro="Understand the structure behind implant pricing rather than relying on headline numbers alone."
    >
      <DentalImplantCostContent />

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

      {data.coverage_context ? (
        <>
          <h2>Coverage Context</h2>
          <p>
            New York Medicaid implant coverage has expanded for medically
            necessary cases. Effective date:{' '}
            <strong>{data.coverage_context.effective_date}</strong>.
          </p>
          <p>{data.coverage_context.note}</p>
        </>
      ) : null}

      {data.institutional_access_pathways?.length ? (
        <>
          <h2>Institutional Access Pathways</h2>
          {data.institutional_access_pathways.map((pathway) => (
            <div key={pathway.name}>
              <h3>{pathway.name}</h3>
              <ul>
                {pathway.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ) : null}

      <h2>Publication Standard</h2>
      <p>
        These figures are published as directional market context, not as quotes.
        A written itemized estimate remains necessary before treatment.
      </p>
    </PageShell>
  )
}
