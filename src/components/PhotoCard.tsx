export type Photo = {
  src: string;
  title?: string;
  caption?: string;
};

import Image from "next/image";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <figure className="rounded-xl overflow-hidden ring-1 ring-zinc-100 bg-white">
      <div className="relative w-full aspect-[4/3]">
        <Image src={photo.src} alt={photo.title || photo.caption || "Photo"} fill className="object-cover" />
      </div>
      {(photo.title || photo.caption) && (
        <figcaption className="p-3 text-sm">
          {photo.title && <div className="font-medium">{photo.title}</div>}
          {photo.caption && <div className="text-zinc-600">{photo.caption}</div>}
        </figcaption>
      )}
    </figure>
  );
}
