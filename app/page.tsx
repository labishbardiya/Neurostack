'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        nodes.slice(i + 1).forEach((other) => {
          const dx = node.x - other.x
          const dy = node.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(74, 144, 226, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })

        ctx.fillStyle = 'rgba(74, 144, 226, 0.3)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full neural-mesh"
          style={{ background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.02) 0%, rgba(155, 81, 224, 0.02) 100%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Think Better.
            <br />
            <span className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent">
              Live Smarter.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto"
          >
            A complete thinking system built from cognitive science, systems thinking, and first principles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/frameworks"
              className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-[#4A90E2] transition-all transform hover:scale-105"
            >
              Start Your Mind OS
            </Link>
            <Link
              href="/frameworks"
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-semibold hover:bg-gray-50 transition-all transform hover:scale-105"
            >
              Explore Frameworks
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              People think reactively, rely on subconscious shortcuts, drown in AI noise, and can't differentiate signal from clutter.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Reactive Thinking', desc: 'Defaulting to fast, automatic responses without deliberate analysis.' },
              { title: 'Subconscious Shortcuts', desc: 'Relying on mental heuristics that often lead to cognitive biases.' },
              { title: 'AI Overload', desc: 'Drowning in information without the tools to filter and synthesize.' },
              { title: 'Signal vs Clutter', desc: 'Unable to distinguish meaningful insights from noise.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 border border-gray-200 rounded-lg card-hover"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Solution</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cognix Lab trains deliberate thinking, cortical clarity, and structured reasoning.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Deliberate Thinking', desc: 'Activate your prefrontal cortex for conscious, intentional decision-making.' },
              { title: 'Cortical Clarity', desc: 'Reduce cognitive load and mental noise to achieve clear, focused thought.' },
              { title: 'Structured Reasoning', desc: 'Apply systematic frameworks to break down complex problems.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 bg-white rounded-lg shadow-sm card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#9B51E0] rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3 Foundations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The 3 Foundations</h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {[
              {
                title: 'Systems Thinking',
                desc: 'Understanding how parts interact, feedback loops, and constraints to see the whole picture.',
                details: [
                  'Identify system components and their relationships',
                  'Map feedback loops (reinforcing and balancing)',
                  'Recognize constraints and leverage points',
                  'Think in terms of emergence and complexity',
                ],
              },
              {
                title: 'Cognitive Science',
                desc: 'Understanding subconscious habits, PFC load, and biases to optimize mental performance.',
                details: [
                  'Recognize automatic vs. deliberate thinking',
                  'Manage prefrontal cortex energy budget',
                  'Identify and mitigate cognitive biases',
                  'Leverage habit loops for behavior change',
                ],
              },
              {
                title: 'First Principles',
                desc: 'Breaking ideas down to fundamental truths and rebuilding solutions from the ground up.',
                details: [
                  'Separate assumptions from facts',
                  'Identify physical and logical truths',
                  'Rebuild solutions from fundamentals',
                  'Stress-test and simplify',
                ],
              },
            ].map((foundation, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 card-hover"
              >
                <h3 className="text-3xl font-bold mb-4">{foundation.title}</h3>
                <p className="text-xl text-gray-700 mb-6">{foundation.desc}</p>
                <ul className="space-y-2">
                  {foundation.details.map((detail, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-[#4A90E2] mr-3">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Frameworks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Frameworks</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Practical thinking tools you can apply immediately
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Decision Stack', desc: 'Make decisions without confusion' },
              { name: 'First Principles Engine', desc: 'Break problems to raw truths' },
              { name: 'Habit Loop Decoder', desc: 'Understand and rewire habits' },
              { name: 'Cognitive Bias Filters', desc: 'Reduce bias influence' },
              { name: 'Energy Budgeting', desc: 'Mental energy management' },
              { name: 'Identity Engineering', desc: 'Shape identity from behaviors' },
            ].map((framework, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href="/frameworks" className="block p-6 bg-white rounded-lg card-hover h-full">
                  <h3 className="text-xl font-semibold mb-2">{framework.name}</h3>
                  <p className="text-gray-600">{framework.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/frameworks"
              className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-[#4A90E2] transition-all"
            >
              View All Frameworks
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NeuroScience Box */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg border border-[#4A90E2]/20"
          >
            <h2 className="text-3xl font-bold mb-6">NeuroScience Box</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Brain = 2% weight, uses 20% energy.</strong> The prefrontal cortex (PFC) consumes the most energy during deep reasoning.
              </p>
              <p>
                Subconscious uses automatic cheap loops; deliberate thinking rewires circuits. When you engage in structured reasoning, you're literally building new neural pathways.
              </p>
              <p>
                Cognix Lab trains you to use your PFC efficiently—activating it when needed, conserving energy when not, and building stronger cognitive circuits over time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Weekly Insight Newsletter</h2>
            <p className="text-xl text-gray-300 mb-8">
              One deep insight per week. Zero noise. Upgrade your thinking system.
            </p>
            <Link
              href="/newsletter"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-[#4A90E2] hover:text-white transition-all transform hover:scale-105"
            >
              Subscribe Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

