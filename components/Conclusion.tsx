import MotionSection from "./MotionSection";

const outcomes = ["理论可解释", "画像可推导", "场景可落地", "结果可验证"];

export default function Conclusion() {
  return (
    <MotionSection className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.12),transparent_34rem)]" />
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-lg p-8 md:p-10">
          <p className="mb-3 text-sm font-medium text-cyan-200">08 Conclusion</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">总结</h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300">
            本项目以 PAD 情绪量表为理论入口，将用户画像、驾驶场景、界面响应和实验验证整合为研究型 HMI 设计作品集。它的重点不是单纯展示视觉风格，而是说明自适应界面为什么变化、如何变化，以及这些变化如何被验证。
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
