import { RefObject } from 'react'
import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'ML & Deep Learning',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'HuggingFace Transformers', level: 92 },
      { name: 'RLHF / PPO / LoRA', level: 90 },
      { name: 'Scikit-learn / XGBoost', level: 88 },
      { name: 'TRL', level: 85 },
    ],
  },
  {
    category: 'LLM & Retrieval',
    skills: [
      { name: 'RAG Systems', level: 93 },
      { name: 'Qdrant / Pinecone / FAISS', level: 91 },
      { name: 'LangChain / LlamaIndex', level: 90 },
      { name: 'DSPy / vLLM', level: 82 },
      { name: 'Dense Retrieval', level: 88 },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'FastAPI / Flask', level: 90 },
      { name: 'PostgreSQL / Redis', level: 82 },
      { name: 'REST APIs', level: 88 },
      { name: 'Streamlit', level: 85 },
      { name: 'React', level: 72 },
    ],
  },
  {
    category: 'MLOps & Infrastructure',
    skills: [
      { name: 'Docker / Kubernetes', level: 85 },
      { name: 'AWS / AWS Bedrock AgentCore', level: 82 },
      { name: 'GitHub Actions CI/CD', level: 83 },
      { name: 'Weights & Biases / MLflow', level: 88 },
      { name: 'DVC', level: 80 },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Python', level: 97 },
      { name: 'SQL', level: 88 },
      { name: 'Pandas / NumPy', level: 92 },
      { name: 'GCP BigQuery', level: 75 },
      { name: 'Power BI / Matplotlib', level: 78 },
    ],
  },
  {
    category: 'Research & Methods',
    skills: [
      { name: 'RLHF Pipeline Design', level: 90 },
      { name: 'Agentic System Design', level: 92 },
      { name: 'Statistical Analysis', level: 85 },
      { name: 'Quantitative Modelling', level: 83 },
      { name: 'Fine-Tuning LLMs', level: 90 },
    ],
  },
]

const ALL_TECH = [
  'Python', 'SQL', 'JavaScript',
  'PyTorch', 'HuggingFace', 'TRL', 'RLHF', 'PPO', 'LoRA', 'Scikit-learn', 'XGBoost', 'LightGBM',
  'RAG', 'FAISS', 'Pinecone', 'Qdrant', 'LangChain', 'LlamaIndex', 'DSPy', 'vLLM',
  'FastAPI', 'Flask', 'Streamlit', 'React', 'PostgreSQL', 'Redis',
  'Docker', 'Kubernetes', 'AWS', 'AWS Bedrock AgentCore', 'GitHub Actions', 'DVC', 'Weights & Biases', 'MLflow',
  'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'GCP BigQuery',
  'Vision Transformers', 'OCR', 'GANs', 'LSTM',
]

const reveal = {
  hidden: { opacity: 0, y: 28, rotateX: 10, transformPerspective: 1200 },
  visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1200, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

function SkillBar({ name, level, scrollRef, delay }: { name: string; level: number; scrollRef: RefObject<HTMLDivElement>; delay: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-macos-subtext font-mono">{name}</span>
        <span className="text-xs text-macos-subtext0/50 font-mono">{level}%</span>
      </div>
      <div className="h-[3px] rounded-full overflow-hidden bg-macos-overlay/30">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, rgba(137,180,250,0.5), rgba(166,227,161,0.8))` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ root: scrollRef, once: true, margin: '-60px' }}
        />
      </div>
    </div>
  )
}

export default function Skills({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
        <motion.span variants={reveal} className="text-[10px] font-mono text-macos-subtext0 tracking-[0.4em] uppercase">
          05 — Expertise
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-macos-text mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Skills & Stack.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      {/* Skill groups grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ ...vp, margin: '-40px' }}
            variants={{ hidden: { opacity: 0, y: 24, rotateX: 9, transformPerspective: 1200 }, visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1200, transition: { duration: 0.65, delay: (gi % 2) * 0.08 } } }}
            className="p-5 rounded-2xl bg-macos-surface border border-macos-borderLight/30"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-0.5 h-4 rounded-full bg-macos-subtext0" />
              <h3 className="text-[11px] font-mono text-macos-subtext uppercase tracking-widest">{group.category}</h3>
            </div>
            <div className="space-y-3.5">
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  scrollRef={scrollRef}
                  delay={si * 0.07}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* All technologies */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={vp}
        variants={reveal}
        className="p-6 rounded-2xl bg-macos-surface border border-macos-borderLight/30"
      >
        <h3 className="text-[11px] font-mono text-macos-subtext0 uppercase tracking-widest mb-5">All Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {ALL_TECH.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.025, duration: 0.35 }}
              viewport={{ root: scrollRef, once: true, margin: '-40px' }}
              className="text-xs px-2.5 py-1 rounded-lg font-mono text-macos-subtext0 cursor-default transition-all bg-macos-overlay/30 border border-macos-borderLight/20 hover:text-macos-text hover:border-macos-borderLight/80 hover:bg-macos-overlay/50"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
