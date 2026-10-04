import { RefObject, useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    num: '01', name: 'Ask My Tabs',
    description: 'I built a Chrome extension for searching pages with source-linked answers. The Qdrant retrieval path combines dense vectors and BM25 through reciprocal rank fusion. The committed SciFact evaluation compares embedding models and fusion weights; it is not evidence of browser performance or real-user adoption.',
    tech: ['Qdrant', 'TypeScript', 'BM25', 'RRF', 'Retrieval evaluation'],
    github: 'https://github.com/inamdarmihir/ask-my-tabs',
    demo: undefined as string | undefined, category: 'Retrieval + product', featured: true,
  },
  {
    num: '02', name: 'Payload Audit',
    description: 'I built a read-only CLI that samples Qdrant payloads and checks them against the indexed schema. In the committed 1,000-repository experiment, indexing 3,685 topics separately used about 98 times the disk of a fixed schema. This isolates index cost, not a universal Qdrant performance claim.',
    tech: ['Qdrant', 'Python', 'Schema audit', 'Reproducible benchmark'],
    github: 'https://github.com/inamdarmihir/payload-audit',
    demo: undefined as string | undefined, category: 'Vector database tooling', featured: true,
  },
  {
    num: '03', name: 'SQLRouter',
    description: 'I built a Text-to-SQL service around a modular agent pipeline, SQL validation and a Qdrant semantic cache. The repository documents the architecture and setup. I keep this separate from the measured retrieval and payload-index experiments above.',
    tech: ['Qdrant', 'FastAPI', 'LangGraph', 'SQL Server'],
    github: 'https://github.com/inamdarmihir/sqlrouter',
    demo: undefined as string | undefined, category: 'Agent infrastructure', featured: true,
  },
]

const reveal = {
  hidden: { opacity: 0, y: 32, rotateX: 10, transformPerspective: 1200 },
  visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1200, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
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

interface Props { scrollRef: RefObject<HTMLDivElement | null> }

export default function Projects({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div initial="hidden" animate="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
        <motion.span variants={reveal} className="text-[10px] font-mono text-macos-subtext0 tracking-[0.4em] uppercase">
          01 - Selected work
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-macos-text mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Qdrant work.
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
              animate: { opacity: 1, y: 0, rotateX: 0 },
              viewport: { ...vp, margin: '-40px' },
              transition: { duration: 0.6, delay: (i % 2) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
            }}
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-macos-subtext0">{project.num}</span>
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
                  aria-label={`View ${project.name} on GitHub`}
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
        initial="hidden" animate="visible" viewport={vp} variants={reveal}
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
