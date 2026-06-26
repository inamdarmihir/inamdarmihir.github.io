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
    <div className="w-full h-screen overflow-hidden relative select-none bg-macos-crust text-macos-text">

      {/* Desktop background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 10% 10%, rgba(137, 180, 250, 0.05) 0%, transparent 60%),
              radial-gradient(ellipse 60% 70% at 90% 90%, rgba(203, 166, 247, 0.04) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 50% 50%, rgba(148, 226, 213, 0.02) 0%, transparent 70%)
            `,
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(205, 214, 244, 0.08) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* macOS Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
        <div
          className="w-36 h-7 bg-macos-crust rounded-b-2xl flex items-center justify-center gap-2 shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-macos-overlay border border-macos-border" />
          <div className="w-8 h-0.5 rounded-full bg-macos-overlay" />
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
            className="w-full h-full rounded-xl overflow-hidden window-shadow bg-macos-bg border border-macos-border"
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
