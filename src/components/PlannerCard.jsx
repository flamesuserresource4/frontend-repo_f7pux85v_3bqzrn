export default function PlannerCard({ planner, onContact }) {
  return (
    <div className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      {planner.image_url && (
        <div className="aspect-[16/9] overflow-hidden">
          <img src={planner.image_url} alt={planner.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{planner.name}</h3>
          <span className="text-sm font-medium text-rose-600">{planner.rating.toFixed(1)} ★</span>
        </div>
        {planner.tagline && <p className="mt-1 text-slate-600">{planner.tagline}</p>}
        <p className="mt-1 text-sm text-slate-500">{planner.location} • {planner.reviews_count} reviews</p>
        {planner.specialties && planner.specialties.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {planner.specialties.slice(0,5).map((s, i) => (
              <span key={i} className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700">{s}</span>
            ))}
          </div>
        )}
        {planner.packages && planner.packages.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {planner.packages.slice(0,2).map((p, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-3">
                <div className="text-sm font-semibold text-slate-800">{p.name}</div>
                <div className="text-sm text-slate-600">${p.price.toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-5 flex gap-2">
          <button onClick={() => onContact(planner)} className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-sm">Contact</button>
          {planner.website && (
            <a href={planner.website} target="_blank" className="flex-1 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm text-center">Website</a>
          )}
        </div>
      </div>
    </div>
  )
}
