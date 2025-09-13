"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profileJson from "@/data/profile.json" assert { type: "json" };

type Profile = {
  image?: string;
  alt?: string;
};

const profile = profileJson as Profile;

function QuoteBlock() {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-[360px] rounded-2xl bg-white/70 dark:bg-white/5 ring-1 ring-zinc-200/60 dark:ring-white/10 p-5 shadow-sm backdrop-blur-sm"
    >
      <span
        aria-hidden
        className="absolute -left-3 -top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 ring-1 ring-orange-500/20"
      >
        <span className="text-2xl leading-none">“</span>
      </span>
      <p className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white">
        I build intelligent products with LLMs and data.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        Specializing in RAG, agents, prompt engineering and full‑stack ML systems. I love shipping delightful, measurable experiences.
      </p>
    </motion.blockquote>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="relative mx-auto h-[520px] sm:h-[640px] lg:h-[720px] w-full max-w-[620px] sm:max-w-[720px] lg:max-w-[820px]"
      >
        {/* Background headline behind cutout (two lines like Jenny) */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          /*
           * Show the headline behind the cutout and ensure it has
           * strong contrast in both light and dark themes.
           *
           * - z-20 keeps it below the image (z-30) but above the arc (z-10)
           * - mix-blend-difference with white text auto-inverts on light bg
           *   so the headline stays visible in light mode too.
           */
          className="pointer-events-none select-none absolute top-[6%] left-1/2 -translate-x-1/2 z-20 text-center font-extrabold tracking-tight text-zinc-900 dark:text-white opacity-100 leading-[0.92] w-auto flex flex-col items-center gap-1"
        >
          <span className="block text-[clamp(2rem,5vw,3.5rem)] whitespace-nowrap">I’m Archit,</span>
          <span className="block text-[clamp(2rem,5vw,3.5rem)] whitespace-nowrap">Data Scientist</span>
        </motion.div>

        {/* Orange arc behind the hero (true semicircle via SVG; keeps perfect 2:1 ratio) */}
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-[135%] lg:w-[150%] aspect-[2/1] z-10 pointer-events-none"
        >
          <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMax meet" className="w-full h-full">
            <path d="M0,100 A100,100 0 0 1 200,100 L200,100 L0,100 Z" fill="#fbbf24" />
          </svg>
        </div>

        {/* Cutout image */}
        <div className="absolute inset-0 z-30 translate-y-6 sm:translate-y-8 lg:translate-y-10">
          <div className="relative h-full w-full">
            <Image
              src={profile.image || "/images/hero-portrait.svg"}
              alt={profile.alt || "Portrait"}
              fill
              priority
              className="object-contain object-bottom origin-bottom scale-[1.18] sm:scale-[1.22] lg:scale-[1.28] [background:transparent!important]"
              sizes="(min-width: 1024px) 520px, 90vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Buttons centered under the cutout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-4 -translate-y-2 flex flex-col sm:flex-row items-center justify-center gap-3 z-[3] relative"
      >
        <Link href="/projects" className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          View Projects
        </Link>
        <a
          href="#skills"
          className="rounded-full px-5 py-3 font-medium ring-1 ring-zinc-300/70 dark:ring-white/15 bg-white/70 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Skills & Resume
        </a>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Removed ambient blob halos from the background */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-0">
        {/* Desktop layout: center visual; position quote absolutely on the left */}
        <div className="relative hidden lg:block">
          <HeroVisual />
          <div className="absolute left-0 top-8">
            <QuoteBlock />
          </div>
        </div>

        {/* Mobile/Tablet: stack quote then visual */}
        <div className="lg:hidden space-y-8">
          <div className="mx-auto max-w-[360px] pt-4">
            <QuoteBlock />
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
