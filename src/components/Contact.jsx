import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSent(true)
      setLoading(false)
    }, 800)
  }

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contacto y reservas</h2>
            <p className="text-blue-100/80 mt-3">Escríbenos para recoger y entregar a domicilio o reservar tu turno.</p>

            <div className="mt-6 space-y-3 text-blue-100">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-cyan-300" /> +34 600 123 123</div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-cyan-300" /> info@tulavanderia.com</div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-cyan-300" /> Av. Principal 123, Tu Ciudad</div>
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 bg-slate-800/60 border border-white/10">
            {sent ? (
              <div className="text-center text-white">
                <p className="text-5xl">🎉</p>
                <p className="mt-2 text-lg">Gracias, te contactaremos muy pronto.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-blue-100/80 text-sm">Nombre</label>
                    <input required className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                  <div>
                    <label className="text-blue-100/80 text-sm">Teléfono</label>
                    <input required className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-blue-100/80 text-sm">Servicio</label>
                    <select className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400">
                      <option className="bg-slate-900">Lavado</option>
                      <option className="bg-slate-900">Lavado + Secado</option>
                      <option className="bg-slate-900">Planchado</option>
                      <option className="bg-slate-900">Recogida / Entrega</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-blue-100/80 text-sm">Mensaje</label>
                    <textarea rows="4" className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                </div>
                <button disabled={loading} className="mt-4 inline-flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                  <Send className="w-4 h-4" /> {loading ? 'Enviando...' : 'Enviar'}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
