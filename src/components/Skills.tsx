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
  { name: "LangChain & LangGraph", level: 92, Icon: SiOpenai },
  { name: "Python & Flask APIs", level: 96, Icon: SiPython },
  { name: "Azure OpenAI & Cognitive Services", level: 90, Icon: FaCloud },
  { name: "Airflow · Databricks Pipelines", level: 85, Icon: SiApacheairflow },
  { name: "Power BI & Power Platform", level: 82, Icon: FaChartSimple },
  { name: "Azure DevOps & CI/CD", level: 80, Icon: FaGears },
];

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
                  <span className="text-sm text-zinc-400">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-orange-600"
                  />
                </div>
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
