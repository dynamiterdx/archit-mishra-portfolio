import PhotoGallery from "@/components/PhotoGallery";

export const metadata = { title: "Photography · GenAI DS" };

export default function PhotographyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold">Photography</h1>
        <p className="text-zinc-600 mt-2">
          Add or edit entries in <code className="bg-zinc-100 px-1 py-0.5 rounded">src/data/photos.json</code>.
          Images can be local (under <code className="bg-zinc-100 px-1 py-0.5 rounded">public/images</code>) or remote (e.g., Supabase public URLs).
        </p>

        <PhotoGallery />
      </div>
    </div>
  );
}
