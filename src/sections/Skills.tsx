import { RefObject } from 'react'
interface Props { scrollRef: RefObject<HTMLDivElement | null> }
export default function Skills(_: Props) {
  return <div className="max-w-4xl mx-auto px-5 md:px-14 py-16">
    <h2 className="text-3xl font-bold">Tools in this work</h2>
    <p className="text-macos-subtext mt-3">I use these across the projects and research above. The code is a better guide than a proficiency percentage.</p>
    <div className="flex flex-wrap gap-3 mt-6">{['Python', 'TypeScript', 'Qdrant', 'FastAPI', 'LangGraph', 'SQL Server', 'PyTorch', 'Transformers', 'Docker', 'GitHub Actions'].map(name => <span key={name} className="rounded-lg border border-macos-borderLight px-3 py-2 text-sm">{name}</span>)}</div>
  </div>
}
