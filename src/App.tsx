'use client'
import { useRef } from 'react'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Publications from './sections/Publications'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const navigate = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <div className="min-h-screen bg-macos-bg text-macos-text">
      <header className="sticky top-0 z-50 border-b border-macos-border bg-macos-bg/95 backdrop-blur">
        <nav aria-label="Main navigation" className="max-w-5xl mx-auto px-5 py-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <a href="#home" className="font-semibold mr-auto">Mihir Inamdar</a>
          <a href="#projects">Qdrant work</a><a href="#publications">Research</a>
          <a href="#experience">Experience</a><a href="#contact">Contact</a>
          <a href="/Inamdar_Mihir_CV.pdf" className="text-macos-blue" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </header>
      <main>
        <section id="home"><Hero onNavigate={navigate} scrollRef={scrollRef} /></section>
        <section id="projects"><Projects scrollRef={scrollRef} /></section>
        <section id="publications"><Publications scrollRef={scrollRef} /></section>
        <section id="experience"><Experience scrollRef={scrollRef} /></section>
        <section id="skills"><Skills scrollRef={scrollRef} /></section>
        <section id="contact"><Contact scrollRef={scrollRef} /></section>
      </main>
    </div>
  )
}
