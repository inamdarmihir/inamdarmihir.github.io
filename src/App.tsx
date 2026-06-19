import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Menubar from './components/Menubar'
import SafariBrowser from './components/SafariBrowser'
import Dock from './components/Dock'
import Terminal from './components/Terminal'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <div className="w-full h-screen overflow-hidden relative select-none" style={{ background: '#000' }}>
      {/* Desktop background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 15% 15%, rgba(255,255,255,0.025) 0%, transparent 60%),
              radial-gradient(ellipse 50% 60% at 85% 85%, rgba(255,255,255,0.015) 0%, transparent 60%),
              #000
            `,
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)`,
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
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.15 }}
          className="w-full max-w-5xl h-full rounded-xl overflow-hidden window-shadow relative"
          style={{
            background: '#0a0a0a',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <SafariBrowser />
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
  )
}
