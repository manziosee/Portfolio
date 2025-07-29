import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: "Software Engineer",
    company: "Andela Apprenticeship",
    period: "Feb 2024 – Sept 2024",
    description: "Developed full-stack applications with TypeScript, Node.js, and React"
  },
  {
    role: "Database Administrator",
    company: "Bank of Kigali",
    period: "Sept 2024 - Oct 2024",
    description: "Managed database performance for critical banking systems"
  },
  {
    role: "Django Engineer",
    company: "Amalitech",
    period: "April 2023 – Jan 2024",
    description: "Built RESTful APIs using Django REST framework"
  }
]

export function ExperienceTimeline() {
  return (
    <div className="relative my-12">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500/20 via-indigo-500 to-indigo-500/20" />
      
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/20">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            
            <div className="rounded-xl border border-gray-200/10 bg-gradient-to-b from-gray-900/50 to-gray-800/50 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <span className="text-sm text-indigo-300">{exp.period}</span>
              </div>
              <h4 className="text-indigo-200 mb-3">{exp.company}</h4>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}