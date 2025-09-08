import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import type { Project } from "@/components/ProjectCard";
import { slugify } from "@/lib/slug";
import Image from "next/image";

export function generateStaticParams() {
  return (projects as Project[]).map((p) => ({ slug: p.slug ?? slugify(p.title) }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const all = projects as Project[];
  const project = all.find((p) => (p.slug ?? slugify(p.title)) === slug);
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

            {project.tags && project.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/10 ring-1 ring-white/15 px-2.5 py-1 text-white/90">{t}</span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={project.repo} target="_blank" className="rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-2 font-medium hover:bg-white/15">GitHub Repo</Link>
              {project.demoUrl && (
                <Link href={project.demoUrl} target="_blank" className="rounded-full bg-orange-600 text-white px-4 py-2 font-medium hover:bg-orange-700">Live Demo</Link>
              )}
            </div>
          </div>

          {/* Demo / Cover space */}
          <div className="bg-black/30">
            <div className="mx-auto max-w-5xl p-4 sm:p-6">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 aspect-video bg-zinc-950">
                {project.demoUrl ? (
                  <iframe src={project.demoUrl} className="absolute inset-0 h-full w-full" title={`${project.title} demo`} />
                ) : project.cover ? (
                  <Image src={project.cover} alt={`${project.title} cover`} fill className="object-cover" />
                ) : (
                  <div className="grid h-full w-full place-items-center text-white/60 text-sm">Demo space</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About + Skills */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold">About this project</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">{project.about || project.description}</p>
          </div>
          <div>
            <div className="rounded-2xl ring-1 ring-zinc-200 p-4">
              <h3 className="font-semibold">Skills & Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(project.tags || []).map((t) => (
                  <span key={t} className="text-xs rounded-full bg-zinc-100 ring-1 ring-zinc-200 px-2.5 py-1 text-zinc-700">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

