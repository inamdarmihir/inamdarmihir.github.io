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
  hidden: { opacity: 0, y: 32, rotateX: 10, transformPerspective: 1200 },
  visible: { opacity: 1, y: 0, rotateX: 0, transformPerspective: 1200, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
        <motion.h2 variants={reveal} className="font-black text-macos-text mt-3 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Let's Talk.
        </motion.h2>
        <motion.div variants={reveal} className="section-line mt-5 max-w-xs" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Message */}
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="space-y-5 max-w-prose">
          <motion.div
            variants={reveal}
            className="p-7 rounded-2xl bg-macos-surface border border-macos-borderLight/30"
          >
            <h3 className="text-lg font-bold text-macos-text mb-4">Let's Connect</h3>
            <p className="text-macos-subtext text-pretty text-sm leading-[1.8] mb-4">
              I'm open to discussions around <span className="text-macos-text">RLHF</span>,{' '}
              <span className="text-macos-text">agentic AI systems</span>, and{' '}
              <span className="text-macos-text">LLM infrastructure</span> — research collaborations,
              open-source projects, or just a good conversation about what's next in AI.
            </p>
            <p className="text-macos-subtext text-pretty text-sm leading-[1.8]">
              Currently at Sutherland Global Services, Chennai. Whether you want to discuss research,
              build something together, or just say hi — my inbox is always open.
            </p>

            <div className="mt-6 flex items-center gap-2 text-macos-subtext0 text-sm">
              <MapPin size={12} />
              <span className="font-mono text-xs">Chennai, India · Open to Remote</span>
            </div>

            {/* Status */}
            <div
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-macos-overlay/30 border border-macos-borderLight/30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-macos-green animate-pulse" />
              <span className="text-macos-subtext text-xs font-mono">Open to collaborations</span>
            </div>
          </motion.div>

          {/* Quick email */}
          <motion.div
            variants={reveal}
            className="p-5 rounded-2xl bg-macos-surface border border-macos-borderLight/30"
          >
            <p className="text-[10px] text-macos-subtext0 uppercase tracking-widest font-mono mb-3">Quick Contact</p>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm text-macos-subtext">mihirsinamdar@outlook.com</span>
              <button
                onClick={copyEmail}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  copied
                    ? 'bg-macos-overlay text-macos-text border border-macos-borderLight/60'
                    : 'bg-macos-overlay/50 text-macos-subtext border border-macos-borderLight/30'
                }`}
              >
                {copied ? <Check size={11} className="text-macos-green" /> : <Copy size={11} />}
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
              className="group flex items-center gap-4 p-4 rounded-xl transition-all bg-macos-surface border border-macos-borderLight/30 hover:border-macos-borderLight/80 hover:-translate-y-1"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 bg-macos-overlay/50 border border-macos-borderLight/30"
              >
                <Icon size={16} className="text-macos-subtext" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-macos-subtext0 uppercase tracking-widest font-mono">{label}</div>
                <div className="text-macos-subtext text-sm font-mono truncate group-hover:text-macos-text transition-colors mt-0.5">
                  {value}
                </div>
              </div>
              <ArrowUpRight size={14} className="text-macos-subtext0 group-hover:text-macos-text transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={vp} variants={reveal}
        className="mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-macos-borderLight/20"
      >
        <span className="text-[11px] font-mono text-macos-subtext0">
          © {new Date().getFullYear()} Mihir Inamdar. Built with React + Framer Motion.
        </span>
        <span className="text-[11px] font-mono text-macos-subtext0">Chennai, India</span>
      </motion.div>
    </div>
  )
}
