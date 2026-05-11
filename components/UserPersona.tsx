"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MotionSection from "./MotionSection";

type PersonaState = {
  name: string;
  role: string;
  image: string;
  emotion: string;
  tags: string[];
};

type PersonaScenario = {
  key: string;
  name: string;
  cue: string;
  summary: string;
  personas: PersonaState[];
};

const scenarioPersonas: PersonaScenario[] = [
  {
    key: "commute",
    name: "通勤拥堵",
    cue: "高峰停走 / 路线不确定",
    summary: "拥堵会提高唤醒度并削弱路线掌控感，新手更容易焦虑，老手更关注效率与选择权。",
    personas: [
      {
        name: "新手谨慎驾驶型",
        role: "低经验、低自信，面对拥堵更依赖系统解释",
        image: "/images/personas/scenarios/commute-novice.png",
        emotion: "焦虑、急迫、不确定，担心走错路线或错过关键出口。",
        tags: ["等待成本敏感", "路线依赖", "需要明确建议"],
      },
      {
        name: "经验老手型",
        role: "高经验、高自信，能接受拥堵但需要效率信息",
        image: "/images/personas/scenarios/commute-expert.png",
        emotion: "轻度烦躁但仍可控，更在意是否有更优路线与时间损失。",
        tags: ["效率判断", "自主决策", "弱干预偏好"],
      },
    ],
  },
  {
    key: "visibility",
    name: "暴雨/隧道",
    cue: "低能见度 / 环境风险",
    summary: "低能见度会放大风险感知，新手更容易紧张，老手则需要高可信度、低噪声的风险信息。",
    personas: [
      {
        name: "新手谨慎驾驶型",
        role: "对环境变化敏感，需要系统持续确认安全边界",
        image: "/images/personas/scenarios/visibility-novice.png",
        emotion: "紧张、警觉、缺乏控制感，对前车距离和道路边界更不放心。",
        tags: ["风险规避", "车距焦虑", "安全确认"],
      },
      {
        name: "经验老手型",
        role: "具备风险判断经验，需要关键信息可扫读",
        image: "/images/personas/scenarios/visibility-expert.png",
        emotion: "谨慎、集中、保持控制，对风险提示的准确性和密度更敏感。",
        tags: ["冷静警觉", "信息可信", "提示密度低"],
      },
    ],
  },
  {
    key: "distraction",
    name: "分心干扰",
    cue: "娱乐入口 / 通知打断",
    summary: "分心场景会压缩注意资源，新手容易被任务切换打断，老手则更需要系统尊重其自我调节能力。",
    personas: [
      {
        name: "新手谨慎驾驶型",
        role: "对多任务切换更敏感，容易出现短时认知负荷",
        image: "/images/personas/scenarios/distraction-novice.png",
        emotion: "慌乱、犹豫、注意漂移，容易在驾驶任务和界面入口之间摇摆。",
        tags: ["注意回收", "入口收敛", "认知减负"],
      },
      {
        name: "经验老手型",
        role: "能主动管理干扰，但不希望系统过度限制操作",
        image: "/images/personas/scenarios/distraction-expert.png",
        emotion: "短暂被打断后迅速恢复，保持自主控制但需要关键节点提醒。",
        tags: ["自我修正", "快捷保留", "关键提醒"],
      },
    ],
  },
  {
    key: "calm",
    name: "常态平静",
    cue: "低负荷 / 稳定驾驶",
    summary: "平静场景下两类用户都处于较高愉悦度，新手需要建立信心，老手更重视效率与个性化。",
    personas: [
      {
        name: "新手谨慎驾驶型",
        role: "低负荷时更适合建立操作预期和驾驶信心",
        image: "/images/personas/scenarios/calm-novice.png",
        emotion: "放松、稳定、逐渐自信，但仍需要清晰状态反馈。",
        tags: ["信心建立", "轻量引导", "状态清晰"],
      },
      {
        name: "经验老手型",
        role: "低负荷下追求顺畅效率和个性化控制",
        image: "/images/personas/scenarios/calm-expert.png",
        emotion: "平静、从容、高掌控，对界面效率和自主配置更敏感。",
        tags: ["高掌控", "高效率", "个性化"],
      },
    ],
  },
];

export default function UserPersona() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [hasSwitchedScenario, setHasSwitchedScenario] = useState(false);
  const active = scenarioPersonas[activeScenario];

  return (
    <MotionSection id="personas" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25" />
      <div className="pointer-events-none absolute left-[-6rem] top-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-emerald-200">03 User Persona</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">用户画像构建</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            画像不是固定标签，而是由用户经验、自信水平、场景刺激和 PAD 动态情绪共同构成。切换场景后，可以看到同一刺激对两类驾驶员产生的不同情绪状态与 HMI 响应需求。
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {scenarioPersonas.map((scenario, index) => (
            <button
              key={scenario.key}
              type="button"
              aria-pressed={activeScenario === index}
              onClick={() => {
                setHasSwitchedScenario(true);
                setActiveScenario(index);
              }}
              className={`rounded border px-4 py-3 text-left transition hover:-translate-y-0.5 active:scale-[0.985] ${
                activeScenario === index
                  ? "border-cyan-300/70 bg-cyan-300/14 text-cyan-50 shadow-[0_0_28px_rgba(34,211,238,0.1)]"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/25 hover:bg-white/[0.07]"
              }`}
            >
                <span className="block text-sm font-semibold">{scenario.name}</span>
                <span className="mt-1 block text-xs text-slate-400">{scenario.cue}</span>
            </button>
          ))}
        </div>

        <div className="mb-6 max-w-4xl border-l border-cyan-300/40 pl-4">
          <p className="text-sm leading-7 text-slate-300">{active.summary}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={hasSwitchedScenario ? { opacity: 0, y: 22 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5 lg:grid-cols-2"
          >
            {active.personas.map((persona) => (
              <article key={persona.name} className="glass-panel rounded-lg p-6">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.045),rgba(16,185,129,0.12))]">
                  <Image
                    src={persona.image}
                    alt={`${active.name} ${persona.name} 情绪画像`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,7,11,0.5))]" />
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

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-cyan-200">诱发情绪</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{persona.emotion}</p>
                </div>

              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionSection>
  );
}
