import { Award, Trophy } from "lucide-react";
import Image from "next/image";

export default function LuminaryHall() {
  const students = [
    {
      name: "Aditi Sharma",
      detail: "JEE Advance AIR 15",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-2",
      height: "h-[300px] md:h-full",
    },
    {
      name: "Siddharth M",
      detail: "NEET 720/720",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[300px]",
    },
    {
      name: "Rohan Verma",
      detail: "IIT Bombay CS",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[300px]",
    },
    {
      name: "Priya Kapoor",
      detail: "AIIMS Delhi",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      height: "h-[300px]",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-heading mb-6 leading-tight">
              The Luminary Hall
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our students consistently redefine what is possible. Behind every
              top rank is a story of disciplined precision and the Nova Pulse
              methodology.
            </p>

            {/* Stat Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#fdeecf] text-secondary flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary font-heading leading-tight">
                    98% in JEE Advanced
                  </div>
                  <div className="text-sm text-slate-500">
                    Class of 2024 engineering divisions
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#fdeecf] text-secondary flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary font-heading leading-tight">
                    720/720 in NEET UG
                  </div>
                  <div className="text-sm text-slate-500">
                    First perfect score for our medical batches
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Layout of Students */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 auto-rows-fr h-[600px] md:h-[700px]">
            {students.map((student, idx) => (
              <div
                key={idx}
                className={`relative rounded-[2rem] overflow-hidden group ${student.span} ${student.height}`}
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051d40]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left z-10">
                  <div className="text-xl font-bold font-heading">
                    {student.name}
                  </div>
                  <div className="text-xs font-medium tracking-widest uppercase opacity-80">
                    {student.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
