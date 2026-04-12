"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dummyLogos = [
  "Shiar Foundation",
  "Mission Vista",
  "Center Theatre Group",
  "Adobe",
  "PADI",
  "Global Tech",
  "EduCorp",
  "Pinnacle Labs",
];

export default function CollaborationMarquee() {
  return (
    <section className="border-b border-t border-slate-100 bg-white py-6 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Text Block */}
          <div className="w-full md:w-auto shrink-0 md:pr-8 md:border-r border-slate-200 bg-white z-20 relative mb-4 md:mb-0 hidden md:block">
            <p className="text-xs md:text-sm font-bold text-slate-800 max-w-[200px] leading-snug">
              We collaborate with leading organizations like Shiar Foundation
            </p>
          </div>

          <div className="md:hidden w-full text-center mb-6">
            <p className="text-sm font-bold text-slate-800 leading-snug">
              We collaborate with leading organizations like Shiar Foundation
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative flex-1 w-full flex items-center h-[50px] md:ml-8 overflow-hidden">
            {/* Sticky SuperNova Logo */}
            <div className="absolute left-0 z-20 h-full flex items-center bg-white pr-6 md:pr-12">
              <Image
                src="/supernova.png"
                alt="SuperNova Logo"
                width={200}
                height={40}
                className="object-contain"
              />
              {/* Fade out effect immediately after the sticky logo */}
              <div className="absolute right-0 translate-x-[99%] top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            </div>

            {/* Scrolling Dummy Logos */}
            <div className="absolute left-[160px] md:left-[190px] right-0 flex items-center h-full z-0 overflow-hidden">
              <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                className="flex items-center gap-16 min-w-max"
              >
                {[...dummyLogos, ...dummyLogos, ...dummyLogos].map(
                  (logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <span className="font-extrabold text-xl font-heading text-slate-800 tracking-wider">
                        {logo}
                      </span>
                    </div>
                  )
                )}
              </motion.div>
            </div>

            {/* Fade in effect at the far right edge */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
