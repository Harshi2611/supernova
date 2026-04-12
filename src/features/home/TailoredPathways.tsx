import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function TailoredPathways() {
  const pathways = [
    {
      label: "MEDICAL",
      title: "NEET Ultimate Precision",
      desc: "Comprehensive biology, chemistry, and physics modules designed specifically for top medical entrance exams.",
      bgColor: "bg-slate-50",
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "ENGINEERING",
      title: "JEE Main & Advanced",
      desc: "Maximum problem-solving techniques and rigorous mathematics training for IIT aspirant success.",
      bgColor: "bg-slate-50",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "FOUNDATION",
      title: "Pre-Foundation Ignite",
      desc: "Building a bullet-proof base in logic and core science for students in grades 8 to 10.",
      bgColor: "bg-slate-50",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-heading mb-4">
              Tailored Pathways to Success
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Each course is meticulously structured by curriculum architects to
              ensure absolute conceptual clarity.
            </p>
          </div>
          <a
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 uppercase tracking-widest border-b-2 border-primary pb-1 group whitespace-nowrap"
          >
            View All Programs{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathways.map((path, idx) => (
            <div
              key={idx}
              className={`${path.bgColor} rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col`}
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold tracking-wider text-slate-800 uppercase shadow-sm">
                  {path.label}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 font-heading mb-3 group-hover:text-primary transition-colors">
                  {path.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {path.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-auto">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-md">
                    Syllabus Live
                  </span>
                  <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Syllabus <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
