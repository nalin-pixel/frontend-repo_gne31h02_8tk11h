import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function submit(e) {
    e.preventDefault()
    setStatus('Thanks! I\'ll reply shortly.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
          <Mail className="h-3.5 w-3.5" /> Available for freelance work
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let\'s build something great</h2>
        <p className="mt-3 text-gray-600">Tell me a bit about your project and I\'ll get back within 24 hours.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4 text-left">
          <input className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Your name" required />
          <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Email" required />
          <textarea rows={5} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Project details" required />
          <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors">
            <Send className="h-4 w-4" /> Send message
          </button>
          {status && <p className="text-sm text-green-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
