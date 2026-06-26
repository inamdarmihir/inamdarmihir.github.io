import { useState, useRef, useEffect, useCallback, ReactNode, RefObject } from 'react'
import { motion } from 'framer-motion'
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
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 24, scale: 0.88 }}
      whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
      viewport={{ root: scrollRef, once: true, margin: '-5%' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: '1100px' }}
    >
      {children}
    </motion.div>
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
    if (el) {
      const top = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop
      container.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const url = `inamdarmihir.github.io/${activeSection === 'home' ? '' : activeSection}`

  return (
    <div className="flex flex-col h-full bg-macos-bg text-macos-text rounded-xl overflow-hidden">

      {/* ── Safari chrome ── */}
      <div className="flex-none select-none bg-macos-surface border-b border-macos-border">
        {/* Tab bar — hidden on small screens to save vertical space */}
        <div className="hidden sm:flex items-end px-3 pt-2 gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div
            className="flex-shrink-0 px-4 py-1.5 text-[12px] rounded-t-lg text-macos-text bg-macos-bg"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-macos-overlay flex-shrink-0" />
              Mihir Inamdar — Portfolio
            </span>
          </div>
          <button className="flex-shrink-0 p-1.5 text-macos-subtext0 hover:text-macos-text transition-colors">
            <Plus size={14} />
          </button>
        </div>

        {/* Toolbar — hidden on small screens */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-macos-bg">
          <div className="flex items-center gap-1.5 mr-1">
            <div className="w-3 h-3 rounded-full bg-macos-red hover:brightness-90 transition-all cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-macos-yellow hover:brightness-90 transition-all cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-macos-green hover:brightness-90 transition-all cursor-pointer shadow-sm" />
          </div>
          <button className="p-1 text-macos-overlay cursor-not-allowed"><ChevronLeft  size={16} /></button>
          <button className="p-1 text-macos-overlay cursor-not-allowed"><ChevronRight size={16} /></button>
          <div
            className="flex-1 mx-2 flex items-center gap-2 rounded-lg px-3 py-1 bg-macos-crust border border-macos-borderLight"
          >
            <Lock size={11} className="text-macos-subtext0 flex-shrink-0" />
            <span className="text-[13px] text-macos-subtext truncate font-mono">{url}</span>
          </div>
          <button className="p-1 text-macos-subtext0 hover:text-macos-text transition-colors"><RotateCw size={14} /></button>
          <button className="p-1 text-macos-subtext0 hover:text-macos-text transition-colors"><Share    size={14} /></button>
          <button className="p-1 text-macos-subtext0 hover:text-macos-text transition-colors"><Grid3X3  size={14} /></button>
        </div>

        {/* Nav strip — always visible, touch-friendly */}
        <div
          className="flex items-center gap-0.5 px-2 sm:px-4 py-1 sm:pb-1.5 overflow-x-auto bg-macos-bg border-b border-macos-borderLight/30"
          style={{ scrollbarWidth: 'none' }}
        >
          {SECTIONS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex-shrink-0 px-3 py-2 sm:py-0.5 text-[11px] rounded-full transition-all ${
                  isActive ? 'bg-macos-overlay text-macos-text' : 'bg-transparent text-macos-subtext hover:text-macos-text'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="flex-1 relative overflow-hidden bg-macos-bg">

        {/* Scroll progress bar (right edge) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[2px] z-20 pointer-events-none bg-macos-crust/50"
        >
          <div
            ref={progressBarRef}
            className="w-full rounded-full bg-macos-blue/50 transition-[height] duration-75"
            style={{ height: '0%' }}
          />
        </div>

        {/* Scrollable content */}
        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto browser-content bg-macos-bg"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
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
