import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Phone, Moon, Sun, MapPin, Download } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen theme-transition ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle */}
      <button 
        onClick={toggleDarkMode}
        className={`fixed top-4 right-4 p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-all hover:rotate-12 ${darkMode ? 'dark-mode-bg' : 'light-mode-bg'}`}
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* CV Header */}
      <header className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-blue-800'} text-white theme-transition`}>
        <div className="container mx-auto px-6 py-16">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Manzi Niyongira Osée</h1>
                <p className="text-xl text-blue-100 mb-2">Full Stack Software Engineer</p>
                <div className="flex items-center justify-center md:justify-start text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="/ManziNiyongiraOsee_CV.pdf" 
                   className="flex items-center justify-center px-4 py-2 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-colors"
                   download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
                <div className="flex justify-center space-x-3">
                  {[
                    { href: "https://github.com/manziosee", icon: <Github className="w-5 h-5" />, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/manzi-niyongira-os%C3%A9e-2065861bb/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                    { href: "mailto:manziosee3@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
                    { href: "tel:+250786416374", icon: <Phone className="w-5 h-5" />, label: "Phone" }
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Professional Summary */}
        <section className={`mb-12 p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-fade-in-up`}>
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            Full Stack Software Engineer with expertise in TypeScript, Python, and JavaScript. Experienced in developing scalable web applications using modern frameworks and best practices. Strong focus on writing clean, maintainable code and implementing robust testing strategies.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <div className="flex items-center mb-6 animate-slide-in-left">
            <Code className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className={`grid md:grid-cols-2 gap-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-scale-in`}>
              <h3 className="font-semibold mb-3">Programming Languages</h3>
              <div className="space-y-2">
                {['TypeScript', 'Python', 'JavaScript', 'Java'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-scale-in`}>
              <h3 className="font-semibold mb-3">Frameworks & Tools</h3>
              <div className="space-y-2">
                {['React.js', 'Node.js', 'Django', 'Spring Boot','Vuejs', 'Nextjs', 'Git', 'Docker'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6 animate-slide-in-left">
            <Code className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "TaskForce Wallet",
                image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "A personal finance management application designed to help users track their income, expenses, budgets, and financial goals.",
                link: "https://github.com/manziosee/taskforce-challenge",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Twitter Analysis Using Django",
                image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "A Django-based application for analyzing Twitter data, providing insights into user sentiment and trending topics using NLP techniques.",
                link: "https://github.com/manziosee/SLS_ENERGY_Challenge",
                tech: ["Django", "Python", "NLP"]
              },
              {
                title: "Ecommerce Django API",
                image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "A robust backend system using Python and Django, featuring RESTful APIs, automated testing, and secure data handling.",
                link: "https://github.com/manziosee/ecommerce-django-API",
                tech: ["Django", "PostgreSQL", "REST API"]
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden animate-fade-in-up`}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-full ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-500 hover:text-blue-400 flex items-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <div className="flex items-center mb-6 animate-slide-in-left">
            <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Software Engineer",
                company: "Andela Apprenticeship",
                period: "Feb 2024 – Sept 2024",
                achievements: [
                  "Developed full-stack applications using TypeScript, Node.js, and React",
                  "Implemented comprehensive testing strategies using Jest and Mocha",
                  "Set up and maintained CI/CD pipelines with CircleCI",
                  "Created detailed API documentation using Swagger"
                ]
              },
              {
                title: "Database and Datacenter Administrator Intern",
                company: "Bank of Kigali",
                period: "Sept 2024 - October 2024",
                achievements: [
                  "Managed and optimized database performance for critical banking systems",
                  "Implemented robust backup and disaster recovery solutions",
                  "Configured and maintained enterprise-level network infrastructure"
                ]
              },
              {
                title: "Django Backend Engineer Intern",
                company: "Amalitech",
                period: "April 2023 – Jan 2024",
                achievements: [
                  "Built RESTful APIs using Django REST framework",
                  "Implemented secure authentication and authorization systems",
                  "Optimized database queries for improved performance"
                ]
              }
            ].map((exp, index) => (
              <div
                key={index}
                className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-fade-in-up`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-blue-500">{exp.company}</p>
                  </div>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center mb-6 animate-slide-in-left">
            <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-scale-in`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h3>
                <p className="text-blue-500">Adventist University of Central Africa</p>
              </div>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>2019 – 2025</p>
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Key courses: Data Structures & Algorithms, Object-Oriented Programming, Web Development, Database Management Systems
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-8 theme-transition`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Manzi Niyongira Osée • Full Stack Software Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

