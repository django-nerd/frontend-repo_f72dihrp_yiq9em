import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'María G.',
    text: 'Servicio rapidísimo y la ropa sale perfecta. Mientras esperé, me tomé un café delicioso. ¡Volveré!'
  },
  {
    name: 'Carlos R.',
    text: 'Me encanta que esté abierto 24/7. Las máquinas de vending tienen snacks saludables, ideal para la espera.'
  },
  {
    name: 'Laura P.',
    text: 'Limpieza impecable y el personal muy atento. Se nota la profesionalidad.'
  },
]

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-6 bg-slate-800/60 border border-white/10 text-blue-100">
              <p className="italic">“{t.text}”</p>
              <p className="mt-4 text-white font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
