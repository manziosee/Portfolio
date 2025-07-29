import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Moon, Sun, Download, Code, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { CosmicBackground } from './components/CosmicBackground';
import { CodeMatrix } from './components/CodeMatrix';
import { TechSphere } from './components/TechSphere';
import { ProjectCards } from './components/ProjectCards';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactForm } from './components/ContactForm';
import { SkillBars } from './components/SkillBars';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <CosmicBackground />
      <CodeMatrix />
      
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-gray-900/80" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white">
                Manzi Niyongira Osée
              </h1>
              <p className="text-2xl text-indigo-200 mb-6">Full Stack Developer</p>
              <p className="text-lg max-w-2xl mb-8">
                I build exceptional digital experiences with modern web technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/Manzi_Osee_CV.pdf"
                  download
                  className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
                
                <div className="flex gap-3">
                  {[
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/manziosee", label: "GitHub" },
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/manziosee", label: "LinkedIn" },
                    { icon: <Mail className="w-5 h-5" />, href: "mailto:manziosee3@gmail.com", label: "Email" },
                    { icon: <Phone className="w-5 h-5" />, href: "tel:+250786416374", label: "Phone" }
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 relative z-10">
        {/* About Section */}
        <section className="my-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  I'm a passionate full-stack developer specializing in building modern web applications with React, TypeScript, and Node.js.
                </p>
                <p className="text-lg">
                  With expertise in both frontend and backend development, I create seamless, performant digital experiences that users love.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl font-semibold mb-4">My Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['TypeScript', 'React', 'Node.js', 'Python', 'Django', 'Three.js', 'Tailwind CSS', 'PostgreSQL'].map((tech, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tech Sphere */}
        <section className="my-24">
          <TechSphere />
        </section>

        {/* Skills */}
        <SkillBars />

        {/* Projects */}
        <section className="my-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <ProjectCards />
        </section>

        {/* Experience */}
        <section className="my-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Professional Journey
          </motion.h2>
          <ExperienceTimeline />
        </section>

        {/* Education */}
        <section className="my-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-2xl border border-indigo-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <h3 className="text-2xl font-semibold">Bachelor of Science in Software Engineering</h3>
              <span className="text-indigo-300">2019 – 2025</span>
            </div>
            <h4 className="text-indigo-200 mb-4">Adventist University of Central Africa</h4>
            <p className="text-gray-300">
              Key courses: Data Structures & Algorithms, Object-Oriented Programming, Web Development, Database Management Systems
            </p>
          </motion.div>
        </section>

        {/* Contact */}
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Manzi Niyongira Osée. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Theme toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 p-3 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition z-50"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}

export default App;