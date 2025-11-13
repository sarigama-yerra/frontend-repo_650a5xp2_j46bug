import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-emerald-500"></div>
              <span className="font-serif text-xl text-emerald-800">GoldenPlatter</span>
            </div>
            <p className="text-emerald-900/70 mt-3 max-w-xs">Elegant catering for weddings, corporate events, and private celebrations.</p>
            <div className="flex gap-3 mt-4 text-emerald-800/80">
              <a href="#" aria-label="Facebook" className="hover:text-emerald-800"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-emerald-800"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-emerald-800"><Twitter size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900 mb-3">Company</h4>
            <ul className="space-y-2 text-emerald-900/70 text-sm">
              <li><a href="#about" className="hover:text-emerald-900">About</a></li>
              <li><a href="#services" className="hover:text-emerald-900">Services</a></li>
              <li><a href="#gallery" className="hover:text-emerald-900">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900 mb-3">Support</h4>
            <ul className="space-y-2 text-emerald-900/70 text-sm">
              <li><a href="#" className="hover:text-emerald-900">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-900">Privacy</a></li>
              <li><a href="#" className="hover:text-emerald-900">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900 mb-3">Contact</h4>
            <ul className="space-y-2 text-emerald-900/70 text-sm">
              <li>hello@goldenplatter.co</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Event Ave, City</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/60 text-center text-sm text-emerald-900/60">© {new Date().getFullYear()} GoldenPlatter. All rights reserved.</div>
      </div>
    </footer>
  )
}
