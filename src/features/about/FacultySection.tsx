"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

const faculty = [
  {
    name: "Dr. Vikram Sansthai",
    title: "Head of Physics",
    specialization:
      "IIT Bombay graduate with 18+ years in advanced mechanics and optics programs.",
    image:
      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "Physics is not memorization. It is the art of asking the right questions.",
  },
  {
    name: "Dr. Ananya Ray",
    title: "Organic Chemistry Expert",
    specialization:
      "Specialist in biological chemistry, mentored more than 75 years of top NEET performers.",
    image:
      "https://images.pexels.com/photos/5206083/pexels-photo-5206083.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "Chemistry is the bridge between theory and the living world around us.",
  },
  {
    name: "Prof. K. Ramanujan",
    title: "Calculus & Numerics Lead",
    specialization:
      "Renowned for simplifying complex 70+ numerical and probability concepts for NEET aspirants.",
    image:
      "https://images.pexels.com/photos/8617947/pexels-photo-8617947.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "Every number tells a story — our job is to help students read it fluently.",
  },
];

export default function FacultySection() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8960C] mb-2">
            Our Educators
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00457D]">
            The Architects of Excellence
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Our faculty members are subject matter experts with decades of
            collective experience in navigating the complex and competitive
            examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl border border-[#E8F2FB] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00457D]/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#C8960C] text-xs font-semibold mt-0.5">
                    {member.title}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {member.specialization}
                </p>
                <div className="flex items-start gap-2 bg-[#F7FAFD] rounded-xl p-3 border border-[#E8F2FB]">
                  <Quote className="w-4 h-4 text-[#C8960C] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500 italic leading-relaxed">
                    {member.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
