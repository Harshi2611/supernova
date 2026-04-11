import Link from "next/link";

export default function AIEdge() {
  return (
    <>
      {/* ── DESKTOP: The AI Edge ── */}
      <section className="hidden md:block py-16 lg:py-20 bg-[#f7faff]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[2rem] font-bold text-[#051d40] mb-3">
              The AI Edge
            </h2>
            <p className="text-gray-400 text-sm">
              We don't just teach; we use cutting-edge artificial intelligence
              to tailor your learning journey in real-time.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Large: AI Doubt Solver */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#145da0] to-[#051d40] rounded-xl p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#56aeff]/10 rounded-full -translate-x-4 -translate-y-8 blur-2xl" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-[#56aeff]/20 border border-[#56aeff]/30 flex items-center justify-center mb-4 text-[#56aeff]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Doubt Solver</h3>
                <p className="text-[#b1d4e0] text-sm leading-relaxed mb-5 max-w-sm">
                  Snap a photo of any problem and get instant, step-by-step
                  conceptual explanations 24/7. No more waiting for the next
                  class.
                </p>
                <Link
                  href="/doubt-solver"
                  className="inline-flex items-center gap-2 bg-[#f5c518] hover:bg-[#e6b800] text-[#051d40] font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-105"
                >
                  Try Solver Now ✦
                </Link>
              </div>
            </div>

            {/* Adaptive Test Gen */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#145da0]/40 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#e6f1fb] flex items-center justify-center text-[#145da0] mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#051d40] mb-2">
                Adaptive Test Gen
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our engine analyses your weak points and generates unique mock
                tests that focus on improving your specific performance gaps.
              </p>
            </div>

            {/* Real-Time Analytics */}
            <div className="bg-[#fffbea] border border-[#f5c518]/40 rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#f5c518]/30 flex items-center justify-center text-amber-700 mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[#051d40] mb-2">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Detailed heatmaps of your performance across subjects to predict
                your future rank with 95% accuracy.
              </p>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1 h-8">
                {[30, 55, 40, 70, 60, 85, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-[#f5c518]"
                    style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }}
                  />
                ))}
              </div>
            </div>

            {/* Personalized Roadmap */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 hover:border-[#145da0]/40 hover:shadow-md transition-all">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#e6f1fb] flex items-center justify-center text-[#145da0]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#051d40] mb-1">
                    Personalized Roadmap
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Every student is different. Our AI plots a unique learning
                    path based on your speed, retention rate, and goals.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                {["Assess", "Diagnose", "Learn", "Practice", "Excel"].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          i === 2
                            ? "bg-[#145da0] text-white"
                            : i < 2
                            ? "bg-[#e6f1fb] text-[#145da0]"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step}
                      </div>
                      {i < 4 && (
                        <div
                          className={`w-5 h-0.5 ${
                            i < 2 ? "bg-[#145da0]" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE: Cosmic Intellect ── */}
      <section className="md:hidden py-8 bg-white">
        <div className="px-5">
          <h2 className="text-xl font-bold text-[#051d40] mb-1">
            Cosmic Intellect
          </h2>
          <p className="text-gray-400 text-xs mb-5">
            AI-driven tools that study you while you study.
          </p>

          {/* Large card: Personalized Trajectory */}
          <div className="bg-gradient-to-br from-[#145da0] to-[#051d40] rounded-xl p-5 text-white mb-4 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#56aeff]/10 rounded-full translate-x-8 translate-y-8 blur-xl" />
            <div className="w-9 h-9 rounded-lg bg-[#56aeff]/20 border border-[#56aeff]/30 flex items-center justify-center text-[#56aeff] mb-3">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-base mb-1.5">
              Personalized Trajectory
            </h3>
            <p className="text-[#b1d4e0] text-xs leading-relaxed">
              Our AI maps your weak spots in JEE Physics and creates a custom
              revision path automatically.
            </p>
          </div>

          {/* Two smaller cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#f7faff] border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-[#e6f1fb] flex items-center justify-center text-[#145da0] mb-3">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-[#051d40] text-xs mb-1">
                Smart Doubt Solver
              </h4>
              <p className="text-gray-400 text-[10px] leading-relaxed">
                Upload a photo, get an instant video solution.
              </p>
            </div>
            <div className="bg-[#f7faff] border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-[#e6f1fb] flex items-center justify-center text-[#145da0] mb-3">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-[#051d40] text-xs mb-1">
                Predictive Ranking
              </h4>
              <p className="text-gray-400 text-[10px] leading-relaxed">
                Know your All-India Rank (AIR) before the exam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
