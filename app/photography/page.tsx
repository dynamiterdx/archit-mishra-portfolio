"use client"
import photos from '../../data/photos.json'
import { useState } from 'react'

export const metadata = { title: 'Photography' }

export default function PhotographyPage(){
  // Ensure pastel palette by setting attribute on mount
  return (
    <main>
      <PaletteSetter palette="pastel" />
      <section className="section hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Photography</h1>
            <p>Relaxed palette for an easy-on-the-eyes gallery.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <Gallery photos={photos} />
        </div>
      </section>
    </main>
  )
}

function PaletteSetter({ palette }: { palette: 'tech' | 'pastel' }){
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-palette', palette)
  }
  return null
}

function Gallery({ photos }: { photos: {src:string, alt:string}[] }){
  const [open, setOpen] = useState<string | null>(null)
  return (
    <>
      <div className="grid gallery-grid">
        {photos.map((p, i) => (
          <a key={i} className="photo" href={p.src} onClick={(e)=>{e.preventDefault(); setOpen(p.src)}}>
            <img src={p.src} alt={p.alt || ''} />
          </a>
        ))}
      </div>
      <div className={`lightbox ${open ? 'open' : ''}`} onClick={()=>setOpen(null)}>
        <button className="close" onClick={()=>setOpen(null)} aria-label="Close">Close ✕</button>
        {open && <img src={open} alt="" />}
      </div>
    </>
  )
}

