"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/photography", label: "Photography" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          <span className="text-orange-600">Gen</span>AI · DS
        </Link>
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative rounded-full px-3 py-2 text-sm font-medium hover:text-orange-600"
                >
                  {active && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-orange-500/10"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

