"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cpu, LineChart, ShieldCheck } from "lucide-react";
import HmiScreenMockup from "./HmiScreenMockup";

const navItems = ["研究背景", "PAD 模型", "用户画像", "实验验证", "设计输出"];

const metrics = [
  { label: "研究框架", value: "PAD + 情景感知" },
  { label: "核心场景", value: "4 类驾驶状态" },
  { label: "验证路径", value: "行为 / 生理 / 主观" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10 bg-[#05070b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.18),transparent_28rem),radial-gradient(circle_at_86%_34%,rgba(16,185,129,0.14),transparent_26rem),linear-gradient(135deg,#05070b_0%,#081317_48%,#070d12_100%)]" />
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05070b] to-transparent" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-300">
          <span className="font-semibold text-cyan-100">PAD Adaptive HMI</span>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <span key={item} className="text-slate-400">
                {item}
              </span>
            ))}
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100">
              <Cpu className="h-4 w-4" />
              智能座舱情绪感知与自适应交互研究
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              基于 PAD 情绪量表的用户画像及 HMI 自适应设计
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              将 PAD 情绪维度、情景感知线索与驾驶员用户画像连接起来，推导不同驾驶场景下的界面层级、反馈方式与信息密度，形成可展示、可解释、可验证的车载 HMI 高保真方案。
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel rounded px-4 py-3"
                >
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#scenarios"
                className="inline-flex items-center gap-2 rounded border border-cyan-300/35 bg-cyan-300/12 px-4 py-2 text-sm font-medium text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition hover:border-cyan-200/70 hover:bg-cyan-300/18"
              >
                查看场景映射
                <ArrowDown className="h-4 w-4" />
              </a>
              <span className="glass-panel inline-flex items-center gap-2 rounded px-4 py-2 text-sm text-slate-300">
                <LineChart className="h-4 w-4 text-emerald-200" />
                眼动、生理与量表交叉验证
              </span>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <div className="absolute -inset-6 rounded-full bg-cyan-300/10 blur-3xl" />
            <HmiScreenMockup
              mode="calm"
              label="Adaptive Cockpit Prototype"
              badge="自适应组-老手"
              imageSrc="/images/hmi/normal-expert.png"
              imageAlt="常态平静自适应组老手 HMI 界面"
            />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-400">
              {["静态特质", "动态情绪", "HMI 响应"].map((item) => (
                <span key={item} className="glass-panel rounded py-2">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-200" />
              从理论模型到设计输出的完整答辩链路
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
