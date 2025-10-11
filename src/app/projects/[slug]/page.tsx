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
        <div className="mt-6 rounded-3xl bg-zinc-900 text-white ring-1 ring-white/10 px-6 py-6 sm:px-8 sm:py-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{project.title}</h1>
          {project.subtitle && (
            <p className="mt-2 text-white/70 max-w-2xl">{project.subtitle}</p>
          )}
        </div>

        {/* Hero layout */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
          {/* Main visual */}
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-zinc-200 bg-zinc-50">
            {project.demoUrl ? (
              <iframe src={project.demoUrl} className="absolute inset-0 h-full w-full" title={`${project.title} demo`} />
            ) : project.cover ? (
              <Image src={project.cover} alt={`${project.title} cover`} fill className="object-cover" />
            ) : (
              <div className="grid h-full w-full place-items-center text-zinc-500 text-sm">Demo space</div>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-orange-600 text-white px-5 py-3 font-semibold shadow-lg hover:bg-orange-500"
              >
                <span>Live demo</span>
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>

          {/* Right: Quick snapshot */}
          <div className="space-y-5">
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Project snapshot</h2>
            {project.summary && (
              <p className="mt-3 text-zinc-700 leading-relaxed">{project.summary}</p>
            )}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-zinc-100 ring-1 ring-zinc-200 px-2.5 py-1 text-zinc-700">{t}</span>
                ))}
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-600">
              {project.repo && (
                <Link href={project.repo} target="_blank" className="inline-flex items-center gap-2 rounded-full ring-1 ring-zinc-300 px-4 py-2 font-medium hover:bg-zinc-50">
                  <span>Source</span>
                  <span aria-hidden>↗</span>
                </Link>
              )}
            </div>
            </div>

            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Skills flexed</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li>Azure OpenAI prompt engineering with JSON schema responses</li>
                <li>Next.js 15 App Router UI + accessibility-first interactions</li>
                <li>Adaptive learning logic: diagnostics, drift control, and retry flows</li>
                <li>PromptOps harness for regression testing evaluation suites</li>
              </ul>
            </div>
          </div>

          {/* Full-width detail */}
          <div className="lg:col-span-3 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="prose prose-zinc max-w-5xl">
                {project.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
