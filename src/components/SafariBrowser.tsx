import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, RotateCw, Share, Plus, Lock, Grid3X3 } from 'lucide-react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Publications from '../sections/Publications'
import Contact from '../sections/Contact'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

export default function SafariBrowser() {
  const [activeSection, setActiveSection] = useState('home')
  const contentRef = useRef<HTMLDivElement>(null)

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

  const scrollTo = (id: string) => {
    const container = contentRef.current
    if (!container) return
    const el = container.querySelector(`#${id}`) as HTMLElement
    if (el) container.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  }

  const url = `inamdarmihir.github.io/${activeSection === 'home' ? '' : activeSection}`

  return (
    <div className="flex flex-col h-full">
      {/* Safari chrome */}
      <div className="flex-none select-none" style={{ background: '#161616' }}>
        {/* Tab bar */}
        <div className="flex items-end px-3 pt-2 gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
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

        {/* Toolbar */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ background: '#0a0a0a' }}>
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 mr-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer shadow-sm hover:brightness-90 transition-all" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer shadow-sm hover:brightness-90 transition-all" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer shadow-sm hover:brightness-90 transition-all" />
          </div>

          <button className="p-1 text-white/20 cursor-not-allowed"><ChevronLeft size={16} /></button>
          <button className="p-1 text-white/20 cursor-not-allowed"><ChevronRight size={16} /></button>

          {/* URL bar */}
          <div
            className="flex-1 mx-2 flex items-center gap-2 rounded-lg px-3 py-1"
            style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Lock size={11} className="text-white/30 flex-shrink-0" />
            <span className="text-[13px] text-white/40 truncate font-mono">{url}</span>
          </div>

          <button className="p-1 text-white/30 hover:text-white/60 transition-colors"><RotateCw size={14} /></button>
          <button className="p-1 text-white/30 hover:text-white/60 transition-colors"><Share size={14} /></button>
          <button className="p-1 text-white/30 hover:text-white/60 transition-colors"><Grid3X3 size={14} /></button>
        </div>

        {/* Favorites / nav strip */}
        <div
          className="flex items-center gap-0.5 px-4 pb-1.5"
          style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-3 py-0.5 text-[11px] rounded-full transition-all"
              style={{
                background: activeSection === id ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: activeSection === id ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => {
                if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'
              }}
              onMouseLeave={e => {
                if (activeSection !== id) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Single-page scrolling content */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto browser-content"
        style={{ background: '#000', scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.08) transparent' }}
      >
        <div id="home"><Hero onNavigate={scrollTo} scrollRef={contentRef} /></div>
        <div id="about"><About scrollRef={contentRef} /></div>
        <div id="experience"><Experience scrollRef={contentRef} /></div>
        <div id="projects"><Projects scrollRef={contentRef} /></div>
        <div id="skills"><Skills scrollRef={contentRef} /></div>
        <div id="publications"><Publications scrollRef={contentRef} /></div>
        <div id="contact"><Contact scrollRef={contentRef} /></div>
      </div>
    </div>
  )
}
