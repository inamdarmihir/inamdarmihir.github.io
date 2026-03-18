import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Menubar from './components/Menubar'
import SafariBrowser from './components/SafariBrowser'
import Dock from './components/Dock'
import Terminal from './components/Terminal'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(true)

  return (
    <div className="w-full h-screen overflow-hidden relative select-none" style={{ background: '#060d14' }}>
      {/* ───── Desktop background ───── */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 20%, rgba(137,180,250,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 80%, rgba(148,226,213,0.06) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 50% 50%, rgba(166,227,161,0.04) 0%, transparent 70%),
              linear-gradient(135deg, #060d14 0%, #091018 50%, #060e10 100%)
            `,
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* ───── macOS Notch ───── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
        <div
          className="w-36 h-7 bg-black rounded-b-2xl flex items-center justify-center gap-2"
          style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
        >
          {/* Camera dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]" />
          {/* Sensor bar */}
          <div className="w-8 h-0.5 rounded-full bg-[#1a1a1a]" />
        </div>
      </div>

      {/* ───── Menu bar ───── */}
      <Menubar />

      {/* ───── Main content area (below menubar, above dock) ───── */}
      <div className="absolute inset-0 flex items-center justify-center pt-7 pb-16 px-4">
        {/* Safari browser window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.2 }}
          className="w-full max-w-5xl h-full rounded-xl overflow-hidden window-shadow relative"
          style={{
            background: '#0b111a',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <SafariBrowser />
        </motion.div>

        {/* ───── Terminal window ───── */}
        <AnimatePresence>
          {terminalOpen && (
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
