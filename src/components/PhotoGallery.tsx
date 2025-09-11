"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import PhotoCard, { Photo } from "@/components/PhotoCard";
import photosData from "@/data/photos.json";

type FilterState = {
  album: string;
  tag: string;
};

function uniqSorted(values: (string | undefined)[]): string[] {
  return Array.from(new Set(values.filter(Boolean) as string[])).sort(
    (a, b) => a.localeCompare(b)
  );
}

export default function PhotoGallery() {
  const photos = photosData as Photo[];

  const albums = useMemo(
    () => uniqSorted(photos.map((p) => p.album)),
    [photos]
  );
  const tags = useMemo(
    () => uniqSorted(photos.flatMap((p) => p.tags || [])),
    [photos]
  );

  const [filters, setFilters] = useState<FilterState>({ album: "All", tag: "All" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return photos.filter((p) => {
      const albumOk = filters.album === "All" || p.album === filters.album;
      const tagOk =
        filters.tag === "All" || (p.tags || []).includes(filters.tag);
      return albumOk && tagOk;
    });
  }, [photos, filters]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((idx) =>
      idx === null ? null : (idx - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((idx) =>
      idx === null ? null : (idx + 1) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <label className="text-sm text-zinc-600">
          <span className="mr-2">Album</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={filters.album}
            onChange={(e) => setFilters((f) => ({ ...f, album: e.target.value }))}
          >
            <option>All</option>
            {albums.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
        <label className="text-sm text-zinc-600">
          <span className="mr-2">Tag</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={filters.tag}
            onChange={(e) => setFilters((f) => ({ ...f, tag: e.target.value }))}
          >
            <option>All</option>
            {tags.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 text-zinc-500">No photos match these filters.</div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <button
              key={(p.id || p.src) + i}
              onClick={() => openLightbox(i)}
              className="text-left"
              aria-label={`Open ${p.title || p.caption || "photo"}`}
            >
              <PhotoCard photo={p} />
            </button>
          ))}
        </div>
      )}

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          photos={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const p = photos[index];
  if (!p) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-white/80 hover:text-white"
      >
        ✕
      </button>
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl"
      >
        ‹
      </button>
      <div className="w-full max-w-5xl">
        <div className="relative w-full aspect-[4/3] bg-black/20">
          <Image
            src={p.src}
            alt={p.title || p.caption || p.location || "Photo"}
            fill
            className="object-contain"
            loading="eager"
            sizes="100vw"
            priority
            unoptimized={/^https?:\/\//.test(p.src)}
          />
        </div>
        <div className="mt-4 text-white/90 text-sm">
          {(p.title || p.caption) && (
            <div className="mb-1">
              {p.title && <div className="text-base font-medium">{p.title}</div>}
              {p.caption && <div className="text-white/80">{p.caption}</div>}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-3">
            {p.location && (
              <span className="px-2 py-1 rounded bg-white/10 inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 3.84a6.75 6.75 0 0 1 8.69 8.69l-5.41 9.41a2.25 2.25 0 0 1-3.86 0l-5.41-9.41a6.75 6.75 0 0 1 6-8.28Zm2.28 6.66a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                {p.location}
              </span>
            )}
            {p.album && (
              <span className="px-2 py-1 rounded bg-white/10">Album: {p.album}</span>
            )}
            {p.date && (
              <span className="px-2 py-1 rounded bg-white/10">{new Date(p.date).toLocaleDateString()}</span>
            )}
            {p.tags && p.tags.length > 0 && (
              <span className="flex flex-wrap gap-1 items-center">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded bg-white/10"
                  >
                    #{t}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={onNext}
        aria-label="Next"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-2xl"
      >
        ›
      </button>
    </div>
  );
}
