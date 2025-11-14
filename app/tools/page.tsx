'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ToolsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Interactive Tools</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practice and apply NeuroStack frameworks with these interactive tools.
          </p>
        </motion.div>

        <div className="space-y-24">
          <CognitiveLoadMeter />
          <MentalModelRecommender />
          <HabitLoopAnalyzer />
          <ThoughtClarityAnalyzer />
          <IdentityEngineeringCanvas />
          <NeuroNotesGraph />
        </div>
      </div>
    </div>
  )
}

function CognitiveLoadMeter() {
  const [tasks, setTasks] = useState<string[]>([''])
  const [results, setResults] = useState<Array<{ task: string; load: string; suggestion: string }>>([])

  const highLoadKeywords = ['decision', 'create', 'learn', 'solve', 'analyze', 'design', 'strategize', 'plan', 'write', 'code']
  const mediumLoadKeywords = ['review', 'edit', 'organize', 'coordinate', 'communicate', 'present']
  const lowLoadKeywords = ['routine', 'automatic', 'familiar', 'simple', 'repetitive']

  const calculateLoad = (task: string): { load: string; suggestion: string } => {
    const lower = task.toLowerCase()
    const hasHigh = highLoadKeywords.some(k => lower.includes(k))
    const hasMedium = mediumLoadKeywords.some(k => lower.includes(k))
    const hasLow = lowLoadKeywords.some(k => lower.includes(k))

    if (hasHigh || task.length > 50) {
      return {
        load: 'High',
        suggestion: 'Schedule during peak energy (morning). Block 2-3 hours. Eliminate distractions.',
      }
    }
    if (hasMedium) {
      return {
        load: 'Medium',
        suggestion: 'Schedule during moderate energy. Can batch with similar tasks.',
      }
    }
    if (hasLow || task.length < 20) {
      return {
        load: 'Low',
        suggestion: 'Can do during low-energy periods. Good for batching or as breaks between high-load tasks.',
      }
    }
    return {
      load: 'Medium',
      suggestion: 'Schedule during moderate energy. Monitor your actual energy usage.',
    }
  }

  const handleAnalyze = () => {
    const newResults = tasks
      .filter(t => t.trim())
      .map(task => ({
        task,
        ...calculateLoad(task),
      }))
    setResults(newResults)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold mb-4">1. Cognitive Load Meter</h2>
      <p className="text-gray-600 mb-8">
        Input your tasks to predict PFC (prefrontal cortex) load and get scheduling suggestions.
      </p>

      <div className="space-y-4 mb-6">
        {tasks.map((task, i) => (
          <input
            key={i}
            type="text"
            value={task}
            onChange={(e) => {
              const newTasks = [...tasks]
              newTasks[i] = e.target.value
              setTasks(newTasks)
            }}
            placeholder="Enter a task (e.g., 'Write strategic plan for Q2')"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
          />
        ))}
      </div>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setTasks([...tasks, ''])}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          + Add Task
        </button>
        <button
          onClick={handleAnalyze}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-[#4A90E2] transition-colors"
        >
          Analyze Load
        </button>
      </div>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((result, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg ${
                result.load === 'High'
                  ? 'bg-red-50 border border-red-200'
                  : result.load === 'Medium'
                  ? 'bg-yellow-50 border border-yellow-200'
                  : 'bg-green-50 border border-green-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{result.task}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    result.load === 'High'
                      ? 'bg-red-200 text-red-800'
                      : result.load === 'Medium'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-green-200 text-green-800'
                  }`}
                >
                  {result.load} Load
                </span>
              </div>
              <p className="text-sm text-gray-700">{result.suggestion}</p>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  )
}

function MentalModelRecommender() {
  const [problem, setProblem] = useState('')
  const [recommendation, setRecommendation] = useState<{ framework: string; steps: string[] } | null>(null)

  const frameworks = {
    decision: {
      framework: 'Decision Stack',
      steps: [
        'Define the specific outcome you want',
        'List all constraints (time, resources, rules)',
        'Generate all possible options without filtering',
        'Remove emotion using the 10/10/10 rule',
        'Score each option against your outcome criteria',
        'Execute the highest-scoring option with conviction',
      ],
    },
    habit: {
      framework: 'Habit Loop Decoder',
      steps: [
        'Identify the cue that triggers the behavior',
        'Identify the craving your brain seeks',
        'Identify the routine (actual behavior)',
        'Identify the reward the habit delivers',
        'Design an alternative routine that satisfies the same craving',
        'Reduce friction for the new routine, increase friction for the old',
      ],
    },
    system: {
      framework: 'Systems Map Builder',
      steps: [
        'List all components in the system',
        'Draw how components influence each other',
        'Identify feedback loops (reinforcing and balancing)',
        'Mark constraints and bottlenecks',
        'Find leverage points where small changes create large effects',
        'Design interventions at leverage points',
      ],
    },
    bias: {
      framework: 'Cognitive Bias Filters',
      steps: [
        'Identify which bias might be influencing you',
        'Check the actual data—separate facts from interpretations',
        'Counter-frame: argue the opposite position',
        'Seek disconfirming evidence actively',
        'Re-evaluate your conclusion with new awareness',
      ],
    },
    identity: {
      framework: 'Identity Engineering',
      steps: [
        'Define your ideal identity in specific terms',
        'Identify non-negotiable habits that embody this identity',
        'Remove behaviors that contradict your desired identity',
        'Script daily identity statements',
        'Review weekly: did actions align with identity?',
      ],
    },
    emotion: {
      framework: 'Emotional Debugger',
      steps: [
        'Label the emotion precisely (not just "bad")',
        'Identify what triggered the emotion',
        'Locate where you feel it in your body',
        'Find the deeper need or value being threatened',
        'Reframe: what would a calm observer see?',
        'Choose a deliberate response aligned with values',
      ],
    },
    first: {
      framework: 'First Principles Engine',
      steps: [
        'State the problem in simplest form',
        'Separate assumptions from facts',
        'Identify physical/logical truths',
        'Rebuild solutions from fundamentals',
        'Stress-test against edge cases',
        'Simplify to the core solution',
      ],
    },
    energy: {
      framework: 'Energy Budgeting',
      steps: [
        'Track which tasks require high PFC energy',
        'Identify subconscious/automatic tasks',
        'Schedule high-PFC tasks during peak energy',
        'Remove energy leaks (notifications, context-switching)',
        'Review weekly and adjust schedule',
      ],
    },
  }

  const handleRecommend = () => {
    const lower = problem.toLowerCase()
    let matched: keyof typeof frameworks | null = null

    if (lower.includes('decision') || lower.includes('choose') || lower.includes('option')) {
      matched = 'decision'
    } else if (lower.includes('habit') || lower.includes('behavior') || lower.includes('routine')) {
      matched = 'habit'
    } else if (lower.includes('system') || lower.includes('complex') || lower.includes('interaction')) {
      matched = 'system'
    } else if (lower.includes('bias') || lower.includes('assumption') || lower.includes('believe')) {
      matched = 'bias'
    } else if (lower.includes('identity') || lower.includes('who i am') || lower.includes('become')) {
      matched = 'identity'
    } else if (lower.includes('emotion') || lower.includes('feel') || lower.includes('angry') || lower.includes('anxious')) {
      matched = 'emotion'
    } else if (lower.includes('first principle') || lower.includes('fundamental') || lower.includes('assumption')) {
      matched = 'first'
    } else if (lower.includes('energy') || lower.includes('tired') || lower.includes('exhausted') || lower.includes('focus')) {
      matched = 'energy'
    }

    if (matched) {
      setRecommendation(frameworks[matched])
    } else {
      setRecommendation(frameworks.decision) // Default
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold mb-4">2. Mental Model Recommender</h2>
      <p className="text-gray-600 mb-8">
        Describe your problem and get the best framework recommendation with exact steps to follow.
      </p>

      <textarea
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Describe your problem or situation (e.g., 'I need to decide between two job offers')"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] h-32 mb-6"
      />

      <button
        onClick={handleRecommend}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-[#4A90E2] transition-colors mb-8"
      >
        Get Recommendation
      </button>

      {recommendation && (
        <div className="p-6 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Recommended Framework: {recommendation.framework}</h3>
          <ol className="space-y-3">
            {recommendation.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#4A90E2] text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </motion.section>
  )
}

function HabitLoopAnalyzer() {
  const [habit, setHabit] = useState('')
  const [analysis, setAnalysis] = useState<{
    cue: string
    craving: string
    routine: string
    reward: string
    replacement: string
  } | null>(null)

  const handleAnalyze = () => {
    if (!habit.trim()) return

    const lower = habit.toLowerCase()
    const cues = ['stress', 'boredom', 'time', 'location', 'emotion', 'people']
    const cravings = ['relief', 'energy', 'comfort', 'distraction', 'social', 'reward']
    const routines = ['scroll', 'eat', 'smoke', 'procrastinate', 'check', 'shop']
    const rewards = ['dopamine', 'relief', 'escape', 'pleasure', 'connection']

    const detectedCue = cues.find(c => lower.includes(c)) || 'Context trigger (time, location, emotion, or preceding action)'
    const detectedCraving = cravings.find(c => lower.includes(c)) || 'Emotional or physical need'
    const detectedRoutine = routines.find(r => lower.includes(r)) || habit
    const detectedReward = rewards.find(r => lower.includes(r)) || 'Temporary satisfaction'

    const replacements: Record<string, string> = {
      scroll: 'Take 5 deep breaths, then do 10 push-ups',
      eat: 'Drink a glass of water and wait 10 minutes',
      smoke: 'Go for a 2-minute walk outside',
      procrastinate: 'Work for just 5 minutes (Pomodoro technique)',
      check: 'Write down what you want to check, review at scheduled time',
      shop: 'Add to wishlist, wait 48 hours before purchasing',
    }

    const replacement = replacements[detectedRoutine] || 'Identify an alternative behavior that satisfies the same craving'

    setAnalysis({
      cue: detectedCue,
      craving: detectedCraving,
      routine: detectedRoutine,
      reward: detectedReward,
      replacement,
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold mb-4">3. Habit Loop Analyzer</h2>
      <p className="text-gray-600 mb-8">
        Enter a habit you want to understand or change. The tool will identify the cue, craving, routine, and reward, then suggest a replacement.
      </p>

      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Describe your habit (e.g., 'I scroll social media when stressed')"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] mb-6"
      />

      <button
        onClick={handleAnalyze}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-[#4A90E2] transition-colors mb-8"
      >
        Analyze Habit
      </button>

      {analysis && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-[#4A90E2]">Cue</h4>
              <p className="text-gray-700">{analysis.cue}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-[#9B51E0]">Craving</h4>
              <p className="text-gray-700">{analysis.craving}</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-yellow-700">Routine</h4>
              <p className="text-gray-700">{analysis.routine}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold mb-2 text-green-700">Reward</h4>
              <p className="text-gray-700">{analysis.reward}</p>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg">
            <h4 className="font-semibold mb-2 text-lg">Suggested Replacement Routine</h4>
            <p className="text-gray-700">{analysis.replacement}</p>
          </div>
        </div>
      )}
    </motion.section>
  )
}

function ThoughtClarityAnalyzer() {
  const [input, setInput] = useState('')
  const [analysis, setAnalysis] = useState<{
    issues: string[]
    clearer: string
  } | null>(null)

  const handleAnalyze = () => {
    if (!input.trim()) return

    const issues: string[] = []
    let clearer = input

    // Check for emotional reasoning
    const emotionalWords = ['feel', 'should', 'must', 'always', 'never', 'terrible', 'amazing', 'hate', 'love']
    if (emotionalWords.some(w => input.toLowerCase().includes(w))) {
      issues.push('Emotional reasoning detected: Strong emotional language may cloud logical analysis')
      clearer = clearer.replace(/\b(should|must)\b/gi, 'could')
      clearer = clearer.replace(/\b(always|never)\b/gi, 'often/rarely')
    }

    // Check for unclear logic
    if (input.split('.').length < 2) {
      issues.push('Unclear logic: Single statement without supporting reasoning')
    }

    // Check for hidden assumptions
    const assumptionIndicators = ['obviously', 'clearly', 'everyone knows', 'of course']
    if (assumptionIndicators.some(a => input.toLowerCase().includes(a))) {
      issues.push('Hidden assumptions: Phrases like "obviously" or "everyone knows" may hide unstated premises')
      clearer = clearer.replace(/\b(obviously|clearly|of course)\b/gi, '')
    }

    // Check for vague language
    const vagueWords = ['thing', 'stuff', 'something', 'somehow', 'kind of', 'sort of']
    if (vagueWords.some(v => input.toLowerCase().includes(v))) {
      issues.push('Vague language: Replace vague terms with specific details')
    }

    if (issues.length === 0) {
      issues.push('No major clarity issues detected. Your thinking appears clear and structured.')
    }

    setAnalysis({ issues, clearer })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold mb-4">4. Thought Clarity Analyzer</h2>
      <p className="text-gray-600 mb-8">
        Paste your text to detect emotional reasoning, unclear logic, and hidden assumptions. Get a clearer version.
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your thoughts or text here..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] h-32 mb-6"
      />

      <button
        onClick={handleAnalyze}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-[#4A90E2] transition-colors mb-8"
      >
        Analyze Clarity
      </button>

      {analysis && (
        <div className="space-y-6">
          <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold mb-4 text-lg">Issues Detected:</h4>
            <ul className="space-y-2">
              {analysis.issues.map((issue, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span className="text-gray-700">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold mb-4 text-lg">Clearer Version:</h4>
            <p className="text-gray-700 whitespace-pre-wrap">{analysis.clearer || input}</p>
          </div>
        </div>
      )}
    </motion.section>
  )
}

function IdentityEngineeringCanvas() {
  const [currentIdentity, setCurrentIdentity] = useState('')
  const [desiredIdentity, setDesiredIdentity] = useState('')
  const [contradictions, setContradictions] = useState('')
  const [alignmentPlan, setAlignmentPlan] = useState('')

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold mb-4">5. Identity Engineering Canvas</h2>
      <p className="text-gray-600 mb-8">
        Map your current identity, desired identity, contradictions, and alignment plan.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">Current Identity</label>
          <textarea
            value={currentIdentity}
            onChange={(e) => setCurrentIdentity(e.target.value)}
            placeholder="Who am I now? What behaviors define me?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] h-32"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Desired Identity</label>
          <textarea
            value={desiredIdentity}
            onChange={(e) => setDesiredIdentity(e.target.value)}
            placeholder="Who do I want to become? What identity do I want to embody?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] h-32"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Contradictions</label>
          <textarea
            value={contradictions}
            onChange={(e) => setContradictions(e.target.value)}
            placeholder="What behaviors contradict my desired identity? What needs to be removed?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] h-32"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Alignment Plan</label>
          <textarea
            value={alignmentPlan}
            onChange={(e) => setAlignmentPlan(e.target.value)}
            placeholder="What specific actions will I take to align behaviors with desired identity?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] h-32"
          />
        </div>
      </div>

      {(currentIdentity || desiredIdentity || contradictions || alignmentPlan) && (
        <div className="mt-8 p-6 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg">
          <h4 className="font-semibold mb-4 text-lg">Your Identity Map</h4>
          <div className="space-y-4 text-sm">
            {currentIdentity && (
              <div>
                <span className="font-semibold">Current:</span> {currentIdentity}
              </div>
            )}
            {desiredIdentity && (
              <div>
                <span className="font-semibold">Desired:</span> {desiredIdentity}
              </div>
            )}
            {contradictions && (
              <div>
                <span className="font-semibold">Contradictions:</span> {contradictions}
              </div>
            )}
            {alignmentPlan && (
              <div>
                <span className="font-semibold">Plan:</span> {alignmentPlan}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.section>
  )
}

function NeuroNotesGraph() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const nodes = [
    { id: 'systems-thinking', label: 'Systems Thinking', x: 100, y: 100 },
    { id: 'cognitive-science', label: 'Cognitive Science', x: 300, y: 100 },
    { id: 'first-principles', label: 'First Principles', x: 500, y: 100 },
    { id: 'decision-stack', label: 'Decision Stack', x: 100, y: 250 },
    { id: 'habit-loop', label: 'Habit Loop', x: 300, y: 250 },
    { id: 'bias-filters', label: 'Bias Filters', x: 500, y: 250 },
    { id: 'energy-budget', label: 'Energy Budget', x: 200, y: 400 },
    { id: 'identity', label: 'Identity Engineering', x: 400, y: 400 },
  ]

  const summaries: Record<string, string> = {
    'systems-thinking': 'Understanding how parts interact, feedback loops, and constraints to see the whole picture.',
    'cognitive-science': 'Understanding subconscious habits, PFC load, and biases to optimize mental performance.',
    'first-principles': 'Breaking ideas down to fundamental truths and rebuilding solutions from the ground up.',
    'decision-stack': 'A step-by-step system to make decisions without confusion.',
    'habit-loop': 'Understand and rewire habits using neuroscience of behavior change.',
    'bias-filters': 'Reduce bias influence in your thinking through systematic filters.',
    'energy-budget': 'Mental energy management system for optimal PFC allocation.',
    'identity': 'Shape identity from behaviors to become who you want to be.',
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg border border-gray-200 p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold mb-4">6. NeuroNotes Knowledge Graph</h2>
      <p className="text-gray-600 mb-8">
        Visual knowledge graph linking all frameworks and concepts. Hover for summaries, click to explore.
      </p>

      <div className="relative bg-gray-50 rounded-lg p-8 min-h-[500px]">
        <svg width="100%" height="500" className="absolute inset-0">
          {/* Draw connections */}
          {nodes.map((node, i) => {
            if (i < nodes.length - 1) {
              const next = nodes[i + 1]
              return (
                <line
                  key={`line-${i}`}
                  x1={node.x}
                  y1={node.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="#4A90E2"
                  strokeWidth="2"
                  opacity="0.3"
                />
              )
            }
            return null
          })}
        </svg>

        <div className="relative z-10">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute cursor-pointer"
              style={{ left: node.x - 60, top: node.y - 20 }}
              onMouseEnter={() => setSelectedNode(node.id)}
              onMouseLeave={() => setSelectedNode(null)}
              onClick={() => window.location.href = `/frameworks#${node.id}`}
            >
              <div
                className={`px-4 py-2 bg-white border-2 rounded-lg transition-all ${
                  selectedNode === node.id
                    ? 'border-[#4A90E2] shadow-lg scale-110'
                    : 'border-gray-300 hover:border-[#9B51E0]'
                }`}
              >
                <div className="text-sm font-semibold text-center">{node.label}</div>
              </div>
            </div>
          ))}
        </div>

        {selectedNode && (
          <div className="absolute bottom-8 left-8 right-8 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h4 className="font-semibold mb-2">{nodes.find(n => n.id === selectedNode)?.label}</h4>
            <p className="text-sm text-gray-600">{summaries[selectedNode]}</p>
          </div>
        )}
      </div>
    </motion.section>
  )
}

