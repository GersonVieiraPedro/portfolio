"use client";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "SQL",
  "Azure",
  "Docker",
  "Git",
  "Power BI",
  "QlikView",
];

export default function SkillsCarousel() {
  return (
    <section className="relative w-full overflow-hidden border-y border-gray-200/10 py-6">
      {/* Gradientes laterais para criar o efeito de fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-[#08090d] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-[#0d1a23] to-transparent" />

      {/* Faixa animada */}
      <div className="flex w-max animate-[skills-scroll_25s_linear_infinite]">
        {/* Primeira sequência */}
        <div className="flex items-center gap-12 pr-12">
          {skills.map((skill) => (
            <Skill key={`first-${skill}`} name={skill} />
          ))}
        </div>

        {/* Segunda sequência */}
        <div className="flex items-center gap-12 pr-12">
          {skills.map((skill) => (
            <Skill key={`second-${skill}`} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-12 whitespace-nowrap">
      <span className="font-display text-2xl font-medium tracking-tight text-white/50 transition-colors duration-300 hover:text-white">
        {name}
      </span>

      <span className="h-1 w-1 rounded-full bg-white/30" />
    </div>
  );
}
