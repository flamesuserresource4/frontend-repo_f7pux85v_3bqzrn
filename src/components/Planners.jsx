import { useEffect, useState } from 'react'
import PlannerCard from './PlannerCard'

export default function Planners() {
  const [planners, setPlanners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchPlanners = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/planners`)
        const data = await res.json()
        setPlanners(data)
      } catch (e) {
        setError('Could not load planners. Try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchPlanners()
  }, [])

  const openContact = (planner) => setSelected(planner)
  const closeContact = () => setSelected(null)

  const submitInquiry = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.planner_id = selected?.id || null

    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      alert('Inquiry sent! We will be in touch shortly.')
      closeContact()
    } catch (e) {
      alert('Could not submit inquiry right now.')
    }
  }

  return (
    <section id="planners" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured wedding planners</h2>
            <p className="text-slate-600">Handpicked professionals known for exceptional service.</p>
          </div>
        </div>

        {loading && <p className="text-slate-500">Loading planners...</p>}
        {error && <p className="text-rose-600">{error}</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planners.map((p) => (
            <PlannerCard key={p.id} planner={p} onContact={openContact} />)
          )}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4" onClick={closeContact}>
            <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="p-5 border-b border-slate-200">
                <h3 className="text-lg font-semibold">Contact {selected.name}</h3>
                <p className="text-sm text-slate-600">Share a few details and we’ll get back shortly.</p>
              </div>
              <form className="p-5 space-y-4" onSubmit={submitInquiry}>
                <input className="hidden" name="planner_id" defaultValue={selected.id} />
                <div className="grid md:grid-cols-2 gap-3">
                  <input name="name" required placeholder="Your name" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input name="email" required type="email" placeholder="Email" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <input name="phone" placeholder="Phone (optional)" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input name="event_date" placeholder="Wedding date (YYYY-MM-DD)" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <input name="guest_count" type="number" min="0" placeholder="Guest count" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                </div>
                <textarea name="message" rows="4" placeholder="Tell us about your vision, venue, and budget" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button type="button" onClick={closeContact} className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">Cancel</button>
                  <button type="submit" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Send inquiry</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
