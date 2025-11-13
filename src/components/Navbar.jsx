import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-emerald-500 shadow-inner"></div>
            <span className="font-serif text-xl text-emerald-800">GoldenPlatter</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-emerald-900/80 hover:text-emerald-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#cta" className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm">Book Now</a>
          </div>

          <button className="md:hidden p-2 rounded-md bg-white/60 backdrop-blur hover:bg-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg bg-white/60 backdrop-blur hover:bg-white text-emerald-900/90">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="block text-center px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Book Now</a>
          </div>
        )}
      </nav>
    </header>
  )
}
