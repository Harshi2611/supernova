import test1 from "@/assets/test1.svg";
import test2 from "@/assets/test2.svg";
import test3 from "@/assets/test3.svg";
import test4 from "@/assets/test4.svg";
import Image from "next/image";

const testLevels = [
  { src: test1, alt: "stellar nebula" },
  { src: test2, alt: "massive star" },
  { src: test3, alt: "red supergiant" },
  { src: test4, alt: "supernova" },
];

export default function   Methodology() {
  return (
    <section className="relative bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-slate-300 flex-grow max-w-[80px]"></div>
          <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider font-heading">
            Our Scientific Methodology
          </h2>
        </div>

        {/* The Stellar Progress Test Series */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-heading mb-4">
              The Stellar Progress Test Series
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              A gamified multi-tiered assessment system designed to push
              boundaries and track evolution from foundational concepts to
              competitive mastery.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testLevels.map((level, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={level.src}
                  alt={level.alt}
                  width={200}
                  height={280}
                  className="w-auto h-[270px] sm:h-[300px] md:h-[300px] object-contain drop-shadow-lg"
                  priority
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
