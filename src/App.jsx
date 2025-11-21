import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Vending from './components/Vending'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_50%_60%,rgba(59,130,246,0.08),transparent_35%)] pointer-events-none" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Vending />
        <Pricing />
        <Testimonials />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-blue-200/70">
          © {new Date().getFullYear()} Tu Lavandería & Vending — Todos los derechos reservados
        </footer>
      </main>
    </div>
  )
}

export default App
