export type Photo = {
  // Public URL to the image (Supabase or local under /public)
  src: string;
  // Optional human-friendly unique id/slug
  id?: string;
  title?: string;
  caption?: string;
  description?: string;
  location?: string;
  album?: string;
  tags?: string[];
  // ISO date string for when the photo was taken
  date?: string;
};

import Image from "next/image";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <figure className="rounded-xl overflow-hidden ring-1 ring-zinc-100 bg-white">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={photo.src}
          alt={photo.title || photo.caption || photo.location || "Photo"}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          unoptimized={/^https?:\/\//.test(photo.src)}
        />
      </div>
      {(photo.title || photo.caption || photo.location) && (
        <figcaption className="p-3 text-sm">
          <div className="grid grid-cols-[16px,1fr] gap-x-2">
            {photo.title && (
              <div className="col-start-2 font-medium">{photo.title}</div>
            )}
            {photo.caption && (
              <div className="col-start-2 text-zinc-600">{photo.caption}</div>
            )}
            {photo.location && (
              <>
                <div className="mt-1 flex items-start justify-center text-zinc-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mt-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 3.84a6.75 6.75 0 0 1 8.69 8.69l-5.41 9.41a2.25 2.25 0 0 1-3.86 0l-5.41-9.41a6.75 6.75 0 0 1 6-8.28Zm2.28 6.66a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-1 text-zinc-500">{photo.location}</div>
              </>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
