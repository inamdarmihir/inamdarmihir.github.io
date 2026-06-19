import { RefObject } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const JOBS = [
  {
    title: 'ML Engineer',
    company: 'Quoppo Ventures',
    location: 'Pune, India',
    period: 'Oct 2024 — Present',
    type: 'Full-time',
    highlights: [
      'Built real-time location system using LSTM/MesNet — 30% accuracy improvement',
      'Developed face fusion for XR applications via GAN/autoencoder fine-tuning — 40% time reduction',
      'Led AI automation for venture funding research platform',
      'Managed 3-engineer team implementing MLOps practices',
    ],
    stack: ['LSTM', 'GANs', 'PyTorch', 'MLOps', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Graduate ML Research Fellow',
    company: 'CVIT, IIIT Hyderabad',
    location: 'Hyderabad, India',
    period: 'Mar 2024 — Aug 2024',
    type: 'Research Fellowship',
    highlights: [
      'Processed 50,000+ scanned documents; reduced OCR errors by 20%',
      'Post-OCR error correction via transformer models — 15% accuracy gain',
      'Contributed to patent-pending document layout analysis method',
      'Published research on code-mixed NER at IEEE ICETITE 2024',
    ],
    stack: ['Transformers', 'OCR', 'Document AI', 'Python', 'BERT', 'TensorFlow'],
  },
  {
    title: 'NLP & Backend Intern',
    company: 'Textify AI',
    location: 'Indore, India',
    period: 'Oct 2023 — Feb 2024',
    type: 'Internship',
    highlights: [
      'Built BERT-based ticket categorization system — 99.8% F1-score',
      'Redis caching optimization — 60% API response improvement',
      'Stock recommendation engine with sentiment analysis',
      'Designed scalable NLP microservices architecture',
    ],
    stack: ['BERT', 'Redis', 'Django', 'PostgreSQL', 'NLP', 'Sentiment Analysis'],
  },
]

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

export default function Experience({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
        <motion.span variants={reveal} className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
          03 — Experience
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-white mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Where I've Been.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-4 bottom-4 w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.02))' }}
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
                className="absolute left-0 top-7 w-[15px] h-[15px] rounded-full flex items-center justify-center"
                style={{ background: '#000', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                <div className="w-[5px] h-[5px] rounded-full bg-white/70" />
              </motion.div>

              {/* Card */}
              <motion.div
                variants={slideLeft}
                className="rounded-2xl p-6"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                whileHover={{ borderColor: 'rgba(255,255,255,0.16)' }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <span
                      className="text-[10px] px-2.5 py-1 rounded-full font-mono mb-2.5 inline-block text-white/50"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {job.type}
                    </span>
                    <h3 className="text-lg font-bold text-white/90">{job.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Briefcase size={11} className="text-white/30" />
                      <span className="text-white/60 text-sm font-medium">{job.company}</span>
                      <span className="text-white/15">·</span>
                      <MapPin size={11} className="text-white/30" />
                      <span className="text-white/40 text-sm">{job.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/25 text-xs font-mono">
                    <Calendar size={10} />
                    {job.period}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-white/50">
                      <ChevronRight size={13} className="text-white/25 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded font-mono text-white/35"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
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
