import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Vending', href: '#vending' },
    { label: 'Precios', href: '#precios' },
    { label: 'Opiniones', href: '#opiniones' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white font-bold shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">LB</div>
          <div className="leading-tight">
            <p className="text-white font-semibold">Lavandería & Vending</p>
            <p className="text-xs text-blue-200/80">Limpieza impecable, 24/7</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-blue-100/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            <Phone className="w-4 h-4" />
            Reservar
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-blue-100/90 hover:text-white py-2">
                {item.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              <Phone className="w-4 h-4" /> Reservar
            </a>
            <div className="flex items-center gap-2 text-blue-200/80">
              <MapPin className="w-4 h-4" />
              Av. Principal 123, Tu Ciudad
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
