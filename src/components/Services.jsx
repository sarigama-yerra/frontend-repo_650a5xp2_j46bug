import { motion } from 'framer-motion'
import { Heart, Briefcase, Users, Sun } from 'lucide-react'

const services = [
  { icon: Heart, title: 'Weddings', desc: 'Romantic, refined menus to match your day.' },
  { icon: Briefcase, title: 'Corporate', desc: 'Polished service for meetings and galas.' },
  { icon: Users, title: 'Private Events', desc: 'Intimate gatherings with a personal touch.' },
  { icon: Sun, title: 'Outdoor Catering', desc: 'Fresh, seasonal menus for open-air venues.' },
]

export default function Services(){
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-900">What We Do</h2>
          <p className="text-emerald-900/70 mt-2">Flexible, full-service catering tailored to your event.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur ring-1 ring-white/70 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-200 to-emerald-200 text-emerald-800 mb-4">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-emerald-900 mb-1">{s.title}</h3>
              <p className="text-sm text-emerald-900/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
