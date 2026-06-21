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
            led me deep into NLP, machine learning, and ultimately a research fellowship at{' '}
            <span className="text-white/85 font-medium">CVIT, IIIT Hyderabad</span> — one of India's premier
            computer vision labs — where I co-invented a patent-pending document layout analysis system.
          </motion.p>
          <motion.p variants={reveal} className="text-white/55 leading-[1.85] text-[15px]">
            At <span className="text-white/85 font-medium">Quoppo Ventures</span>, I designed hybrid LSTM-MeshNet
            architectures for 3D positioning and rebuilt GAN training pipelines, achieving a{' '}
            <span className="text-white/85 font-medium">30% accuracy improvement</span> over SOTA while establishing
            a reproducible MLOps foundation across a 3-engineer team.
          </motion.p>
          <motion.p variants={reveal} className="text-white/55 leading-[1.85] text-[15px]">
            Currently at <span className="text-white/85 font-medium">Sutherland Global Services</span>, I architect
            end-to-end <span className="text-white/85 font-medium">RLHF pipelines</span> for Text-to-SQL and
            multi-stage agentic inference systems with quantized LLM serving — cutting latency 60% at F1 &gt; 0.95
            and serving 10K+ daily transactions on AWS.
          </motion.p>
          <motion.p variants={reveal} className="text-white/55 leading-[1.85] text-[15px]">
            Beyond work, I'm a <span className="text-white/85 font-medium">Qdrant Star</span> open-source developer
            advocate, have published at IEEE and Springer, and continuously push the frontiers of agentic AI and
            retrieval systems.
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
              { icon: MapPin, label: 'Location', value: 'Chennai, India' },
              { icon: Briefcase, label: 'Current Role', value: 'Data Scientist @ Sutherland Global Services' },
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
              { title: 'Neo4j Certified Professional', org: '2025' },
              { title: 'Evaluating & Debugging GenAI', org: 'Weights & Biases · 2024' },
              { title: 'LLMOps', org: 'CircleCI · 2024' },
              { title: 'Kubernetes & Docker', org: '2023' },
              { title: 'Azure AI Fundamentals', org: 'Microsoft · 2022' },
              { title: 'NVIDIA DLI C-FX-01', org: 'NVIDIA · 2021' },
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
              'Patent-pending document layout analysis system — Vision Transformers + geometric constraints',
              '15% CER reduction via transformer post-OCR correction pipeline at CVIT, IIIT Hyderabad',
              '60% latency reduction with quantized LLM serving (4-bit/8-bit) at F1 > 0.95',
              '30% accuracy improvement over SOTA with hybrid LSTM-MeshNet architecture',
              'Qdrant Star — Open Source Developer Advocate, Vector DB & RAG Systems',
              '90.8% accuracy at IndoML 2022, IIT Gandhinagar',
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
