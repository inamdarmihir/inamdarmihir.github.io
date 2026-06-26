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
    <div className="fixed top-0 left-0 right-0 z-50 h-7 menubar-blur bg-macos-crust/80 flex items-center justify-between px-4 text-macos-text text-[13px] select-none border-b border-macos-borderLight/20">
      {/* Left: Apple + App menus */}
      <div className="flex items-center gap-3 sm:gap-5">
        <span className="text-base leading-none">&#63743;</span>
        <span className="font-semibold text-macos-text">Safari</span>
        <span className="hidden md:inline text-macos-subtext hover:text-macos-text cursor-default">File</span>
        <span className="hidden md:inline text-macos-subtext hover:text-macos-text cursor-default">Edit</span>
        <span className="hidden md:inline text-macos-subtext hover:text-macos-text cursor-default">View</span>
        <span className="hidden lg:inline text-macos-subtext hover:text-macos-text cursor-default">History</span>
        <span className="hidden lg:inline text-macos-subtext hover:text-macos-text cursor-default">Bookmarks</span>
        <span className="hidden xl:inline text-macos-subtext hover:text-macos-text cursor-default">Window</span>
        <span className="hidden xl:inline text-macos-subtext hover:text-macos-text cursor-default">Help</span>
      </div>

      {/* Right: system tray */}
      <div className="flex items-center gap-2 sm:gap-3 text-macos-text">
        <Volume2 size={13} className="hidden sm:block" />
        <Wifi size={13} className="" />
        <Battery size={14} className="" />
        <Search size={13} className="hidden sm:block" />
        <span className="hidden sm:block">{date}</span>
        <span className="font-medium">{time}</span>
      </div>
    </div>
  )
}
