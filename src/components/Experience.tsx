import { Fragment } from "react";

export default function Experience() {
  const roles = [
    {
      company: "AB InBev · Global Risk Management",
      location: "Bengaluru, India",
      period: "Feb 2024 - Present",
      role: "Data Scientist · IntelX Audit Copilot",
      achievements: [
        "Led a 3-5 person squad to design and deliver IntelX, an audit-grade agentic copilot running on Azure microservices.",
        "Shaped GDPR-compliant retrieval across 130 markets - scrubbing PII while orchestrating LangGraph workflows over 1TB+ of evidence.",
        "Onboarded 100+ auditors, sustaining 3K+ monthly questions at 99.8% evaluated accuracy and saving ~4K people-hours every year.",
      ],
      current: true,
    },
    {
      company: "AB InBev · Global Procurement Audits",
      location: "Bengaluru + global S2P teams",
      period: "Jun 2023 - Feb 2024",
      role: "Data Scientist · Source-to-Pay Analytics",
      achievements: [
        "Built GenAI anomaly detection using policy-grounded LLM reasoning on $500M+ Source-to-Pay transactions.",
        "Recovered $13M in leakage spanning payment-term mismatches, early-payment costs, credit recoveries, and contract gaps.",
        "Accelerated continent-spanning audits by packaging finance, policy, and operations signals into actionable briefs within days.",
      ],
    },
    {
      company: "AB InBev · Global Inventory Analytics",
      location: "Bengaluru, India",
      period: "Aug 2022 - Jun 2023",
      role: "Associate Data Scientist · Supply Chain",
      achievements: [
        "Automated SAP RFC → Python → Airflow → Azure Analysis Services pipelines covering $7B in global inventory.",
        "Identified surplus and overbuy trends that unlocked $1B reduction and $60M working-capital recovery.",
        "Delivered executive-ready KPI dashboards and forecast packs that anchored monthly SteerCo decisions.",
      ],
    },
  ];

  return (
    <section id="resume" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold">
          Audit<span className="text-orange-600">-Grade</span> Experience
        </h2>

        <div className="relative mt-12">
          {/* full-height dashed line centered */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 hidden md:block">
            <div className="h-full w-0.5 border-l-2 border-dashed border-zinc-300" />
          </div>

          <div className="grid md:grid-cols-[1fr_48px_1fr] gap-x-8 gap-y-12">
            {roles.map((row, i) => (
              <Fragment key={row.role}>
                <div className="">
                  <div className="text-2xl font-semibold text-zinc-800">{row.company}</div>
                  <div className="text-sm text-zinc-500">{row.location}</div>
                  <div className="text-zinc-500">{row.period}</div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full border-2 border-dashed border-zinc-400" />
                    <span className={`block h-4 w-4 rounded-full ${row.current ? "bg-orange-500" : "bg-zinc-900"}`} />
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl font-semibold text-zinc-800">{row.role}</div>
                  <ul className="mt-3 space-y-2 text-zinc-500 max-w-[46ch] list-disc ml-5">
                    {row.achievements.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
