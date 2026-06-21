import { useState, useEffect, RefObject } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, BookOpen, ArrowDown, FileText } from 'lucide-react'

const ROLES = ['ML Engineer', 'Data Scientist', 'LLM Engineer', 'AI Researcher']

function AnimatedRole({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [roles.length])
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-white"
      >
        {roles[i]}
      </motion.span>
    </AnimatePresence>
  )
}

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

interface HeroProps {
  onNavigate: (id: string) => void
  scrollRef: RefObject<HTMLDivElement>
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden px-8 md:px-14 py-24">
      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #fff, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Section tag */}
        <motion.div {...f(0)} className="flex items-center gap-3 mb-14">
          <span className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">01 — Introduction</span>
          <div className="h-px w-12 bg-white/10" />
        </motion.div>

        {/* Avatar + online badge */}
        <motion.div {...f(0.1)} className="flex items-center gap-4 mb-10">
          <div
            className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <img src="/avatar.jpg" alt="Mihir Inamdar" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              <span className="text-[11px] font-mono text-white/35">Data Scientist · Sutherland Global Services</span>
            </div>
            <span className="text-[11px] font-mono text-white/20">Chennai, India · Open to Remote</span>
          </div>
        </motion.div>

        {/* Name */}
        <div className="mb-6">
          <motion.h1
            {...f(0.18)}
            className="font-black leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: '#fff' }}
          >
            Mihir
          </motion.h1>
          <motion.h1
            {...f(0.24)}
            className="font-black leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: 'rgba(255,255,255,0.18)' }}
          >
            Inamdar.
          </motion.h1>
        </div>

        {/* Role ticker */}
        <motion.div {...f(0.32)} className="text-xl text-white/35 mb-6 h-8 font-medium">
          <AnimatedRole roles={ROLES} />
        </motion.div>

        {/* Tagline */}
        <motion.p {...f(0.4)} className="text-base text-white/45 max-w-xl mb-12 leading-[1.75]">
          Building intelligent systems at the intersection of{' '}
          <span className="text-white/80 font-medium">RLHF</span>,{' '}
          <span className="text-white/80 font-medium">Agentic AI</span> &{' '}
          <span className="text-white/80 font-medium">LLMs</span>. Currently Data Scientist at Sutherland Global Services,
          former Research Fellow at CVIT, IIIT Hyderabad.
        </motion.p>

        {/* Stats */}
        <motion.div {...f(0.48)} className="flex gap-10 mb-12">
          {[
            { value: '2+', label: 'Years of Experience' },
            { value: '3+', label: 'Projects Shipped' },
            { value: '2', label: 'Publications' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl font-black text-white leading-none">{value}</div>
              <div className="text-[11px] text-white/25 uppercase tracking-widest mt-2 font-mono">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...f(0.56)} className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => onNavigate('projects')}
            className="px-6 py-3 text-sm font-semibold rounded-xl text-black transition-all hover:scale-[1.03] active:scale-95"
            style={{ background: '#fff' }}
          >
            View Projects
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-sm font-medium rounded-xl text-white/70 transition-all hover:text-white"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          >
            Get in Touch
          </button>
          <a
            href="/Inamdar_Mihir_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl text-white/70 transition-all hover:text-white"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          >
            <FileText size={14} />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...f(0.64)} className="flex gap-3">
          {[
            { icon: Github, href: 'https://github.com/inamdarmihir', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/inamdarmihir', label: 'LinkedIn' },
            { icon: BookOpen, href: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ', label: 'Scholar' },
            { icon: Mail, href: 'mailto:mihirsinamdar@outlook.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              title={label}
              className="p-2.5 rounded-xl text-white/30 transition-all hover:text-white hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={() => onNavigate('about')}
        className="absolute bottom-8 left-8 md:left-14 flex items-center gap-2.5 text-white/20 hover:text-white/40 transition-colors"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={13} />
        </motion.div>
        <span className="text-[11px] font-mono tracking-wider">Scroll to explore</span>
      </motion.button>
    </div>
  )
}
