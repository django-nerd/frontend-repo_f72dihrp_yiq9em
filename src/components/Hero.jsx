import { motion } from 'framer-motion'
import { Sparkles, WashingMachine, Coffee } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-blue-100 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-300" /> Calidad profesional y autoservicio 24/7
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Lavandería moderna con zona de máquinas expendedoras
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            Rápido, cómodo y con acabados impecables. Lava, seca y disfruta de snacks y bebidas mientras esperas.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">Reserva tu servicio</a>
            <a href="#servicios" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">Ver servicios</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-blue-100/80">
            <div className="flex items-center gap-2"><WashingMachine className="w-5 h-5 text-cyan-300" />Lavado pro</div>
            <div className="flex items-center gap-2"><Coffee className="w-5 h-5 text-cyan-300" />Snacks & café</div>
            <div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-cyan-300" />Higiene total</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl">
            <div className="aspect-[4/3] rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_40%)] grid place-items-center text-center">
              <div className="p-6">
                <p className="text-6xl">🧺</p>
                <p className="text-white text-xl font-medium mt-2">Lavado impecable garantizado</p>
                <p className="text-blue-100/80 mt-1">Secadoras de alta eficiencia y detergentes hipoalergénicos</p>
              </div>
            </div>
          </div>
          <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur rounded-2xl border border-white/10 p-4 text-blue-100">
            <p className="text-sm">Tiempo medio de lavado: 35 min</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
