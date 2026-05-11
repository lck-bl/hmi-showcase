import HmiScreenMockup, { type HmiMode } from "./HmiScreenMockup";
import MotionSection from "./MotionSection";

const screens: {
  title: string;
  mode: HmiMode;
  badge: string;
  image: string;
}[] = [
  {
    title: "通勤拥堵模式",
    mode: "commute",
    badge: "自适应组-新手",
    image: "/images/hmi/traffic-novice.png",
  },
  {
    title: "低能见度模式",
    mode: "visibility",
    badge: "自适应组-新手",
    image: "/images/hmi/low-visibility-novice.png",
  },
  {
    title: "分心抑制模式",
    mode: "distraction",
    badge: "自适应组-老手",
    image: "/images/hmi/distraction-expert.png",
  },
  {
    title: "常态平静模式",
    mode: "calm",
    badge: "对照组",
    image: "/images/hmi/normal-control.png",
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
                showShine={false}
              />
              <div className="mt-4 flex justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">{screen.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
