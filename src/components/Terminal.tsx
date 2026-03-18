import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, Minus, Maximize2 } from 'lucide-react'

interface Line {
  type: 'cmd' | 'out' | 'blank' | 'comment'
  text: string
  color?: string
}

const SEQUENCE: Line[] = [
  { type: 'comment', text: '# Welcome to Mihir\'s portfolio terminal' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'gh api users/inamdarmihir --jq \'.name,.bio\'' },
  { type: 'out', text: 'Mihir Inamdar', color: '#a6e3a1' },
  { type: 'out', text: 'ML Engineer & AI Researcher | NLP • CV • LLMs', color: '#89b4fa' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'gh repo list inamdarmihir --limit 5 --json name,description' },
  { type: 'out', text: '▸ ResearchGeniusAI       — AI research assistant (OpenAI Agents + Firecrawl)', color: '#cba6f7' },
  { type: 'out', text: '▸ Math-Prof-AI           — RAG-based math tutor (100% trig accuracy)', color: '#cba6f7' },
  { type: 'out', text: '▸ Florence-2-DocVQA      — Multimodal document VQA system', color: '#cba6f7' },
  { type: 'out', text: '▸ CustomLanggraphAgent   — LangGraph research automation', color: '#cba6f7' },
  { type: 'out', text: '▸ Multilingual-NER       — Code-switched NER (87% F1-score)', color: '#cba6f7' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'docker pull inamdarmihir/ml-portfolio:latest' },
  { type: 'out', text: 'latest: Pulling from inamdarmihir/ml-portfolio', color: '#f9e2af' },
  { type: 'out', text: '📦 Digest: sha256:mihirinamdar...', color: '#6c7086' },
  { type: 'out', text: 'Status: Image is up to date', color: '#a6e3a1' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'docker inspect inamdarmihir/ml-portfolio --format \'{{json .Skills}}\'' },
  { type: 'out', text: '{', color: '#f9e2af' },
  { type: 'out', text: '  "frameworks": ["PyTorch","TensorFlow","HuggingFace","LangChain"],', color: '#f9e2af' },
  { type: 'out', text: '  "specialties": ["NLP","Computer Vision","LLM Fine-tuning","MLOps"],', color: '#f9e2af' },
  { type: 'out', text: '  "cloud": ["AWS","Docker","Kubernetes","CI/CD"]', color: '#f9e2af' },
  { type: 'out', text: '}', color: '#f9e2af' },
  { type: 'blank', text: '' },
  { type: 'cmd', text: 'gh issue list --repo inamdarmihir --label "open-to-work"' },
  { type: 'out', text: '✅  #1  Open to ML Engineer / AI Researcher roles', color: '#a6e3a1' },
  { type: 'out', text: '📧  Contact: mihirsinamdar@outlook.com', color: '#89b4fa' },
  { type: 'out', text: '🔗  GitHub:  github.com/inamdarmihir', color: '#89b4fa' },
  { type: 'blank', text: '' },
]

interface TerminalProps {
  onClose: () => void
}

export default function Terminal({ onClose }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<Line[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visibleLines, currentText])

  useEffect(() => {
    if (currentLineIndex >= SEQUENCE.length) {
      setIsDone(true)
      return
    }

    const line = SEQUENCE[currentLineIndex]

    if (line.type === 'blank') {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        setCurrentLineIndex(i => i + 1)
      }, 120)
      return () => clearTimeout(t)
    }

    if (line.type === 'out' || line.type === 'comment') {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        setCurrentLineIndex(i => i + 1)
      }, line.type === 'comment' ? 400 : 60)
      return () => clearTimeout(t)
    }

    // cmd: type character by character
    if (line.type === 'cmd') {
      setIsTyping(true)
      setCurrentText('')
      let i = 0
      const typeChar = () => {
        if (i <= line.text.length) {
          setCurrentText(line.text.slice(0, i))
          i++
          const delay = 25 + Math.random() * 30
          setTimeout(typeChar, delay)
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setVisibleLines(prev => [...prev, line])
            setCurrentText('')
            setCurrentLineIndex(idx => idx + 1)
          }, 200)
        }
      }
      const t = setTimeout(typeChar, 500)
      return () => clearTimeout(t)
    }
  }, [currentLineIndex])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
  }

  const handleMouseUp = () => setIsDragging(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="absolute z-40 w-[580px] rounded-xl overflow-hidden window-shadow"
      style={{ transform: `translate(${position.x}px, ${position.y}px)`, bottom: '80px', right: '24px' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 bg-[#0d1b3e] cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-1.5">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 flex items-center justify-center group">
            <X size={7} className="opacity-0 group-hover:opacity-100 text-red-900" />
          </button>
          <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 flex items-center justify-center group">
            <Minus size={7} className="opacity-0 group-hover:opacity-100 text-yellow-900" />
          </button>
          <button className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 flex items-center justify-center group">
            <Maximize2 size={6} className="opacity-0 group-hover:opacity-100 text-green-900" />
          </button>
        </div>
        <span className="flex-1 text-center text-[12px] text-white/40 font-medium">
          mihir — zsh — 580×280
        </span>
      </div>

      {/* Terminal body */}
      <div className="bg-[#061428] p-4 h-72 overflow-y-auto font-mono text-[12px] leading-relaxed">
        {visibleLines.map((line, i) => (
          <div key={i}>
            {line.type === 'cmd' && (
              <div className="flex items-start gap-1">
                <span className="text-[#89b4fa] select-none flex-shrink-0">mihir@macbook</span>
                <span className="text-white/40 select-none flex-shrink-0">:</span>
                <span className="text-[#cba6f7] select-none flex-shrink-0">~</span>
                <span className="text-white/40 select-none flex-shrink-0">$</span>
                <span className="text-[#a6e3a1] ml-1 break-all">{line.text}</span>
              </div>
            )}
            {line.type === 'out' && (
              <div className="pl-0 break-all" style={{ color: line.color || '#a6e3a1' }}>{line.text}</div>
            )}
            {line.type === 'comment' && (
              <div className="text-white/30 italic">{line.text}</div>
            )}
            {line.type === 'blank' && <div className="h-2" />}
          </div>
        ))}

        {/* Currently typing command */}
        {isTyping && (
          <div className="flex items-start gap-1">
            <span className="text-[#89b4fa] select-none flex-shrink-0">mihir@macbook</span>
            <span className="text-white/40 select-none flex-shrink-0">:</span>
            <span className="text-[#cba6f7] select-none flex-shrink-0">~</span>
            <span className="text-white/40 select-none flex-shrink-0">$</span>
            <span className="text-[#a6e3a1] ml-1">{currentText}</span>
            <span className="animate-blink text-[#a6e3a1]">▋</span>
          </div>
        )}

        {/* Idle cursor after done */}
        {isDone && (
          <div className="flex items-start gap-1 mt-1">
            <span className="text-[#89b4fa] select-none">mihir@macbook</span>
            <span className="text-white/40 select-none">:</span>
            <span className="text-[#cba6f7] select-none">~</span>
            <span className="text-white/40 select-none">$</span>
            <span className="ml-1 animate-blink text-[#a6e3a1]">▋</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </motion.div>
  )
}
