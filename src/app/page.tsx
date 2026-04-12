import DynamicBannerCTA from "@/components/DynamicBannerCTA";
import CollaborationMarquee from "@/features/home/CollaborationMarquee";
import DigitalRevolutionCTA from "@/features/home/DigitalRevolutionCTA";
import HomeHero from "@/features/home/HomeHero";
import OurApproach from "@/features/home/OurApproach";
import SNSTSection from "@/features/home/SNSTSection";
import WhySupernova from "@/features/home/WhySupernova";
import Testimonials from "@/features/home/Testimonials";

export const metadata = {
  title: "SuperNova Coaching Center | Ignite Your Future",
  description:
    "Redefining Excellence through Precision. Integrated AI parameters for NEET and JEE mastery.",
};

export default function Home() {
  return (
    <main className="flex-1 w-full bg-white flex flex-col min-h-screen">
      <HomeHero />
      <CollaborationMarquee />
      <OurApproach />
      <WhySupernova />
      {/* <StudyMaterial/> */}
      {/* <PulseEcosystem /> */}
      {/* <TailoredPathways /> */}
      {/* <LuminaryHall /> */}
      {/* <HomeCTA /> */}
      <SNSTSection />
      <DynamicBannerCTA
        headline="Take your first step into SuperNova— curated lessons, community access, learn at your pace."
        buttonText="Start Learning Today!"
        imageSrc="/focused_student_hero.png"
      />
      <Testimonials />
      <DigitalRevolutionCTA />
    </main>
  );
}
