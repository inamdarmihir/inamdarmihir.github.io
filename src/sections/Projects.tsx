import { RefObject } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    num: '01',
    name: 'ResearchGeniusAI',
    description: 'AI-powered research assistant using OpenAI Agents API and Firecrawl for automated web scraping and synthesis. Features a Streamlit UI for interactive research sessions.',
    tech: ['OpenAI Agents', 'Firecrawl', 'Streamlit', 'Python', 'LangChain'],
    github: 'https://github.com/inamdarmihir/ResearchGeniusAI',
    category: 'AI Agent',
    featured: true,
  },
  {
    num: '02',
    name: 'Math-Prof-AI',
    description: 'RAG-based mathematics tutoring system achieving 100% accuracy on trigonometry problems. Uses retrieval-augmented generation for step-by-step problem solving.',
    tech: ['RAG', 'LangChain', 'FAISS', 'OpenAI', 'Python'],
    github: 'https://github.com/inamdarmihir/Math-Prof-AI',
    category: 'Education AI',
    featured: true,
  },
  {
    num: '03',
    name: 'Florence-2-DocVQA',
    description: 'Multimodal document visual question answering system fine-tuned on Florence-2. Handles complex document layouts and extracts structured information.',
    tech: ['Florence-2', 'PyTorch', 'Transformers', 'Computer Vision', 'HuggingFace'],
    github: 'https://github.com/inamdarmihir/Florence-2-DocVQA',
    category: 'Multimodal',
    featured: false,
  },
  {
    num: '04',
    name: 'CustomLanggraphResearchAgent',
    description: 'Automated research agent built with LangGraph and vector databases. Supports multi-step reasoning, tool use, and persistent memory across research sessions.',
    tech: ['LangGraph', 'Qdrant', 'OpenAI', 'Python', 'Redis'],
    github: 'https://github.com/inamdarmihir/CustomLanggraphResearchAgent',
    category: 'AI Agent',
    featured: false,
  },
  {
    num: '05',
    name: 'Multilingual NER System',
    description: 'Code-switched Named Entity Recognition for Indian languages achieving 87% F1-score. Handles Hinglish, Tanglish, and other code-mixed language pairs.',
    tech: ['BERT', 'mBERT', 'Python', 'HuggingFace', 'NLP'],
    github: 'https://github.com/inamdarmihir',
    category: 'NLP Research',
    featured: false,
  },
  {
    num: '06',
    name: 'Wav2Lip Implementation',
    description: 'Audio-video lip synchronization using the Wav2Lip architecture. Supports real-time lip sync generation for video content and XR applications.',
    tech: ['PyTorch', 'OpenCV', 'FFMPEG', 'Deep Learning', 'GAN'],
    github: 'https://github.com/inamdarmihir',
    category: 'Computer Vision',
    featured: false,
  },
]

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

export default function Projects({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
        <motion.span variants={reveal} className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
          04 — Portfolio
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-white mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Featured Projects.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ ...vp, margin: '-40px' }}
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (i % 2) * 0.06, ease: [0.25, 0.46, 0.45, 0.94] } } }}
            className="group flex flex-col rounded-2xl p-5"
            style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.25s, transform 0.25s' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onHoverStart={e => (e.target as HTMLElement).closest('.group')?.setAttribute('style', 'background:#0f0f0f;border:1px solid rgba(255,255,255,0.17);transform:translateY(-4px);')}
            onHoverEnd={e => (e.target as HTMLElement).closest('.group')?.setAttribute('style', 'background:#0f0f0f;border:1px solid rgba(255,255,255,0.07);transform:translateY(0);')}
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-white/15">{project.num}</span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-mono text-white/35"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono text-white/50"
                      style={{ background: 'rgba(255,255,255,0.08)' }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white/90">{project.name}</h3>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 ml-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-white/25 hover:text-white/70 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <Github size={13} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-white/25 hover:text-white/70 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/45 text-xs leading-relaxed flex-1 mb-4">{project.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-1.5 py-0.5 rounded font-mono text-white/30"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono text-white/20">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </motion.div>
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-white/50 hover:text-white/80 transition-all hover:scale-[1.03]"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Github size={14} />
          View all on GitHub
          <ExternalLink size={11} />
        </a>
      </motion.div>
    </div>
  )
}
