import GoogleDriveGallery from "@/components/GoogleDriveGallery";

export const metadata = { title: "Photography · GenAI DS" };

export default function PhotographyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold">Photography</h1>
        <p className="mt-2 max-w-2xl text-zinc-600">
          A live collection pulled from my public Google Drive photography folder.
        </p>

        <div className="mt-8">
          <GoogleDriveGallery />
        </div>
      </div>
    </div>
  );
}
