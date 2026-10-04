import { RefObject } from 'react'
import RetrievalDemo from '../components/RetrievalDemo'
interface Props { onNavigate: (id: string) => void; scrollRef: RefObject<HTMLDivElement | null> }
export default function Hero({ onNavigate }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 pt-7 md:pt-8 pb-10">
      <div className="flex items-center gap-3 mb-5">
        <img src="/avatar.jpg" alt="Mihir Inamdar" className="w-12 h-12 rounded-xl object-cover object-top" />
        <p className="text-sm text-macos-subtext">AI / Backend Engineer · Qdrant Star<br />Chennai · Open to Bengaluru</p>
      </div>
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-7 items-start">
      <div>
      <h1 className="font-bold tracking-tight leading-tight text-3xl md:text-4xl max-w-3xl">I build retrieval systems and measure what changes.</h1>
      <p className="text-macos-subtext max-w-2xl mt-4 leading-relaxed">My work spans Qdrant-backed search, agent systems and NLP research. Start with the code and evaluation results below, or read my published research.</p>
      <div className="flex flex-wrap gap-3 mt-6">
        <button onClick={() => onNavigate('projects')} className="px-5 py-3 rounded-lg bg-macos-text text-macos-crust font-semibold">See Qdrant work</button>
        <a href="/Inamdar_Mihir_CV.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg border border-macos-borderLight">Read my resume</a>
        <a href="https://github.com/inamdarmihir" target="_blank" rel="noopener noreferrer" className="px-5 py-3 text-macos-blue">GitHub</a>
      </div>
      </div><RetrievalDemo /></div>
      <p className="mt-5 text-sm text-macos-subtext">Published NLP research: IEEE ICETITE 2024 · Springer ICCCN 2024 proceedings (2025). <a href="#publications" className="text-macos-blue underline">Read the papers</a></p>
      <div className="grid md:grid-cols-2 gap-4 mt-7">
        <a href="https://github.com/inamdarmihir/ask-my-tabs" className="rounded-xl border border-macos-borderLight p-5 bg-macos-surface">
          <p className="text-sm text-macos-subtext">Ask My Tabs · Qdrant hybrid retrieval</p>
          <p className="text-2xl font-bold mt-2">0.842 nDCG@10</p>
          <p className="text-sm text-macos-subtext mt-2 leading-relaxed">Repository evaluation: 300 SciFact queries, 1,000 documents. Node/CPU on Apple M2, not a browser benchmark.</p>
        </a>
        <a href="https://github.com/inamdarmihir/payload-audit" className="rounded-xl border border-macos-borderLight p-5 bg-macos-surface">
          <p className="text-sm text-macos-subtext">Payload Audit · Qdrant index costs</p>
          <p className="text-2xl font-bold mt-2">~98x disk cost</p>
          <p className="text-sm text-macos-subtext mt-2 leading-relaxed">One local run: per-topic indexes used 15.6 GB vs 160 MB for a fixed schema, on the same 1,000-repo sample.</p>
        </a>
      </div>
    </div>
  )
}
