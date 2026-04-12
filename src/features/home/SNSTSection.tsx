"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const snstData = [
  {
    id: 1,
    title: "1. SuperNova Scholarship Test",
    description:
      "Take the SNST to evaluate your potential and secure up to 100% scholarship on our regular classroom programs. Available for students from 5th to 12th standard.",
    buttonText: "Explore More",
    buttonLink: "#",
  },
  {
    id: 2,
    title: "2. Zero Fees Admission",
    description:
      "Based on your SNST score, you can study with absolute zero tuition fees. We believe financial constraints should never stop true talent from shining.",
    buttonText: "Learn More",
    buttonLink: "#",
  },
  {
    id: 3,
    title: "3. Mentorship & Guidelines",
    description:
      "Top performers not only get fee waivers but also one-on-one specialized mentorship from expert faculties to excel in NEET and JEE exams.",
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
              SuperNova Scholarship Test Program provides an incredible
              opportunity to learn from the best with up to 100% fee waiver.
              Join us in creating a bright and barrier-free academic future!
            </p>
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
                          <button className="inline-flex items-center gap-2 bg-white border border-primary text-primary hover:bg-primary hover:text-white rounded-md px-5 py-2.5 text-sm font-bold transition-all group shadow-sm">
                            {item.buttonText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
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
