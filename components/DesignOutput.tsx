import HmiScreenMockup, { type HmiMode } from "./HmiScreenMockup";
import MotionSection from "./MotionSection";

const screens: {
  title: string;
  mode: HmiMode;
  badge: string;
  image: string;
  point: string;
}[] = [
  {
    title: "通勤拥堵模式",
    mode: "commute",
    badge: "自适应组-新手",
    image: "/images/hmi/traffic-novice.png",
    point: "以 ETA、拥堵原因与明确路线建议为主，体现新手低自信状态下的辅助策略。",
  },
  {
    title: "低能见度模式",
    mode: "visibility",
    badge: "自适应组-新手",
    image: "/images/hmi/low-visibility-novice.png",
    point: "强化道路边界、车距和语音确认，让安全信息更加确定。",
  },
  {
    title: "分心抑制模式",
    mode: "distraction",
    badge: "自适应组-老手",
    image: "/images/hmi/distraction-expert.png",
    point: "保留少量可控快捷入口，只在关键风险节点提示，尊重老手操作节奏。",
  },
  {
    title: "常态平静模式",
    mode: "calm",
    badge: "对照组",
    image: "/images/hmi/normal-control.png",
    point: "展示固定界面基线，用于和自适应组的差异化策略进行对照。",
  },
];

export default function DesignOutput() {
  return (
    <MotionSection id="design-output" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-emerald-200">07 Design Output</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            设计界面展示
          </h2>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {screens.map((screen) => (
            <article key={`${screen.title}-${screen.badge}`}>
              <HmiScreenMockup
                mode={screen.mode}
                label={screen.title}
                badge={screen.badge}
                imageSrc={screen.image}
                imageAlt={`${screen.title} ${screen.badge} HMI 界面`}
              />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{screen.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{screen.point}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
