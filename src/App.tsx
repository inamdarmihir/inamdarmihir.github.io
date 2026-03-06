import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Menubar from './components/Menubar'
import SafariBrowser from './components/SafariBrowser'
import Dock from './components/Dock'
import Terminal from './components/Terminal'

function useBreakpoint() {
  const [bp, setBp] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setBp(w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop')
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return bp
}

export default function App() {
  const bp = useBreakpoint()
  const [terminalOpen, setTerminalOpen] = useState(bp === 'desktop')

  useEffect(() => {
    if (bp === 'mobile') setTerminalOpen(false)
  }, [bp])

  return (
    <div className="w-full h-screen overflow-hidden relative select-none" style={{ background: '#0a0a12' }}>
      {/* ───── Desktop background ───── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 20%, rgba(137,180,250,0.06) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 80%, rgba(203,166,247,0.06) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 50% 50%, rgba(243,139,168,0.03) 0%, transparent 70%),
              linear-gradient(135deg, #0a0a14 0%, #0d0d1a 50%, #0a0a12 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* ───── macOS Notch (hidden on mobile) ───── */}
      <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
        <div
          className="w-36 h-7 bg-black rounded-b-2xl flex items-center justify-center gap-2"
          style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]" />
          <div className="w-8 h-0.5 rounded-full bg-[#1a1a1a]" />
        </div>
      </div>

      {/* ───── Menu bar ───── */}
      <Menubar />

      {/* ───── Main content area ───── */}
      <div className="absolute inset-0 flex items-center justify-center pt-7 pb-14 sm:pb-16 px-0 sm:px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.2 }}
          className="w-full sm:max-w-5xl h-full sm:rounded-xl overflow-hidden sm:window-shadow relative"
          style={{
            background: '#1c1c1e',
            border: bp !== 'mobile' ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}
        >
          <SafariBrowser />
        </motion.div>

        <AnimatePresence>
          {terminalOpen && bp !== 'mobile' && (
            <Terminal onClose={() => setTerminalOpen(false)} />
          )}
        </AnimatePresence>
      </div>

      {/* ───── Dock ───── */}
      <Dock
        onTerminalToggle={() => setTerminalOpen(prev => !prev)}
        terminalOpen={terminalOpen}
      />
    </div>
  )
}
