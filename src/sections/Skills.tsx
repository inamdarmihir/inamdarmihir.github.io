import { RefObject } from 'react'
import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'ML & Deep Learning',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 88 },
      { name: 'Hugging Face', level: 92 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'OpenCV', level: 82 },
    ],
  },
  {
    category: 'NLP & LLMs',
    skills: [
      { name: 'BERT / mBERT', level: 93 },
      { name: 'Transformers', level: 91 },
      { name: 'LangChain', level: 90 },
      { name: 'LangGraph', level: 85 },
      { name: 'RAG Systems', level: 88 },
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 97 },
      { name: 'SQL', level: 82 },
      { name: 'Java', level: 72 },
      { name: 'Bash / Shell', level: 80 },
      { name: 'TypeScript', level: 65 },
    ],
  },
  {
    category: 'Infrastructure & MLOps',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 78 },
      { name: 'Kubernetes', level: 72 },
      { name: 'MLflow / WandB', level: 83 },
      { name: 'CI/CD', level: 75 },
    ],
  },
  {
    category: 'Data & Databases',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'Elasticsearch', level: 75 },
      { name: 'Redis', level: 80 },
      { name: 'Qdrant / AstraDB', level: 78 },
    ],
  },
  {
    category: 'Research Methods',
    skills: [
      { name: 'Experimental Design', level: 90 },
      { name: 'Ablation Studies', level: 88 },
      { name: 'Statistical Analysis', level: 85 },
      { name: 'Literature Review', level: 92 },
      { name: 'Fine-Tuning LLMs', level: 90 },
    ],
  },
]

const ALL_TECH = [
  'Python', 'PyTorch', 'TensorFlow', 'HuggingFace', 'LangChain', 'LangGraph', 'BERT',
  'Transformers', 'OpenCV', 'RAG', 'Docker', 'Kubernetes', 'AWS', 'MLflow', 'WandB',
  'FastAPI', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Qdrant',
  'PySpark', 'NumPy', 'Pandas', 'Matplotlib', 'Streamlit', 'Git', 'Linux',
]

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

function SkillBar({ name, level, scrollRef, delay }: { name: string; level: number; scrollRef: RefObject<HTMLDivElement>; delay: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-white/55 font-mono">{name}</span>
        <span className="text-xs text-white/20 font-mono">{level}%</span>
      </div>
      <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.75))` }}
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
        <motion.span variants={reveal} className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
          05 — Expertise
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-white mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
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
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: (gi % 2) * 0.06 } } }}
            className="p-5 rounded-2xl"
            style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-0.5 h-4 rounded-full bg-white/25" />
              <h3 className="text-[11px] font-mono text-white/45 uppercase tracking-widest">{group.category}</h3>
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
        className="p-6 rounded-2xl"
        style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <h3 className="text-[11px] font-mono text-white/25 uppercase tracking-widest mb-5">All Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {ALL_TECH.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.025, duration: 0.35 }}
              viewport={{ root: scrollRef, once: true, margin: '-40px' }}
              className="text-xs px-2.5 py-1 rounded-lg font-mono text-white/40 cursor-default transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.07)' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
