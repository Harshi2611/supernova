"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #00457D 0%, #002d52 100%)",
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-md bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-md bg-[#C8960C]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-md bg-white/10 text-[#C8960C] border border-white/10">
          <span className="w-1.5 h-1.5 rounded-md bg-[#C8960C] animate-pulse" />
          Admissions Open
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Ready to reach for{" "}
          <span className="italic text-[#C8960C]">your star?</span>
        </h2>

        <p className="text-blue-200 text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Join the next cohort of high achievers at SuperNova. Admissions are
          now open for Foundation, JEE, and NEET courses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#C8960C] hover:bg-[#a87a0a] text-white font-semibold px-8 py-6 text-base rounded-md shadow-lg shadow-[#C8960C]/30 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Schedule Campus Visit
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-base rounded-md transition-all duration-200 bg-transparent"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Admission Roadmap
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
