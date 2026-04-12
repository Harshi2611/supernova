"use client";

import {
  CircleCheck as CheckCircle,
  Globe,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function SuperNovaOdyssey() {
  return (
    <section id="studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8960C] mb-2">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00457D]">
            The SuperNova Odyssey
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Our journey through technical precision and academic rigor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#F7FAFD] rounded-2xl p-7 border border-[#E8F2FB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-[#E8F2FB] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#00457D]" />
                </div>
                <h3 className="text-lg font-bold text-[#00457D]">
                  The Rajkot Spark
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Founded in the heart of Rajkot by IT team with 5 students. The
                focus was simple: uncompromising technical clarity for
                Foundation building.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8960C]">
                <CheckCircle className="w-4 h-4" />
                100% Concept Mastery Focus
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F7FAFD] rounded-2xl p-5 border border-[#E8F2FB]">
                <div className="w-9 h-9 rounded-lg bg-[#E8F2FB] flex items-center justify-center mb-3">
                  <TrendingUp className="w-4 h-4 text-[#00457D]" />
                </div>
                <h4 className="text-sm font-bold text-[#00457D] mb-1">
                  Expansion
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Now serving multiple campuses across top-tier cities.
                </p>
              </div>
              <div className="bg-[#F7FAFD] rounded-2xl p-5 border border-[#E8F2FB]">
                <div className="w-9 h-9 rounded-lg bg-[#E8F2FB] flex items-center justify-center mb-3">
                  <Globe className="w-4 h-4 text-[#00457D]" />
                </div>
                <h4 className="text-sm font-bold text-[#00457D] mb-1">
                  The Future
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Pioneering AI-driven learning for NEET &amp; JEE 2025.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-8 h-full flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #00457D 0%, #003565 100%)",
              }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C8960C] mb-3">
                  Our Philosophy
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
                  Architecting Cosmic
                  <br />
                  Intelligence.
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 max-w-lg">
                  We don&apos;t just teach syllabus; we engineer critical
                  thinking. By merging traditional academic authority with
                  cutting-edge analytical tools, we create a &quot;Digital
                  Luminary&quot; for every student.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "100% Concept Mastery",
                    sub: "Focus on foundations, not shortcuts",
                  },
                  {
                    label: "AI-Powered Analytics",
                    sub: "Personalized performance insights",
                  },
                  {
                    label: "Expert Mentorship",
                    sub: "25+ years collective experience",
                  },
                  {
                    label: "Proven Results",
                    sub: "98% selection rate in top exams",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-[#C8960C] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="text-xs text-blue-200 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
