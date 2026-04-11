import Link from "next/link";

export default function CTASection() {
  return (
    <>
      {/* ── DESKTOP CTA ── */}
      <section className="hidden md:block py-16 lg:py-24 bg-[#051d40] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#145da0]/25 rounded-full blur-[100px]" />
          {/* Corner starburst */}
          <svg
            viewBox="0 0 120 120"
            className="absolute top-0 right-0 w-40 h-40 opacity-[0.07] text-[#56aeff]"
            fill="none"
          >
            {[...Array(16)].map((_, i) => {
              const a = (i * 22.5 * Math.PI) / 180;
              const l = i % 2 === 0 ? 54 : 34;
              return (
                <line
                  key={i}
                  x1="60"
                  y1="60"
                  x2={60 + Math.cos(a) * l}
                  y2={60 + Math.sin(a) * l}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              );
            })}
            <circle cx="60" cy="60" r="6" fill="#94a3b8" />
          </svg>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#56aeff 1px, transparent 1px), linear-gradient(90deg,#56aeff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to light up your future?
          </h2>
          <p className="text-[#b1d4e0] text-base mb-10 max-w-lg mx-auto">
            Join the ranks of thousands of successful students who found their
            path to excellence with SuperNova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2 bg-[#f5c518] hover:bg-[#e6b800] text-[#051d40] font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#f5c518]/20"
            >
              Start Your Journey Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#56aeff]/40 hover:border-[#56aeff] text-[#b1d4e0] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:bg-[#56aeff]/10"
            >
              Contact a Counselor
            </Link>
          </div>
        </div>
      </section>

      {/* ── MOBILE: Find a Center Near You ── */}
      <section className="md:hidden py-8 bg-[#051d40] mx-4 rounded-2xl my-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #56aeff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="px-5 relative z-10">
          <h2 className="text-xl font-bold text-white mb-5">
            Find a Center Near
            <br />
            You
          </h2>

          {/* Location cards */}
          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3 bg-[#0a2a50] rounded-xl px-4 py-3">
              <span className="text-[#f5c518] text-base mt-0.5">📍</span>
              <div>
                <div className="text-white font-semibold text-xs">
                  Kota Head Office
                </div>
                <div className="text-[#b1d4e0] text-[11px] mt-0.5">
                  Industrial Area, Road No. 2, Kota, Rajasthan
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#0a2a50] rounded-xl px-4 py-3">
              <span className="text-[#56aeff] text-base mt-0.5">📞</span>
              <div>
                <div className="text-white font-semibold text-xs">
                  Admissions Helpline
                </div>
                <div className="text-[#b1d4e0] text-[11px] mt-0.5">
                  1800-NOVA-EDU (Toll Free)
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-[#0a2a50] rounded-xl h-32 flex items-center justify-center mb-4 border border-[#145da0]/30 overflow-hidden relative">
            {/* Simple map grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#56aeff 1px, transparent 1px), linear-gradient(90deg,#56aeff 1px,transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <button className="relative z-10 flex items-center gap-2 bg-white text-[#051d40] font-semibold text-xs px-4 py-2.5 rounded-lg shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Open in Maps
            </button>
          </div>

          {/* Download Brochure */}
          <button className="w-full flex items-center justify-center gap-2 bg-[#f5c518] text-[#051d40] font-bold text-sm py-3.5 rounded-xl">
            Download Brochure ↓
          </button>
        </div>
      </section>
    </>
  );
}
