import { RefObject, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, BookOpen, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react'

const LINKS = [
  { icon: Github,   label: 'GitHub',         value: 'github.com/inamdarmihir',          href: 'https://github.com/inamdarmihir' },
  { icon: Linkedin, label: 'LinkedIn',        value: 'linkedin.com/in/inamdarmihir',     href: 'https://linkedin.com/in/inamdarmihir' },
  { icon: Mail,     label: 'Email',           value: 'mihirsinamdar@outlook.com',         href: 'mailto:mihirsinamdar@outlook.com' },
  { icon: BookOpen, label: 'Google Scholar',  value: 'scholar.google.com/…aRlnkucAAAAJ', href: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ' },
]

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

interface Props { scrollRef: RefObject<HTMLDivElement> }

export default function Contact({ scrollRef }: Props) {
  const [copied, setCopied] = useState(false)
  const vp = { root: scrollRef, once: true, margin: '-60px' } as const

  const copyEmail = () => {
    navigator.clipboard.writeText('mihirsinamdar@outlook.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-14 py-24 pb-32">
      {/* Header */}
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-16">
        <motion.span variants={reveal} className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
          07 — Contact
        </motion.span>
        <motion.h2 variants={reveal} className="font-black text-white mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Let's Talk.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Message */}
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="space-y-5">
          <motion.div
            variants={reveal}
            className="p-7 rounded-2xl"
            style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h3 className="text-lg font-bold text-white/90 mb-4">Let's Connect</h3>
            <p className="text-white/50 text-sm leading-[1.8] mb-4">
              I'm open to discussions around <span className="text-white/80">RLHF</span>,{' '}
              <span className="text-white/80">agentic AI systems</span>, and{' '}
              <span className="text-white/80">LLM infrastructure</span> — research collaborations,
              open-source projects, or just a good conversation about what's next in AI.
            </p>
            <p className="text-white/50 text-sm leading-[1.8]">
              Currently at Sutherland Global Services, Chennai. Whether you want to discuss research,
              build something together, or just say hi — my inbox is always open.
            </p>

            <div className="mt-6 flex items-center gap-2 text-white/25 text-sm">
              <MapPin size={12} />
              <span className="font-mono text-xs">Chennai, India · Open to Remote</span>
            </div>

            {/* Status */}
            <div
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
              <span className="text-white/45 text-xs font-mono">Open to collaborations</span>
            </div>
          </motion.div>

          {/* Quick email */}
          <motion.div
            variants={reveal}
            className="p-5 rounded-2xl"
            style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-[10px] text-white/25 uppercase tracking-widest font-mono mb-3">Quick Contact</p>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm text-white/60">mihirsinamdar@outlook.com</span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
                style={{
                  background: copied ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  color: copied ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
                  border: `1px solid ${copied ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                {copied ? <Check size={11} /> : <Copy size={11} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Links */}
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="space-y-3">
          {LINKS.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              variants={reveal}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl transition-all"
              style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.18)' } as never}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Icon size={16} className="text-white/45" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-white/25 uppercase tracking-widest font-mono">{label}</div>
                <div className="text-white/60 text-sm font-mono truncate group-hover:text-white/85 transition-colors mt-0.5">
                  {value}
                </div>
              </div>
              <ArrowUpRight size={14} className="text-white/15 group-hover:text-white/50 transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={vp} variants={reveal}
        className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="text-[11px] font-mono text-white/18">
          © {new Date().getFullYear()} Mihir Inamdar. Built with React + Framer Motion.
        </span>
        <span className="text-[11px] font-mono text-white/18">Chennai, India</span>
      </motion.div>
    </div>
  )
}
