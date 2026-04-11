import { Button } from "@/components/ui/button";
import { ArrowRight, UserCheck, BookOpen, GraduationCap, Building2 } from "lucide-react";

export default function AdvancedPrograms() {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Science Excellence header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-slate-300 flex-grow max-w-[80px]"></div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-wider font-heading">
            Science Excellence (Grades 9-12)
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {/* JEE & NEET Pinnacle */}
          <div className="lg:col-span-2 bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                Premium Program
              </div>
              <h4 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                JEE & NEET Pinnacle
              </h4>
              <p className="text-lg text-white/80 max-w-lg mb-10 leading-relaxed font-sans">
                Comprehensive 2-year and 4-year integrated coaching for India&apos;s toughest medical and engineering entrance exams.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold font-heading">Advanced Labs</div>
                    <div className="text-sm text-white/60">Simulated test environments</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold font-heading">Expert Faculty</div>
                    <div className="text-sm text-white/60">IIT/IIM/AIIMS alumni mentors</div>
                  </div>
                </div>
              </div>

              <Button className="bg-white text-primary hover:bg-slate-100 font-bold px-6 py-6 h-auto">
                VIEW BATCH DETAILS <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            {/* Visual chemical nodes background effect pseudo implementation */}
            <div className="absolute bottom-10 right-10 opacity-30 select-none hidden md:block">
               <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                 <circle cx="150" cy="50" r="10" fill="#56aeff" />
                 <circle cx="100" cy="100" r="15" fill="#56aeff" />
                 <circle cx="50" cy="150" r="10" fill="#56aeff" />
                 <circle cx="180" cy="130" r="8" fill="#56aeff" />
                 <line x1="150" y1="50" x2="100" y2="100" stroke="#56aeff" strokeWidth="2" />
                 <line x1="100" y1="100" x2="50" y2="150" stroke="#56aeff" strokeWidth="2" />
                 <line x1="100" y1="100" x2="180" y2="130" stroke="#56aeff" strokeWidth="2" />
               </svg>
            </div>
          </div>

          {/* Board Mastery */}
          <div className="bg-slate-200/50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col justify-center">
            <h4 className="text-2xl font-bold font-heading text-slate-800 mb-3">Board Mastery</h4>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              Guaranteed CBSE/ICSE/State Board excellence without compromising competitive prep.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="font-bold text-slate-800 text-sm mb-1">Weekly Writing Drills</div>
                <div className="text-xs text-slate-500">Focusing on clarity & scoring techniques</div>
              </li>
              <li className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="font-bold text-slate-800 text-sm mb-1">Examiner Grading Review</div>
                <div className="text-xs text-slate-500">Evaluation from past board moderators</div>
              </li>
            </ul>
            <Button variant="outline" className="w-full font-bold border-slate-300 bg-transparent text-slate-700 hover:text-primary">
              VIEW SYLLABUS
            </Button>
          </div>
        </div>

        {/* Commerce and Management */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-slate-300 flex-grow max-w-[80px]"></div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-wider font-heading">
            Commerce & Management (Grades 11-12)
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CA Foundation */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col sm:flex-row gap-6 items-center">
             <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-800 rounded-2xl flex items-center justify-center p-4 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent"></div>
                <div className="h-12 w-full flex items-end gap-1 px-2">
                   <div className="w-1/4 bg-accent h-1/3 rounded-t-sm"></div>
                   <div className="w-1/4 bg-accent/80 h-2/3 rounded-t-sm"></div>
                   <div className="w-1/4 bg-accent/60 h-full rounded-t-sm"></div>
                   <div className="w-1/4 bg-[#145da0] h-1/2 rounded-t-sm"></div>
                </div>
             </div>
             <div>
               <h4 className="text-2xl font-bold font-heading text-slate-800 mb-2">CA Foundation Track</h4>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 The ultimate launchpad for aspiring Chartered Accountants with dedicated accounts and law focus.
               </p>
               <div className="flex gap-2">
                 <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded-md">Accounting</span>
                 <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded-md">Mercantile Law</span>
               </div>
             </div>
          </div>

          {/* BBA & CUET */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col sm:flex-row gap-6 items-center">
             <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-800 rounded-2xl flex items-center justify-center p-4 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                <div className="w-full flex justify-between items-center px-2">
                   <div className="p-2 bg-white/10 rounded-md"><Building2 className="w-6 h-6 text-white/90"/></div>
                   <ArrowRight className="w-4 h-4 text-white/50" />
                   <div className="p-2 bg-accent/20 rounded-md"><GraduationCap className="w-6 h-6 text-accent"/></div>
                </div>
             </div>
             <div>
               <h4 className="text-2xl font-bold font-heading text-slate-800 mb-2">BBA & CUET prep</h4>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Strategic entrance preparation for India&apos;s top management universities and Central Universities.
               </p>
               <div className="flex gap-2">
                 <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded-md">Economics</span>
                 <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded-md">Aptitude</span>
               </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
