'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 5000)
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            One Deep Insight
            <br />
            <span className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent">
              per Week.
            </span>
            <br />
            Zero Noise.
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Upgrade your thinking system with weekly insights on cognitive science, systems thinking, and first-principles reasoning. No fluff. No marketing. Just deep thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-[#4A90E2] transition-all transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-bold mb-2">You're Subscribed!</h2>
              <p className="text-gray-700">
                Check your email to confirm your subscription. Welcome to clearer thinking.
              </p>
            </motion.div>
          )}

          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">What You'll Get</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Deep Insights', desc: 'One substantial article per week on cognitive science, systems thinking, or first principles.' },
                { title: 'Zero Noise', desc: 'No marketing emails, no promotions, no fluff. Just pure thinking content.' },
                { title: 'Practical Frameworks', desc: 'Actionable frameworks you can apply immediately to upgrade your thinking.' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

