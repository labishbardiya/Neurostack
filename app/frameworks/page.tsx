'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const frameworks = [
  {
    id: 'decision-stack',
    title: 'Decision Stack',
    description: 'A step-by-step system to make decisions without confusion. Eliminate analysis paralysis and make clear, confident choices.',
    steps: [
      {
        number: 1,
        title: 'Define Outcome',
        description: 'Clearly articulate what success looks like. What specific result are you trying to achieve? Make it measurable and time-bound.',
      },
      {
        number: 2,
        title: 'Identify Constraints',
        description: 'List all limitations: time, resources, rules, dependencies. Constraints define your decision space.',
      },
      {
        number: 3,
        title: 'List Options',
        description: 'Generate all possible paths forward. Don\'t filter yet—brainstorm without judgment. Quantity before quality.',
      },
      {
        number: 4,
        title: 'Remove Emotion',
        description: 'Separate feelings from facts. What would you recommend to a friend in this situation? Use the 10/10/10 rule: how will this feel in 10 minutes, 10 months, 10 years?',
      },
      {
        number: 5,
        title: 'Score Options',
        description: 'Rate each option against your outcome criteria. Use a simple 1-10 scale or weighted scoring matrix. Be honest about trade-offs.',
      },
      {
        number: 6,
        title: 'Execute',
        description: 'Commit to the highest-scoring option. Set a deadline. Create an action plan. Move forward with conviction.',
      },
    ],
  },
  {
    id: 'first-principles-engine',
    title: 'First Principles Engine',
    description: 'Break any problem down to raw truths and rebuild solutions from fundamentals. Cut through assumptions and conventional wisdom.',
    steps: [
      {
        number: 1,
        title: 'State Problem',
        description: 'Write the problem in its simplest form. Remove jargon, complexity, and preconceived solutions.',
      },
      {
        number: 2,
        title: 'Separate Assumptions',
        description: 'List everything you\'re assuming. What "everyone knows" might be wrong. Question industry standards, best practices, and inherited beliefs.',
      },
      {
        number: 3,
        title: 'Identify Physical/Logical Truths',
        description: 'What are the unchangeable facts? Laws of physics, mathematics, human nature, or logic that cannot be violated.',
      },
      {
        number: 4,
        title: 'Rebuild Solutions',
        description: 'Using only first principles, construct new solutions from scratch. Don\'t copy existing approaches—build from fundamentals.',
      },
      {
        number: 5,
        title: 'Stress-Test',
        description: 'Challenge your solution. What could go wrong? What edge cases exist? Test against extreme scenarios.',
      },
      {
        number: 6,
        title: 'Simplify',
        description: 'Remove unnecessary complexity. The best solution is the simplest one that works. Cut everything that doesn\'t serve the core purpose.',
      },
    ],
  },
  {
    id: 'habit-loop-decoder',
    title: 'Habit Loop Decoder',
    description: 'Understand and rewire habits using the neuroscience of behavior change. Break automatic patterns and install intentional ones.',
    steps: [
      {
        number: 1,
        title: 'Identify Cue',
        description: 'What triggers the habit? Time, location, emotional state, other people, or preceding action? Track for one week to find patterns.',
      },
      {
        number: 2,
        title: 'Identify Craving',
        description: 'What reward does your brain seek? Relief from stress? Social connection? Energy boost? The craving drives the loop.',
      },
      {
        number: 3,
        title: 'Identify Routine',
        description: 'What is the actual behavior? Be specific. The routine is the observable action you want to change.',
      },
      {
        number: 4,
        title: 'Identify Reward',
        description: 'What does the habit actually deliver? Test by removing the routine—what craving remains unsatisfied?',
      },
      {
        number: 5,
        title: 'Insert Alternative Routine',
        description: 'Design a new behavior that satisfies the same craving. Keep the cue and reward, change only the routine.',
      },
      {
        number: 6,
        title: 'Track Reduction of Friction',
        description: 'Make the new routine easier than the old one. Reduce steps, remove barriers, add friction to the old habit. Track progress daily.',
      },
    ],
  },
  {
    id: 'cognitive-bias-filters',
    title: 'Cognitive Bias Filters',
    description: 'Reduce bias influence in your thinking. Recognize mental shortcuts that lead to errors and apply systematic filters.',
    biases: [
      'Confirmation Bias: Seeking information that confirms existing beliefs',
      'Availability Bias: Overweighting recent or memorable examples',
      'Anchoring Bias: Relying too heavily on first piece of information',
      'Projection Bias: Assuming others think like you',
      'Emotional Reasoning: Letting feelings override logic',
      'Novelty Bias: Overvaluing new information over established patterns',
    ],
    steps: [
      {
        number: 1,
        title: 'Identify Bias',
        description: 'Which bias might be influencing you? Review the list above. Most decisions involve multiple biases.',
      },
      {
        number: 2,
        title: 'Check Data',
        description: 'What evidence do you actually have? Separate facts from interpretations. Look for missing data.',
      },
      {
        number: 3,
        title: 'Counter-Frame',
        description: 'Deliberately argue the opposite position. What would someone with opposite beliefs conclude?',
      },
      {
        number: 4,
        title: 'Seek Disconfirming Evidence',
        description: 'Actively look for information that challenges your view. Read opposing arguments. Talk to skeptics.',
      },
      {
        number: 5,
        title: 'Re-evaluate',
        description: 'With bias awareness and new evidence, reassess your conclusion. Update your confidence level.',
      },
    ],
  },
  {
    id: 'energy-budgeting',
    title: 'Energy Budgeting',
    description: 'Mental energy management system. Your prefrontal cortex has limited capacity—allocate it wisely.',
    steps: [
      {
        number: 1,
        title: 'Track High-PFC Tasks',
        description: 'Identify activities requiring deliberate thinking: complex decisions, creative work, learning, problem-solving. These drain your PFC.',
      },
      {
        number: 2,
        title: 'Track Subconscious Tasks',
        description: 'Identify automatic activities: routine emails, simple tasks, habits. These use minimal PFC energy.',
      },
      {
        number: 3,
        title: 'Assign Tasks by Energy Windows',
        description: 'Schedule high-PFC tasks during peak energy (usually morning). Batch subconscious tasks for low-energy periods.',
      },
      {
        number: 4,
        title: 'Remove Energy Leaks',
        description: 'Eliminate notifications, context-switching, and decision fatigue. Use defaults, automation, and routines to preserve PFC capacity.',
      },
      {
        number: 5,
        title: 'Weekly Reset',
        description: 'Review your energy budget. What drained you? What energized you? Adjust your schedule and systems accordingly.',
      },
    ],
  },
  {
    id: 'identity-engineering',
    title: 'Identity Engineering',
    description: 'Shape identity from behaviors. Your actions define who you are—design them intentionally to become who you want to be.',
    steps: [
      {
        number: 1,
        title: 'Define Ideal Identity',
        description: 'Who do you want to become? Write 3-5 identity statements: "I am someone who..." Be specific and aspirational.',
      },
      {
        number: 2,
        title: 'Define Non-Negotiable Habits',
        description: 'What behaviors must you do daily/weekly to embody this identity? These are your keystone habits—non-negotiable actions.',
      },
      {
        number: 3,
        title: 'Remove Contradictory Behaviors',
        description: 'What actions conflict with your desired identity? List them. These must be eliminated or replaced.',
      },
      {
        number: 4,
        title: 'Script Identity Statements',
        description: 'Write "I am..." statements you\'ll repeat daily. Connect behaviors to identity: "I am a writer" (not "I want to write").',
      },
      {
        number: 5,
        title: 'Weekly Identity Review',
        description: 'Each week, review: Did my actions align with my identity? What needs adjustment? Celebrate identity-consistent behaviors.',
      },
    ],
  },
  {
    id: 'emotional-debugger',
    title: 'Emotional Debugger',
    description: 'Achieve emotional clarity using neuroscience. Understand the source of emotions and respond intentionally rather than reactively.',
    steps: [
      {
        number: 1,
        title: 'Label Emotion',
        description: 'Name the emotion precisely. Not just "bad" but "anxious," "frustrated," "disappointed." Specificity increases control.',
      },
      {
        number: 2,
        title: 'Identify Trigger',
        description: 'What event, thought, or memory preceded the emotion? The trigger is the external or internal stimulus.',
      },
      {
        number: 3,
        title: 'Locate Bodily Response',
        description: 'Where do you feel this emotion in your body? Tension, heat, tightness? Emotions are physical experiences.',
      },
      {
        number: 4,
        title: 'Find Origin',
        description: 'What deeper need or value is being threatened? Emotions signal what matters to you. What\'s really at stake?',
      },
      {
        number: 5,
        title: 'Reframe',
        description: 'Challenge the interpretation. Is there another way to view this situation? What would a calm, wise observer see?',
      },
      {
        number: 6,
        title: 'Replace Automatic Reaction',
        description: 'Choose a deliberate response aligned with your values. What action serves your long-term goals? Execute that instead.',
      },
    ],
  },
  {
    id: 'systems-map-builder',
    title: 'Systems Map Builder',
    description: 'Convert problems into visual diagrams. See relationships, feedback loops, and leverage points that aren\'t visible in linear thinking.',
    steps: [
      {
        number: 1,
        title: 'List Components',
        description: 'Identify all elements in the system: people, processes, resources, rules, goals. Nothing exists in isolation.',
      },
      {
        number: 2,
        title: 'Draw Interactions',
        description: 'Map how components influence each other. Use arrows to show direction of influence. Who affects whom?',
      },
      {
        number: 3,
        title: 'Identify Loops',
        description: 'Find feedback loops: reinforcing (amplifying) and balancing (stabilizing). Loops drive system behavior.',
      },
      {
        number: 4,
        title: 'Mark Constraints',
        description: 'Identify limits: bottlenecks, rules, resource caps, time constraints. Constraints define what\'s possible.',
      },
      {
        number: 5,
        title: 'Identify Leverage Points',
        description: 'Where can small changes create large effects? Look for feedback loops, constraints, and information flows.',
      },
      {
        number: 6,
        title: 'Generate Solutions',
        description: 'Design interventions at leverage points. How can you modify loops, constraints, or information to shift system behavior?',
      },
    ],
  },
]

export default function FrameworksPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frameworks Library</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Practical thinking systems you can apply immediately. Each framework includes step-by-step instructions.
          </p>
        </motion.div>

        <div className="space-y-24">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="scroll-mt-20"
              id={framework.id}
            >
              <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 card-hover">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{framework.title}</h2>
                  <p className="text-xl text-gray-700">{framework.description}</p>
                </div>

                {framework.biases && (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Common Biases:</h3>
                    <ul className="space-y-2">
                      {framework.biases.map((bias, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#4A90E2] mr-3">•</span>
                          <span className="text-gray-700">{bias}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Steps:</h3>
                  {framework.steps.map((step) => (
                    <div key={step.number} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#9B51E0] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="p-8 bg-gradient-to-br from-[#4A90E2]/10 to-[#9B51E0]/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply These Frameworks?</h3>
            <p className="text-gray-700 mb-6">Use our interactive tools to practice and integrate these thinking systems.</p>
            <Link
              href="/tools"
              className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-[#4A90E2] transition-all"
            >
              Explore Tools
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

