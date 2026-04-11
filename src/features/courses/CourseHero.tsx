import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-800 mb-6 font-heading">
              ACADEMIC EXCELLENCE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-05xl font-bold tracking-tight text-primary font-heading mb-6 leading-tight">
              Architects of <br />
              <span className="text-secondary">Future Leaders</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-sans max-w-xl">
              Rigorous academic framework designed for Grade 5-12. Whether it&apos;s the precision of Science or the strategy of Commerce, we build foundations that last a lifetime.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold text-slate-700">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-sm">
                <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                <span className="text-sm font-bold text-slate-700">Top JEE Ranks</span>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className="relative animate-scale-in">
            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3] border-[6px] border-white">
              {/* Fallback to gray background if image fails, but normally Next.js Image */}
              <div className="w-full h-full bg-slate-200 absolute inset-0 mix-blend-multiply" />
              <img 
                src="/courses-hero.png" 
                alt="Students studying collaboratively"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Stat Overlay Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-primary text-white p-6 rounded-xl shadow-xl border-4 border-white transform hover:-translate-y-1 transition-transform max-w-xs">
              <div className="text-4xl font-bold font-heading mb-1">98%</div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/90 font-semibold leading-tight">
                Success rate in national <br/> competitive exams
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-slate-100/50 -z-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
