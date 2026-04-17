import DynamicBannerCTA from "@/components/DynamicBannerCTA";
import Methodology from "@/features/courses/Methodology";
import CourseHero from "../../features/courses/CourseHero";
import CurriculumPathways from "../../features/courses/CurriculumPathways";
import VideoShowcase from "../../features/courses/VideoShowcase";

export const metadata = {
  title: "Programs & Courses | SuperNova Coaching Center",
  description: "Explore our rigorous academic framework for grades 5-12.",
};

export default function CoursesPage() {
  return (
    <>
      <CourseHero />
      <CurriculumPathways />
      <Methodology />
      <VideoShowcase />
      <DynamicBannerCTA
        headline="Ready to Start Your Stellar Journey?"
        buttonText="Start Learning Today!"
        imageSrc="/focused_student_hero.png"
      />
    </>
  );
}
