import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-white text-emerald-950">
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(250,204,21,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.15),transparent_60%)]"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
