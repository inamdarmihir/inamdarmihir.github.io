import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, RotateCw, Share, Plus, Lock, Grid3X3 } from 'lucide-react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Publications from '../sections/Publications'
import Contact from '../sections/Contact'

const TABS = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Publications', 'Contact']

export default function SafariBrowser() {
  const [activeTab, setActiveTab] = useState('Home')
  const [isLoading, setIsLoading] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const navigate = (tab: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsLoading(false)
      contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  const url = `inamdarmihir.github.io/${activeTab === 'Home' ? '' : activeTab.toLowerCase()}`

  return (
    <div className="flex flex-col h-full">
      {/* Safari chrome */}
      <div className="flex-none bg-[#2a2a2e] select-none">
        {/* Tab bar */}
        <div className="flex items-end px-3 pt-2 gap-1 overflow-x-auto scrollbar-none">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => navigate(tab)}
              className={`flex-shrink-0 px-4 py-1.5 text-[12px] rounded-t-lg transition-all duration-200 max-w-[120px] truncate ${
                activeTab === tab
                  ? 'bg-[#1c1c1e] text-white/90 shadow-sm'
                  : 'bg-[#3a3a3e] text-white/40 hover:text-white/60 hover:bg-[#333338]'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400/60 flex-shrink-0" />
                {tab}
              </span>
            </button>
          ))}
          <button className="flex-shrink-0 p-1.5 text-white/40 hover:text-white/70 transition-colors">
            <Plus size={14} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#1c1c1e]">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 mr-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all cursor-pointer shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all cursor-pointer shadow-sm" />
          </div>

          {/* Nav buttons */}
          <button className="p-1 text-white/30 cursor-not-allowed">
            <ChevronLeft size={16} />
          </button>
          <button className="p-1 text-white/30 cursor-not-allowed">
            <ChevronRight size={16} />
          </button>

          {/* URL bar */}
          <div className="flex-1 mx-2 flex items-center gap-2 bg-[#2a2a2e] rounded-lg px-3 py-1 border border-white/10">
            <Lock size={11} className="text-green-400 flex-shrink-0" />
            <span className="text-[13px] text-white/70 truncate font-mono">{url}</span>
            {isLoading && (
              <div className="ml-auto w-3 h-3 border border-white/30 border-t-blue-400 rounded-full animate-spin flex-shrink-0" />
            )}
          </div>

          {/* Right toolbar buttons */}
          <button className="p-1 text-white/50 hover:text-white/80 transition-colors">
            <RotateCw size={14} />
          </button>
          <button className="p-1 text-white/50 hover:text-white/80 transition-colors">
            <Share size={14} />
          </button>
          <button className="p-1 text-white/50 hover:text-white/80 transition-colors">
            <Grid3X3 size={14} />
          </button>
        </div>

        {/* Favorites / nav strip */}
        <div className="flex items-center gap-1 px-4 pb-1.5 bg-[#1c1c1e] border-b border-white/[0.06]">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => navigate(tab)}
              className={`px-3 py-0.5 text-[11px] rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto bg-[#0f0f14] browser-content"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.15) transparent' }}
      >
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {activeTab === 'Home' && <Hero onNavigate={navigate} />}
          {activeTab === 'About' && <About />}
          {activeTab === 'Experience' && <Experience />}
          {activeTab === 'Projects' && <Projects />}
          {activeTab === 'Skills' && <Skills />}
          {activeTab === 'Publications' && <Publications />}
          {activeTab === 'Contact' && <Contact />}
        </div>
      </div>
    </div>
  )
}
