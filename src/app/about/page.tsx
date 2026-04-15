import DynamicBannerCTA from "@/components/DynamicBannerCTA";
import FacultySection from "@/features/about/FacultySection";
import Hero from "@/features/about/Hero";

function page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FacultySection />
      <DynamicBannerCTA
        headline="Take your first step into SuperNova— curated lessons, community access, learn at your pace."
        buttonText="Start Learning Today!"
        imageSrc="/focused_student_hero.png"
      />
    </main>
  );
}

export default page;
