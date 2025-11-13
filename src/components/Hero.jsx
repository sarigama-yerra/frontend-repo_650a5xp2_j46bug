import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 60])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  return (
    <section className="relative pt-24" id="home">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(253,230,138,0.3),transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs ring-1 ring-emerald-200">Premium Catering</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-emerald-900 leading-tight">
              Crafted Menus for Unforgettable Moments
            </h1>
            <p className="text-emerald-900/70 text-base sm:text-lg max-w-xl">
              We design seasonal, chef-led menus that bring warmth, elegance, and flavor to weddings, corporate functions, and private gatherings.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#services" className="px-5 py-3 rounded-full bg-emerald-600 text-white shadow hover:shadow-md transition-shadow">Explore Menu</motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#cta" className="px-5 py-3 rounded-full bg-white/70 backdrop-blur ring-1 ring-emerald-200 text-emerald-900 hover:bg-white">Book Now</motion.a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3].map((i)=> (
                  <img key={i} src={`https://i.pravatar.cc/64?img=${i}`} className="w-10 h-10 rounded-full ring-2 ring-white" />
                ))}
              </div>
              <p className="text-emerald-900/70 text-sm">Trusted by 500+ happy hosts</p>
            </div>
          </motion.div>

          <motion.div style={{ y, opacity }} className="relative rounded-2xl overflow-hidden bg-white/40 ring-1 ring-white/50 backdrop-blur-lg shadow-lg min-h-[300px] lg:min-h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-amber-50/40 to-transparent"></div>
            <div className="absolute -left-10 -bottom-10 w-[140%] h-[140%] pointer-events-none">
              <Spline scene="https://prod.spline.design/0M7Rj9gI-SAMPLE/scene.splinecode" />
            </div>
            <div className="absolute top-4 right-4 text-xs text-emerald-900/60">Parallax Illustration</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
