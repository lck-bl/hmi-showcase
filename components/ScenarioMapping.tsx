"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HmiScreenMockup, { type HmiMode } from "./HmiScreenMockup";
import MotionSection from "./MotionSection";

type GroupKey = "control" | "novice" | "expert";

type InterfaceVariant = {
  label: string;
  image: string;
  strategy: string;
};

type Scenario = {
  name: string;
  mode: HmiMode;
  emotion: string;
  need: string;
  pad: string[];
  interfaces: Record<GroupKey, InterfaceVariant>;
};

const groupOrder: GroupKey[] = ["control", "novice", "expert"];

const scenarios: Scenario[] = [
  {
    name: "通勤拥堵",
    mode: "commute",
    emotion: "烦躁、急迫，愉悦度下降；频繁停走使唤醒度升高，路线控制感降低。",
    need: "明确等待成本，减少重复判断，让驾驶员知道“为什么堵、还要多久、有没有更好选择”。",
    pad: ["P -0.34", "A +0.48", "D -0.27"],
    interfaces: {
      control: {
        label: "对照组",
        image: "/images/hmi/traffic-control.png",
        strategy: "固定界面保持统一信息层级，不根据驾驶员经验、情绪压力或拥堵状态调整入口优先级，用于作为实验对比基线。",
      },
      novice: {
        label: "自适应组-新手",
        image: "/images/hmi/traffic-novice.png",
        strategy: "面向经验较少、自信水平偏低的驾驶员，突出 ETA、拥堵原因和明确路线建议，减少需要自行判断的二级入口。",
      },
      expert: {
        label: "自适应组-老手",
        image: "/images/hmi/traffic-expert.png",
        strategy: "面向经验较高、自信水平较强的驾驶员，保留路线对比和自主选择空间，以轻提示辅助决策，避免过度接管。",
      },
    },
  },
  {
    name: "低能见度",
    mode: "visibility",
    emotion: "紧张、警觉、不确定，支配感明显下降。",
    need: "提升环境可见性与安全确认，减少驾驶员对前方风险的猜测。",
    pad: ["P -0.22", "A +0.56", "D -0.38"],
    interfaces: {
      control: {
        label: "对照组",
        image: "/images/hmi/low-visibility-control.png",
        strategy: "固定界面不随雾天、夜间或雨雪风险增强信息表达，保留常规导航与车辆状态，用于观察基线负荷。",
      },
      novice: {
        label: "自适应组-新手",
        image: "/images/hmi/low-visibility-novice.png",
        strategy: "强化车距、限速、道路边界和低干扰语音确认，用更明确的安全反馈提升新手驾驶员的控制感。",
      },
      expert: {
        label: "自适应组-老手",
        image: "/images/hmi/low-visibility-expert.png",
        strategy: "保留关键风险提示但降低提示密度，提供可扫读的环境信息，让老手驾驶员快速判断而不被频繁打断。",
      },
    },
  },
  {
    name: "易驾驶分心",
    mode: "distraction",
    emotion: "兴趣分散、注意漂移，短时愉悦存在但任务支配感下降。",
    need: "减少刺激源，建立清晰任务边界，帮助注意力回到驾驶主线。",
    pad: ["P +0.12", "A +0.31", "D -0.19"],
    interfaces: {
      control: {
        label: "对照组",
        image: "/images/hmi/distraction-control.png",
        strategy: "固定界面维持娱乐、导航与车辆信息并列呈现，不主动降低刺激源，作为注意力分配对照条件。",
      },
      novice: {
        label: "自适应组-新手",
        image: "/images/hmi/distraction-novice.png",
        strategy: "收起娱乐入口，导航与安全提醒置顶，通过短反馈闭环帮助新手把注意力重新拉回驾驶任务。",
      },
      expert: {
        label: "自适应组-老手",
        image: "/images/hmi/distraction-expert.png",
        strategy: "保留少量快捷入口和可控媒体信息，只在关键风险节点提示，尊重老手的自主操作节奏。",
      },
    },
  },
  {
    name: "常态平静",
    mode: "calm",
    emotion: "放松、稳定、可控，愉悦度和支配感较高。",
    need: "保持效率与轻量愉悦感，避免系统过度介入。",
    pad: ["P +0.42", "A -0.08", "D +0.36"],
    interfaces: {
      control: {
        label: "对照组",
        image: "/images/hmi/normal-control.png",
        strategy: "固定界面保持默认布局，不根据驾驶员经验与信心水平调整快捷入口或个性化信息。",
      },
      novice: {
        label: "自适应组-新手",
        image: "/images/hmi/normal-novice.png",
        strategy: "在平静场景下提供轻量引导和清晰状态反馈，帮助新手建立稳定的操作预期和信心。",
      },
      expert: {
        label: "自适应组-老手",
        image: "/images/hmi/normal-expert.png",
        strategy: "开放更高效的快捷控制和个性化信息密度，让老手在低负荷状态下保持流畅操作。",
      },
    },
  },
];

