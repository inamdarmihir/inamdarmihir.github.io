import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Award } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <motion.div initial="hidden" animate="visible">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} className="mb-8 sm:mb-10">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mt-2">Who I Am</h2>
          <div className="h-1 w-16 mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, #89b4fa, #cba6f7)' }} />
        </motion.div>

        {/* Photo */}
        <motion.div custom={1} variants={fadeUp} className="flex justify-center mb-8">
          <div
            className="w-24 h-24 rounded-2xl overflow-hidden"
            style={{
              padding: '2px',
              background: 'linear-gradient(135deg, #89b4fa, #cba6f7)',
              boxShadow: '0 8px 32px rgba(137,180,250,0.25)',
            }}
          >
            <img
              src="/avatar.jpg"
              alt="Mihir Inamdar"
              className="w-full h-full rounded-[10px] object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {/* Bio */}
          <motion.div custom={2} variants={fadeUp} className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <p className="text-white/70 leading-relaxed text-sm">
                I'm an ML Engineer and AI Researcher specializing in <span className="text-blue-400">Natural Language Processing</span> and{' '}
                <span className="text-purple-400">Computer Vision</span>, with a focus on multilingual contexts and document understanding.
              </p>
              <p className="text-white/70 leading-relaxed text-sm mt-4">
                My research explores <span className="text-teal-400">multimodal learning</span>, transfer learning for low-resource scenarios,
                and <span className="text-pink-400">LLM optimization</span> — with published work in IEEE and arXiv.
              </p>
              <p className="text-white/70 leading-relaxed text-sm mt-4">
                When I'm not building models, I'm contributing to open-source, writing about AI, or exploring new frontiers in generative AI.
              </p>
            </div>

            {/* Quick facts */}
            <div className="glass rounded-2xl p-5 space-y-3">
              {[
                { icon: MapPin, label: 'Location', value: 'Pune, India' },
                { icon: Briefcase, label: 'Current Role', value: 'ML Engineer @ Quoppo Ventures' },
                { icon: GraduationCap, label: 'Education', value: 'B.E. IT — PICT, Pune (2020–2024)' },
                { icon: Award, label: 'Research', value: 'CVIT, IIIT Hyderabad (2024)' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{label}</div>
                    <div className="text-white/80 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Highlights */}
          <motion.div custom={3} variants={fadeUp} className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Certifications</h3>
              <div className="space-y-3">
                {[
                  { title: 'Deep Learning Specialization', org: 'Coursera / DeepLearning.AI', color: '#89b4fa' },
                  { title: 'Machine Learning Operations (MLOps)', org: 'Coursera', color: '#cba6f7' },
                  { title: 'NLP with Transformers', org: 'Hugging Face', color: '#f9e2af' },
                ].map(({ title, org, color }) => (
                  <div key={title} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: `${color}08` }}>
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                    <div>
                      <div className="text-white/80 text-sm font-medium">{title}</div>
                      <div className="text-white/40 text-xs mt-0.5">{org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Research Highlights</h3>
              <div className="space-y-3">
                {[
                  '87% F1-score on multilingual NER for code-switched Indian languages',
                  '99.8% F1-score on BERT-based ticket categorization system',
                  '50,000+ scanned documents processed at IIIT Hyderabad',
                  'Patent-pending document layout analysis method',
                ].map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/60 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
