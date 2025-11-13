import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-emerald-900">Our Story</h2>
            <p className="text-emerald-900/70 leading-relaxed">We are a team of passionate chefs and event specialists who believe great food brings people together. From intimate dinners to grand celebrations, we craft experiences that feel effortless, elegant, and delicious.</p>
            <p className="text-emerald-900/70 leading-relaxed">Every ingredient is thoughtfully sourced and every detail considered, so you can celebrate your moments with confidence.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/60 bg-white/50 backdrop-blur-lg shadow-xl">
              <img alt="Chef" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGVmfGVufDB8MHx8fDE3NjMwMzg0NTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur rounded-xl px-4 py-3 ring-1 ring-white/60 shadow">
              <p className="text-sm text-emerald-900/80">Award-winning team • Since 2012</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
