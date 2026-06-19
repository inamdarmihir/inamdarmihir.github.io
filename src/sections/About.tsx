import { RefObject } from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Award } from 'lucide-react'

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

interface Props { scrollRef: RefObject<HTMLDivElement> }

export default function About({ scrollRef }: Props) {
  const vp = { root: scrollRef, once: true, margin: '-80px' } as const

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24">
      {/* Header */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={vp}
        variants={stagger}
        className="mb-16"
      >
        <motion.span variants={reveal} className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
          02 — About
        </motion.span>
        <motion.div variants={reveal} className="flex items-end gap-4 mt-3">
          <h2 className="font-black text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Who I Am.
          </h2>
        </motion.div>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      {/* Story paragraphs */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={vp}
        variants={stagger}
        className="grid md:grid-cols-5 gap-10 mb-16"
      >
        <div className="md:col-span-3 space-y-5">
          <motion.p variants={reveal} className="text-white/55 leading-[1.85] text-[15px]">
            My journey into AI started with a simple question:{' '}
            <span className="text-white/85 font-medium">how do machines understand human language?</span> That curiosity
            led me deep into the world of NLP and machine learning, culminating in a research fellowship at{' '}
            <span className="text-white/85 font-medium">CVIT, IIIT Hyderabad</span> — one of India's premier
            computer vision labs.
          </motion.p>
          <motion.p variants={reveal} className="text-white/55 leading-[1.85] text-[15px]">
            There, I worked on processing over{' '}
            <span className="text-white/85 font-medium">50,000 scanned documents</span>, reducing OCR errors by 20%,
            and contributed to a patent-pending document layout analysis method. My research on code-mixed NER
            for Indian languages was published at{' '}
            <span className="text-white/85 font-medium">IEEE ICETITE 2024</span>.
          </motion.p>
          <motion.p variants={reveal} className="text-white/55 leading-[1.85] text-[15px]">
            Today, as an ML Engineer at <span className="text-white/85 font-medium">Quoppo Ventures</span>, I lead
            a team building real-time AI systems — from LSTM-based location intelligence to face fusion for XR,
            pushing the boundaries of what's possible at the edge of AI and product.
          </motion.p>
          <motion.p variants={reveal} className="text-white/55 leading-[1.85] text-[15px]">
            When I'm not training models, I'm contributing to open-source, writing about AI, or exploring the
            frontiers of generative models and multi-agent systems.
          </motion.p>
        </div>

        {/* Photo + facts */}
        <div className="md:col-span-2 space-y-4">
          <motion.div variants={reveal}>
            <div
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img
                src="/avatar.jpg"
                alt="Mihir Inamdar"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(20%)' }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            className="space-y-3"
          >
            {[
              { icon: MapPin, label: 'Location', value: 'Pune, India' },
              { icon: Briefcase, label: 'Current Role', value: 'ML Engineer @ Quoppo Ventures' },
              { icon: GraduationCap, label: 'Education', value: 'B.E. IT — PICT, Pune (2020–2024)' },
              { icon: Award, label: 'Research', value: 'CVIT, IIIT Hyderabad (2024)' },
            ].map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={reveal}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon size={13} className="text-white/50" />
                </div>
                <div>
                  <div className="text-[10px] text-white/25 uppercase tracking-wider font-mono">{label}</div>
                  <div className="text-white/75 text-sm mt-0.5">{value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Certifications + Research highlights */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={vp}
        variants={stagger}
        className="grid md:grid-cols-2 gap-5"
      >
        <motion.div
          variants={reveal}
          className="p-6 rounded-2xl"
          style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h3 className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-5">Certifications</h3>
          <div className="space-y-4">
            {[
              { title: 'Deep Learning Specialization', org: 'Coursera / DeepLearning.AI' },
              { title: 'Machine Learning Operations (MLOps)', org: 'Coursera' },
              { title: 'NLP with Transformers', org: 'Hugging Face' },
            ].map(({ title, org }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                <div>
                  <div className="text-white/75 text-sm font-medium">{title}</div>
                  <div className="text-white/30 text-xs mt-0.5 font-mono">{org}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={reveal}
          className="p-6 rounded-2xl"
          style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h3 className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-5">Research Highlights</h3>
          <div className="space-y-4">
            {[
              '87% F1-score on multilingual NER for code-switched Indian languages',
              '99.8% F1-score on BERT-based ticket categorization',
              '50,000+ scanned documents processed at IIIT Hyderabad',
              'Patent-pending document layout analysis method',
            ].map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <span className="text-white/40 mt-0.5 flex-shrink-0 text-xs">✓</span>
                <span className="text-white/60 text-sm leading-snug">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
