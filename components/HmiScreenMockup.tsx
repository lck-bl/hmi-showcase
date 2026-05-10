"use client";

import Image from "next/image";
import {
  AlertTriangle,
  CloudFog,
  Gauge,
  Map,
  Music2,
  Navigation,
  Route,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export type HmiMode = "commute" | "visibility" | "distraction" | "calm";

type HmiScreenMockupProps = {
  mode: HmiMode;
  label?: string;
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
};

const modeConfig = {
  commute: {
    title: "通勤拥堵",
    subtitle: "ETA 优先 / 情绪缓冲",
    gradient: "from-cyan-400/18 via-slate-950 to-amber-300/18",
    accent: "text-amber-100",
    pad: "P -0.34  A +0.48  D -0.27",
    main: "前方拥堵 2.4 km",
    support: "建议切换西侧辅路，预计节省 11 分钟",
    chips: ["ETA 08:58", "轻提示", "路线压缩"],
    Icon: Route,
  },
  visibility: {
    title: "低能见度",
    subtitle: "风险显性化 / 语音辅助",
    gradient: "from-sky-300/20 via-slate-950 to-emerald-300/16",
    accent: "text-sky-100",
    pad: "P -0.22  A +0.56  D -0.38",
    main: "雾区限速 60 km/h",
    support: "增强车距反馈，保留导航与环境安全信息",
    chips: ["车距 42 m", "雾灯开启", "低干扰"],
    Icon: CloudFog,
  },
  distraction: {
    title: "分心抑制",
    subtitle: "娱乐降噪 / 任务边界",
    gradient: "from-emerald-300/18 via-slate-950 to-rose-300/16",
    accent: "text-rose-100",
    pad: "P +0.12  A +0.31  D -0.19",
    main: "注意力回收中",
    support: "收起非驾驶入口，关键提醒以短反馈闭环呈现",
    chips: ["音乐降噪", "导航置顶", "提醒收敛"],
    Icon: AlertTriangle,
  },
  calm: {
    title: "常态平静",
    subtitle: "轻量效率 / 个性化保持",
    gradient: "from-teal-300/18 via-slate-950 to-violet-300/14",
    accent: "text-teal-100",
    pad: "P +0.42  A -0.08  D +0.36",
    main: "巡航状态稳定",
    support: "保持常规层级，开放快捷控件与个性化氛围",
    chips: ["巡航 72", "快捷入口", "舒适氛围"],
    Icon: Sparkles,
  },
} satisfies Record<
  HmiMode,
  {
    title: string;
    subtitle: string;
    gradient: string;
    accent: string;
    pad: string;
    main: string;
    support: string;
    chips: string[];
    Icon: typeof Route;
  }
>;

export default function HmiScreenMockup({
  mode,
  label,
  compact = false,
  imageSrc,
  imageAlt,
  badge,
}: HmiScreenMockupProps) {
  const config = modeConfig[mode];
  const Icon = config.Icon;
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);
  const imageReady = Boolean(imageSrc && failedImageSrc !== imageSrc);

  return (
    <motion.div
      className="soft-glow relative"
      initial={false}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.012 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-x-10 -bottom-4 h-8 rounded-full bg-cyan-300/12 blur-xl" />
      <div className="rounded-[22px] border border-cyan-100/15 bg-[linear-gradient(135deg,rgba(8,13,18,0.95),rgba(0,0,0,0.86))] p-2 shadow-[0_28px_100px_rgba(0,0,0,0.42),0_0_54px_rgba(34,211,238,0.12)]">
        <div className="aspect-[1280/770] overflow-hidden rounded-[17px] border border-white/10 bg-slate-950">
          <div
            className={`relative h-full overflow-hidden rounded-[15px] border border-cyan-100/12 bg-gradient-to-br ${config.gradient} ${
              imageReady ? "" : "p-4"
            }`}
          >
            <div className="absolute inset-0 tech-grid opacity-35" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-200/10 to-transparent" />
            <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-cyan-300/12 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" />

            {imageSrc && imageReady ? (
              <>
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? `${label ?? config.title} HMI 界面`}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover object-center"
                  priority={false}
                  unoptimized
                  onError={() => setFailedImageSrc(imageSrc ?? null)}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-inset ring-cyan-100/10" />
                <div className="screen-glass-shine pointer-events-none absolute inset-0" />
              </>
            ) : (
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4 text-[10px] text-slate-300 sm:text-xs">
                  <div>
                    <p className="font-semibold text-white">{label ?? config.title}</p>
                    <p className={config.accent}>
                      {badge ? `${badge} / ` : ""}
                      {config.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded border border-white/10 bg-white/[0.06] px-2 py-1">
                    <Gauge className="h-3.5 w-3.5 text-cyan-200" />
                    <span>08:42</span>
                  </div>
                </div>

                <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-3 py-3">
                  <div className="relative overflow-hidden rounded border border-cyan-200/15 bg-slate-950/54 p-3">
                    <div className="absolute inset-x-10 bottom-0 h-1/2 rounded-t-full border-x border-t border-cyan-200/20 bg-cyan-300/5" />
                    <div className="absolute left-1/2 top-7 h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-100/60 to-transparent" />
                    <div className="absolute bottom-8 left-[28%] h-12 w-16 rounded-t-full border border-cyan-200/20 bg-cyan-300/10" />
                    <div className="absolute bottom-14 right-[22%] h-9 w-12 rounded-t-full border border-emerald-200/20 bg-emerald-300/10" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/[0.07]">
                          <Icon className="h-4 w-4 text-cyan-100" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-white sm:text-sm">
                            {config.main}
                          </p>
                          <p className="mt-1 max-w-56 text-[10px] leading-4 text-slate-300 sm:text-xs">
                            {imageSrc ? "界面图片未找到，当前显示科技感占位预览。" : config.support}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {config.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded border border-white/10 bg-white/[0.06] px-2 py-1 text-[10px] text-slate-200"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="rounded border border-white/10 bg-white/[0.06] p-2">
                      <div className="flex items-center justify-between text-[10px] text-slate-300">
                        <span>PAD 状态</span>
                        <span className={config.accent}>Adaptive</span>
                      </div>
                      <div className="mt-2 space-y-1.5">
                        {[78, 62, 84].map((width, index) => (
                          <div key={width} className="h-1.5 rounded bg-white/10">
                            <div
                              className={`h-1.5 rounded ${
                                index === 0
                                  ? "bg-cyan-300"
                                  : index === 1
                                    ? "bg-amber-300"
                                    : "bg-emerald-300"
                              }`}
                              style={{ width: `${compact ? width - 8 : width}%` }}
                            />
                          </div>
                        ))}
                      </div>
                      <p className="mt-2 text-[10px] text-slate-400">{config.pad}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded border border-white/10 bg-white/[0.05] p-2">
                        <Navigation className="mb-2 h-4 w-4 text-cyan-200" />
                        <p className="text-[10px] text-slate-300">导航优先级</p>
                        <p className="text-sm font-semibold text-white">High</p>
                      </div>
                      <div className="rounded border border-white/10 bg-white/[0.05] p-2">
                        <Music2 className="mb-2 h-4 w-4 text-emerald-200" />
                        <p className="text-[10px] text-slate-300">媒体刺激</p>
                        <p className="text-sm font-semibold text-white">
                          {mode === "distraction" ? "Low" : "Auto"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded border border-white/10 bg-white/[0.05] p-2 text-[10px] text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Map className="h-3.5 w-3.5 text-cyan-200" />
                        情景感知
                      </span>
                      <span className="text-white">实时匹配</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-300">
                  <span className="rounded border border-cyan-300/20 bg-cyan-300/10 py-1.5">
                    行为数据
                  </span>
                  <span className="rounded border border-emerald-300/20 bg-emerald-300/10 py-1.5">
                    生理信号
                  </span>
                  <span className="rounded border border-amber-300/20 bg-amber-300/10 py-1.5">
                    主观量表
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="mx-auto h-2 w-[72%] rounded-b-lg border-x border-b border-white/10 bg-black/50"
        aria-hidden="true"
      />
    </motion.div>
  );
}
