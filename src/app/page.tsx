import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ConnectBanner from "@/components/ConnectBanner";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home() {
  const featured = await getFeaturedProjects();
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <ProjectsShowcase projects={featured} />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-zinc-900 text-white p-8 sm:p-10 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Why partner with me?</h3>
              <p className="mt-2 text-zinc-300">
                I help auditors and operators trust GenAI in production&mdash;shipping measurable wins while keeping governance, privacy, and uptime front and center.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-3xl font-extrabold text-orange-400">4K+</div>
                <div className="text-zinc-300 text-sm">Hours saved yearly</div>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-3xl font-extrabold text-orange-400">$13M</div>
                <div className="text-zinc-300 text-sm">Leakage recovered</div>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-3xl font-extrabold text-orange-400">99.8%</div>
                <div className="text-zinc-300 text-sm">Evaluated accuracy</div>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-3xl font-extrabold text-orange-400">130</div>
                <div className="text-zinc-300 text-sm">Markets supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConnectBanner />
    </div>
  );
}
