import PhotoCard, { Photo } from "@/components/PhotoCard";
import photos from "@/data/photos.json";

export const metadata = { title: "Photography · GenAI DS" };

export default function PhotographyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold">Photography</h1>
        <p className="text-zinc-600 mt-2">Curate images and captions in <code className="bg-zinc-100 px-1 py-0.5 rounded">src/data/photos.json</code>. Drag in your files under <code className="bg-zinc-100 px-1 py-0.5 rounded">public/images</code>.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(photos as Photo[]).map((p, i) => (
            <PhotoCard key={i} photo={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

