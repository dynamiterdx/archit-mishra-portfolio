"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid items-center gap-12 md:grid-cols-2">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto h-64 w-64 sm:h-80 sm:w-80 rounded-[32px] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-[2px] shadow-2xl"
          >
            <div className="h-full w-full rounded-[30px] bg-white grid place-items-center">
              <div className="text-center px-6">
                <div className="text-6xl">🤖</div>
                <div className="mt-2 font-semibold">Generative AI</div>
                <div className="text-sm text-zinc-500">RAG · Agents · Vision · MLOps</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

