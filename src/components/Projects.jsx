export default function Projects() {
  const projects = [
    {
      title: 'Interactive Dashboard',
      desc: 'A data-rich admin dashboard with micro-interactions and responsive charts.',
      tags: ['React', 'Tailwind', 'D3'],
    },
    {
      title: '3D Product Showcase',
      desc: 'Real-time 3D viewer for ecommerce with AR preview and smooth transitions.',
      tags: ['Spline', 'Three.js', 'Vite'],
    },
    {
      title: 'SaaS Landing Site',
      desc: 'Conversion-focused marketing site with modern visuals and accessible design.',
      tags: ['Next.js', 'SEO', 'A11y'],
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected projects</h2>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">See availability →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 p-5 bg-white/70 backdrop-blur hover:border-gray-300 transition-colors">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 mb-4" />
              <h3 className="font-semibold text-gray-900 text-lg">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
