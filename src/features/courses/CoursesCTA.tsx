import { Button } from "@/components/ui/button";

export default function CoursesCTA() {
  return (
    <section className="py-24 bg-slate-100 text-center relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-heading mb-6 max-w-2xl mx-auto">
          Not sure which path to choose?
        </h2>
        <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Our career counselors are ready to help you map out your academic journey based on your strengths and aspirations.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="font-bold px-8 py-6 h-auto w-full sm:w-auto text-sm tracking-wide bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg hover:shadow-primary/30 transition-all">
            BOOK FREE CONSULTATION
          </Button>
          <Button variant="outline" className="font-bold px-8 py-6 h-auto w-full sm:w-auto text-sm tracking-wide bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg shadow-sm">
            DOWNLOAD PROSPECTUS
          </Button>
        </div>
      </div>
      
      {/* Decorative background blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </section>
  );
}
