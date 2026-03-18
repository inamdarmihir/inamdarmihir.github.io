import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const PROJECTS = [
  {
    name: 'ResearchGeniusAI',
    description: 'AI-powered research assistant using OpenAI Agents API and Firecrawl for automated web scraping and synthesis. Features a Streamlit UI for interactive research sessions.',
    tech: ['OpenAI Agents', 'Firecrawl', 'Streamlit', 'Python', 'LangChain'],
    color: '#89b4fa',
    github: 'https://github.com/inamdarmihir/ResearchGeniusAI',
    stars: '⭐ Featured',
    category: 'AI Agent',
  },
  {
    name: 'Math-Prof-AI',
    description: 'RAG-based mathematics tutoring system achieving 100% accuracy on trigonometry problems. Uses retrieval-augmented generation for step-by-step problem solving.',
    tech: ['RAG', 'LangChain', 'FAISS', 'OpenAI', 'Python'],
    color: '#cba6f7',
    github: 'https://github.com/inamdarmihir/Math-Prof-AI',
    stars: '⭐ Featured',
    category: 'Education AI',
  },
  {
    name: 'Florence-2-DocVQA',
    description: 'Multimodal document visual question answering system fine-tuned on Florence-2. Handles complex document layouts and extracts structured information.',
    tech: ['Florence-2', 'PyTorch', 'Transformers', 'Computer Vision', 'HuggingFace'],
    color: '#f9e2af',
    github: 'https://github.com/inamdarmihir/Florence-2-DocVQA',
    stars: '🔬 Research',
    category: 'Multimodal',
  },
  {
    name: 'CustomLanggraphResearchAgent',
    description: 'Automated research agent built with LangGraph and vector databases. Supports multi-step reasoning, tool use, and persistent memory across research sessions.',
    tech: ['LangGraph', 'Qdrant', 'OpenAI', 'Python', 'Redis'],
    color: '#94e2d5',
    github: 'https://github.com/inamdarmihir/CustomLanggraphResearchAgent',
    stars: '🤖 Agent',
    category: 'AI Agent',
  },
  {
    name: 'Multilingual NER System',
    description: 'Code-switched Named Entity Recognition for Indian languages achieving 87% F1-score. Handles Hinglish, Tanglish, and other code-mixed language pairs.',
    tech: ['BERT', 'mBERT', 'Python', 'HuggingFace', 'NLP'],
    color: '#f38ba8',
    github: 'https://github.com/inamdarmihir',
    stars: '📄 Published',
    category: 'NLP Research',
  },
  {
    name: 'Wav2Lip Implementation',
    description: 'Audio-video lip synchronization implementation using Wav2Lip architecture. Supports real-time lip sync generation for video content.',
    tech: ['PyTorch', 'OpenCV', 'FFMPEG', 'Deep Learning', 'GAN'],
    color: '#a6e3a1',
    github: 'https://github.com/inamdarmihir',
    stars: '🎬 CV',
    category: 'Computer Vision',
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Portfolio</span>
        <h2 className="text-4xl font-bold text-white/90 mt-2">Featured Projects</h2>
        <div className="h-1 w-16 mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, #89b4fa, #cba6f7)' }} />
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="project-card glass rounded-2xl p-5 flex flex-col"
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-mono mb-2 inline-block"
                  style={{ background: `${project.color}20`, color: project.color }}
                >
                  {project.category}
                </span>
                <h3 className="text-base font-bold text-white/90">{project.name}</h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg glass text-white/40 hover:text-white/80 transition-colors"
                >
                  <Github size={14} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg glass text-white/40 hover:text-white/80 transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/55 text-xs leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-1.5 py-0.5 rounded font-mono"
                    style={{ background: `${project.color}12`, color: `${project.color}99` }}
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono text-white/30 bg-white/5">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-white/30 flex items-center gap-1">
                <Star size={9} />
                {project.stars.split(' ').slice(1).join(' ')}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/inamdarmihir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white/70 glass border border-white/10 hover:border-white/30 transition-all hover:scale-105"
        >
          <Github size={14} />
          View all projects on GitHub
          <ExternalLink size={12} />
        </a>
      </motion.div>
    </div>
  )
}
