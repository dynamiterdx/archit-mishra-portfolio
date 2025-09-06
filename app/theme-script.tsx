"use client"
import Script from 'next/script'

// Inline script to set theme before hydration to avoid FOUC
export default function ThemeScript() {
  const code = `(() => {
    try {
      const saved = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', saved);
    } catch (e) {}
  })();`
  return <Script id="theme-init" strategy="beforeInteractive">{code}</Script>
}

