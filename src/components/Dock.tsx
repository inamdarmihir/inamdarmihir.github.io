import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, Github, Linkedin, Mail, BookOpen, Code2, Globe, GraduationCap } from 'lucide-react'

interface DockProps {
  onTerminalToggle: () => void
  terminalOpen: boolean
}

interface DockItem {
  id: string
  icon: React.ReactNode
  label: string
  color: string
  onClick?: () => void
  href?: string
}

export default function Dock({ onTerminalToggle, terminalOpen }: DockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const items: DockItem[] = [
    {
      id: 'terminal',
      icon: <TerminalIcon size={24} />,
      label: terminalOpen ? 'Hide Terminal' : 'Open Terminal',
      color: '#a6e3a1',
      onClick: onTerminalToggle,
    },
    {
      id: 'github',
      icon: <Github size={24} />,
      label: 'GitHub',
      color: '#cdd6f4',
      href: 'https://github.com/inamdarmihir',
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      color: '#89b4fa',
      href: 'https://linkedin.com/in/inamdarmihir',
    },
    {
      id: 'scholar',
      icon: <GraduationCap size={24} />,
      label: 'Google Scholar',
      color: '#f9e2af',
      href: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ',
    },
    {
      id: 'portfolio',
      icon: <Globe size={24} />,
      label: 'Portfolio',
      color: '#cba6f7',
      href: 'https://inamdarmihir.github.io',
    },
    {
      id: 'research',
      icon: <BookOpen size={24} />,
      label: 'Publications',
      color: '#f38ba8',
      href: 'https://arxiv.org/search/?searchtype=author&query=inamdar+mihir',
    },
    {
      id: 'code',
      icon: <Code2 size={24} />,
      label: 'Projects',
      color: '#94e2d5',
      href: 'https://github.com/inamdarmihir?tab=repositories',
    },
    {
      id: 'mail',
      icon: <Mail size={24} />,
      label: 'Email Mihir',
      color: '#f38ba8',
      href: 'mailto:mihirsinamdar@outlook.com',
    },
  ]

  const handleClick = (item: DockItem) => {
    if (item.onClick) item.onClick()
    else if (item.href) window.open(item.href, '_blank')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-end pb-2 select-none pointer-events-none">
      <div
        className="flex items-end gap-1.5 px-3 py-2 rounded-2xl pointer-events-auto"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      >
        {items.map((item) => {
          const isHovered = hoveredId === item.id
          const isActive = item.id === 'terminal' && terminalOpen

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute bottom-full mb-2 px-2 py-1 text-[11px] font-medium text-white/90 bg-black/70 rounded-md whitespace-nowrap backdrop-blur-sm"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.button
                whileHover={{ y: -10, scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                onClick={() => handleClick(item)}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors relative"
                style={{
                  background: isActive
                    ? `${item.color}25`
                    : 'rgba(255,255,255,0.08)',
                  color: item.color,
                  border: isActive ? `1px solid ${item.color}40` : '1px solid transparent',
                }}
              >
                {item.icon}
                {/* Active dot */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: item.color }}
                  />
                )}
              </motion.button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
