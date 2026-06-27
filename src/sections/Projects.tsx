import { RefObject, useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    num: '01',
    name: 'SQLRouter',
    description: 'Agentic Text-to-SQL system with modular agent architecture: discrete nodes for intent classification, schema retrieval, SQL generation, safety validation, execution, and result summarisation. Layered semantic query caching over Qdrant to short-circuit redundant LLM calls at scale.',
    tech: ['FastAPI', 'Azure OpenAI', 'Qdrant', 'SQL Server', 'Agent Pipeline', 'LLM'],
    github: 'https://github.com/inamdarmihir',
    demo: undefined as string | undefined,
    category: 'Agentic AI',
    featured: true,
  },
  {
    num: '02',
    name: 'Contract Voice Agent',
    description: 'Voice-first agentic RAG system for document risk analysis. Full-stack pipeline from ingestion to response: PDF chunking and clause-level embedding, hybrid retrieval with pre-tagged risk signals, and a real-time conversational interface over FastAPI + React + WebSocket.',
    tech: ['RAG', 'Qdrant', 'FastAPI', 'React', 'Docker', 'Embeddings', 'LLM', 'NLP'],
    github: 'https://github.com/inamdarmihir',
    demo: undefined as string | undefined,
    category: 'RAG System',
    featured: true,
  },
  {
    num: '03',
    name: 'deepagents-local-sandbox',
    description: 'Secure execution runtime for AI agents built from OS primitives. Implemented isolation using Docker and Linux namespaces with independently configurable CPU, memory, process, network, timeout, and filesystem controls — the safe execution layer under any agentic framework.',
    tech: ['Docker', 'Linux Namespaces', 'Agent Infrastructure', 'Python'],
    github: 'https://github.com/inamdarmihir',
    demo: undefined as string | undefined,
    category: 'Infrastructure',
    featured: true,
  },
]

const reveal = {
  hidden: { opacity: 0, y: 32, rotateX: 10, transformPerspective: 1200 },
  visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1200, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function TiltCard({ children, className, style, motionProps }: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  motionProps?: Record<string, unknown>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const springRx = useSpring(rx, { stiffness: 260, damping: 22, mass: 0.5 })
  const springRy = useSpring(ry, { stiffness: 260, damping: 22, mass: 0.5 })

  return (
    <div style={{ perspective: '900px' }}>
      <motion.div
        ref={ref}
        className={className}
        style={{ rotateX: springRx, rotateY: springRy, ...style }}
        onMouseMove={(e) => {
          if (!ref.current) return
          const rect = ref.current.getBoundingClientRect()
          const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
          const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 2
          ry.set(dx * 9)
          rx.set(-dy * 6)
        }}
        onMouseLeave={() => { rx.set(0); ry.set(0) }}
        {...motionProps}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

export default function Projects({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
        <motion.h2 variants={reveal} className="font-black text-macos-text text-balance mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Featured Projects.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <TiltCard
            key={project.name}
            className="group flex flex-col rounded-2xl p-5 cursor-default bg-macos-surface border border-macos-borderLight/30 hover:border-macos-borderLight/80 transition-colors"
            motionProps={{
              initial: { opacity: 0, y: 32, rotateX: 8, transformPerspective: 900 },
              whileInView: { opacity: 1, y: 0, rotateX: 0 },
              viewport: { ...vp, margin: '-40px' },
              transition: { duration: 0.6, delay: (i % 2) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-mono text-macos-subtext bg-macos-overlay/50 border border-macos-borderLight/30"
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono text-macos-text bg-macos-overlay"
                    >
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-macos-text">{project.name}</h3>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 ml-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-macos-subtext0 hover:text-macos-text transition-colors bg-macos-overlay/30"
                >
                  <Github size={13} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-macos-subtext0 hover:text-macos-text transition-colors bg-macos-overlay/30"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-macos-subtext text-xs leading-relaxed flex-1 mb-4">{project.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-1.5 py-0.5 rounded font-mono text-macos-subtext0 bg-macos-overlay/30 border border-macos-borderLight/20"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono text-macos-subtext0/50">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </TiltCard>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={vp} variants={reveal}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/inamdarmihir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-macos-subtext hover:text-macos-text transition-all hover:scale-[1.03] bg-macos-surface border border-macos-borderLight/40"
        >
          <Github size={14} />
          View all on GitHub
          <ExternalLink size={11} />
        </a>
      </motion.div>
    </div>
  )
}
