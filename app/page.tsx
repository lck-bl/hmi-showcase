import AdaptiveStrategy from "@/components/AdaptiveStrategy";
import Conclusion from "@/components/Conclusion";
import DesignOutput from "@/components/DesignOutput";
import ExperimentValidation from "@/components/ExperimentValidation";
import Hero from "@/components/Hero";
import PadModel from "@/components/PadModel";
import ResearchBackground from "@/components/ResearchBackground";
import ScenarioMapping from "@/components/ScenarioMapping";
import UserPersona from "@/components/UserPersona";

export default function Home() {
  return (
    <main
      className="site-shell min-h-screen overflow-x-hidden text-slate-100"
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        color: "#f1f5f9",
        background:
          "radial-gradient(circle at 18% 4%, rgba(34, 211, 238, 0.2), transparent 31rem), radial-gradient(circle at 84% 16%, rgba(16, 185, 129, 0.15), transparent 30rem), linear-gradient(180deg, #05070b 0%, #071014 38%, #05070b 100%)",
      }}
    >
      <Hero />
      <ResearchBackground />
      <PadModel />
      <UserPersona />
      <ScenarioMapping />
      <AdaptiveStrategy />
      <ExperimentValidation />
      <DesignOutput />
      <Conclusion />
    </main>
  );
}
