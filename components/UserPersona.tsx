import Image from "next/image";
import MotionSection from "./MotionSection";

const personas = [
  {
    name: "新手谨慎驾驶型",
    role: "经验较少、操作前需要明确确认的驾驶者",
    tags: ["低经验", "操作谨慎", "路线依赖"],
    need: "通过清晰导航、渐进式提示和关键操作确认，降低误操作担忧，帮助驾驶者建立稳定的控制感。",
    image: "/images/personas/novice-careful-ref.png",
  },
  {
    name: "新手谨慎型",
    role: "复杂路况下更关注安全边界的新手驾驶者",
    tags: ["风险规避", "环境敏感", "低干扰确认"],
    need: "强化道路边界、车距、限速和风险来源提示，用克制但明确的反馈减少不确定感。",
    image: "/images/personas/novice-careful-driving-ref.png",
  },
];

export default function UserPersona() {
  return (
    <MotionSection id="personas" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25" />
      <div className="pointer-events-none absolute left-[-6rem] top-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-emerald-200">03 User Persona</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">用户画像构建</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            画像不是简单的人群标签，而是由稳定驾驶特质、场景触发因素和 PAD 动态情绪共同构成的设计参照。它帮助 HMI 判断何时主动介入、何时保持克制。
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {personas.map((persona) => (
            <article
              key={persona.name}
              className="glass-panel rounded-lg p-6"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.045),rgba(16,185,129,0.12))]">
                <Image
                  src={persona.image}
                  alt={`${persona.name} 人物画像`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,7,11,0.42))]" />
              </div>
              <p className="text-sm text-slate-400">{persona.role}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{persona.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {persona.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{persona.need}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
