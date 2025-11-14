'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Node {
  id: string
  label: string
  category: string
  summary: string
  x?: number
  y?: number
  vx?: number
  vy?: number
}

export default function KnowledgeGraphPage() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const currentNodesRef = useRef<Node[]>([])

  useEffect(() => {
    const graphNodes: Node[] = [
      { id: 'systems-thinking', label: 'Systems Thinking', category: 'Foundation', summary: 'Understanding how parts interact, feedback loops, and constraints.' },
      { id: 'cognitive-science', label: 'Cognitive Science', category: 'Foundation', summary: 'Understanding subconscious habits, PFC load, and biases.' },
      { id: 'first-principles', label: 'First Principles', category: 'Foundation', summary: 'Breaking ideas to fundamentals and rebuilding.' },
      { id: 'decision-stack', label: 'Decision Stack', category: 'Framework', summary: 'Step-by-step system to make decisions without confusion.' },
      { id: 'first-principles-engine', label: 'First Principles Engine', category: 'Framework', summary: 'Break any problem to raw truths.' },
      { id: 'habit-loop-decoder', label: 'Habit Loop Decoder', category: 'Framework', summary: 'Understand and rewire habits.' },
      { id: 'cognitive-bias-filters', label: 'Cognitive Bias Filters', category: 'Framework', summary: 'Reduce bias influence.' },
      { id: 'energy-budgeting', label: 'Energy Budgeting', category: 'Framework', summary: 'Mental energy management system.' },
      { id: 'identity-engineering', label: 'Identity Engineering', category: 'Framework', summary: 'Shape identity from behaviors.' },
      { id: 'emotional-debugger', label: 'Emotional Debugger', category: 'Framework', summary: 'Emotional clarity using neuroscience.' },
      { id: 'systems-map-builder', label: 'Systems Map Builder', category: 'Framework', summary: 'Convert problems into diagrams.' },
      { id: 'prefrontal-cortex', label: 'Prefrontal Cortex', category: 'Concept', summary: 'The thinking engine. Consumes most energy during deep reasoning.' },
      { id: 'feedback-loops', label: 'Feedback Loops', category: 'Concept', summary: 'Reinforcing loops amplify. Balancing loops stabilize.' },
      { id: 'leverage-points', label: 'Leverage Points', category: 'Concept', summary: 'Where small changes create large effects.' },
      { id: 'neuroplasticity', label: 'Neuroplasticity', category: 'Concept', summary: 'Brain rewires itself based on experiences and behaviors.' },
      { id: 'identity-behavior-loop', label: 'Identity-Behavior Loop', category: 'Concept', summary: 'Identity shapes behavior, behavior shapes identity.' },
    ]

    // Initialize positions randomly
    const initializedNodes = graphNodes.map(node => ({
      ...node,
      x: Math.random() * 800 + 100,
      y: Math.random() * 600 + 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    setNodes(initializedNodes)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || nodes.length === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight - 200

    const connections = [
      ['systems-thinking', 'systems-map-builder'],
      ['systems-thinking', 'feedback-loops'],
      ['systems-thinking', 'leverage-points'],
      ['cognitive-science', 'prefrontal-cortex'],
      ['cognitive-science', 'neuroplasticity'],
      ['cognitive-science', 'habit-loop-decoder'],
      ['cognitive-science', 'cognitive-bias-filters'],
      ['cognitive-science', 'energy-budgeting'],
      ['first-principles', 'first-principles-engine'],
      ['identity-behavior-loop', 'identity-engineering'],
      ['prefrontal-cortex', 'energy-budgeting'],
      ['neuroplasticity', 'habit-loop-decoder'],
    ]

    let animationFrameId: number
    let currentNodes = [...nodes]
    currentNodesRef.current = currentNodes

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update positions
      currentNodes = currentNodes.map(node => {
        let { x = 400, y = 300, vx = 0, vy = 0 } = node

        // Boundary collision
        if (x < 50 || x > canvas.width - 50) vx *= -1
        if (y < 50 || y > canvas.height - 50) vy *= -1

        // Node repulsion (simplified)
        currentNodes.forEach(other => {
          if (other.id === node.id) return
          const dx = x - (other.x || 400)
          const dy = y - (other.y || 300)
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150 && distance > 0) {
            vx += (dx / distance) * 0.1
            vy += (dy / distance) * 0.1
          }
        })

        x += vx
        y += vy

        return { ...node, x, y, vx, vy }
      })
      
      currentNodesRef.current = currentNodes

      // Draw connections
      connections.forEach(([fromId, toId]) => {
        const from = currentNodes.find(n => n.id === fromId)
        const to = currentNodes.find(n => n.id === toId)
        if (from && to && from.x && from.y && to.x && to.y) {
          ctx.strokeStyle = 'rgba(74, 144, 226, 0.3)'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
          ctx.stroke()
        }
      })

      // Draw nodes
      currentNodes.forEach(node => {
        if (!node.x || !node.y) return

        const isSelected = selectedNode?.id === node.id
        const radius = isSelected ? 12 : 8

        // Node circle
        ctx.fillStyle = isSelected ? '#4A90E2' : '#9B51E0'
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fill()

        // Label background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.fillRect(node.x - 60, node.y - 25, 120, 20)

        // Label text
        ctx.fillStyle = '#000'
        ctx.font = '12px Inter, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(node.label, node.x, node.y - 10)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight - 200
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [nodes, selectedNode])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Find clicked node using current positions
    const clickedNode = currentNodesRef.current.find(node => {
      if (!node.x || !node.y) return false
      const dx = x - node.x
      const dy = y - node.y
      return Math.sqrt(dx * dx + dy * dy) < 15
    })

    if (clickedNode) {
      setSelectedNode(clickedNode)
    } else {
      setSelectedNode(null)
    }
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Knowledge Graph</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Interactive web of frameworks, concepts, and articles. Click nodes to explore connections.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative bg-gray-50 rounded-lg overflow-hidden" style={{ height: 'calc(100vh - 250px)' }}>
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="absolute inset-0 w-full h-full cursor-pointer"
          />
        </div>

        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-white border border-gray-200 rounded-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedNode.label}</h3>
                <span className="text-sm text-[#4A90E2] font-semibold">{selectedNode.category}</span>
                <p className="text-gray-700 mt-3">{selectedNode.summary}</p>
              </div>
              {(selectedNode.id.includes('framework') || selectedNode.category === 'Framework') && (
                <Link
                  href={`/frameworks#${selectedNode.id}`}
                  className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-[#4A90E2] transition-colors"
                >
                  View Framework →
                </Link>
              )}
            </div>
          </motion.div>
        )}

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Hover over nodes to see details. Click to select. Connections show relationships between concepts.</p>
        </div>
      </div>
    </div>
  )
}

