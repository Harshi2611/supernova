"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const snstData = [
  {
    id: 1,
    title: "1. Merit-Based Entry",
    description:
      "Students qualify through a structured SNST scholarship test designed to evaluate real understanding and potential.Only deserving and committed students get selected.",
    buttonText: "Explore More",
    buttonLink: "#",
  },
  {
    id: 2,
    title: "2. Zero Fees Learning",
    description:
      "Selected students can study without paying upfront fees, getting full access to SuperNova’s teaching, test series, and mentorship system.",
    buttonText: "Learn More",
    buttonLink: "#",
  },
  {
    id: 3,
    title: "3. Performance-Driven Continuation",
    description:
      "The program continues based on regular performance, discipline, and consistency — rewarding students who stay committed to growth.",
    buttonText: "Find out how",
    buttonLink: "#",
  },
];

export default function SNSTSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        {/* Row 1: Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-8 lg:mb-12">
          {/* Header text only in the Left Column */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-white text-primary px-3 py-1.5 rounded-md text-[11px] font-bold border border-primary/20 uppercase tracking-widest mb-6 shadow-sm w-fit">
              <Star className="w-3.5 h-3.5 fill-current text-primary" />
              SNST
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-heading text-primary leading-[1.1] mb-6">
              Zero Fees Program
            </h2>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              SuperNova’s SNST (SuperNova Scholarship & Talent Program) is built
              for students who have talent, dedication, and ambition — but need
              the right opportunity.
            </p>
            <button className="mt-8 inline-flex items-center gap-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 group shadow-sm hover:shadow-md w-fit">
              Join Now
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          {/* Right Column of Header Row is strictly empty. The image from the row below pops up into this space! */}
          <div className="hidden lg:block relative"></div>
        </div>

        {/* Row 2: Accordion Tabs and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Column: Accordion */}
          <div className="flex flex-col gap-4 z-20">
            {snstData.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`cursor-pointer transition-all duration-300 rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden ${
                    isActive
                      ? "bg-[#f2f7fd]" // Active light blue background
                      : "bg-[#f8f9fa] hover:bg-slate-50" // Inactive ultra light gray background
                  }`}
                >
                  <div
                    className={`transition-all duration-300 ${
                      isActive ? "p-6 md:p-8" : "p-6"
                    }`}
                  >
                    <h4
                      className={`text-xl font-bold transition-colors ${
                        isActive ? "text-primary" : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </h4>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: 16,
                          }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="text-slate-600 text-[1.05rem] leading-relaxed mb-8 pr-4">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Background Box - exactly matches height of Accordion */}
          <div className="relative w-full min-h-[300px] lg:min-h-0 bg-[#f8f9fc] rounded-[2rem] mt-32 lg:mt-0 shadow-sm border border-slate-50">
            {/* The Image - positioned absolute bottom, bursting out top */}
            <Image
              src="/focused_student_hero.png" // User's project image
              alt="SNST Zero Fees Program"
              width={750}
              height={950}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[85%] h-auto object-contain object-bottom origin-bottom z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
