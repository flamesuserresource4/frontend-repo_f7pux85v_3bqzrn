export default function CTA() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-rose-100 bg-white p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Free 20‑minute consultation</h3>
              <p className="mt-2 text-slate-600">Tell us your date, style, and budget—we’ll match you with 3 perfect planners.</p>
              <ul className="mt-4 text-sm text-slate-600 list-disc pl-5 space-y-1">
                <li>No commitment, quick response</li>
                <li>Vetted vendors, transparent pricing</li>
                <li>Support from inquiry to “I do”</li>
              </ul>
            </div>
            <form className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <input placeholder="Your name" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-200" />
                <input type="email" placeholder="Email" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-200" />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input placeholder="City / Region" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-200" />
                <input placeholder="Wedding date (optional)" className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-200" />
              </div>
              <textarea rows="3" placeholder="What are you envisioning?" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-200" />
              <button type="button" className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-rose-600 text-white hover:bg-rose-500">Request matches</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
