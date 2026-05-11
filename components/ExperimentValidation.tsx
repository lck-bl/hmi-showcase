"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Activity, Eye, MessageSquareText, TrendingDown, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MotionSection from "./MotionSection";

type EvidenceKey = "behavior" | "physiology" | "subjective";

const evidence = [
  {
    key: "behavior" as const,
    title: "行为证据",
    text: "通过眼动热点图与眼动轨迹图比较不同界面方案下的注意分布，观察驾驶员视线是否更集中、更少被无关入口分散。",
    metric: "眼动热点 / 轨迹",
    Icon: Eye,
  },
  {
    key: "physiology" as const,
    title: "生理证据",
    text: "使用 EDA 与 EMG RMS 相对变化率观察不同场景下的唤醒与肌肉紧张变化，比较固定界面和自适应界面的差异。",
    metric: "EDA / EMG",
    Icon: Activity,
  },
  {
    key: "subjective" as const,
    title: "主观证据",
    text: "通过 PAD 自评和 SUS 可用性量表回收驾驶员体验，校验情绪感受、控制感与系统可用性是否一致改善。",
    metric: "PAD + SUS",
    Icon: MessageSquareText,
  },
];

const eyeScenes = [
  {
    key: "commute",
    label: "通勤拥堵",
    src: "/images/validation/eye-commute.png",
  },
  {
    key: "visibility",
    label: "低能见度",
    src: "/images/validation/eye-visibility.png",
  },
  {
    key: "distraction",
    label: "无聊分心",
    src: "/images/validation/eye-distraction.png",
  },
  {
    key: "calm",
    label: "常态驾驶",
    src: "/images/validation/eye-calm.png",
  },
];

const edaData = [
  { scene: "S1", control: -3.84, adaptive: 3.87 },
  { scene: "S2", control: -0.48, adaptive: -0.39 },
  { scene: "S3", control: 5.12, adaptive: -2.57 },
  { scene: "S4", control: 8.7, adaptive: 1.92 },
];

const emgData = [
  { group: "对照组", rms: 3.78, fill: "#94a3b8" },
  { group: "自适应组", rms: 2, fill: "#22d3ee" },
];

const subjectivePadData = [
  { dimension: "P 愉悦度", control: 0.12, adaptive: 0.38 },
  { dimension: "A 唤醒度", control: 0.46, adaptive: 0.24 },
  { dimension: "D 支配感", control: -0.16, adaptive: 0.31 },
];

const susData = [
  { item: "对照组", value: 70, fill: "#94a3b8" },
  { item: "自适应组", value: 88, fill: "#22d3ee" },
];

const physiologyFindings = [
  {
    label: "EDA 场景波动",
    value: "S3 / S4 自适应组更低",
    Icon: TrendingDown,
  },
  {
    label: "S1 EMG RMS",
    value: "自适应组 +2.00%",
    Icon: TrendingDown,
  },
  {
    label: "对照组峰值",
    value: "S4 EDA +8.70%",
    Icon: TrendingUp,
  },
];

const formatPercent = (value: number | string) => `${Number(value).toFixed(2)}%`;
const formatPad = (value: number | string) => Number(value).toFixed(2);

function ChartTooltip() {
  return {
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#f8fafc",
  };
}

