import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, BookOpen, MapPin, Send, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mihirsinamdar@outlook.com',
    href: 'mailto:mihirsinamdar@outlook.com',
    color: '#a6e3a1',
    copy: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/inamdarmihir',
    href: 'https://github.com/inamdarmihir',
    color: '#cdd6f4',
    copy: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/inamdarmihir',
    href: 'https://linkedin.com/in/inamdarmihir',
    color: '#89b4fa',
    copy: false,
  },
  {
    icon: BookOpen,
    label: 'Google Scholar',
    value: 'scholar.google.com/…aRlnkucAAAAJ',
    href: 'https://scholar.google.com/citations?user=aRlnkucAAAAJ',
    color: '#f9e2af',
    copy: false,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('mihirsinamdar@outlook.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Get In Touch</span>
        <h2 className="text-4xl font-bold text-white/90 mt-2">Contact</h2>
        <div className="h-1 w-16 mt-3 rounded-full" style={{ background: 'linear-gradient(90deg, #89b4fa, #a6e3a1)' }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-5"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white/90 mb-3">Let's collaborate!</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              I'm open to ML Engineer and AI Researcher roles, research collaborations, and interesting open-source projects.
              Currently based in <span className="text-blue-400">Pune, India</span> and open to remote opportunities.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Whether you have a question about my research, want to discuss a project idea, or just want to say hi — my inbox is always open!
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/40">
              <MapPin size={12} />
              <span>Pune, India · Available for remote / hybrid</span>
            </div>

            {/* Status badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Open to work · Available immediately</span>
            </div>
          </div>

          {/* Quick email */}
          <div className="glass rounded-2xl p-5">
            <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Quick Contact</p>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm text-white/70">mihirsinamdar@outlook.com</span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
                style={{
                  background: copied ? 'rgba(166,227,161,0.15)' : 'rgba(255,255,255,0.05)',
                  color: copied ? '#a6e3a1' : 'rgba(255,255,255,0.5)',
                  border: `1px solid ${copied ? 'rgba(166,227,161,0.3)' : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right: Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          {CONTACTS.map(({ icon: Icon, label, value, href, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-xl hover:border-white/20 transition-all group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: `${color}20` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-white/30 uppercase tracking-wider">{label}</div>
                <div className="text-white/70 text-sm font-mono truncate group-hover:text-white/90 transition-colors">
                  {value}
                </div>
              </div>
              <Send size={14} className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
