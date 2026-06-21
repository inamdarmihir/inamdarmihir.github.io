import { RefObject } from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink, BookOpen, ArrowUpRight } from 'lucide-react'

const PUBLICATIONS = [
  {
    num: '01',
    title: 'Enhancing Code-Mixing in Named Entity Recognition: A Comprehensive Survey of Deep Learning Models',
    venue: 'IEEE ICETITE 2024',
    type: 'Conference Paper',
    year: '2024',
    abstract: 'A comprehensive survey examining deep learning approaches for Named Entity Recognition in code-mixed languages, focusing on Indian language pairs with multilingual BERT variants.',
    tags: ['NLP', 'NER', 'Code-Mixing', 'Deep Learning', 'Multilingual'],
    link: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ',
    badge: 'IEEE',
  },
  {
    num: '02',
    title: 'Research Paper',
    venue: 'Springer ICCCN 2024',
    type: 'Conference Paper',
    year: '2024',
    abstract: 'Published at the International Conference on Computer Communication and Networks (ICCCN 2024), Springer proceedings. Research in the domain of machine learning and intelligent systems.',
    tags: ['Machine Learning', 'NLP', 'Deep Learning', 'Research'],
    link: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ',
    badge: 'Springer',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

export default function Publications({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
        <motion.span variants={reveal} className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
          06 — Research
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-white mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Publications.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      {/* Publications */}
      <div className="space-y-5">
        {PUBLICATIONS.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ ...vp, margin: '-40px' }}
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1 } } }}
            className="group rounded-2xl p-6"
            style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.25s' }}
            whileHover={{ borderColor: 'rgba(255,255,255,0.16)' } as never}
          >
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <FileText size={16} className="text-white/40" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Meta badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono text-white/20 mr-1">{pub.num}</span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold text-white/60"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {pub.badge}
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full text-white/35"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    {pub.type}
                  </span>
                  <span className="text-[10px] text-white/20 font-mono">{pub.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-semibold text-white/85 leading-snug mb-2">{pub.title}</h3>

                {/* Venue */}
                <p className="text-sm text-white/35 mb-4 flex items-center gap-1.5 font-mono">
                  <BookOpen size={11} />
                  {pub.venue}
                </p>

                {/* Abstract */}
                <p className="text-sm text-white/45 leading-relaxed mb-5">{pub.abstract}</p>

                {/* Tags + link */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded font-mono text-white/30"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-white/30 hover:text-white/70 transition-colors"
                  >
                    <ExternalLink size={10} />
                    View Paper
                    <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scholar link */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={vp} variants={reveal}
        className="mt-10 text-center"
      >
        <a
          href="https://scholar.google.com/citations?user=aRlnkucAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-white/45 hover:text-white/80 transition-all hover:scale-[1.03]"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <BookOpen size={14} />
          View on Google Scholar
          <ExternalLink size={11} />
        </a>
      </motion.div>
    </div>
  )
}
