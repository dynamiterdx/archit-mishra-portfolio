import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ConnectBanner from "@/components/ConnectBanner";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <ProjectsShowcase />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-zinc-900 text-white p-8 sm:p-10 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Why hire me?</h3>
              <p className="mt-2 text-zinc-300">I combine product sense with rigorous ML, and I ship. From data to delightful user experience.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-white/5 p-4"><div className="text-3xl font-extrabold text-orange-400">10x</div><div className="text-zinc-300 text-sm">Delivery velocity</div></div>
              <div className="rounded-xl bg-white/5 p-4"><div className="text-3xl font-extrabold text-orange-400">+40%</div><div className="text-zinc-300 text-sm">Conversion uplift</div></div>
              <div className="rounded-xl bg-white/5 p-4"><div className="text-3xl font-extrabold text-orange-400">99.9%</div><div className="text-zinc-300 text-sm">Service uptime</div></div>
              <div className="rounded-xl bg-white/5 p-4"><div className="text-3xl font-extrabold text-orange-400">SOTA</div><div className="text-zinc-300 text-sm">Benchmarks</div></div>
            </div>
          </div>
        </div>
      </section>
      <ConnectBanner />
    </div>
  );
}
