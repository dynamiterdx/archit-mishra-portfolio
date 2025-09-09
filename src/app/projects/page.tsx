import ProjectCard from "@/components/ProjectCard";
import { getAllProjectsMeta } from "@/lib/projects";

export const metadata = {
  title: "Projects · GenAI DS",
};

export default async function ProjectsPage() {
  const all = await getAllProjectsMeta();
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold">Project Demos</h1>
        <p className="text-zinc-600 mt-2">Rendered from MDX files under <code className="bg-zinc-100 px-1 py-0.5 rounded">content/projects</code>.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {all.map((p, i) => (
            <ProjectCard key={i} project={{
              title: p.title,
              description: p.summary || "",
              summary: p.summary,
              repo: p.repo || "",
              tags: p.tags,
              cover: p.cover,
              slug: p.slug,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
