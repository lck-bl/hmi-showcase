import MotionSection from "./MotionSection";

const dimensions = [
  {
    key: "P",
    title: "Pleasure 愉悦度",
    desc: "描述驾驶员对当前环境和交互体验的正负感受。拥堵与危险提示会拉低愉悦度，清晰反馈和舒适节奏可以修复体验。",
    low: "焦虑 / 厌烦",
    high: "轻松 / 满意",
    color: "bg-cyan-300",
  },
  {
    key: "A",
    title: "Arousal 唤醒度",
    desc: "反映紧张、警觉、疲劳或兴奋等生理与心理激活水平。高唤醒不一定是坏事，但需要控制信息刺激强度。",
    low: "迟缓 / 疲劳",
    high: "警觉 / 紧张",
    color: "bg-amber-300",
  },
  {
    key: "D",
    title: "Dominance 支配感",
    desc: "衡量驾驶员对车辆、任务和界面的控制感。自适应 HMI 需要在系统建议和用户自主之间保持平衡。",
    low: "失控 / 不确定",
    high: "掌控 / 确信",
    color: "bg-emerald-300",
  },
];

export default function PadModel() {
  return (
    <MotionSection className="relative overflow-hidden border-b border-white/10 bg-[#05070b] px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.11),transparent_30rem),radial-gradient(circle_at_78%_70%,rgba(16,185,129,0.1),transparent_28rem)]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan-200">02 PAD Emotion Model</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">PAD 情绪模型</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            PAD 模型把情绪拆解为愉悦度、唤醒度与支配感三个连续维度。它既用于描述驾驶员状态，也用于推导 HMI 在视觉强度、信息密度、反馈语气与交互主动性上的变化。
          </p>
          <div className="glass-panel mt-8 rounded-lg p-5">
            <p className="text-sm font-semibold text-white">设计转译</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              当 A 升高且 D 下降时，界面应减少娱乐刺激、提升安全信息确定性；当 P 与 D 较高时，界面可以保留更多自主探索与个性化空间。
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {dimensions.map((item, index) => (
            <article
              key={item.key}
              className="glass-panel rounded-lg p-5"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded ${item.color} text-2xl font-bold text-slate-950`}
              >
                {item.key}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              <div className="mt-6 flex justify-between text-xs text-slate-400">
                <span>{item.low}</span>
                <span>{item.high}</span>
              </div>
              <div className="mt-3 h-2 rounded bg-white/10">
                <div
                  className={`h-2 rounded ${item.color}`}
                  style={{ width: `${62 + index * 10}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
