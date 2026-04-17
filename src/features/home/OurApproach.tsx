"use client";

import { FileCheck, Star, Video } from "lucide-react";
import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="bg-[#fdfdfd]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <Image
              src="/focused_student_hero.png"
              alt="Our Approach"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col space-y-8 md:space-y-10 lg:pl-6">
            {/* HEADER */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white text-primary px-3 py-1.5 rounded-md text-[10px] md:text-xs font-bold border border-primary/20 uppercase tracking-widest shadow-sm w-fit">
                <Star className="w-3.5 h-3.5 fill-current text-primary" />
                Our Approach
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-bold font-heading text-primary">
                Learning that Builds Confidence, not Pressure
              </h2>
            </div>

            {/* FEATURES */}
            <div className="flex flex-col gap-6 md:gap-8 pt-2">
              {/* ITEM */}
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] shrink-0 rounded-md border-[2px] md:border-[2.5px] border-primary/20 bg-white flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1">
                    Concept First, Always
                  </h3>
                  <p className="text-sm md:text-[0.95rem] text-slate-600 leading-relaxed">
                    We focus on building strong fundamentals so students truly
                    understand every topic instead of just memorizing.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] shrink-0 rounded-md border-[2px] md:border-[2.5px] border-primary/20 bg-white flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Video className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1">
                    Consistent Practice & Tracking
                  </h3>
                  <p className="text-sm md:text-[0.95rem] text-slate-600 leading-relaxed">
                    Regular tests, MCQs, and performance analysis help students
                    improve step by step with clear direction.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] shrink-0 rounded-md border-[2px] md:border-[2.5px] border-primary/20 bg-white flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <FileCheck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1">
                    Personal Attention & Guidance
                  </h3>
                  <p className="text-sm md:text-[0.95rem] text-slate-600 leading-relaxed">
                    Small batches and continuous support ensure every student
                    gets the attention, motivation, and doubt-solving they need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
