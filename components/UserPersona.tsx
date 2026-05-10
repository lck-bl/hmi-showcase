import { BriefcaseBusiness, Compass, Radar } from "lucide-react";
import MotionSection from "./MotionSection";

const personas = [
  {
    name: "高压通勤型",
    role: "工作日早晚高峰驾驶者",
    tags: ["时间敏感", "拥堵焦虑", "高唤醒"],
    need: "降低等待不确定性，突出 ETA、拥堵原因与可执行路线选择。",
    Icon: BriefcaseBusiness,
  },
  {
    name: "谨慎安全型",
    role: "雨雾夜间更易紧张的驾驶者",
    tags: ["风险规避", "低能见度压力", "控制感需求"],
    need: "强化环境提示、车距反馈与辅助确认，减少不可见风险带来的失控感。",
    Icon: Radar,
  },
  {
    name: "易分心探索型",
    role: "对娱乐和新功能有较高兴趣的驾驶者",
    tags: ["娱乐偏好", "注意漂移", "反馈敏感"],
    need: "在关键任务中收敛入口，通过轻量提醒把注意力拉回驾驶主线。",
    Icon: Compass,
  },
];

export default function UserPersona() {
  return (
    <MotionSection className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,#081116,#05070b)] px-6 py-24 lg:px-10">
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

        <div className="grid gap-5 lg:grid-cols-3">
          {personas.map((persona) => (
            <article
              key={persona.name}
              className="glass-panel rounded-lg p-6"
            >
              <div className="mb-6 flex aspect-[4/3] items-center justify-center rounded border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.045),rgba(16,185,129,0.12))]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-300/10">
                  <persona.Icon className="h-9 w-9 text-cyan-100" />
                </div>
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
