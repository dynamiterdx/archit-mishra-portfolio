"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profile from "@/data/profile.json" assert { type: "json" };

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-amber-200/60 blur-3xl" />
      </div>
      {/* Reduce top padding to pull content closer to the navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-0 grid items-center gap-12 md:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/10 px-3 py-1 text-sm text-orange-700 ring-1 ring-orange-600/20">
              <span>👋 Hello</span>
              <span className="font-medium">I’m a GenAI Data Scientist</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              I build intelligent products with <span className="text-orange-600">LLMs</span> and data.
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Specializing in RAG, agents, prompt engineering and full‑stack ML systems. I love shipping delightful, measurable experiences.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/projects" className="rounded-full bg-orange-600 text-white px-5 py-3 font-medium hover:bg-orange-700">View Projects</Link>
              <a href="#skills" className="rounded-full ring-1 ring-zinc-300 px-5 py-3 font-medium hover:bg-zinc-50">Skills & Resume</a>
            </div>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto sm:h-[680px] sm:w-[680px] h-[420px] w-[420px] translate-y-2 sm:translate-y-4 z-0"
          >
            {/* Decorative orange semicircle behind the cutout; no box/panel */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[85%] rounded-t-[50%] bg-orange-200/70 dark:bg-orange-300/40 blur-sm z-0 pointer-events-none" />

            {/* User-provided cutout image (PNG/SVG/JPG) */}
            <div className="absolute inset-0 p-4 z-20">
              <div className="relative h-full w-full">
                <Image
                  src={(profile as any).image || "/images/hero-portrait.svg"}
                  alt={(profile as any).alt || "Portrait"}
                  fill
                  priority
                  className="object-contain [background:transparent!important]"
                  sizes="(min-width: 1024px) 420px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
