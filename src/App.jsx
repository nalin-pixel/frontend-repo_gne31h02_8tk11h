import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
        <footer className="py-10 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center justify-between">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <a href="#home" className="hover:text-gray-700">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
