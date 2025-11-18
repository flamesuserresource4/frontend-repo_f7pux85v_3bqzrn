import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded bg-gradient-to-tr from-rose-500 to-pink-500" />
          <span className="font-semibold text-slate-800">We Me Good Weddings</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#planners" className="hover:text-slate-900">Planners</a>
          <a href="#packages" className="hover:text-slate-900">Packages</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="/test" className="text-sm px-3 py-1 rounded bg-slate-900 text-white hover:bg-slate-800">System Test</a>
        </div>
        <button className="md:hidden p-2 rounded hover:bg-slate-100" aria-label="Menu">
          <Menu className="w-5 h-5" />
        </button>
      </nav>
    </header>
  )
}
