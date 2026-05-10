import { Activity, CarFront, Layers3 } from "lucide-react";
import MotionSection from "./MotionSection";

const backgroundItems = [
  {
    title: "从被动响应到情绪支持",
    text: "传统车载 HMI 更擅长展示功能，却很少主动识别驾驶员在拥堵、低能见度或注意力漂移时的情绪负荷。本项目把情绪调节纳入界面策略，让系统不只“能操作”，也能“会配合”。",
    Icon: Activity,
  },
  {
    title: "从单点控件到场景系统",
    text: "设计推导不从某个按钮或皮肤开始，而是回到驾驶任务、环境风险、用户特质与 PAD 情绪状态之间的关系，建立可复用的场景化设计规则。",
    Icon: Layers3,
  },
  {
    title: "从设计假设到实验验证",
    text: "最终方案通过眼动行为、生理信号、PAD 自评和 SUS 可用性量表进行交叉验证，使作品集呈现的不只是视觉稿，而是一条可解释的研究链路。",
    Icon: CarFront,
  },
];

export default function ResearchBackground() {
  return (
    <MotionSection id="research" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-emerald-200">01 Research Background</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">研究背景</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            面向智能座舱的人机界面正在从“功能入口集合”转向“驾驶状态协同系统”。本项目聚焦驾驶员在复杂情境中的情绪波动，尝试用 PAD 量表为 HMI 自适应设计提供清晰的理论坐标。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {backgroundItems.map((item) => (
            <article
              key={item.title}
              className="glass-panel rounded-lg p-6"
            >
              <item.Icon className="mb-5 h-7 w-7 text-cyan-200" />
              <h3 className="text-xl font-semibold text-cyan-50">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
