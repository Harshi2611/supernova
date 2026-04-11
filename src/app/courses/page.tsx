import CourseHero from "../../features/courses/CourseHero";
import CurriculumPathways from "../../features/courses/CurriculumPathways";
import Methodology from "../../features/courses/Methodology";
import AdvancedPrograms from "../../features/courses/AdvancedPrograms";
import CoursesCTA from "../../features/courses/CoursesCTA";

export const metadata = {
  title: "Programs & Courses | SuperNova Coaching Center",
  description: "Explore our rigorous academic framework for grades 5-12.",
};

export default function CoursesPage() {
  return (
    <main className="flex-1 w-full bg-white flex flex-col">
      <CourseHero />
      <CurriculumPathways />
      <Methodology />
      <AdvancedPrograms />
      <CoursesCTA />
    </main>
  );
}
