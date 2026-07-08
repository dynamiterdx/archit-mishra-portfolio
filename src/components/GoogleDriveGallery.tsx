"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { DrivePhoto } from "@/lib/google-drive";

type GalleryResponse = {
  photos?: DrivePhoto[];
  error?: {
    code?: string;
    message?: string;
  };
};

type GalleryState =
  | { status: "loading"; photos: DrivePhoto[]; message?: undefined }
  | { status: "ready"; photos: DrivePhoto[]; message?: undefined }
  | { status: "empty"; photos: DrivePhoto[]; message: string }
  | { status: "error"; photos: DrivePhoto[]; message: string };

function LoadingGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="aspect-[4/3] animate-pulse rounded-xl bg-zinc-100 ring-1 ring-zinc-100"
        />
      ))}
    </div>
  );
}

function GalleryNotice({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">{message}</p>
    </div>
  );
}

export default function GoogleDriveGallery() {
  const [state, setState] = useState<GalleryState>({
    status: "loading",
    photos: [],
  });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPhotos() {
      try {
        const response = await fetch("/api/drive/photos", { cache: "no-store" });
        const data = (await response.json()) as GalleryResponse;

        if (cancelled) return;

        if (!response.ok) {
          setState({
            status: "error",
            photos: [],
            message:
              data.error?.message ||
              "The Google Drive photography folder could not be loaded.",
          });
          return;
        }

        const photos = data.photos || [];
        setState(
          photos.length
            ? { status: "ready", photos }
            : {
                status: "empty",
                photos: [],
                message: "The configured Google Drive folder does not contain image files.",
              }
        );
      } catch {
        if (!cancelled) {
          setState({
            status: "error",
            photos: [],
            message: "The Google Drive photography folder could not be loaded.",
          });
        }
      }
    }

    loadPhotos();
    return () => {
      cancelled = true;
    };
  }, []);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null || state.photos.length === 0
        ? index
        : (index - 1 + state.photos.length) % state.photos.length
    );
  }, [state.photos.length]);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null || state.photos.length === 0
        ? index
        : (index + 1) % state.photos.length
    );
  }, [state.photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  const activePhoto = useMemo(
    () => (activeIndex === null ? null : state.photos[activeIndex] || null),
    [activeIndex, state.photos]
  );

  if (state.status === "loading") return <LoadingGrid />;

  if (state.status === "error") {
    return <GalleryNotice title="Photography is not available" message={state.message} />;
  }

  if (state.status === "empty") {
    return <GalleryNotice title="No photos found" message={state.message} />;
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {state.photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-100 text-left ring-1 ring-zinc-100 transition hover:ring-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label={`Open photo ${index + 1}`}
          >
            <Image
              src={photo.thumbnailUrl}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
              unoptimized={photo.thumbnailUrl.startsWith("http")}
            />
          </button>
        ))}
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-2xl leading-none text-white ring-1 ring-white/20 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Close photo viewer"
          >
            ×
          </button>

          {state.photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-3xl leading-none text-white ring-1 ring-white/20 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:left-5"
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-3xl leading-none text-white ring-1 ring-white/20 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:right-5"
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          )}

          <div className="relative h-[88vh] w-full max-w-6xl">
            <Image
              src={activePhoto.imageUrl}
              alt={`Photo ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
