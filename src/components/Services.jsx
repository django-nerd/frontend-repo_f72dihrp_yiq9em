import { motion } from 'framer-motion'
import { Shirt, Droplets, Sparkles, Clock, CreditCard, Coffee } from 'lucide-react'

const services = [
  {
    icon: Shirt,
    title: 'Lavado y secado profesional',
    desc: 'Equipos industriales con programas delicados y potentes. Ropa lista en menos de una hora.'
  },
  {
    icon: Droplets,
    title: 'Tratamiento de manchas',
    desc: 'Prelavado y productos especializados para eliminar manchas difíciles con cuidado.'
  },
  {
    icon: Sparkles,
    title: 'Higienización y planchado',
    desc: 'Opciones de higienización con vapor y planchado para un acabado perfecto.'
  },
]

const perks = [
  { icon: Clock, text: 'Abierto 24/7' },
  { icon: CreditCard, text: 'Pago con tarjeta y móvil' },
  { icon: Coffee, text: 'Zona con snacks y bebidas' },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Servicios de lavandería</h2>
          <p className="text-blue-100/80 mt-3">Calidad profesional con atención a cada detalle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-6 bg-slate-800/60 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white shadow-lg mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="text-blue-100/80 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {perks.map((p, i) => (
            <motion.div key={p.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 text-blue-100">
              <p.icon className="w-5 h-5 text-cyan-300" /> {p.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
