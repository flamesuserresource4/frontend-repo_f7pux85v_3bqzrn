export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Wedding planning made effortless
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Discover vetted planners, compare packages, and book the perfect team to bring your dream day to life.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Get free consultation</a>
              <a href="#planners" className="px-5 py-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50">Browse planners</a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Trusted by 1000+ couples • 4.9 average rating
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-rose-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop"
                alt="Wedding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
