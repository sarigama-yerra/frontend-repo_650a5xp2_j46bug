import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Amelia R.', role: 'Bride', text: 'Absolutely phenomenal. The food, the service, the presentation—everything was perfect.' },
  { name: 'Jon S.', role: 'Event Planner', text: 'Professional, reliable, and incredibly delicious. Our clients were thrilled.' },
  { name: 'Priya K.', role: 'Corporate HR', text: 'They handled our 300-guest gala seamlessly. Highly recommend!' },
  { name: 'Miguel A.', role: 'Birthday Host', text: 'Beautiful setup and flavors that everyone loved.' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(()=> setIndex((i)=> (i+1)%testimonials.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-emerald-900 mb-8">What Our Clients Say</h2>
        <div className="relative h-48 sm:h-40">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="px-6">
              <p className="text-lg text-emerald-900/80">“{testimonials[index].text}”</p>
              <div className="mt-4 text-emerald-900/70">— {testimonials[index].name}, {testimonials[index].role}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i)=> (
            <button key={i} onClick={()=> setIndex(i)} className={`w-2.5 h-2.5 rounded-full ${index===i ? 'bg-emerald-600' : 'bg-emerald-300'}`} aria-label={`Go to testimonial ${i+1}`}></button>
          ))}
        </div>
      </div>
    </section>
  )
}
