import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-[70vh]">
        <p className="text-sm font-medium tracking-wide uppercase text-gray-600">Portfolio</p>
        <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
          Building playful, modern
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">interactive experiences</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-700 text-base sm:text-lg">
          I craft delightful web products with 3D, motion, and strong fundamentals. Scroll to explore selected work and get in touch.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#projects" className="px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors">View projects</a>
          <a href="#contact" className="px-5 py-3 rounded-full border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors">Contact</a>
        </div>
      </div>
    </section>
  )
}