export default function ScenarioMapping() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGroup, setActiveGroup] = useState<GroupKey>("control");
  const [hasChangedPreview, setHasChangedPreview] = useState(false);
  const active = scenarios[activeIndex];
  const activeInterface = active.interfaces[activeGroup];

  return (
    <MotionSection
      id="scenarios"
      className="relative overflow-hidden px-6 py-24 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.12),transparent_30rem),radial-gradient(circle_at_18%_72%,rgba(16,185,129,0.1),transparent_28rem)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-cyan-200">04 Scenario Mapping</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">实验界面</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            先选择驾驶场景，再比较对照组与两类自适应组界面。对照组为固定界面；自适应组会根据驾驶员经验与自信水平采用差异化交互策略，用于呈现实验验证中的界面对比逻辑。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="grid gap-3 self-start lg:sticky lg:top-20">
            {scenarios.map((scenario, index) => (
              <button
                key={scenario.name}
                type="button"
                aria-pressed={activeIndex === index}
                onClick={() => {
                  setHasChangedPreview(true);
                  setActiveIndex(index);
                }}
                className={`rounded-lg border p-5 text-left transition hover:translate-x-1 active:scale-[0.985] ${
                  activeIndex === index
                    ? "border-cyan-300/70 bg-cyan-300/12 text-white shadow-[0_0_28px_rgba(34,211,238,0.12)]"
                    : "border-white/10 bg-white/[0.045] text-slate-300 backdrop-blur hover:border-white/25 hover:bg-white/[0.07]"
                }`}
              >
                <span className="text-sm text-slate-400">0{index + 1}</span>
                <span className="mt-2 block text-xl font-semibold">{scenario.name}</span>
              </button>
            ))}
          </div>

          <motion.div
            className="glass-panel rounded-lg p-5 md:p-6"
            layout
            transition={{ layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
          >
            <div className="mb-5 flex flex-wrap gap-2">
              {groupOrder.map((key) => {
                const item = active.interfaces[key];
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={activeGroup === key}
                    onClick={() => {
                      setHasChangedPreview(true);
                      setActiveGroup(key);
                    }}
                    className={`rounded border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 active:scale-[0.985] ${
                      activeGroup === key
                        ? "border-cyan-300/70 bg-cyan-300/14 text-cyan-50"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/25"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.name}-${activeInterface.label}`}
                initial={hasChangedPreview ? { opacity: 0, y: 26, scale: 0.975 } : false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.985 }}
                transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
              >
                <HmiScreenMockup
                  mode={active.mode}
                  compact
                  label={active.name}
                  badge={activeInterface.label}
                  imageSrc={activeInterface.image}
                  imageAlt={`${active.name} ${activeInterface.label} HMI 界面`}
                  showShine={false}
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-semibold text-cyan-200">场景情绪与需求</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{active.emotion}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{active.need}</p>
              </div>
              <div className="rounded border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-semibold text-emerald-200">
                  {activeInterface.label}策略说明
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {activeInterface.strategy}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
