"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { SiApacheairflow, SiOpenai, SiPython } from "react-icons/si";
import {
  FaChartSimple,
  FaCloud,
  FaGears,
  FaRegCompass,
  FaVial,
  FaCameraRetro,
} from "react-icons/fa6";

type Skill = { name: string; level: number; Icon: IconType };

const skills: Skill[] = [
  { name: "LangChain · LangGraph · Prompt Ops", level: 5, Icon: FaRegCompass },
  { name: "Azure OpenAI · Hugging Face · Vector DBs", level: 4, Icon: FaCloud },
  { name: "Python · Flask · Next.js", level: 5, Icon: SiPython },
  { name: "PyTorch · Keras · TensorFlow", level: 4, Icon: FaVial },
  { name: "Airflow · Databricks · PySpark", level: 4, Icon: SiApacheairflow },
  { name: "Azure DevOps · Docker · CI/CD", level: 3, Icon: FaGears },
  { name: "Power BI · Power Platform · Azure Analysis", level: 3, Icon: FaChartSimple },
];

function SkillMeter({ level }: { level: number }) {
  const totalSegments = 5;
  const activeSegments = Math.min(Math.max(level, 0), totalSegments);
  const palette = ["bg-orange-500", "bg-orange-400", "bg-orange-300", "bg-orange-200", "bg-orange-100"];

  return (
    <div className="flex gap-2">
      {Array.from({ length: totalSegments }).map((_, idx) => {
        const isActive = idx < activeSegments;
        const color = isActive ? palette[idx] : "bg-zinc-700";
        return (
          <div
            key={idx}
            className={`h-2.5 flex-1 rounded-full transition-colors ${color}`}
          />
        );
      })}
    </div>
  );
}

type SkillStory = {
  Icon: IconType;
  title: string;
  caption: string;
  highlights: string[];
};

const skillStories: SkillStory[] = [
  {
    Icon: FaRegCompass,
    title: "Agent Lab",
    caption: "Prototyping multi-agent flows that reason, debate, and self-heal.",
    highlights: [
      "LangGraph experiment harness with visual state playback.",
      "Custom tool registry for search, policy lookup, and SQL drafting.",
      "Red-team pack that stress tests hallucinations and tool misuse.",
    ],
  },
  {
    Icon: FaVial,
    title: "Evaluation Bench",
    caption: "Keeping prompts and agents honest with measurable yardsticks.",
    highlights: [
      "PromptOps Lab CLI for reproducible regression suites.",
      "LLM-as-a-judge plus rule-based guardrails wired into CI.",
      "Latency + cost profilers for multi-model comparison charts.",
    ],
  },
  {
    Icon: FaCameraRetro,
    title: "Creative Stack",
    caption: "Blending photography, audio, and narrative generation.",
    highlights: [
      "Automated photo metadata + story weaving with Lens to Language.",
      "Realtime Ableton bridge for generating ambient loops per scene.",
      "Microsite generator that ships zines, captions, and share cards.",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 pt-4 sm:pt-6 pb-16 sm:pb-24 text-white bg-gradient-to-b from-[#1b1b1d] to-[#111112]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold">Resume & Skills</h2>
        <p className="text-zinc-300 mt-2">
          Beyond client work, I maintain a sandbox of agents, evaluation harnesses, and creative pipelines to keep my skills sharp.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {skills.map((s) => (
              <div key={s.name} className="">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2"><s.Icon className="text-zinc-300" /><span className="font-medium">{s.name}</span></div>
                </div>
                <SkillMeter level={s.level} />
              </div>
            ))}
          </div>

          <div className="relative pl-6">
            <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-orange-900/40" />
            <ul className="space-y-6">
              {skillStories.map((story, i) => (
                <motion.li
                  key={story.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 rounded-xl shadow-sm ring-1 ring-white/10 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white">
                      <story.Icon />
                    </span>
                    <div>
                      <div className="font-semibold">{story.title}</div>
                      <div className="text-sm text-zinc-400">{story.caption}</div>
                    </div>
                  </div>
                  <ul className="list-disc ml-5 mt-3 text-sm text-zinc-300 space-y-1">
                    {story.highlights.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
