"use client";

import {
  Banknote,
  BookOpen,
  Clock,
  GraduationCap,
  TrendingUp,
  User,
} from "lucide-react";

export default function WhySupernova() {
  // Using lucide-react icons as simple placeholders; these can easily be swapped with your custom SVGs
  const features = [
    {
      icon: <User className="w-14 h-14 stroke-[1.5px]" />,
      title: "Personal",
      subtitle: "tuition concept",
    },
    {
      icon: <Clock className="w-14 h-14 stroke-[1.5px]" />,
      title: "Limited student,",
      subtitle: "Unlimited time",
    },
    {
      icon: <TrendingUp className="w-14 h-14 stroke-[1.5px]" />,
      title: "100% guaranteed",
      subtitle: "improvement",
    },
    {
      icon: <GraduationCap className="w-14 h-14 stroke-[1.5px]" />,
      title: "Expert & experienced",
      subtitle: "faculties",
    },
    {
      icon: <BookOpen className="w-14 h-14 stroke-[1.5px]" />,
      title: "Chapterwise",
      subtitle: "coaching",
    },
    {
      icon: <Banknote className="w-14 h-14 stroke-[1.5px]" />,
      title: "Pay",
      subtitle: "chapterwise",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#eff6fb]  text-primary relative overflow-hidden">
      {/* Optional subtle background gradient to keep it visually rich without image clutter */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold font-heading tracking-tight drop-shadow-sm">
            Why Supernova?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-[#facc15] mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                {/* SVG/Icon Container */}
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-[1.35rem] font-bold leading-tight mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-slate-600 font-medium tracking-wide">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
