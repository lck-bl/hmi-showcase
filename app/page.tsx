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
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
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
