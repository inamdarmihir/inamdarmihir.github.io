import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'ML & Deep Learning',
    color: '#89b4fa',
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
    color: '#cba6f7',
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
    color: '#a6e3a1',
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
    color: '#f9e2af',
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
    color: '#94e2d5',
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
    color: '#f38ba8',
    skills: [
      { name: 'Experimental Design', level: 90 },
      { name: 'Ablation Studies', level: 88 },
      { name: 'Statistical Analysis', level: 85 },
      { name: 'Literature Review', level: 92 },
      { name: 'Fine-Tuning LLMs', level: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Expertise</span>
        <h2 className="text-4xl font-bold text-white/90 mt-2">Skills & Stack</h2>
        <div className="h-1 w-16 mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, #89b4fa, #cba6f7)' }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.1 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-4 rounded-sm" style={{ background: group.color }} />
              <h3 className="text-sm font-semibold text-white/80">{group.category}</h3>
            </div>

            <div className="space-y-3">
              {group.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/70 font-mono">{skill.name}</span>
                    <span className="text-xs text-white/30 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: gi * 0.1 + si * 0.05, duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${group.color}80, ${group.color})` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech badges cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 glass rounded-2xl p-6"
      >
        <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">All Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Python', 'PyTorch', 'TensorFlow', 'HuggingFace', 'LangChain', 'LangGraph', 'BERT',
            'Transformers', 'OpenCV', 'RAG', 'Docker', 'Kubernetes', 'AWS', 'MLflow', 'WandB',
            'FastAPI', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Qdrant',
            'PySpark', 'NumPy', 'Pandas', 'Matplotlib', 'Streamlit', 'Git', 'Linux',
          ].map((tech) => (
            <span
              key={tech}
              className="skill-badge text-xs px-2.5 py-1 rounded-lg font-mono text-white/60 bg-white/5 border border-white/10 hover:text-white/90 hover:bg-white/10 cursor-default transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
