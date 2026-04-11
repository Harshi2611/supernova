import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, CheckCircle } from "lucide-react";

export default function Methodology() {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-slate-300 flex-grow max-w-[80px]"></div>
          <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider font-heading">
            Our Scientific Methodology
          </h2>
        </div>

        {/* The Stellar Progress Test Series */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-16 border border-slate-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-heading mb-4">
              The Stellar Progress Test Series
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A gamified multi-tiered assessment system designed to push boundaries and track evolution from foundational concepts to competitive mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Level 1 */}
            <Card className="border-none shadow-sm hover:shadow-md bg-white text-center rounded-2xl">
              <CardContent className="pt-8 pb-6 px-4">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute -top-2 bg-purple-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Level 1</div>
                  <StarIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-slate-800 font-heading mb-2">Stellar Nebula</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Core conceptual evaluation and foundational accuracy mapping.
                </p>
              </CardContent>
            </Card>

            {/* Level 2 */}
            <Card className="border-none shadow-sm hover:shadow-md bg-white text-center rounded-2xl">
              <CardContent className="pt-8 pb-6 px-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute -top-2 bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Level 2</div>
                  <SparklesIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-800 font-heading mb-2">Massive Star</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Speed vs accuracy balance with intermediate application-based problems.
                </p>
              </CardContent>
            </Card>

            {/* Level 3 */}
            <Card className="border-none shadow-sm hover:shadow-md bg-white text-center rounded-2xl">
              <CardContent className="pt-8 pb-6 px-4">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute -top-2 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Level 3</div>
                  <FlameIcon className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="font-bold text-slate-800 font-heading mb-2">Red SuperGiant</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Advanced analytical challenges simulating national entrance exams.
                </p>
              </CardContent>
            </Card>

            {/* Level 4 */}
            <Card className="border-none shadow-xl bg-primary text-white text-center rounded-2xl transform lg:scale-105 border-4 border-white">
              <CardContent className="pt-8 pb-6 px-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute -top-2 bg-accent text-accent-foreground text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Level 4</div>
                  <AwardIcon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold font-heading mb-2">SuperNova</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  The absolute apex. High pressure scenarios simulating top percentiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tuition Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Personal Tuition */}
          <Card className="bg-white border border-slate-100 shadow-md rounded-2xl overflow-hidden flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 bg-slate-50 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <CardTitle className="text-xl text-primary font-heading">Personal Tuition: One-on-One</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">Tailored Experience:</strong> Individual attention with a personalized study plan based on strong/weak areas.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">In-depth Mastery:</strong> One-on-one doubt resolution and deep concept deep dives at your own pace.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">Flexible Scheduling:</strong> Adaptive timings for maximum convenience and continuous tracking with progress reports.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 2: Group Tuition */}
          <Card className="bg-primary text-primary-foreground shadow-xl rounded-2xl overflow-hidden flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 bg-white/5 pb-6 border-b border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-heading text-white">Group Tuition: Batch Coaching</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-white/90">
                    <strong className="text-white">Interactive Learning:</strong> Peer discussions and competitive environment with a well-structured curricular covering all major subjects.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-white/90">
                    <strong className="text-white">Session Prep:</strong> Regular tests (Mock, Unit tests) and specialized P.T.P. preparation for Boards/IB exam.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-white/90">
                    <strong className="text-white">Extra Support:</strong> Dedicated sessions for mental ability enhancement and centralized organized study materials.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}

// Simple icons to keep it self-contained instead of finding external ones
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.4 7.6 7.6 2.4-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/>
    </svg>
  );
}
function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2s4 4 4 9c0 5-4 9-4 9s-4-4-4-9c0-5 4-9 4-9z"/>
      <path d="M12 10s2 2 2 4.5c0 2.5-2 4.5-2 4.5s-2-2-2-4.5c0-2.5 2-4.5 2-4.5z" fill="white"/>
    </svg>
  );
}
function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4.18 10.3l-1.92 5.76-2.26-2.26-2.26 2.26-1.92-5.76c.49.25 1.05.41 1.63.46l.28 3.51 2.27-2.27 2.27 2.27.28-3.51c.58-.05 1.13-.21 1.63-.46z"/>
    </svg>
  );
}
