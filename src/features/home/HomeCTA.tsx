import { Button } from "@/components/ui/button";

export default function HomeCTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden bg-primary rounded-[3rem] text-center px-6 py-20 lg:py-28 shadow-2xl flex flex-col items-center">
          
          {/* subtle background pattern overlay */}
          <div className="absolute inset-0 bg-[#051d40]/20 z-0"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <h2 className="text-4xl md:text-6xl font-bold text-white font-heading mb-8 leading-[1.1]">
              Your potential is infinite.<br /> Let us provide the spark.
            </h2>
            
            <p className="text-slate-200 text-sm md:text-base font-medium max-w-xl mx-auto mb-10 leading-relaxed">
              Join 50,000+ students already mastering their future with the SuperNova academic framework.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-14 px-8 bg-white text-primary hover:bg-slate-50 font-bold rounded-xl text-lg shadow-lg">
                Apply for Admission
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-14 px-8 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white font-bold rounded-xl text-lg transition-colors">
                Talk to an Expert
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
