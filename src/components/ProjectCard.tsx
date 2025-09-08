import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/slug";

export type Project = {
  title: string;
  description: string;
  repo: string;
  demoUrl?: string;
  tags?: string[];
  slug?: string;
  subtitle?: string;
  cover?: string;
  about?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const slug = project.slug ?? slugify(project.title);
  return (
    <div className="group rounded-2xl bg-white ring-1 ring-zinc-100 shadow-sm overflow-hidden">
      {/* Cover image */}
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative w-full aspect-[16/9]">
          <Image src={project.cover || "/images/prj-1.svg"} alt={`${project.title} cover`} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/projects/${slug}`} className="block">
          <h3 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">{project.title}</h3>
        </Link>
        {project.tags && project.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs rounded-full bg-zinc-100 ring-1 ring-zinc-200 px-2 py-1 text-zinc-600">{t}</span>
            ))}
          </div>
        )}
        <p className="mt-3 text-sm text-zinc-600 line-clamp-3">{project.description}</p>
        <div className="mt-4 flex gap-3">
          <Link href={`/projects/${slug}`} className="text-sm font-medium text-zinc-700 hover:text-orange-600">Details →</Link>
          <Link href={project.repo} target="_blank" className="text-sm font-medium text-zinc-700 hover:text-orange-600">GitHub →</Link>
          {project.demoUrl && (
            <Link href={`?demo=${encodeURIComponent(project.title)}`} scroll={false} className="text-sm font-medium text-zinc-700 hover:text-orange-600">Open Demo</Link>
          )}
        </div>
      </div>
    </div>
  );
}
