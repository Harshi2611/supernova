"use client";

import { motion } from "framer-motion";

export default function DigitalRevolutionCTA() {
  return (
    <section className=" bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-primary rounded-lg p-10 md:p-16 lg:p-16 overflow-hidden flex flex-col items-center text-center shadow-[0_20px_50px_rgba(5,29,64,0.3)]"
        >
          {/* Subtle Decorative Dashed Rings (Top Right) */}
          <div className="absolute top-[-15%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-md border border-dashed border-white/10 pointer-events-none" />
          <div className="absolute top-[-30%] right-[-20%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-md border border-dashed border-white/5 pointer-events-none" />

          {/* Soft central glow behind text */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#145da0]/40 via-primary/0 to-primary/0 pointer-events-none" />

          {/* Top Pill */}
          <div className="relative z-10 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-5 py-2 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-10">
            <span className="w-1.5 h-1.5 rounded-md bg-white opacity-80" />
            Phase 3 Deployment
          </div>

          {/* Glowing Headline */}
          <h2
            className="relative z-10 text-4xl md:text-5xl lg:text-[4rem] font-bold font-heading text-white leading-[1.1] mb-12 max-w-4xl tracking-tight"
            style={{
              textShadow: "0 0 35px rgba(255, 255, 255, 0.4)",
            }}
          >
            SuperNova 3.0: The Digital Revolution
          </h2>

          {/* CTA Button */}
          <button className="relative z-10 bg-[#e6f0fa] hover:bg-white text-primary px-8 py-4 rounded-xl font-extrabold text-base md:text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] mb-10 transform hover:-translate-y-1 group">
            Reserve Priority Access
          </button>

          {/* Footer Text */}
          <p className="relative z-10 text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] md:tracking-[0.35em]">
            Secure your spot in the future
          </p>
        </motion.div>
      </div>
    </section>
  );
}
