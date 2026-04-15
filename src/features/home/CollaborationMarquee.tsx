"use client";

import bhartiya from "@/assets/bhartiya.svg";
import edvantage from "@/assets/edvantage.svg";
import fairyland from "@/assets/fairyland.svg";
import gyanganga from "@/assets/gyanganga.svg";
import inis from "@/assets/inis.svg";
import innovative from "@/assets/innovative.svg";
import jivan from "@/assets/jivan.svg";
import kidsinn from "@/assets/kidsinn.svg";
import krishna from "@/assets/krishna.svg";
import parimal from "@/assets/parimal.svg";
import parishram from "@/assets/parishram.svg";
import sinhar from "@/assets/sinhar.svg";
import sinhar1 from "@/assets/sinhar1.svg";
import sinhar3 from "@/assets/sinhar3.svg";
import sinharSchool from "@/assets/sinharSchool.svg";
import supercubs from "@/assets/supercubs.svg";
import supernova from "@/assets/supernova.svg";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: bhartiya, alt: "Bhartiya" },
  { src: edvantage, alt: "Edvantage" },
  { src: fairyland, alt: "Fairyland" },
  { src: gyanganga, alt: "Gyanganga" },
  { src: inis, alt: "Inis" },
  { src: innovative, alt: "Innovative" },
  { src: jivan, alt: "Jivan" },
  { src: kidsinn, alt: "Kidsinn" },
  { src: krishna, alt: "Krishna" },
  { src: parimal, alt: "Parimal School" },
  { src: parishram, alt: "Parishram" },
  { src: sinharSchool, alt: "Sinhar School" },
  { src: sinhar1, alt: "Sinhar 1" },
  { src: sinhar3, alt: "Sinhar 3" },
  { src: supercubs, alt: "Supercubs" },
];

export default function CollaborationMarquee() {
  return (
    <section className="border-primary border-y-4 bg-white overflow-hidden">
      {/* Outer wrapper: full width, fixed height, flex row */}
      <div className="w-full flex items-stretch h-[80px] md:h-[100px]">
        {/* ── Sinhar pill ──────────────────────────────────────────
            - Sits flush to the LEFT edge of the page
            - bg-primary, rounded only on the RIGHT side
            - Fixed width so it never overflows
        ────────────────────────────────────────────────────────── */}
        <div className="bg-primary rounded-r-full shrink-0 flex items-center justify-center px-6 md:px-10 min-w-[120px] md:min-w-[180px]">
          <Image
            src={sinhar}
            alt="Sinhar Logo"
            width={140}
            height={50}
            className="h-[38px] md:h-[50px] w-auto object-contain brightness-0 invert"
            priority
            unoptimized
          />
        </div>

        {/* ── SuperNova (pinned, not scrolling) ───────────────────
            - Sits right after the pill, no gap
            - Has a right border acting as a separator
        ────────────────────────────────────────────────────────── */}
        <div className="shrink-0 flex items-center px-4 md:px-8 border-r border-slate-200 bg-white">
          <Image
            src={supernova}
            alt="SuperNova Logo"
            width={200}
            height={55}
            className="h-[38px] md:h-[52px] w-auto object-contain"
            priority
            unoptimized
          />
        </div>

        {/* ── Marquee track ───────────────────────────────────────
            - Takes remaining width
            - Clips overflow
        ────────────────────────────1────────────────────────────── */}
        <div className="flex-1 overflow-hidden relative flex items-center min-w-0">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex items-center gap-8 md:gap-12 min-w-max will-change-transform px-6 md:px-8"
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={40}
                  className="h-[32px] md:h-[44px] w-auto max-w-[90px] md:max-w-[120px] object-contain"
                  draggable={false}
                  unoptimized
                />
              </div>
            ))}
          </motion.div>

          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
