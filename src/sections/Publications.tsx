import { motion } from 'framer-motion'
import { FileText, ExternalLink, BookOpen, ArrowUpRight } from 'lucide-react'

const PUBLICATIONS = [
  {
    title: 'Enhancing code-mixing in named entity recognition: A comprehensive survey of deep learning models',
    venue: 'IEEE ICETITE 2024',
    type: 'Conference Paper',
    year: '2024',
    color: '#89b4fa',
    abstract: 'A comprehensive survey examining deep learning approaches for Named Entity Recognition in code-mixed languages, focusing on Indian language pairs with multilingual BERT variants.',
    tags: ['NLP', 'NER', 'Code-Mixing', 'Deep Learning', 'Multilingual'],
    link: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ',
    badge: 'IEEE',
  },
  {
    title: 'On Importance of Code-Mixed Embeddings for Hate Speech Identification',
    venue: 'arXiv Preprint',
    type: 'Preprint',
    year: '2024',
    color: '#cba6f7',
    abstract: 'An investigation into the effectiveness of code-mixed language embeddings for hate speech detection in social media content, demonstrating improved performance on multilingual datasets.',
    tags: ['NLP', 'Hate Speech', 'Code-Mixed', 'Embeddings', 'Social Media'],
    link: 'https://arxiv.org/search/?searchtype=author&query=inamdar+mihir',
    badge: 'arXiv',
  },
]

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 sm:mb-10"
      >
        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Research</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mt-2">Publications</h2>
        <div className="h-1 w-16 mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, #89b4fa, #cba6f7)' }} />
      </motion.div>

      {/* Publications */}
      <div className="space-y-5">
        {PUBLICATIONS.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${pub.color}20` }}
              >
                <FileText size={16} className="sm:hidden" style={{ color: pub.color }} />
                <FileText size={18} className="hidden sm:block" style={{ color: pub.color }} />
              </div>

              <div className="flex-1 min-w-0">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-mono font-bold"
                    style={{ background: `${pub.color}25`, color: pub.color }}
                  >
                    {pub.badge}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full text-white/50 bg-white/5">
                    {pub.type}
                  </span>
                  <span className="text-xs text-white/30 font-mono">{pub.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-white/90 leading-snug mb-1">
                  {pub.title}
                </h3>

                {/* Venue */}
                <p className="text-xs sm:text-sm text-white/50 mb-2 sm:mb-3 flex items-center gap-1">
                  <BookOpen size={12} />
                  {pub.venue}
                </p>

                {/* Abstract */}
                <p className="text-xs sm:text-sm text-white/55 leading-relaxed mb-3 sm:mb-4">
                  {pub.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded font-mono"
                        style={{ background: `${pub.color}10`, color: `${pub.color}90` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-white/40 hover:text-white/80 transition-colors"
                  >
                    <ExternalLink size={11} />
                    View Paper
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scholar link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center"
      >
        <a
          href="https://scholar.google.com/citations?user=aRlnkucAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-white/70 glass border border-white/10 hover:border-white/30 transition-all hover:scale-105"
        >
          <BookOpen size={14} />
          View on Google Scholar
          <ExternalLink size={12} />
        </a>
      </motion.div>
    </div>
  )
}
