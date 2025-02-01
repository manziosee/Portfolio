import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Phone, Moon, Sun, MapPin, Download, FileText } from 'lucide-react';
import { Background3D } from './components/Background3D';
import { GitHubStats } from './components/GitHubStats';
import { LanguageGraph3D } from './components/LanguageGraph3D';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';
import { MatrixBackground } from './components/MatrixBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showCVTooltip, setShowCVTooltip] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useGSAPAnimations();

  return (
    <div className={`min-h-screen theme-transition ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <MatrixBackground />
      <Background3D />

      {/* Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-4 right-4 p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-all hover:rotate-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} z-50`}
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* CV Header */}
      <header className={`${darkMode ? 'bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-purple-900/80' : 'bg-gradient-to-r from-blue-600/80 via-indigo-500/80 to-blue-800/80'} text-white theme-transition backdrop-blur-sm relative z-20`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  Manzi Niyongira Osée
                </h1>
                <p className="text-2xl text-blue-100 mb-4 font-light">Full Stack Software Engineer</p>
                <div className="flex items-center justify-center md:justify-start text-sm space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="h-4 w-px bg-blue-300/30"></div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    <span>Available for hire</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="relative"
                     onMouseEnter={() => setShowCVTooltip(true)}
                     onMouseLeave={() => setShowCVTooltip(false)}>
                  <a href="/src/cv/Manzi Osee_CV.pdf"
                     className="flex items-center justify-center px-6 py-3 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg group"
                     download>
                    <Download className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-1" />
                    <span className="font-semibold">Download CV</span>
                  </a>
                  {showCVTooltip && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm py-1 px-3 rounded whitespace-nowrap">
                      Click to download my resume
                    </div>
                  )}
                </div>
                <div className="flex justify-center space-x-4">
                  {[
                    { href: "https://github.com/manziosee", icon: <Github className="w-5 h-5" />, label: "GitHub", color: "hover:bg-gray-700" },
                    { href: "https://www.linkedin.com/in/manzi-niyongira-os%C3%A9e-2065861bb/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-blue-700" },
                    { href: "mailto:manziosee3@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email", color: "hover:bg-red-700" },
                    { href: "tel:+250786416374", icon: <Phone className="w-5 h-5" />, label: "Phone", color: "hover:bg-green-700" }
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm ${link.color} transition-all hover:scale-110 hover:shadow-lg group`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <div className="transform transition-transform group-hover:-translate-y-1">
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-4xl relative z-10">
        {/* Professional Summary */}
        <section className={`mb-16 p-8 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl animate-fade-in-up backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:scale-105 transition-transform`}>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Professional Summary</h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-lg`}>
            Full Stack Software Engineer with expertise in TypeScript, Python, and JavaScript. Experienced in developing scalable web applications using modern frameworks and best practices. Strong focus on writing clean, maintainable code and implementing robust testing strategies.
          </p>
        </section>

        {/* GitHub Stats Section */}
        <GitHubStats darkMode={darkMode} />

        {/* Language Distribution */}
        <LanguageGraph3D darkMode={darkMode} />

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="flex items-center mb-8 animate-slide-in-left">
            <Code className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Technical Skills</h2>
          </div>
          <div className={`grid md:grid-cols-2 gap-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className={`p-8 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl animate-scale-in backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:scale-105 transition-transform`}>
              <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
              <div className="space-y-4">
                {['TypeScript', 'Python', 'JavaScript', 'Java'].map((skill) => (
                  <div key={skill} className="flex items-center group">
                    <div className="w-8 h-8 mr-3">
                      {skill === 'TypeScript' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full" />}
                      {skill === 'Python' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full" />}
                      {skill === 'JavaScript' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full" />}
                      {skill === 'Java' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-full h-full" />}
                    </div>
                    <span className="group-hover:text-blue-500 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-8 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl animate-scale-in backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:scale-105 transition-transform`}>
              <h3 className="text-xl font-semibold mb-6">Frameworks & Tools</h3>
              <div className="space-y-4">
                {['React.js', 'Node.js', 'Django', 'Spring Boot', 'Vue.js', 'Next.js', 'Git', 'Docker'].map((skill) => (
                  <div key={skill} className="flex items-center group">
                    <div className="w-8 h-8 mr-3">
                      {skill === 'React.js' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-full h-full" />}
                      {skill === 'Node.js' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-full h-full" />}
                      {skill === 'Django' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-full h-full" />}
                      {skill === 'Spring Boot' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-full h-full" />}
                      {skill === 'Vue.js' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-full h-full" />}
                      {skill === 'Next.js' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-full h-full" />}
                      {skill === 'Git' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-full h-full" />}
                      {skill === 'Docker' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-full h-full" />}
                    </div>
                    <span className="group-hover:text-blue-500 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Most Used Languages */}
        <section className="mb-16">
          <div className="flex items-center mb-8 animate-slide-in-left">
            <Code className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Most Used Languages</h2>
          </div>
          <div className={`p-8 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl animate-scale-in backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:scale-105 transition-transform`}>
            <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
            <div className="space-y-4">
              {[
                { name: 'TypeScript', percentage: 48.97 },
                { name: 'Python', percentage: 19.40 },
                { name: 'JavaScript', percentage: 18.79 },
                { name: 'Java', percentage: 6.69 },
                { name: 'Vue', percentage: 3.75 },
                { name: 'PowerShell', percentage: 2.39 }
              ].map((lang) => (
                <div key={lang.name} className="flex items-center group">
                  <div className="w-8 h-8 mr-3">
                    {lang.name === 'TypeScript' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full" />}
                    {lang.name === 'Python' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full" />}
                    {lang.name === 'JavaScript' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full" />}
                    {lang.name === 'Java' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-full h-full" />}
                    {lang.name === 'Vue' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" className="w-full h-full" />}
                    {lang.name === 'PowerShell' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" alt="PowerShell" className="w-full h-full" />}
                  </div>
                  <span className="group-hover:text-blue-500 transition-colors">{lang.name} ({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`p-8 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl animate-scale-in backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:scale-105 transition-transform mt-8`}>
            <h3 className="text-xl font-semibold mb-6">Web Technologies</h3>
            <div className="space-y-4">
              {[
                { name: 'HTML', percentage: 32.72 },
                { name: 'TypeScript', percentage: 30.62 },
                { name: 'Python', percentage: 12.01 },
                { name: 'JavaScript', percentage: 11.64 },
                { name: 'CSS', percentage: 8.88 },
                { name: 'Java', percentage: 4.14 }
              ].map((tech) => (
                <div key={tech.name} className="flex items-center group">
                  <div className="w-8 h-8 mr-3">
                    {tech.name === 'HTML' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-full h-full" />}
                    {tech.name === 'TypeScript' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full" />}
                    {tech.name === 'Python' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full" />}
                    {tech.name === 'JavaScript' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full" />}
                    {tech.name === 'CSS' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-full h-full" />}
                    {tech.name === 'Java' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-full h-full" />}
                  </div>
                  <span className="group-hover:text-blue-500 transition-colors">{tech.name} ({tech.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8 animate-slide-in-left">
            <Code className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
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
                className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl overflow-hidden animate-fade-in-up backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} group hover:scale-[1.02] transition-transform`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-700'
                        } hover:bg-blue-500 hover:text-white transition-colors`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-500 hover:text-blue-400 font-medium group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-1" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <div className="flex items-center mb-8 animate-slide-in-left">
            <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Professional Experience</h2>
          </div>
          <div className="space-y-8">
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
                className={`p-8 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl animate-fade-in-up backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:scale-[1.02] transition-transform`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-blue-500 text-lg">{exp.company}</p>
                  </div>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-2 md:mt-0`}>{exp.period}</p>
                </div>
                <ul className="space-y-3 ml-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} relative`}>
                      <div className="absolute -left-6 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8 animate-slide-in-left">
            <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Education</h2>
          </div>
          <div className={`p-8 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl shadow-xl animate-scale-in backdrop-blur-sm border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} hover:scale-[1.02] transition-transform`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Bachelor of Science in Software Engineering</h3>
                <p className="text-blue-500 text-lg">Adventist University of Central Africa</p>
              </div>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-2 md:mt-0`}>2019 – 2025</p>
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
              Key courses: Data Structures & Algorithms, Object-Oriented Programming, Web Development, Database Management Systems
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-950/90' : 'bg-gray-900/90'} text-white py-12 theme-transition backdrop-blur-sm relative z-10`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg">© 2024 Manzi Niyongira Osée • Full Stack Software Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
