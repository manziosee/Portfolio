import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, Award, Phone, Moon, Sun } from 'lucide-react';

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

      {/* Hero Section */}
      <header className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-blue-800'} text-white theme-transition`}>
        <div className="container mx-auto px-6 py-24">
          <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Manzi Niyongira Osée</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Full Stack Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 stagger-animation">
              {/* Social links with animation */}
              {[
                { href: "https://github.com/manziosee", icon: <Github className="w-6 h-6 mr-2" />, text: "GitHub" },
                { href: "https://www.linkedin.com/in/manzi-niyongira-os%C3%A9e-2065861bb/", icon: <Linkedin className="w-6 h-6 mr-2" />, text: "LinkedIn" },
                { href: "mailto:manziosee3@gmail.com", icon: <Mail className="w-6 h-6 mr-2" />, text: "Email" },
                { href: "tel:+250786416374", icon: <Phone className="w-6 h-6 mr-2" />, text: "Call" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-all hover:scale-110 animate-fade-in-up flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Language Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8 animate-slide-in-left">
              <Code className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Programming Languages</h2>
            </div>
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg theme-transition animate-scale-in`}>
              <div className="space-y-4 stagger-animation">
                {[
                  { name: 'TypeScript', percentage: 48.07, color: 'bg-blue-500' },
                  { name: 'Python', percentage: 19.80, color: 'bg-yellow-500' },
                  { name: 'JavaScript', percentage: 19.04, color: 'bg-green-500' },
                  { name: 'Java/Spring Boot', percentage: 6.83, color: 'bg-red-500' },
                  { name: 'Vue.js', percentage: 3.83, color: 'bg-emerald-500' },
                  { name: 'PowerShell', percentage: 2.44, color: 'bg-purple-500' }
                ].map((lang) => (
                  <div key={lang.name} className="animate-fade-in-up">
                    <div className="flex justify-between mb-1">
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{lang.name}</span>
                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{lang.percentage}%</span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <div
                        className={`h-full rounded-full ${lang.color} animate-progress-bar`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with animations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8 animate-slide-in-left">
              <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "TaskForce Wallet",
                  image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  description: "A personal finance management application designed to help users track their income, expenses, budgets, and financial goals.",
                  link: "https://github.com/manziosee/taskforce-challenge"
                },
                {
                  title: "Twitter Analysis Using Django",
                  image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  description: "A Django-based application for analyzing Twitter data, providing insights into user sentiment and trending topics using NLP techniques.",
                  link: "https://github.com/manziosee/SLS_ENERGY_Challenge"
                },
                {
                  title: "Ecommerce Django API",
                  image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  description: "A robust backend system using Python and Django, featuring RESTful APIs, automated testing, and secure data handling.",
                  link: "https://github.com/manziosee/ecommerce-django-API"
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden hover-scale theme-transition animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <div className="flex space-x-2">
                      <a href={project.link}
                         className="text-blue-500 hover:text-blue-400 flex items-center transition-transform hover:translate-x-1"
                         target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with animations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8 animate-slide-in-left">
              <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8 stagger-animation">
              {[
                {
                  title: "Software Engineer",
                  company: "Andela Apprenticeship",
                  period: "Feb 2024 – Sept 2024",
                  points: [
                    "Engineered backend and frontend components using HTML, CSS, JavaScript, TypeScript, and Node.js",
                    "Developed and executed unit and integration tests using Jest and Mocha",
                    "Implemented CI/CD pipelines using CircleCI",
                    "Documented APIs with Swagger and managed projects using Trello"
                  ]
                },
                {
                  title: "Database and Datacenter Administrator Intern",
                  company: "Bank of Kigali",
                  period: "Sept 2024 - October 2024",
                  points: [
                    "Implemented database backup and mirroring strategies using Microsoft SQL and Oracle Database",
                    "Configured and maintained Active Directory and DNS systems",
                    "Managed Linux-based systems and monitored database performance"
                  ]
                },
                {
                  title: "Django Backend Engineer Intern",
                  company: "Amalitech",
                  period: "April 2023 – Jan 2024",
                  points: [
                    "Developed web applications using Python (Django) and RESTful APIs",
                    "Implemented security best practices and data encryption",
                    "Created comprehensive API documentation using Swagger"
                  ]
                }
              ].map((exp, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover-scale theme-transition animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-blue-500 mb-2">{exp.company} • {exp.period}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section with animation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8 animate-slide-in-left">
              <Award className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover-scale theme-transition animate-scale-in`}>
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Software Engineering</h3>
              <p className="text-blue-500 mb-2">Adventist University of Central Africa • 2019 – 2025</p>
              <p>Relevant coursework: Java, Data Structures, OOP, Python, Web Technologies, Hibernate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with animation */}
      <footer className={`${darkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-12 theme-transition`}>
        <div className="container mx-auto px-6 text-center animate-fade-in-up">
          <div className="flex justify-center space-x-4 mb-4">
            {[
              { href: "https://github.com/manziosee", icon: <Github className="w-6 h-6" /> },
              { href: "https://www.linkedin.com/in/manzi-niyongira-os%C3%A9e-2065861bb/", icon: <Linkedin className="w-6 h-6" /> },
              { href: "mailto:manziosee3@gmail.com", icon: <Mail className="w-6 h-6" /> }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-blue-400 transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400">© 2024 Manzi Niyongira Osée. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;