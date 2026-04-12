"use client";

import { ArrowRight, FileCheck, Star, Video } from "lucide-react";
import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="py-20 lg:py-32 bg-[#fdfdfd]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image Card */}
          <div className="relative w-full aspect-[4/5] md:aspect-[1/1] lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            {/* Using project's public folder image as requested */}
            <Image
              src="/focused_student_hero.png"
              alt="Our Approach"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col space-y-10 lg:pl-6">
            {/* Header Text */}
            <div className="space-y-5">
              <h4 className="text-xs font-extrabold tracking-[0.2em] text-primary/80 uppercase">
                Our Approach
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-heading text-primary leading-[1.15] tracking-tight">
                Culture is at the heart of everything we do!
              </h2>
              <p className="text-[1.05rem] text-slate-600 leading-relaxed font-medium max-w-lg pt-2">
                ASL and Deaf culture shape how we connect, express and live. We
                want to educate students in a way that shows respect to the Deaf
                community while spreading awareness. We welcome all students of
                any background to learn with us about this rich community!
              </p>
            </div>

            {/* List Attributes */}
            <div className="flex flex-col gap-8 pt-2">
              {/* Item 1 */}
              <div className="flex gap-6 items-start group">
                <div className="w-[3.5rem] h-[3.5rem] shrink-0 rounded-md border-[2.5px] border-primary/20 bg-white flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Star className="w-5 h-5 fill-current stroke-[1.5px]" />
                </div>
                <div className="flex flex-col pt-1.5">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Supportive Community
                  </h3>
                  <p className="text-[0.95rem] text-slate-600 leading-snug">
                    We create a positive environment focused on inclusivity
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 items-start group">
                <div className="w-[3.5rem] h-[3.5rem] shrink-0 rounded-md border-[2.5px] border-primary/20 bg-white flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Video className="w-6 h-6 stroke-[2.5px]" />
                </div>
                <div className="flex flex-col pt-1.5">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Flexible Lesson Videos
                  </h3>
                  <p className="text-[0.95rem] text-slate-600 leading-snug">
                    Students can learn at their own pace
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 items-start group">
                <div className="w-[3.5rem] h-[3.5rem] shrink-0 rounded-md border-[2.5px] border-primary/20 bg-white flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <FileCheck className="w-6 h-6 stroke-[2.5px]" />
                </div>
                <div className="flex flex-col pt-1.5">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Practical Application
                  </h3>
                  <p className="text-[0.95rem] text-slate-600 leading-snug">
                    Learn content to help you become conversationally fluent
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="inline-flex items-center gap-2.5 border-[2px] border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-bold transition-all group shadow-sm hover:shadow-md">
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
