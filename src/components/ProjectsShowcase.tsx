"use client";
import Link from "next/link";
import projects from "@/data/projects.json";
import { FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

type P = {
  title: string;
  description: string;
  repo: string;
  demoUrl?: string;
  tags?: string[];
};

const thumbs = [
  "/images/prj-1.svg",
  "/images/prj-2.svg",
  "/images/prj-3.svg",
];

export default function ProjectsShowcase() {
  const list = (projects as P[]).slice(0, 12);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const scrollBy = (dir: 1 | -1) => () => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const computePages = () => {
      const c = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth - 0.0001));
      setPageCount(c);
      const p = Math.round(el.scrollLeft / el.clientWidth);
      setPage(Math.min(c - 1, Math.max(0, p)));
    };

    computePages();
    const onScroll = () => computePages();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(computePages);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(1200px_600px_at_20%_20%,#0b0b0b,transparent),radial-gradient(900px_600px_at_80%_10%,#141414,transparent)] text-white ring-1 ring-white/10">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-amber-300/25 blur-3xl" />

          <div className="px-6 sm:px-10 pt-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="text-3xl font-extrabold">My <span className="text-orange-500">Projects</span></h2>
              <p className="max-w-xl text-sm text-white/70">
                A rotating selection of GenAI/Data Science projects. Click the arrow on any tile to view the repo, or see all on the Projects page.
              </p>
            </div>
          </div>

          <div className="px-4 sm:px-8 pb-10 mt-6 relative">
            {/* Scroll buttons */}
            <button onClick={scrollBy(-1)} aria-label="Scroll left" className="hidden md:grid absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/20"> 
              <FaChevronLeft className="text-white" />
            </button>
            <button onClick={scrollBy(1)} aria-label="Scroll right" className="hidden md:grid absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/20"> 
              <FaChevronRight className="text-white" />
            </button>

            <div ref={scrollerRef} className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 sm:scroll-px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-6">
              {list.map((p, i) => (
                <article key={p.title} className="relative overflow-hidden rounded-[24px] bg-white/5 ring-1 ring-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] shrink-0 snap-start w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px]">
                  {/* frosted frame lines */}
                  <div className="absolute inset-0 rounded-[24px] pointer-events-none">
                    <div className="absolute inset-3 rounded-[20px] ring-1 ring-white/15" />
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm md:text-base font-semibold drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">{p.title}</h3>
                    <p className="mt-1 text-xs md:text-[13px] text-white/70 line-clamp-2">{p.description}</p>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-[5/4]">
                      <img src={thumbs[i%thumbs.length]} alt="project preview" className="h-full w-full object-cover" />
                    </div>
                  </div>

                  <Link href={p.repo} target="_blank" className="group absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition">
                    <FaArrowUpRightFromSquare className="text-white text-lg" />
                  </Link>
                </article>
              ))}
            </div>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />

            {/* Dots reflecting scroll position */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <span
                  key={i}
                  className={`${i === page ? "w-10 bg-orange-500" : "w-1.5 bg-white/40"} h-1.5 rounded-full transition-all`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