export default function ExperimentValidation() {
  const [mounted, setMounted] = useState(false);
  const [activeEvidence, setActiveEvidence] = useState<EvidenceKey>("behavior");
  const [activeEyeScene, setActiveEyeScene] = useState(eyeScenes[0]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <MotionSection id="validation" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(34,211,238,0.11),transparent_30rem),radial-gradient(circle_at_88%_74%,rgba(16,185,129,0.1),transparent_28rem)]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-medium text-cyan-200">06 Experiment Validation</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">实验验证</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            验证模块采用“行为、生理、主观”的三角结构。左侧选择证据类型，右侧切换对应的数据图像与可视化结果，用于说明自适应 HMI 在注意分布、生理负荷与主观体验上的变化。
          </p>

          <div className="mt-8 grid gap-3 lg:mt-10">
            {evidence.map((item) => (
              <button
                key={item.key}
                type="button"
                aria-pressed={activeEvidence === item.key}
                onClick={() => setActiveEvidence(item.key)}
                className={`glass-panel relative grid grid-cols-[44px_1fr] gap-4 rounded-lg p-5 text-left transition hover:-translate-y-0.5 active:scale-[0.99] ${
                  activeEvidence === item.key
                    ? "border-cyan-300/75 bg-cyan-300/[0.09] shadow-[inset_3px_0_0_rgba(34,211,238,0.95),0_0_30px_rgba(34,211,238,0.12)]"
                    : "hover:border-white/20 hover:bg-white/[0.06]"
                }`}
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
              </button>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-lg p-5 md:mt-[12rem] md:p-6 lg:mt-[14rem]">
          {activeEvidence === "behavior" && (
            <div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">眼动热点图与轨迹图对比</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    上方为对照组热点图/轨迹图，下方为自适应组热点图/轨迹图。
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {eyeScenes.map((scene) => (
                    <button
                      key={scene.key}
                      type="button"
                      aria-pressed={activeEyeScene.key === scene.key}
                      onClick={() => setActiveEyeScene(scene)}
                      className={`rounded border px-3 py-2 text-sm font-medium transition hover:-translate-y-0.5 active:scale-[0.985] ${
                        activeEyeScene.key === scene.key
                          ? "border-cyan-300/70 bg-cyan-300/14 text-cyan-50"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/25"
                      }`}
                    >
                      {scene.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[741/628] overflow-hidden rounded border border-white/10 bg-black/30">
                <Image
                  key={activeEyeScene.src}
                  src={activeEyeScene.src}
                  alt={`${activeEyeScene.label} 眼动热点图与轨迹图对比`}
                  fill
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          )}

          {activeEvidence === "physiology" && (
            <div>
              <div className="grid gap-5 xl:grid-cols-2">
                <div className="min-h-80 min-w-0 rounded border border-white/10 bg-black/20 p-4">
                  <div className="mb-3">
                    <h3 className="text-base font-semibold text-white">EDA 相对变化率</h3>
                  </div>
                  <div className="h-64 min-w-0">
                    {mounted ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={edaData} margin={{ top: 14, right: 12, left: -12, bottom: 0 }}>
                          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                          <XAxis dataKey="scene" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                          <YAxis
                            tick={{ fill: "#94a3b8", fontSize: 11 }}
                            tickFormatter={(value) => `${value}%`}
                            domain={[-5, 10]}
                          />
                          <ReferenceLine y={0} stroke="rgba(255,255,255,0.26)" strokeDasharray="4 4" />
                          <Tooltip
                            formatter={(value) => formatPercent(value as number | string)}
                            labelFormatter={(label) => `${label} 场景`}
                            contentStyle={ChartTooltip()}
                          />
                          <Legend wrapperStyle={{ color: "#cbd5e1", fontSize: 12 }} />
                          <Line
                            type="monotone"
                            dataKey="control"
                            name="对照组"
                            stroke="#94a3b8"
                            strokeWidth={2}
                            dot={{ r: 4, fill: "#94a3b8" }}
                            activeDot={{ r: 5 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="adaptive"
                            name="自适应组"
                            stroke="#22d3ee"
                            strokeWidth={2}
                            dot={{ r: 4, fill: "#22d3ee" }}
                            activeDot={{ r: 5 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        EDA 折线图
                      </div>
                    )}
                  </div>
                </div>

                <div className="min-h-80 min-w-0 rounded border border-white/10 bg-black/20 p-4">
                  <div className="mb-3">
                    <h3 className="text-base font-semibold text-white">EMG RMS 变化率</h3>
                  </div>
                  <div className="h-64 min-w-0">
                    {mounted ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={emgData} margin={{ top: 14, right: 18, left: -12, bottom: 0 }}>
                          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                          <XAxis dataKey="group" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                          <YAxis
                            tick={{ fill: "#94a3b8", fontSize: 11 }}
                            tickFormatter={(value) => `${value}%`}
                            domain={[0, 5]}
                          />
                          <Tooltip
                            formatter={(value) => [formatPercent(value as number | string), "变化率中位数"]}
                            contentStyle={ChartTooltip()}
                          />
                          <Bar dataKey="rms" name="EMG RMS" radius={[4, 4, 0, 0]} barSize={42}>
                            {emgData.map((entry) => (
                              <Cell key={entry.group} fill={entry.fill} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        EMG RMS 柱状图
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm md:grid-cols-3">
                {physiologyFindings.map((item) => (
                  <div
                    key={item.label}
                    className="rounded border border-white/10 bg-white/[0.04] p-4 text-slate-200"
                  >
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                      <item.Icon className="h-4 w-4 text-cyan-200" />
                      {item.label}
                    </div>
                    <div className="font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeEvidence === "subjective" && (
            <div className="grid gap-5 xl:grid-cols-2">
              <div className="min-h-80 min-w-0 rounded border border-white/10 bg-black/20 p-4">
                <h3 className="mb-3 text-base font-semibold text-white">PAD 自评对比</h3>
                <div className="h-64 min-w-0">
                  {mounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={subjectivePadData} margin={{ top: 14, right: 10, left: -12, bottom: 0 }}>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis dataKey="dimension" tick={{ fill: "#cbd5e1", fontSize: 11 }} />
                        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} domain={[-0.3, 0.6]} />
                        <ReferenceLine y={0} stroke="rgba(255,255,255,0.26)" strokeDasharray="4 4" />
                        <Tooltip formatter={(value) => formatPad(value as number | string)} contentStyle={ChartTooltip()} />
                        <Legend wrapperStyle={{ color: "#cbd5e1", fontSize: 12 }} />
                        <Bar dataKey="control" name="对照组" fill="#94a3b8" radius={[3, 3, 0, 0]} />
                        <Bar dataKey="adaptive" name="自适应组" fill="#22d3ee" radius={[3, 3, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                      PAD 自评柱状图
                    </div>
                  )}
                </div>
              </div>

              <div className="min-h-80 min-w-0 rounded border border-white/10 bg-black/20 p-4">
                <h3 className="mb-3 text-base font-semibold text-white">SUS 车机可用性评价</h3>
                <div className="h-64 min-w-0">
                  {mounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={susData} margin={{ top: 14, right: 18, left: -12, bottom: 0 }}>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis dataKey="item" tick={{ fill: "#cbd5e1", fontSize: 12 }} />
                        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} domain={[0, 100]} />
                        <Tooltip formatter={(value) => [`${value} / 100`, "SUS"]} contentStyle={ChartTooltip()} />
                        <Bar dataKey="value" name="SUS" radius={[4, 4, 0, 0]} barSize={42}>
                          {susData.map((entry) => (
                            <Cell key={entry.item} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                      SUS 柱状图
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MotionSection>
  );
}
