import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const JOBS = [
  {
    title: 'ML Engineer',
    company: 'Quoppo Ventures',
    location: 'Pune, India',
    period: 'Oct 2024 — Present',
    type: 'Full-time',
    color: '#89b4fa',
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
    color: '#cba6f7',
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
    color: '#a6e3a1',
    highlights: [
      'Built BERT-based ticket categorization system — 99.8% F1-score',
      'Redis caching optimization — 60% API response improvement',
      'Stock recommendation engine with sentiment analysis',
      'Designed scalable NLP microservices architecture',
    ],
    stack: ['BERT', 'Redis', 'Django', 'PostgreSQL', 'NLP', 'Sentiment Analysis'],
  },
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Career</span>
        <h2 className="text-4xl font-bold text-white/90 mt-2">Work Experience</h2>
        <div className="h-1 w-16 mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, #89b4fa, #cba6f7)' }} />
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

        {JOBS.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <div
              className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#0f0f14] -translate-x-1/2"
              style={{ background: job.color, boxShadow: `0 0 12px ${job.color}80` }}
            />

            <div className="glass rounded-2xl p-6 group hover:border-white/20 transition-all">
              {/* Job header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-mono"
                      style={{ background: `${job.color}20`, color: job.color }}
                    >
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white/90">{job.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase size={12} className="text-white/40" />
                    <span className="text-white/70 text-sm font-medium">{job.company}</span>
                    <span className="text-white/20">·</span>
                    <MapPin size={12} className="text-white/40" />
                    <span className="text-white/50 text-sm">{job.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Calendar size={11} />
                  <span className="font-mono">{job.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {job.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                    <ChevronRight size={14} className="text-blue-400/60 mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-md font-mono"
                    style={{ background: `${job.color}12`, color: `${job.color}cc` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
