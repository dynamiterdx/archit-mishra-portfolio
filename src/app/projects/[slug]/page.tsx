import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectsMeta, getProjectBySlug } from "@/lib/projects";
import Image from "next/image";

export async function generateStaticParams() {
  const all = await getAllProjectsMeta();
  return all.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link href="/projects" className="text-sm text-zinc-600 hover:text-zinc-800">← Back to Projects</Link>

        {/* Header block */}
        <div className="mt-4 rounded-3xl bg-zinc-900 text-white ring-1 ring-white/10 overflow-hidden">
          <div className="p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{project.title}</h1>
            {project.subtitle && (
              <p className="mt-2 text-white/70">{project.subtitle}</p>
            )}
          </div>
        </div>

        {/* Demo + Description side-by-side */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Left: Demo with skills + links below */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-zinc-200 aspect-video bg-zinc-50">
              {project.demoUrl ? (
                <iframe src={project.demoUrl} className="absolute inset-0 h-full w-full" title={`${project.title} demo`} />
              ) : project.cover ? (
                <Image src={project.cover} alt={`${project.title} cover`} fill className="object-cover" />
              ) : (
                <div className="grid h-full w-full place-items-center text-zinc-500 text-sm">Demo space</div>
              )}
            </div>

            <div className="rounded-2xl ring-1 ring-zinc-200 p-4">
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-zinc-100 ring-1 ring-zinc-200 px-2.5 py-1 text-zinc-700">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-3">
                {project.repo && (
                  <Link href={project.repo} target="_blank" className="rounded-full ring-1 ring-zinc-300 px-4 py-2 font-medium hover:bg-zinc-50">GitHub Repo</Link>
                )}
                {project.demoUrl && (
                  <Link href={project.demoUrl} target="_blank" className="rounded-full bg-orange-600 text-white px-4 py-2 font-medium hover:bg-orange-700">Live Demo</Link>
                )}
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div>
            <div className="rounded-2xl ring-1 ring-zinc-200 p-5">
              <h2 className="text-xl font-semibold">About this project</h2>
              {project.summary && (
                <p className="mt-3 text-zinc-700 leading-relaxed">{project.summary}</p>
              )}
              <div className="prose prose-zinc max-w-none mt-6">
                {project.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
