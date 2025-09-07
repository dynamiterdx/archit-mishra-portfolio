"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Service" },
  { href: "/#resume", label: "Resume" },
  { href: "/projects", label: "Project" },
  { href: "/photography", label: "Photography" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="relative rounded-full bg-black/85 text-white backdrop-blur-xl ring-1 ring-white/5 shadow-2xl">
          <ul className="flex items-center justify-between px-3">
            {/* Left cluster */}
            <div className="flex items-center">
              {navItems.slice(0,3).map((item) => (
                <li key={item.label} className="p-1">
                  <Link href={item.href} className="relative block rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
                    <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              ))}
            </div>

            {/* Center logo */}
            <li className="pointer-events-none select-none">
              <div className="flex items-center gap-2 py-2 px-4">
                <img src="/logo-mark.svg" alt="logo" className="h-7 w-7" />
                <span className="font-semibold tracking-wide">GENAI</span>
              </div>
            </li>

            {/* Right cluster */}
            <div className="flex items-center">
              {navItems.slice(3).map((item) => (
                <li key={item.label} className="p-1">
                  <Link href={item.href} className="relative block rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
                    <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
