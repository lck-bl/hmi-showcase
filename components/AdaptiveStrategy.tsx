import MotionSection from "./MotionSection";

const strategies = [
  {
    title: "信息层级自适应",
    desc: "依据场景风险与唤醒度变化调整导航、预警、娱乐和车辆状态的显示优先级。高压场景减少入口数量，低风险场景保留操作效率。",
  },
  {
    title: "视觉强度自适应",
    desc: "通过色彩对比、动态提示强度和信息面积控制界面刺激，避免高压场景继续增加认知负担。",
  },
  {
    title: "交互主动性自适应",
    desc: "当支配感下降时给出更明确的系统建议；当驾驶状态平稳时，把决策权交还给用户，保留个性化探索空间。",
  },
  {
    title: "反馈通道自适应",
    desc: "结合视觉、语音与轻提示反馈，让关键提醒更容易被感知，同时降低打断感和重复确认成本。",
  },
];

const mappingRows = [
  ["场景识别", "天气、路况、车速、交互行为"],
  ["情绪推断", "PAD 维度变化与用户画像特质"],
  ["需求判断", "安全确认、效率提升、注意力回收"],
  ["界面响应", "层级、强度、主动性、反馈通道"],
];

export default function AdaptiveStrategy() {
  return (
    <MotionSection className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25" />
      <div className="pointer-events-none absolute right-[-5rem] bottom-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-emerald-200">05 Adaptive Strategy</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            场景、情绪、需求与 HMI 响应
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            自适应策略不是单一视觉皮肤切换，而是围绕驾驶任务、情绪负荷和用户控制感建立的界面响应规则。它让每一次 HMI 变化都能回到清晰的设计依据。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="glass-panel rounded-lg p-6">
            <p className="text-sm font-semibold text-cyan-100">推导链路</p>
            <div className="mt-6 space-y-3">
              {mappingRows.map((row, index) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-[86px_1fr] items-center gap-4 rounded border border-white/10 bg-white/[0.045] p-4 backdrop-blur"
                >
                  <span className="text-sm font-semibold text-white">0{index + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-cyan-100">{row[0]}</p>
                    <p className="mt-1 text-sm text-slate-400">{row[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {strategies.map((strategy, index) => (
              <article
                key={strategy.title}
                className="glass-panel rounded-lg p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-cyan-300/15 text-sm font-semibold text-cyan-100">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{strategy.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{strategy.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
