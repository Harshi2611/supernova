import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export default function FeaturedResource() {
  return (
    <div className="hidden lg:grid grid-cols-12 gap-8 mb-16 animate-fade-in-up">
      {/* Massive Featured Post Container */}
      <div className="col-span-8 group relative overflow-hidden rounded-3xl shadow-xl bg-slate-900 border border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/neural_networks_banner.png"
            alt="Neural Networks"
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#051d40] via-[#051d40]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-end h-[500px] p-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              AI IN EDUCATION
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading leading-tight max-w-3xl">
            Mastering Neural Networks: The Future of Competitive Exams
          </h2>

          <div className="flex items-center gap-6 text-sm text-slate-300 font-medium font-sans">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Oct 24, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editor's Pick Sidebar Card */}
      <div className="col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col shadow-sm">
        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-6">
          EDITOR&apos;S PICK
        </div>

        <h3 className="text-2xl font-bold text-slate-800 font-heading mb-4 leading-snug">
          Why 2025 will be the most competitive year for JEE Advanced aspirants.
        </h3>

        <p className="text-slate-600 mb-8 leading-relaxed text-sm flex-grow">
          Recent data analysis suggests a 15% shift in problem-solving patterns.
          Explore how the new curriculum structure favors adaptive learners over
          rote memorization.
        </p>

        <Button className="w-full justify-between bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl mb-8 group">
          Read Full Insight{" "}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-200 mt-auto">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
            <Image
              src="https://i.pravatar.cc/150?img=11"
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800">
              Dr. Janvi Sharma
            </div>
            <div className="text-xs text-slate-500">
              Head of Research, SuperNova
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
