import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Planners from './components/Planners'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Planners />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200">
        © {new Date().getFullYear()} We Me Good Weddings. All rights reserved.
      </footer>
    </div>
  )
}

export default App
