import { useState, useEffect, useRef, RefObject } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
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
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
        transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-white"
      >
        {roles[i]}
      </motion.span>
    </AnimatePresence>
  )
}

// 3D entrance animation helper
const e3d = (delay = 0) => ({
  initial: { opacity: 0, y: 36, rotateX: 22, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0,  rotateX: 0,  filter: 'blur(0px)' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const PARTICLES = [
  { x: 12, y: 22, s: 2,   d: 7.5, dl: 0   },
  { x: 85, y: 15, s: 1.5, d: 9,   dl: 1.2 },
  { x: 72, y: 62, s: 2,   d: 6.5, dl: 2.1 },
  { x: 38, y: 78, s: 1.5, d: 8.5, dl: 0.8 },
  { x: 92, y: 48, s: 1,   d: 5.5, dl: 3.2 },
  { x: 22, y: 58, s: 2.5, d: 10,  dl: 1.7 },
  { x: 60, y: 18, s: 1.5, d: 7,   dl: 4   },
  { x: 8,  y: 75, s: 2,   d: 8,   dl: 2.5 },
  { x: 50, y: 90, s: 1.5, d: 6,   dl: 1   },
  { x: 78, y: 85, s: 2.5, d: 9,   dl: 3.5 },
]

interface HeroProps {
  onNavigate: (id: string) => void
  scrollRef: RefObject<HTMLDivElement>
}

export default function Hero({ onNavigate, scrollRef }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    container: scrollRef,
    offset: ['start start', 'end start'],
  })

  // Scroll-linked transforms for the content
  const heroY       = useTransform(scrollYProgress, [0, 1],    [0, -80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8],  [1, 0])
  const heroScale   = useTransform(scrollYProgress, [0, 1],    [1, 0.93])
  const heroRotateX = useTransform(scrollYProgress, [0, 0.7],  [0, 9])
  const heroBlur    = useTransform(scrollYProgress, [0.3, 0.85],[0, 10])
  const heroFilter  = useMotionTemplate`blur(${heroBlur}px)`

  // The 3D grid floor parallaxes at a different speed
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden px-8 md:px-14 py-24">

      {/* ═══════════════════════════════════════
          LAYER 1 — 3D PERSPECTIVE GRID FLOOR
          ═══════════════════════════════════════ */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ inset: 0, y: gridY }}
        aria-hidden="true"
      >
        {/* Perspective container — bottom 60% of hero */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '62%',
            perspective: '380px',
            perspectiveOrigin: '50% 0%',
            overflow: 'hidden',
          }}
        >
          {/* Scrolling grid plane */}
          <div
            style={{
              position: 'absolute',
              width: '220%',
              height: '160%',
              left: '-60%',
              bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              transform: 'rotateX(76deg)',
              transformOrigin: '50% 100%',
              animation: 'gridScroll3d 3.2s linear infinite',
            }}
          />
        </div>

        {/* Fade overlays: top, left, right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.7) 22%, transparent 48%),
              linear-gradient(to right,  #000 0%, transparent 14%, transparent 86%, #000 100%)
            `,
          }}
        />

        {/* Horizon glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '38%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
            filter: 'blur(2px)',
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════
          LAYER 2 — FLOATING ORBS (BACKGROUND)
          ═══════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          style={{
            position: 'absolute',
            width: 640, height: 640,
            left: -120, top: -120,
            background: 'radial-gradient(circle, rgba(255,255,255,0.038) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
          animate={{ scale: [1, 1.09, 1], x: [0, 25, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: 420, height: 420,
            right: -40, top: '18%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.026) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
          animate={{ scale: [1, 1.14, 1], x: [0, -12, 0], y: [0, 22, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: 260, height: 260,
            right: '18%', bottom: '12%',
            background: 'radial-gradient(circle, rgba(137,180,250,0.05) 0%, transparent 65%)',
            filter: 'blur(2px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      {/* ═══════════════════════════════════════
          LAYER 3 — SMALL FLOATING PARTICLES
          ═══════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-macos-blue"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
            animate={{ y: [0, -22, 0], opacity: [0.07, 0.32, 0.07] }}
            transition={{ duration: p.d, delay: p.dl, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ═══════════════════════════════════════
          LAYER 4 — SCAN LINE SWEEP
          ═══════════════════════════════════════ */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, rgba(137,180,250,0.13) 30%, rgba(137,180,250,0.13) 70%, transparent 100%)',
        }}
        animate={{ top: ['0%', '100%'], opacity: [0, 0.85, 0.85, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
          times: [0, 0.04, 0.96, 1],
          repeatDelay: 7,
        }}
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════
          MAIN CONTENT (FOREGROUND)
          ═══════════════════════════════════════ */}
      <motion.div
        className="relative z-10 max-w-4xl w-full"
        style={{
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale,
          rotateX: heroRotateX,
          filter: heroFilter,
          transformPerspective: 1400,
        }}
      >
        {/* Avatar + status */}
        <motion.div {...e3d(0.1)} className="flex items-center gap-4 mb-10">
          <motion.div
            className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-macos-borderLight/30"
            whileHover={{ scale: 1.06, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 280 }}
          >
            <img src="/avatar.jpg" alt="Mihir Inamdar" className="w-full h-full object-cover object-top" />
          </motion.div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-macos-green"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
              <span className="text-[11px] font-mono text-macos-subtext">Data Scientist · Sutherland Global Services</span>
            </div>
            <span className="text-[11px] font-mono text-macos-subtext0">Chennai, India · Open to Remote</span>
          </div>
        </motion.div>

        {/* Name — each word flies in from depth independently */}
        <div className="mb-6" style={{ perspective: '900px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0,  rotateX: 0,  filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-black leading-[0.9] tracking-tight text-macos-text text-balance"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
          >
            Mihir
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0,  rotateX: 0,  filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-black leading-[0.9] tracking-tight text-macos-subtext/50 text-balance"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
          >
            Inamdar.
          </motion.h1>
        </div>

        {/* Role ticker */}
        <motion.div {...e3d(0.36)} className="text-xl text-macos-subtext mb-6 h-8 font-medium text-balance">
          <AnimatedRole roles={ROLES} />
        </motion.div>

        {/* Tagline */}
        <motion.p {...e3d(0.44)} className="text-base text-macos-subtext max-w-prose text-pretty mb-12 leading-[1.75]">
          Building intelligent systems at the intersection of{' '}
          <span className="text-macos-text font-medium">RLHF</span>,{' '}
          <span className="text-macos-text font-medium">Agentic AI</span> &{' '}
          <span className="text-macos-text font-medium">LLMs</span>. Currently Data Scientist at Sutherland Global Services,
          former Research Fellow at CVIT, IIIT Hyderabad.
        </motion.p>

        {/* Stats — 3D hover cards */}
        <motion.div {...e3d(0.52)} className="flex flex-wrap gap-4 mb-12">
          {[
            { value: '2+', label: 'Years of Experience' },
            { value: '3+', label: 'Projects Shipped' },
            { value: '2',  label: 'Publications' },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.06, rotateX: -6, rotateY: 4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              className="px-5 py-3 rounded-xl cursor-default bg-macos-surface border border-macos-borderLight/30"
              style={{
                transformPerspective: 500,
              }}
            >
              <div className="text-4xl font-black text-macos-text leading-none">{value}</div>
              <div className="text-[11px] text-macos-subtext0 uppercase tracking-widest mt-2 font-mono">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...e3d(0.6)} className="flex flex-wrap gap-3 mb-12">
          <motion.button
            onClick={() => onNavigate('projects')}
            className="px-6 py-3 text-sm font-semibold rounded-xl text-macos-crust bg-macos-text"
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(205,214,244,0.3)' }}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-sm font-medium rounded-xl text-macos-text bg-macos-surface border border-macos-borderLight/30"
            whileHover={{ scale: 1.04, borderColor: 'rgba(205,214,244,0.28)', color: '#cdd6f4' }}
            whileTap={{ scale: 0.96 }}
          >
            Get in Touch
          </motion.button>
          <motion.a
            href="/Inamdar_Mihir_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl text-macos-text bg-macos-surface border border-macos-borderLight/30"
            whileHover={{ scale: 1.04, borderColor: 'rgba(205,214,244,0.28)', color: '#cdd6f4' }}
            whileTap={{ scale: 0.96 }}
          >
            <FileText size={14} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div {...e3d(0.68)} className="flex gap-3">
          {[
            { icon: Github,   href: 'https://github.com/inamdarmihir',                              label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/inamdarmihir',                         label: 'LinkedIn' },
            { icon: BookOpen, href: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ',        label: 'Scholar' },
            { icon: Mail,     href: 'mailto:mihirsinamdar@outlook.com',                              label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              title={label}
              className="p-2.5 rounded-xl text-macos-subtext bg-macos-surface border border-macos-borderLight/30"
              whileHover={{ scale: 1.15, color: '#cdd6f4', borderColor: 'rgba(205,214,244,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => onNavigate('about')}
        className="absolute bottom-8 left-8 md:left-14 flex items-center gap-2.5 text-macos-subtext0 hover:text-macos-text transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={13} />
        </motion.div>
        <span className="text-[11px] font-mono tracking-wider">Scroll to explore</span>
      </motion.button>
    </div>
  )
}
