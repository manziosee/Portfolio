import { motion } from 'framer-motion'
import { Mail, Send, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitSuccess(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

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
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-lg">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <a href="mailto:manziosee3@gmail.com" className="text-indigo-300 hover:text-indigo-200 transition">
                  manziosee3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-lg">
                <Phone className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Phone</h3>
                <a href="tel:+250786416374" className="text-indigo-300 hover:text-indigo-200 transition">
                  +250 786 416 374
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-lg">
                <MapPin className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Location</h3>
                <p className="text-indigo-300">Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 text-green-400 rounded-lg"
              >
                Message sent successfully!
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}