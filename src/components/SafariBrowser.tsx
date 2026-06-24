import { useState, useRef, useEffect, useCallback, ReactNode, RefObject } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, RotateCw, Share, Plus, Lock, Grid3X3 } from 'lucide-react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Publications from '../sections/Publications'
import Contact from '../sections/Contact'

const SECTIONS = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'experience',   label: 'Experience' },
  { id: 'projects',     label: 'Projects' },
  { id: 'skills',       label: 'Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact',      label: 'Contact' },
]

// Each non-hero section rotates in from depth as it enters the viewport
function Section3D({ children, scrollRef }: { children: ReactNode; scrollRef: RefObject<HTMLDivElement> }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollRef,
    offset: ['start end', 'end start'],
  })
  const rotateX = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [24, 0, 0, -10])
  const opacity  = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0,  1,  1,  0.35])
  const scale    = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0.88, 1, 1, 0.96])

  return (
    <div ref={ref} style={{ perspective: '1100px' }}>
      <motion.div style={{ rotateX, opacity, scale }}>
        {children}
      </motion.div>
    </div>
  )
}

export default function SafariBrowser() {
  const [activeSection, setActiveSection] = useState('home')
  const contentRef     = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = contentRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: container, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    SECTIONS.forEach(({ id }) => {
      const el = container.querySelector(`#${id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleScroll = useCallback(() => {
    const c = contentRef.current
    if (!c || !progressBarRef.current) return
    const p = c.scrollTop / (c.scrollHeight - c.clientHeight)
    progressBarRef.current.style.height = `${Math.min(p * 100, 100)}%`
  }, [])

  const scrollTo = (id: string) => {
    const container = contentRef.current
    if (!container) return
    const el = container.querySelector(`#${id}`) as HTMLElement
    if (el) container.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  }

  const url = `inamdarmihir.github.io/${activeSection === 'home' ? '' : activeSection}`

  return (
    <div className="flex flex-col h-full">

      {/* ── Safari chrome ── */}
      <div className="flex-none select-none" style={{ background: '#161616' }}>
        {/* Tab bar — hidden on small screens to save vertical space */}
        <div className="hidden sm:flex items-end px-3 pt-2 gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div
            className="flex-shrink-0 px-4 py-1.5 text-[12px] rounded-t-lg text-white/70"
            style={{ background: '#0a0a0a' }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20 flex-shrink-0" />
              Mihir Inamdar — Portfolio
            </span>
          </div>
          <button className="flex-shrink-0 p-1.5 text-white/25 hover:text-white/50 transition-colors">
            <Plus size={14} />
          </button>
        </div>

        {/* Toolbar — hidden on small screens */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-2" style={{ background: '#0a0a0a' }}>
          <div className="flex items-center gap-1.5 mr-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all cursor-pointer shadow-sm" />
          </div>
          <button className="p-1 text-white/20 cursor-not-allowed"><ChevronLeft  size={16} /></button>
          <button className="p-1 text-white/20 cursor-not-allowed"><ChevronRight size={16} /></button>
          <div
            className="flex-1 mx-2 flex items-center gap-2 rounded-lg px-3 py-1"
            style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Lock size={11} className="text-white/30 flex-shrink-0" />
            <span className="text-[13px] text-white/40 truncate font-mono">{url}</span>
          </div>
          <button className="p-1 text-white/30 hover:text-white/60 transition-colors"><RotateCw size={14} /></button>
          <button className="p-1 text-white/30 hover:text-white/60 transition-colors"><Share    size={14} /></button>
          <button className="p-1 text-white/30 hover:text-white/60 transition-colors"><Grid3X3  size={14} /></button>
        </div>

        {/* Nav strip — always visible, touch-friendly */}
        <div
          className="flex items-center gap-0.5 px-2 sm:px-4 py-1 sm:pb-1.5 overflow-x-auto"
          style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.05)', scrollbarWidth: 'none' }}
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex-shrink-0 px-3 py-2 sm:py-0.5 text-[11px] rounded-full transition-all"
              style={{
                background: activeSection === id ? 'rgba(255,255,255,0.1)' : 'transparent',
                color:      activeSection === id ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => { if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)' }}
              onMouseLeave={e => { if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="flex-1 relative overflow-hidden">

        {/* Scroll progress bar (right edge) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[2px] z-20 pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <div
            ref={progressBarRef}
            className="w-full rounded-full"
            style={{ background: 'rgba(255,255,255,0.28)', height: '0%', transition: 'height 0.08s' }}
          />
        </div>

        {/* Scrollable content */}
        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto browser-content"
          style={{ background: '#000', scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
        >
          {/* Hero stays flat — it already has its own scroll-linked 3D */}
          <div id="home">
            <Hero onNavigate={scrollTo} scrollRef={contentRef} />
          </div>

          <Section3D scrollRef={contentRef}>
            <div id="about"><About scrollRef={contentRef} /></div>
          </Section3D>

          <Section3D scrollRef={contentRef}>
            <div id="experience"><Experience scrollRef={contentRef} /></div>
          </Section3D>

          <Section3D scrollRef={contentRef}>
            <div id="projects"><Projects scrollRef={contentRef} /></div>
          </Section3D>

          <Section3D scrollRef={contentRef}>
            <div id="skills"><Skills scrollRef={contentRef} /></div>
          </Section3D>

          <Section3D scrollRef={contentRef}>
            <div id="publications"><Publications scrollRef={contentRef} /></div>
          </Section3D>

          <Section3D scrollRef={contentRef}>
            <div id="contact"><Contact scrollRef={contentRef} /></div>
          </Section3D>
        </div>
      </div>
    </div>
  )
}
