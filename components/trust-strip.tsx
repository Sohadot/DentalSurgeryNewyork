export default function TrustStrip() {
  const items = [
    'Editorially independent',
    'Methodology published',
    'Patient-first decision support',
    'Structured cost guidance',
  ]

  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-4 md:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="text-sm text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
