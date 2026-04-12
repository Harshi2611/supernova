"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle, Star } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#eff6fb] min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 lg:pt-36 lg:pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="container  z-10 flex flex-col items-center text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-4xl w-full"
        >
          <div className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-md text-xs font-bold border border-primary/20 uppercase tracking-widest mb-8 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current text-primary" />
            Education is passion
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-primary leading-[1.1] mb-4 max-w-7xl tracking-tight lg:whitespace-nowrap ">
            Transform Your Academic with SuperNova
          </h1>

          <p className="text-base text-slate-600 mb-10 max-w-2xl font-sans leading-relaxed">
            <span className="text-4xl text-primary">
              Grade: 1<sup>st</sup> to 12<sup>th</sup>
            </span>
            <span className="text-primary font-bold">
              <br /> SCIENCE | COMMERCE | HUMANITIES
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-16 lg:mb-20 justify-center w-full items-center">
            <Button
              variant="ghost"
              className="h-14 px-6 text-slate-700 hover:bg-slate-200/50 hover:text-slate-900 font-bold rounded-md text-base lg:text-lg w-full sm:w-auto transition-colors group"
            >
              <PlayCircle className="w-6 h-6 mr-2 text-slate-700 group-hover:text-slate-900 transition-colors" />
              Start Your Journey
            </Button>
            <Button className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-md text-base lg:text-lg w-full sm:w-auto shadow-xl transition-all">
              Explore Courses
            </Button>
          </div>
        </motion.div>

        {/* Video Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-md lg:rounded-md overflow-hidden shadow-2xl relative bg-white ring-1 ring-slate-900/5 group"
        >
          <div className="aspect-video w-full bg-slate-100 flex items-center justify-center relative">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bvo-tk-l5V8?si=ENxTl8j8iicxzFN6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full absolute inset-0 rounded-md lg:rounded-md"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
