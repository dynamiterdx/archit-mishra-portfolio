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
          {photo.title && <div className="font-medium">{photo.title}</div>}
          {photo.caption && <div className="text-zinc-600">{photo.caption}</div>}
          {photo.location && (
            <div className="text-zinc-500 mt-1">{photo.location}</div>
          )}
        </figcaption>
      )}
    </figure>
  );
}
