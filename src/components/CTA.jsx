import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section id="cta" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-amber-100 via-emerald-100 to-white ring-1 ring-white/60 shadow">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.18),transparent_40%)]"></div>
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-serif text-3xl text-emerald-900">Plan Your Event With Us</h3>
                <p className="text-emerald-900/70 mt-2 max-w-xl">Tell us about your occasion and our team will craft a bespoke menu that suits your taste, theme, and budget.</p>
              </div>
              <div className="flex lg:justify-end">
                <motion.a whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(16,185,129,0.35)' }} whileTap={{ scale: 0.98 }}
                  href="#" className="px-6 py-3 rounded-full bg-emerald-600 text-white shadow-lg">Get Started</motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
