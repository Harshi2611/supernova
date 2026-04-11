import Hero from "@/features/about/Hero";
import SuperNovaOdyssey from "../../features/about/SuperNovaOdyssey";
import LegacySection from "@/features/about/LegacySection";
import FacultySection from "@/features/about/FacultySection";
import EnvironmentSection from "@/features/about/EnvironmentSection";
import CTABanner from "@/features/about/CTABanner";

function page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SuperNovaOdyssey />
      <LegacySection />
      <FacultySection />
      <EnvironmentSection />
      <CTABanner />
    </main>
  );
}

export default page;
