import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, Calculator } from "lucide-react";

export default function CurriculumPathways() {
  return (
    <section className="bg-slate-50 relative">
      <div className="container py-16 lg:py-16">
        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-3">
              Curriculum Pathways
            </h2>
            <p className="text-slate-500 max-w-2xl">
              Tailored academic journeys for every ambition.
            </p>
          </div>
        </div>

        {/* Category: Foundation */}
        <div className="mb-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px bg-slate-300 flex-grow max-w-[80px]"></div>
            <h3 className="text-lg font-bold text-slate-700 uppercase tracking-wider font-heading">
              Foundation (Grades 5-8)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-primary font-heading">
                  Junior Scholars
                </CardTitle>
                <CardDescription className="text-slate-500 mt-2 line-clamp-2">
                  Developing logical reasoning and scientific inquiry for grades
                  5 & 6.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Mental Ability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Science Olympiad
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-between px-0 font-bold text-slate-500 hover:text-primary group"
                >
                  EXPLORE{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Calculator className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-primary font-heading">
                  Pre-Foundation
                </CardTitle>
                <CardDescription className="text-slate-500 mt-2 line-clamp-2">
                  Intensive bridge course for Grades 7 & 8 focusing on advanced
                  mathematics.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Algebra Mastery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Physics Basics
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-between px-0 font-bold text-slate-500 hover:text-primary group"
                >
                  EXPLORE{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-primary font-heading">
                  Junior Scholars
                </CardTitle>
                <CardDescription className="text-slate-500 mt-2 line-clamp-2">
                  Developing logical reasoning and scientific inquiry for grades
                  5 & 6.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Mental Ability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Science Olympiad
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-between px-0 font-bold text-slate-500 hover:text-primary group"
                >
                  EXPLORE{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Calculator className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-primary font-heading">
                  Pre-Foundation
                </CardTitle>
                <CardDescription className="text-slate-500 mt-2 line-clamp-2">
                  Intensive bridge course for Grades 7 & 8 focusing on advanced
                  mathematics.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Algebra Mastery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-accent text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      Physics Basics
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-between px-0 font-bold text-slate-500 hover:text-primary group"
                >
                  EXPLORE{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
