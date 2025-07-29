import { motion } from 'framer-motion'

const skills = [
  { name: 'TypeScript', level: 90, color: '#3178c6' },
  { name: 'React', level: 85, color: '#61dafb' },
  { name: 'Node.js', level: 80, color: '#68a063' },
  { name: 'Python', level: 75, color: '#3776ab' },
  { name: 'Django', level: 70, color: '#092e20' },
  { name: 'Three.js', level: 65, color: '#049ef4' },
]

export function SkillBars() {
  return (
    <section className="my-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: skill.color }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}