import { motion } from 'framer-motion'
import { Coffee, Sandwich, CupSoda, Candy } from 'lucide-react'

const items = [
  { icon: Coffee, name: 'Café premium', desc: 'Espresso, capuchino y más' },
  { icon: Sandwich, name: 'Snacks salados', desc: 'Sandwiches y chips' },
  { icon: CupSoda, name: 'Bebidas frías', desc: 'Refrescos y jugos' },
  { icon: Candy, name: 'Dulces y chocolates', desc: 'Para endulzar la espera' },
]

export default function Vending() {
  return (
    <section id="vending" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Zona de máquinas expendedoras</h2>
            <p className="text-blue-100/80 mt-3">Disfruta de bebidas calientes, frías y snacks mientras esperas tu colada.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {items.map((it, i) => (
                <div key={it.name} className="rounded-2xl p-5 bg-slate-800/60 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 grid place-items-center text-white shadow mb-3">
                    <it.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold">{it.name}</h3>
                  <p className="text-blue-100/80 text-sm">{it.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_40%)] grid place-items-center text-center border border-white/10">
              <div className="p-6">
                <p className="text-6xl">🤖</p>
                <p className="text-white text-xl font-medium mt-2">Snacks y bebidas al instante</p>
                <p className="text-blue-100/80 mt-1">Opciones saludables y dulces disponibles</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
