import { useState, useEffect } from 'react'
import { Wifi, Battery, Volume2, Search } from 'lucide-react'

export default function Menubar() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
      setDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-7 menubar-blur bg-black/70 flex items-center justify-between px-4 text-white/90 text-[13px] select-none">
      {/* Left: Apple + App menus */}
      <div className="flex items-center gap-5">
        <span className="text-base leading-none">&#63743;</span>
        <span className="font-semibold">Safari</span>
        <span className="text-white/70">File</span>
        <span className="text-white/70">Edit</span>
        <span className="text-white/70">View</span>
        <span className="text-white/70">History</span>
        <span className="text-white/70">Bookmarks</span>
        <span className="text-white/70">Window</span>
        <span className="text-white/70">Help</span>
      </div>

      {/* Right: system tray */}
      <div className="flex items-center gap-3">
        <Volume2 size={13} className="text-white/80" />
        <Wifi size={13} className="text-white/80" />
        <Battery size={14} className="text-white/80" />
        <Search size={13} className="text-white/80" />
        <span className="text-white/80">{date}</span>
        <span className="font-medium">{time}</span>
      </div>
    </div>
  )
}
