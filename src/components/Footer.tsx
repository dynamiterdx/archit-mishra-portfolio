"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // Hide the white footer on the home page where the dark Connect banner acts as the footer
  if (pathname === "/") return null;
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-zinc-600 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold text-zinc-800">GenAI · DS</div>
          <p className="mt-2">Exploring LLMs, agents, RAG, and ML systems.</p>
        </div>
        <div>
          <div className="font-semibold text-zinc-800">Navigation</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/photography">Photography</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-zinc-800">Contact</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="tel:+919161251999" className="hover:text-zinc-700">+91 9161251999</a>
            </li>
            <li>
              <a href="mailto:architmishrapro@gmail.com" className="hover:text-zinc-700">architmishrapro@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 pb-8">
        © {new Date().getFullYear()} Archit Mishra. All rights reserved.
      </div>
    </footer>
  );
}
