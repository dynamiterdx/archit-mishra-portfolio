"use client";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/slug";
import type { ProjectMeta } from "@/lib/projects";
import { FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

type Props = { projects: ProjectMeta[] };

const thumbs = [
  "/images/prj-1.svg",
  "/images/prj-2.svg",
  "/images/prj-3.svg",
];

export default function ProjectsShowcase({ projects }: Props) {
  const list = projects.slice(0, 12);
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
                <article key={p.title} className="relative overflow-hidden rounded-[24px] bg-white/5 ring-1 ring-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] shrink-0 snap-start w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[380px]">
                  {/* frosted frame lines */}
                  <div className="absolute inset-0 rounded-[24px] pointer-events-none">
                    <div className="absolute inset-3 rounded-[20px] ring-1 ring-white/15" />
                  </div>

                  <div className="px-4 pt-4">
                    <div className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-[16/9]">
                      <Image src={p.cover || thumbs[i%thumbs.length]} alt="project preview" fill className="object-cover" />
                    </div>
                  </div>

                  <div className="px-4 pb-10">
                    <h3 className="mt-3 text-sm md:text-base font-semibold drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">{p.title}</h3>
                    {p.tags?.length ? (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.tags.slice(0,6).map((t) => (
                          <span key={t} className="text-[10px] md:text-xs rounded-full bg-white/10 ring-1 ring-white/15 px-2 py-0.5 text-white/90">{t}</span>
                        ))}
                      </div>
                    ) : null}
                    <p className="mt-2 text-xs md:text-[13px] text-white/70 line-clamp-2">{p.summary}</p>
                  </div>

                  {/* Full-card link to details (keeps repo button above) */}
                  <Link href={`/projects/${p.slug ?? slugify(p.title)}`} className="absolute inset-0 z-10" aria-label={`Open ${p.title} details`} />

                  <Link href={p.linkOut || `/projects/${p.slug ?? slugify(p.title)}`} target={p.linkOut ? "_blank" : undefined} className="group absolute bottom-3 right-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition">
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
