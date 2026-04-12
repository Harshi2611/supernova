const toppers = [
  {
    name: "Arjan Mehta",
    exam: "JEE Advanced 2023",
    result: "99.9%ile",
    rank: "AIR 36",
    initials: "AM",
    bg: "from-[#145da0] to-[#051d40]",
  },
  {
    name: "Sanya Gupta",
    exam: "NEET 2023",
    result: "715/720",
    rank: "AIR 23",
    initials: "SG",
    bg: "from-[#0a6b5e] to-[#064035]",
  },
  {
    name: "Rohan Das",
    exam: "JEE Mains 2024",
    result: "99.7%ile",
    rank: "AIR 112",
    initials: "RD",
    bg: "from-[#7b3fa0] to-[#4a1f6a]",
  },
  {
    name: "Ishani Roy",
    exam: "CBSE Class XII",
    result: "State Rank 4",
    rank: "499/500",
    initials: "IR",
    bg: "from-[#b83030] to-[#6b1818]",
  },
];

export default function HallOfFame() {
  return (
    <>
      {/* ── DESKTOP: Our Hall of Fame ── */}
      <section className="hidden md:block py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-[2rem] font-bold text-[#051d40] mb-2">
              Our Hall of Fame
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Real results from real students. See how the SuperNova method
              transforms potential into top ranks.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {toppers.map((t, i) => (
              <div
                key={t.name}
                className="group rounded-xl border border-gray-200 overflow-hidden hover:border-[#145da0]/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                {/* rank badge */}
                <div
                  className={`h-28 bg-gradient-to-br ${t.bg} flex items-center justify-center relative`}
                >
                  <div className="absolute top-2 left-2 bg-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                    #{i + 1}
                  </div>
                  {/* Avatar circles */}
                  <div className="relative">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="absolute rounded-md border border-white/10"
                        style={{
                          width: `${56 + j * 22}px`,
                          height: `${56 + j * 22}px`,
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          opacity: 0.15 - j * 0.04,
                        }}
                      />
                    ))}
                    <div className="w-14 h-14 rounded-md bg-white/20 border-2 border-white/40 flex items-center justify-center text-white font-bold text-lg relative z-10">
                      {t.initials}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-[#051d40] text-sm">{t.name}</h3>
                  <p className="text-gray-400 text-[11px] mt-0.5 mb-2">
                    {t.exam}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-600 text-sm">
                      {t.result}
                    </span>
                    <span className="text-[11px] text-[#145da0] bg-[#e6f1fb] px-2 py-0.5 rounded-md font-medium">
                      {t.rank}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE: Hall of Nova ── */}
      <section className="md:hidden py-8 bg-[#f7faff]">
        <div className="px-5">
          <h2 className="text-xl font-bold text-[#051d40] mb-1">
            Hall of Nova
          </h2>
          <p className="text-gray-400 text-xs mb-5">
            Our toppers don&apos;t just clear exams, they dominate.
          </p>

          {/* Horizontal scroll */}
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x">
            {/* Main topper card */}
            <div className="flex-shrink-0 w-[200px] snap-start rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="h-24 bg-gradient-to-br from-[#145da0] to-[#051d40] flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-md bg-white/20 border-2 border-white/40 flex items-center justify-center text-white font-bold">
                  AS
                </div>
              </div>
              <div className="p-3">
                <div className="font-bold text-[#051d40] text-xs">
                  Arjan Sharma
                </div>
                <div className="text-[#145da0] text-[10px] font-semibold">
                  AIR 14 (JEE)
                </div>
                <p className="text-gray-400 text-[10px] mt-1.5 leading-relaxed line-clamp-3">
                  The AI tutor for analytics prepared me — saved 300 hours of
                  redundant study time
                </p>
              </div>
            </div>
            {/* Second card */}
            <div className="flex-shrink-0 w-[200px] snap-start rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="h-24 bg-gradient-to-br from-[#0a6b5e] to-[#064035] flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-md bg-white/20 border-2 border-white/40 flex items-center justify-center text-white font-bold">
                  SG
                </div>
              </div>
              <div className="p-3">
                <div className="font-bold text-[#051d40] text-xs">
                  Sanya Gupta
                </div>
                <div className="text-emerald-600 text-[10px] font-semibold">
                  715/720 NEET
                </div>
                <p className="text-gray-400 text-[10px] mt-1.5 leading-relaxed line-clamp-3">
                  SuperNova&apos;s personalized roadmap kept me focused
                  throughout 2 years of prep
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
