import { Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">myfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </nav>
        <a
          href="#contact"
          className="md:inline-flex hidden px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
