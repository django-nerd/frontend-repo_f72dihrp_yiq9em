import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Básico',
    price: '€4',
    features: ['Lavado 7kg', 'Detergente incluido', 'Programa estándar'],
    cta: 'Elegir básico',
  },
  {
    name: 'Completo',
    price: '€7',
    features: ['Lavado + secado 7kg', 'Detergente y suavizante', 'Programa rápido'],
    cta: 'Elegir completo',
    highlight: true,
  },
  {
    name: 'Familiar',
    price: '€12',
    features: ['Lavado + secado 14kg', 'Higienización con vapor', 'Mejor relación calidad/precio'],
    cta: 'Elegir familiar',
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tarifas transparentes</h2>
          <p className="text-blue-100/80 mt-3">Paga solo por lo que necesitas. Sin sorpresas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`rounded-2xl p-6 border ${p.highlight ? 'bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border-white/20 shadow-xl shadow-blue-500/20' : 'bg-slate-800/60 border-white/10'}`}>
              <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              <p className="text-4xl font-bold text-white mt-2">{p.price}<span className="text-base text-blue-200 font-medium">/ciclo</span></p>
              <ul className="mt-4 space-y-2 text-blue-100/80">
                {p.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#contacto" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-lg font-semibold transition-colors ${p.highlight ? 'bg-white text-slate-900 hover:bg-blue-50' : 'bg-white/10 text-white hover:bg-white/20'}`}>{p.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
