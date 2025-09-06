import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  repo: string;
  demoUrl?: string;
  tags?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl bg-white ring-1 ring-zinc-100 shadow-sm overflow-hidden">
      <div className="p-5">
        <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">{project.title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{project.description}</p>
        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs rounded-full bg-zinc-100 px-2 py-1 text-zinc-600">{t}</span>
            ))}
          </div>
        )}
        <div className="mt-4 flex gap-3">
          <Link href={project.repo} target="_blank" className="text-sm font-medium text-zinc-700 hover:text-orange-600">GitHub →</Link>
          {project.demoUrl && (
            <Link href={`?demo=${encodeURIComponent(project.title)}`} scroll={false} className="text-sm font-medium text-zinc-700 hover:text-orange-600">Open Demo</Link>
          )}
        </div>
      </div>
      {project.demoUrl && (
        <div className="border-t border-zinc-100">
          <iframe src={project.demoUrl} className="w-full h-60" title={`${project.title} demo`} />
        </div>
      )}
    </div>
  );
}

