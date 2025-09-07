export default function Experience() {
  const left = [
    { company: "Cognizant, Mumbai", period: "Sep 2016 – Jul 2020" },
    { company: "Sugee Pvt Ltd, Mumbai", period: "Sep 2020 – Jul 2023" },
    { company: "Cinestox, Mumbai", period: "Sep 2023" },
  ];
  const right = [
    { role: "Experience Designer", desc: "Led cross‑functional work to deliver measurable UX wins." },
    { role: "UI/UX Designer", desc: "End‑to‑end design with research, prototyping and handoff." },
    { role: "Lead UX Designer", desc: "Mentored team; set patterns and design system foundations." },
  ];

  const rows = left.map((l, i) => ({ left: l, right: right[i] }));

  return (
    <section id="resume" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold">
          My <span className="text-orange-600">Work</span> Experience
        </h2>

        <div className="relative mt-12">
          {/* full-height dashed line centered */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 hidden md:block">
            <div className="h-full w-0.5 border-l-2 border-dashed border-zinc-300" />
          </div>

          <div className="grid md:grid-cols-[1fr_48px_1fr] gap-x-8 gap-y-12">
            {rows.map((row, i) => (
              <>
                <div key={`l-${i}`} className="">
                  <div className="text-2xl font-semibold text-zinc-800">{row.left.company}</div>
                  <div className="text-zinc-500">{row.left.period}</div>
                </div>
                <div key={`c-${i}`} className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full border-2 border-dashed border-zinc-400" />
                    <span className={`block h-4 w-4 rounded-full ${i===1? 'bg-zinc-900':'bg-orange-500'}`} />
                  </div>
                </div>
                <div key={`r-${i}`} className="">
                  <div className="text-2xl font-semibold text-zinc-800">{row.right.role}</div>
                  <p className="text-zinc-500 max-w-[46ch]">{row.right.desc}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
