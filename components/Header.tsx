"use client"
import Link from 'next/link'
import { useEffect } from 'react'

export default function Header(){
  useEffect(()=>{
    document.documentElement.setAttribute('data-palette', location.pathname.startsWith('/photography') ? 'pastel' : 'tech')
  },[])
  const toggle = () => {
    const doc = document.documentElement
    const cur = doc.getAttribute('data-theme') || 'dark'
    const next = cur === 'dark' ? 'light' : 'dark'
    doc.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch {}
  }
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Home">
          <img src="/assets/img/logo.svg" alt="Logo" className="logo" />
          <span className="brand-text">Your Name</span>
        </Link>
        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/datascience" className="nav-link">Data Science</Link>
          <Link href="/photography" className="nav-link">Photography</Link>
          <a href="/#contact" className="nav-link">Contact</a>
        </nav>
        <button className="theme-toggle" id="theme-toggle" onClick={toggle} aria-label="Toggle light/dark mode" title="Toggle theme">◐</button>
      </div>
    </header>
  )
}

