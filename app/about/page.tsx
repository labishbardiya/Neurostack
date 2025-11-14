'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About NeuroStack</h1>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-4">
              Upgrade human thinking in the AI era.
            </p>
            <p className="text-gray-600 mb-4">
              In a world where AI can generate information at scale, human thinking becomes more valuable—but only if we can think clearly, reason systematically, and maintain cognitive clarity.
            </p>
            <p className="text-gray-600">
              NeuroStack exists to help humans restore clarity, deepen reasoning, and build a personal "Mind OS" that enables deliberate, structured thinking in an age of information overload.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Neuroscience-Driven</h3>
                <p className="text-gray-700">
                  Every framework is grounded in cognitive science. We understand how the brain actually works—energy budgets, neural pathways, habit loops, cognitive biases. This isn't self-help fluff; it's science-based thinking optimization.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">System-Driven</h3>
                <p className="text-gray-700">
                  We think in systems. Problems aren't isolated—they exist in networks of relationships, feedback loops, and constraints. Systems thinking reveals leverage points and prevents unintended consequences.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">First-Principles-Driven</h3>
                <p className="text-gray-700">
                  We break ideas down to fundamental truths. No assumptions, no conventional wisdom, no "that's how it's always been done." We rebuild solutions from first principles, ensuring they're built on solid foundations.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">The Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Humans default to subconscious autopilot to conserve energy. This is evolutionarily smart—your brain uses 20% of your body's energy despite being only 2% of its weight. Automatic thinking is cheap. Deliberate thinking is expensive.
              </p>
              <p>
                But here's the problem: in an era of AI overload, information abundance, and complex systems, autopilot thinking isn't enough. You need deliberate, structured reasoning. You need to activate your prefrontal cortex—your thinking engine—and use it efficiently.
              </p>
              <p>
                The prefrontal cortex (PFC) consumes the most energy during deep reasoning. It's what enables you to make complex decisions, solve novel problems, and think beyond immediate reactions. But it's also easily depleted. Decision fatigue, context-switching, and constant notifications drain your PFC budget.
              </p>
              <p>
                NeuroStack trains you to use your PFC strategically. We teach you when to activate deliberate thinking and when to rely on automatic systems. We help you build stronger neural pathways through structured frameworks. We show you how to think clearly in a world designed to fragment your attention.
              </p>
              <p>
                PFC-powered deliberate thinking creates breakthroughs. It's how you see patterns others miss, solve problems others can't, and make decisions others avoid. But it requires training. It requires frameworks. It requires a Mind OS.
              </p>
              <p>
                That's what NeuroStack provides: a complete thinking system built from cognitive science, systems thinking, and first principles. Not tips and tricks. Not motivational content. A real operating system for your mind.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 bg-black text-white rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Thinking?</h2>
            <p className="text-xl mb-6">
              Start building your Mind OS today with our frameworks, tools, and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/frameworks"
                className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-[#4A90E2] hover:text-white transition-all text-center"
              >
                Explore Frameworks
              </Link>
              <Link
                href="/tools"
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all text-center"
              >
                Try Tools
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

