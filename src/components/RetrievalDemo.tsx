import { useEffect, useState } from 'react'
const STEPS = ['Read the query', 'Search dense + sparse', 'Fuse ranked results', 'Return sources']
const CODE = [
  'query = "Which page has the answer?"',
  'dense, sparse = encode(query)',
  'hits = qdrant.query(prefetch=[dense, sparse])',
  'context = fuse(hits, method="rrf")',
]
export default function RetrievalDemo() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setStep(s => (s + 1) % STEPS.length), 2200)
    return () => window.clearInterval(timer)
  }, [])
  return <aside aria-label="Illustrative retrieval pipeline" className="retrieval-demo rounded-2xl border border-macos-borderLight p-5 relative overflow-hidden">
    <div className="flex items-center justify-between gap-2 mb-4"><span className="text-sm font-semibold">Inside a retrieval pipeline</span><span className="text-[10px] font-mono text-macos-subtext border border-macos-borderLight rounded-full px-2 py-1">Illustrative demo</span></div>
    <div className="pipeline-track relative flex justify-between gap-2 mb-4">
      {['Query', 'Qdrant', 'RRF', 'Sources'].map((label, index) => <div key={label} className={`pipeline-node relative z-10 text-[11px] py-3 px-2 rounded-lg border ${step === index ? 'border-macos-blue bg-macos-blue/20 text-white' : 'border-macos-borderLight bg-macos-surface text-macos-subtext'}`}>{label}</div>)}
    </div>
    <div className="rounded-xl bg-black/30 border border-macos-border p-3 font-mono text-[10px] md:text-[11px] leading-6 overflow-x-auto">
      {CODE.map((line,index) => <div key={line} className={index === step ? 'text-macos-blue' : 'text-macos-subtext'}><span className="text-macos-subtext0 mr-3">0{index+1}</span>{line}</div>)}
    </div>
    <p className="text-sm text-macos-text mt-4 min-h-5">{STEPS[step]}</p>
    <p className="text-xs leading-relaxed text-macos-subtext mt-2">Conceptual flow, not a live query or benchmark. The results below come from committed experiments.</p>
  </aside>
}
