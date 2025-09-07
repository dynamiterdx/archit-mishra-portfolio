"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null; // Hide footer on home; ConnectBanner acts as footer
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
          <div className="font-semibold text-zinc-800">Get updates</div>
          <form className="mt-2 flex gap-2">
            <input className="w-full rounded-md border border-zinc-200 px-3 py-2" placeholder="Email address" />
            <button className="rounded-md bg-orange-600 text-white px-3 py-2">Send</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 pb-8">
        © {new Date().getFullYear()} Archit Mishra — All rights reserved.
      </div>
    </footer>
  );
}
