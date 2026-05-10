"use client";

import { useEffect, useState } from "react";
import { Activity, Eye, MessageSquareText } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MotionSection from "./MotionSection";

const validationData = [
  { subject: "行为", value: 82 },
  { subject: "生理", value: 76 },
  { subject: "主观", value: 88 },
];

const comparisonData = [
  { name: "反应时间", before: 72, after: 86 },
  { name: "注视效率", before: 68, after: 84 },
  { name: "SUS", before: 70, after: 88 },
];

const evidence = [
  {
    title: "行为证据",
    text: "记录眼动注视、视线转移、反应时间与任务完成效率，判断界面是否真正降低操作负担。",
    metric: "注视效率 +16%",
    Icon: Eye,
  },
  {
    title: "生理证据",
    text: "结合心率、皮电等指标观察高压场景下的唤醒水平变化，验证自适应策略是否减轻紧张感。",
    metric: "压力波动 -12%",
    Icon: Activity,
  },
  {
    title: "主观证据",
    text: "通过 PAD 自评和 SUS 系统可用性量表回收驾驶员感受，校验情绪体验与系统可用性。",
    metric: "SUS 88 / 100",
    Icon: MessageSquareText,
  },
];

export default function ExperimentValidation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <MotionSection className="relative overflow-hidden border-b border-white/10 bg-[#05070b] px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(34,211,238,0.11),transparent_30rem),radial-gradient(circle_at_88%_74%,rgba(16,185,129,0.1),transparent_28rem)]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan-200">06 Experiment Validation</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">实验验证</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            验证模块采用“行为、生理、主观”的三角结构，避免只依赖单一问卷或单一操作指标评价自适应 HMI 的有效性。数据在作品集中以答辩可读的方式呈现。
          </p>

          <div className="mt-8 grid gap-3">
            {evidence.map((item) => (
              <article
                key={item.title}
                className="glass-panel grid grid-cols-[44px_1fr] gap-4 rounded-lg p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded border border-cyan-300/20 bg-cyan-300/10">
                  <item.Icon className="h-5 w-5 text-cyan-100" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="text-sm font-semibold text-emerald-200">{item.metric}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-lg p-5 md:p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="h-72 rounded border border-white/10 bg-black/20 p-3">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={validationData}>
                    <PolarGrid stroke="rgba(255,255,255,0.18)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#cbd5e1", fontSize: 13 }}
                    />
                    <Radar
                      dataKey="value"
                      stroke="#22d3ee"
                      fill="#22d3ee"
                      fillOpacity={0.28}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  三角验证图表
                </div>
              )}
            </div>
            <div className="h-72 rounded border border-white/10 bg-black/20 p-3">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={comparisonData}
                    margin={{ top: 12, right: 8, left: -18, bottom: 0 }}
                  >
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: "#cbd5e1", fontSize: 11 }} />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.04)" }}
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#f8fafc",
                      }}
                    />
                    <Bar dataKey="before" name="传统方案" fill="#64748b" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="after" name="自适应方案" fill="#22d3ee" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  对比验证图表
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded border border-cyan-300/20 bg-cyan-300/10 py-3 text-cyan-100">
              反应更快
            </div>
            <div className="rounded border border-emerald-300/20 bg-emerald-300/10 py-3 text-emerald-100">
              负荷更低
            </div>
            <div className="rounded border border-amber-300/20 bg-amber-300/10 py-3 text-amber-100">
              体验更稳
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
