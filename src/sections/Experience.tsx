import { RefObject } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const JOBS = [
  {
    title: 'Associate Software Developer – Data Scientist',
    company: 'Sutherland Global Services',
    location: 'Chennai, India',
    period: 'Aug 2025 — Present',
    type: 'Full-time',
    highlights: [
      'Architected end-to-end RLHF pipeline for Text-to-SQL from first principles: preference data collection, custom reward model on human feedback, and PPO policy optimisation — serving 10K+ daily transactions on AWS',
      'Engineered multi-stage agentic inference system with quantized LLM serving (4-bit/8-bit) cutting latency 60% at F1 > 0.95; RAG layer over Pinecone for sub-200ms retrieval with tool-calling, schema grounding, and safety validation',
    ],
    stack: ['PyTorch', 'HuggingFace', 'PPO', 'RLHF', 'Pinecone', 'AWS', 'SQL'],
  },
  {
    title: 'ML Engineer',
    company: 'Quoppo Ventures',
    location: 'Pune, India',
    period: 'Oct 2024 — Mar 2025',
    type: 'Full-time',
    highlights: [
      'Designed hybrid LSTM-MeshNet architecture for 3D positioning from scratch; resolved vanishing gradient failure modes via custom multi-term loss scheduling and adaptive LR warmup — 30% accuracy improvement over SOTA baseline',
      'Rebuilt GAN training loop with redesigned discriminator and curriculum-based fine-tuning strategy; reduced post-production editing time by 40%; established reproducible MLOps foundation (W&B + DVC + CI/CD) across a 3-engineer team',
    ],
    stack: ['PyTorch', 'GANs', 'LSTM', 'Weights & Biases', 'DVC', 'GitHub Actions'],
  },
  {
    title: 'Graduate ML Research Fellow',
    company: 'CVIT, IIIT Hyderabad',
    location: 'Hyderabad, India',
    period: 'Mar 2024 — Aug 2024',
    type: 'Research Fellowship',
    highlights: [
      'Designed transformer post-OCR correction pipeline over multi-layout corpora; diagnosed model failures by analysing cross-attention maps, identifying layout-induced error patterns — 15% CER reduction',
      'Co-invented patent-pending document layout analysis system built from geometric constraints and Vision Transformers — designed to generalise across languages and mixed-layout documents without layout-specific fine-tuning',
    ],
    stack: ['Vision Transformers', 'OCR', 'PyTorch', 'Attention Analysis'],
  },
]

const reveal = {
  hidden: { opacity: 0, y: 32, rotateX: 10, transformPerspective: 1200 },
  visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1200, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const slideLeft = {
  hidden: { opacity: 0, x: -24, rotateY: -8, transformPerspective: 1200 },
  visible: { opacity: 1, x: 0, rotateY: 0, transformPerspective: 1200, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

export default function Experience({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
        <motion.span variants={reveal} className="text-[10px] font-mono text-macos-subtext0 tracking-[0.4em] uppercase">
          03 — Experience
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-macos-text mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Where I've Been.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-macos-borderLight/50 to-transparent"
        />

        <div className="space-y-8">
          {JOBS.map((job, i) => (
            <motion.div
              key={job.company}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: i * 0.05 } } }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <motion.div
                variants={reveal}
                className="absolute left-0 top-7 w-[15px] h-[15px] rounded-full flex items-center justify-center bg-macos-crust border border-macos-borderLight/50"
              >
                <div className="w-[5px] h-[5px] rounded-full bg-macos-blue" />
              </motion.div>

              {/* Card */}
              <motion.div
                variants={slideLeft}
                className="rounded-2xl p-6 bg-macos-surface border border-macos-borderLight/30 hover:border-macos-borderLight/80 transition-colors duration-200"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <span
                      className="text-[10px] px-2.5 py-1 rounded-full font-mono mb-2.5 inline-block text-macos-subtext bg-macos-overlay/50 border border-macos-borderLight/30"
                    >
                      {job.type}
                    </span>
                    <h3 className="text-lg font-bold text-macos-text">{job.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Briefcase size={11} className="text-macos-subtext0" />
                      <span className="text-macos-subtext text-sm font-medium">{job.company}</span>
                      <span className="text-macos-borderLight">·</span>
                      <MapPin size={11} className="text-macos-subtext0" />
                      <span className="text-macos-subtext0 text-sm">{job.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-macos-subtext0 text-xs font-mono">
                    <Calendar size={10} />
                    {job.period}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-macos-subtext">
                      <ChevronRight size={13} className="text-macos-subtext0 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded font-mono text-macos-subtext0 bg-macos-overlay/30 border border-macos-borderLight/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
