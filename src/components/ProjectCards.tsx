import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "TaskForce Wallet",
    description: "Finance management app with budget tracking and analytics",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/manziosee/taskforce-challenge",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Twitter Analysis",
    description: "Django-based NLP platform for Twitter sentiment analysis",
    tags: ["Django", "Python", "NLP"],
    link: "https://github.com/manziosee/SLS_ENERGY_Challenge",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Ecommerce API",
    description: "Robust Django REST API for ecommerce platforms",
    tags: ["Django", "PostgreSQL", "REST"],
    link: "https://github.com/manziosee/ecommerce-django-API",
    color: "from-green-500 to-emerald-600"
  }
]

export function ProjectCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-12">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl shadow-xl"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
          <div className="relative p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-auto flex gap-3">
              <a
                href={project.link}
                className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition"
                target="_blank"
                rel="noopener"
              >
                <Code className="w-4 h-4 mr-2" />
                View Code
              </a>
              <button className="flex items-center px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}