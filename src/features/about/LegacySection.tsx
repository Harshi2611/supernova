"use client";

import { Building2, Calendar } from "lucide-react";

const timelineItems = [
  {
    year: "1983",
    side: "left",
    name: "Somben Hiralal Sinhar Primary School",
    description:
      "Our very first school in Rajkot, setting the standards for innovative teaching methodologies in the region.",
    highlight: false,
  },
  {
    year: "1988",
    side: "right",
    name: "Parimal School",
    description:
      "Expanded primary and secondary education with a focus on holistic development.",
    highlight: false,
  },
  {
    year: "1994",
    side: "left",
    name: "Sinhar & Parishram Schools",
    description:
      "Transforming secondary excellence centers that become famous for academic rigor and discipline in the region.",
    highlight: false,
  },
  {
    year: "2007",
    side: "right",
    name: "Innovative & Bharatiya Vidyalaya",
    description:
      "A shift towards modern pedagogy and technology-integrated classroom environments.",
    highlight: false,
  },
  {
    year: "2010",
    side: "left",
    name: "Jnanaganga & Euro Kids",
    description:
      "Expanding into international pre-school standards bringing global exposure to Rajkot's young learners.",
    highlight: false,
  },
  {
    year: "2017",
    side: "right",
    name: "Innovative International & Super Cubs",
    description:
      "Campuses for the next generation, blending domain-specialty with interactive digital learning.",
    highlight: false,
  },
  {
    year: "2022",
    side: "left",
    name: "The SuperNova Launch",
    description:
      "The apex of the foundation journey. Laser-focused on NEET and JEE, aspiring to develop cosmic intelligence.",
    highlight: true,
  },
];

const stats = [
  { value: "40+", label: "Years of Educational Legacy" },
  { value: "15+", label: "Partner Academic Institutions" },
];

export default function LegacySection() {
  return (
    <section id="about" className="py-20 bg-[#F7FAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8960C] mb-2">
            Sinhar Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00457D]">
            A Legacy of Educational Empowerment
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            SuperNova is the cosmic evolution of the Sinhar Foundation&apos;s
            40-year commitment to excellence. Since 1983, we have been
            architecting premier institutions that transform lives through
            technical clarity and academic rigor.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#00457D]/15 transform -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-8 ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    item.side === "left"
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div
                    className={`inline-block rounded-2xl p-5 border transition-all duration-200 hover:shadow-md ${
                      item.highlight
                        ? "bg-[#00457D] border-[#00457D] text-white"
                        : "bg-white border-[#E8F2FB]"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        item.side === "left"
                          ? "md:justify-end"
                          : "justify-start"
                      }`}
                    >
                      <Building2
                        className={`w-4 h-4 ${
                          item.highlight ? "text-[#C8960C]" : "text-[#00457D]"
                        }`}
                      />
                      <span
                        className={`text-sm font-bold ${
                          item.highlight ? "text-white" : "text-[#00457D]"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        item.highlight ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-sm ${
                      item.highlight
                        ? "bg-[#C8960C] border-[#C8960C] text-white"
                        : "bg-white border-[#00457D] text-[#00457D]"
                    }`}
                  >
                    <span className="text-xs font-bold">
                      {item.year.slice(2)}
                    </span>
                  </div>
                </div>

                <div className="md:hidden flex items-center gap-3 mb-3 mt-2">
                  <div className="w-8 h-8 rounded-full bg-[#00457D] flex items-center justify-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#00457D]">
                    {item.year}
                  </span>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>

          <div className="hidden md:flex justify-center gap-4 mt-4">
            {["2022", "2025"].map((year) => (
              <div
                key={year}
                className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#C8960C]" />
                <span className="text-xs font-semibold text-gray-500">
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-16 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white rounded-2xl p-6 border border-[#E8F2FB] shadow-sm"
            >
              <p className="text-3xl font-bold text-[#00457D]">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
