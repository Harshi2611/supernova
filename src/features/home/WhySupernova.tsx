"use client";

import pay1 from "@/assets/pay1.svg";
import pay2 from "@/assets/pay2.svg";
import pay3 from "@/assets/pay3.svg";
import pay4 from "@/assets/pay4.svg";
import pay5 from "@/assets/pay5.svg";
import pay6 from "@/assets/pay6.svg";
import Image from "next/image";

export default function WhySupernova() {
  // Using lucide-react icons as simple placeholders; these can easily be swapped with your custom SVGs
  const features = [
    {
      id: 1,
      icon: pay1,
      title: "Personal",
      subtitle: "tuition concept",
    },
    {
      id: 2,
      icon: pay2,
      title: "Limited student,",
      subtitle: "Unlimited time",
    },
    {
      id: 3,
      icon: pay3,
      title: "100% guaranteed",
      subtitle: "improvement",
    },
    {
      id: 4,
      icon: pay4,
      title: "Expert & experienced",
      subtitle: "faculties",
    },
    {
      id: 5,
      icon: pay5,
      title: "Chapterwise",
      subtitle: "coaching",
    },
    {
      id: 6,
      icon: pay6,
      title: "Pay",
      subtitle: "chapterwise",
    },
  ];

  return (
    <section className="py-20 lg:py-16 bg-[#eff6fb]  text-primary relative overflow-hidden">
      {/* Optional subtle background gradient to keep it visually rich without image clutter */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold font-heading tracking-tight drop-shadow-sm">
            Why Supernova?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-40 h-40">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-600 font-medium tracking-wide">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
