"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { SiPython, SiPytorch, SiTensorflow, SiNextdotjs, SiOpenai } from "react-icons/si";

type Skill = { name: string; level: number; Icon: IconType };

const skills: Skill[] = [
  { name: "Python", level: 95, Icon: SiPython },
  { name: "PyTorch", level: 85, Icon: SiPytorch },
  { name: "TensorFlow", level: 75, Icon: SiTensorflow },
  { name: "LLMs/OpenAI", level: 90, Icon: SiOpenai },
  { name: "Next.js", level: 80, Icon: SiNextdotjs },
];

const experiences = [
  { title: "GenAI Data Scientist", org: "Your Company", time: "2023 — Present", points: ["Built RAG platform", "Productionized agent automation"] },
  { title: "ML Engineer", org: "Prev Company", time: "2021 — 2023", points: ["Deployed models at scale", "Led A/B experiments"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 text-white bg-gradient-to-b from-[#1b1b1d] to-[#111112]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold">Resume & Skills</h2>
        <p className="text-zinc-300 mt-2">Brief, animated overview—edit freely to match your profile.</p>

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
              {experiences.map((e, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 rounded-xl shadow-sm ring-1 ring-white/10 p-4"
                >
                  <div className="font-semibold">{e.title}</div>
                  <div className="text-sm text-zinc-400">{e.org} • {e.time}</div>
                  <ul className="list-disc ml-5 mt-2 text-sm text-zinc-300 space-y-1">
                    {e.points.map((p, j) => <li key={j}>{p}</li>)}
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
