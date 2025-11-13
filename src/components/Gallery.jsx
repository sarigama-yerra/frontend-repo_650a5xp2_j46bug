import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528697203043-733bfdcaad06?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery(){
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-emerald-900">Gallery</h2>
          <p className="text-emerald-900/70 mt-2">A taste of our presentation and style.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"></div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] space-y-4">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-2xl bg-white/60 backdrop-blur ring-1 ring-white/60 shadow">
              <img src={src} alt="Gallery item" className="w-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
