import type { Metadata } from 'next'
import '../src/index.css'
export const metadata: Metadata = {
  title: 'Mihir Inamdar - AI / Backend Engineer | Qdrant & NLP Research',
  description: 'Qdrant retrieval projects, reproducible evaluations and published NLP research. Based in Chennai, open to Bengaluru.',
  metadataBase: new URL('https://inamdarmihir.github.io'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Mihir Inamdar - Qdrant & NLP Research', images: ['/preview.png'] },
  twitter: { card: 'summary_large_image', images: ['/preview.png'] },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
