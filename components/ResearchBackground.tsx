import MotionSection from "./MotionSection";

const padPoints = [
  { label: "P", name: "愉悦度", x: "24%", y: "34%", color: "bg-cyan-300" },
  { label: "A", name: "唤醒度", x: "62%", y: "24%", color: "bg-emerald-300" },
  { label: "D", name: "支配感", x: "72%", y: "64%", color: "bg-sky-300" },
];

const cockpitStages = [
  { year: "1.0", title: "被动控制" },
  { year: "2.0", title: "情境感知" },
  { year: "3.0", title: "情绪支持" },
];

function PadResearchChart() {
  return (
    <div className="relative flex min-h-[21rem] flex-col justify-between overflow-hidden rounded-lg border border-cyan-200/12 bg-[#061019]/78 p-6">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">PAD Affect Space</p>
          <h3 className="mt-2 text-xl font-semibold text-white">PAD 情绪研究坐标</h3>
        </div>
      </div>

      <div className="relative z-10 mt-9 h-64">
        <div className="absolute left-4 top-1/2 h-px w-[86%] bg-slate-500/42" />
        <div className="absolute left-[46%] top-1 h-[95%] w-px bg-slate-500/42" />
        <div className="absolute left-3 top-[45%] text-[0.65rem] text-slate-500">低</div>
        <div className="absolute right-4 top-[45%] text-[0.65rem] text-slate-500">高</div>
        <div className="absolute left-[44%] top-0 text-[0.65rem] text-slate-500">激活</div>
        <div className="absolute bottom-0 left-[42%] text-[0.65rem] text-slate-500">平静</div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 180" aria-hidden="true">
          <path
            d="M48 126 C112 82 144 90 190 70 C244 45 292 42 354 30"
            fill="none"
            stroke="url(#padLine)"
            strokeWidth="2"
          />
          <path
            d="M82 132 C134 118 160 118 202 98 C252 74 282 83 330 62"
            fill="none"
            stroke="rgba(125, 211, 252, 0.28)"
            strokeDasharray="5 8"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="padLine" x1="48" x2="354" y1="126" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>

        {padPoints.map((point) => (
          <div
            key={point.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
            style={{ left: point.x, top: point.y }}
          >
            <span className={`grid h-9 w-9 place-items-center rounded-full ${point.color} text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.36)]`}>
              {point.label}
            </span>
            <span className="whitespace-nowrap rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-200">
              {point.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

function CockpitEvolutionVisual() {
  return (
    <div className="relative flex min-h-[21rem] flex-col overflow-hidden rounded-lg border border-emerald-200/12 bg-[#06130f]/78 p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(16,185,129,0.14),transparent_32%)]" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/80">Cockpit Evolution</p>
          <h3 className="mt-2 text-xl font-semibold text-white">智能座舱交互演进</h3>
        </div>
      </div>

      <div className="relative z-10 mt-12 p-6 md:mt-auto md:mb-6">
        <div className="absolute left-10 right-10 top-[5rem] h-px bg-gradient-to-r from-cyan-300/30 via-emerald-300/70 to-teal-200/30" />
        <div className="grid gap-5 md:grid-cols-3">
          {cockpitStages.map((stage) => (
            <div key={stage.year} className="relative">
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full border border-cyan-200/20 bg-slate-900 text-sm font-semibold text-cyan-100 shadow-[0_0_22px_rgba(45,212,191,0.24)]">
                {stage.year}
              </div>
              <div className="grid min-h-32 place-items-center rounded-md border border-white/10 bg-white/[0.045] p-5">
                <h4 className="text-center text-lg font-semibold text-cyan-50">{stage.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 hidden h-2 md:block" />
    </div>
  );
}

function SimulatorExperimentImage() {
  return (
    <div className="relative min-h-[21rem] overflow-hidden rounded-lg border border-sky-200/12 bg-[#07101c]/78 p-6">
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_76%_24%,rgba(45,212,191,0.16),transparent_26%)]" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80">Experiment Setup</p>
          <h3 className="mt-2 text-xl font-semibold text-white">模拟驾驶实验场景</h3>
        </div>
      </div>

      <div className="relative z-10 mt-9 aspect-[16/9] overflow-hidden rounded-lg border border-cyan-200/14 bg-[#020817] shadow-[0_0_30px_rgba(34,211,238,0.12)]">
        <img
          src="/images/research/experiment-setup.png"
          alt="模拟驾驶实验场景"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

const researchVisuals = [
  {
    title: "从被动响应到情绪支持",
    text: "传统车载 HMI 更擅长展示功能，却很少主动识别驾驶员在拥堵、低能见度或注意力漂移时的情绪负荷。本项目把情绪调节纳入界面策略，让系统不只“能操作”，也能“会配合”。",
    Visual: PadResearchChart,
  },
  {
    title: "从单点控件到场景系统",
    text: "设计推导不从某个按钮或皮肤开始，而是回到驾驶任务、环境风险、用户特质与 PAD 情绪状态之间的关系，建立可复用的场景化设计规则。",
    Visual: CockpitEvolutionVisual,
  },
  {
    title: "从设计假设到实验验证",
    text: "最终方案通过眼动行为、生理信号、PAD 自评和 SUS 可用性量表进行交叉验证，使作品集呈现的不只是视觉稿，而是一条可解释的研究链路。",
    Visual: SimulatorExperimentImage,
  },
];

export default function ResearchBackground() {
  return (
    <MotionSection id="research" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-medium text-emerald-200">01 Research Background</p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">研究背景</h2>
          </div>
          <p className="text-base leading-8 text-slate-300">
            面向智能座舱的人机界面正在从“功能入口集合”转向“驾驶状态协同系统”。本项目聚焦驾驶员在复杂情境中的情绪波动，用 PAD 量表、座舱演进逻辑与模拟驾驶实验共同构成研究依据。
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {researchVisuals.map((item) => (
            <article key={item.title} className="glass-panel grid overflow-hidden rounded-lg p-3 lg:grid-rows-[minmax(21rem,21rem)_auto]">
              <item.Visual />
              <div className="px-3 pb-3 pt-5">
                <h3 className="text-lg font-semibold text-cyan-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
