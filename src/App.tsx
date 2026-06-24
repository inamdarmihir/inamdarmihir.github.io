import { useState, useEffect } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Menubar from './components/Menubar'
import SafariBrowser from './components/SafariBrowser'
import Dock from './components/Dock'
import Terminal from './components/Terminal'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
    <div className="w-full h-screen overflow-hidden relative select-none" style={{ background: '#000' }}>

      {/* Desktop background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 10% 10%, rgba(255,255,255,0.032) 0%, transparent 60%),
              radial-gradient(ellipse 60% 70% at 90% 90%, rgba(255,255,255,0.022) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 50% 50%, rgba(255,255,255,0.01) 0%, transparent 70%),
              #000
            `,
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.12,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* macOS Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
        <div
          className="w-36 h-7 bg-black rounded-b-2xl flex items-center justify-center gap-2"
          style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.9)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]" />
          <div className="w-8 h-0.5 rounded-full bg-[#1a1a1a]" />
        </div>
      </div>

      {/* Menu bar */}
      <Menubar />

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center pt-7 pb-16 px-4">
        {/* Outer wrapper sets perspective origin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.15 }}
          style={{ transformPerspective: 2200, width: '100%', maxWidth: '80rem', height: '100%' }}
        >
          {/* Mouse-driven 3D tilt */}
          <motion.div
            animate={{
              rotateX: mouse.y * -3.5,
              rotateY: mouse.x * 3.5,
            }}
            transition={{ type: 'spring', stiffness: 55, damping: 20 }}
            className="w-full h-full rounded-xl overflow-hidden window-shadow"
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <SafariBrowser />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {terminalOpen && (
            <Terminal onClose={() => setTerminalOpen(false)} />
          )}
        </AnimatePresence>
      </div>

      {/* Dock */}
      <Dock
        onTerminalToggle={() => setTerminalOpen(prev => !prev)}
        terminalOpen={terminalOpen}
      />
    </div>
    </MotionConfig>
  )
}
