import HomeHero from "@/features/home/HomeHero";
import PulseEcosystem from "@/features/home/PulseEcosystem";
import TailoredPathways from "@/features/home/TailoredPathways";
import LuminaryHall from "@/features/home/LuminaryHall";
import HomeCTA from "@/features/home/HomeCTA";

export const metadata = {
  title: "SuperNova Coaching Center | Ignite Your Future",
  description: "Redefining Excellence through Precision. Integrated AI parameters for NEET and JEE mastery.",
};

export default function Home() {
  return (
    <main className="flex-1 w-full bg-white flex flex-col min-h-screen">
      <HomeHero />
      <PulseEcosystem />
      <TailoredPathways />
      <LuminaryHall />
      <HomeCTA />
    </main>
  );
}
