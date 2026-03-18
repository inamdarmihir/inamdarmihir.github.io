import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, BookOpen, ArrowRight, Terminal } from 'lucide-react'

const ROLES = ['ML Engineer', 'AI Researcher', 'NLP Specialist', 'LLM Engineer']

function AnimatedRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % roles.length), 2500)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="text-blue-400 font-semibold"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  )
}

interface HeroProps {
  onNavigate: (tab: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(137,180,250,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #89b4fa, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #cba6f7, transparent)' }} />

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="mx-auto mb-6 w-32 h-32 rounded-full relative"
          style={{
            padding: '3px',
            background: 'linear-gradient(135deg, #89b4fa 0%, #cba6f7 50%, #f38ba8 100%)',
            boxShadow: '0 0 60px rgba(137,180,250,0.4)',
          }}
        >
          <img
            src="/avatar.jpg"
            alt="Mihir Inamdar"
            className="w-full h-full rounded-full object-cover object-top"
            style={{ border: '2px solid #0f0f14' }}
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#a6e3a1] rounded-full border-2 border-[#0f0f14] flex items-center justify-center shadow-lg">
            <span className="text-[8px] font-bold text-green-900">●</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-3"
        >
          <span className="gradient-text">Mihir Inamdar</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-white/60 mb-6 h-8"
        >
          <AnimatedRoles roles={ROLES} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/50 text-sm max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Building intelligent systems at the intersection of NLP, Computer Vision &amp; LLMs.
          Currently an ML Engineer at <span className="text-blue-400">Quoppo Ventures</span> &amp; Former Research Fellow at{' '}
          <span className="text-purple-400">CVIT, IIIT Hyderabad</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <button
            onClick={() => onNavigate('Projects')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #89b4fa, #cba6f7)' }}
          >
            View Projects <ArrowRight size={14} />
          </button>
          <button
            onClick={() => onNavigate('Contact')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/80 border border-white/20 hover:border-white/40 transition-all hover:scale-105 glass"
          >
            Get in Touch <Mail size={14} />
          </button>
          <button
            onClick={() => onNavigate('Experience')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/80 border border-white/20 hover:border-white/40 transition-all hover:scale-105 glass"
          >
            <Terminal size={14} /> Resume
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: 'https://github.com/inamdarmihir', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/inamdarmihir', label: 'LinkedIn' },
            { icon: BookOpen, href: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ', label: 'Scholar' },
            { icon: Mail, href: 'mailto:mihirsinamdar@outlook.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass text-white/50 hover:text-white/90 transition-all hover:scale-110"
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '6+', label: 'Projects Built' },
            { value: '2', label: 'Publications' },
          ].map(({ value, label }) => (
            <div key={label} className="glass rounded-xl p-3 text-center">
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-white/40 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
