import ProjectCard, { Project } from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export const metadata = {
  title: "Projects · GenAI DS",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold">Project Demos</h1>
        <p className="text-zinc-600 mt-2">Each card has a description, repo link, and optional working demo space (iframe). Edit the JSON in <code className="bg-zinc-100 px-1 py-0.5 rounded">src/data/projects.json</code>.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {(projects as Project[]).map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

