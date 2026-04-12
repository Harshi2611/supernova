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
import React from "react";

const allLogos = [
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
  { src: sinhar1, alt: "Sinhar" },
  { src: sinhar3, alt: "Sinhar Collaboration" },
  { src: supercubs, alt: "Supercubs" },
];

const dummyLogos: React.ReactNode[] = allLogos.map((logo, index) => (
  <div
    key={`logo-${index}`}
    className="flex items-center justify-center shrink-0 w-[140px] md:w-[160px] h-[60px] md:h-[100px]"
  >
    <Image
      src={logo.src}
      alt={logo.alt}
      width={200}
      height={40}
      className="max-h-[60px] md:max-h-[200px] w-auto object-contain"
      draggable={false}
    />
  </div>
));
export default function CollaborationMarquee() {
  return (
    <section className="border-b border-t border-slate-100 bg-white py-6 md:py-8 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center h-full">
          {/* Left Text Block */}
          <div className="w-full md:w-auto shrink-0 md:pr-10 md:border-r z-20 relative mb-4 md:mb-0 hidden md:flex items-center justify-center h-[80px]">
            <Image
              src={sinhar}
              width={200}
              height={60}
              alt="Sinhar Logo"
              className="pr-4"
            />
          </div>

          {/* Marquee Container */}
          <div className="relative flex-1 w-full flex items-center h-[90px] md:h-[90px] md:ml-8 overflow-hidden">
            {/* Sticky SuperNova Logo */}
            <div className="flex items-center shrink-0 pr-6 md:pr-6 bg-white z-20">
              <Image
                src={supernova}
                alt="SuperNova Logo"
                width={200}
                height={60}
                className=""
                priority
              />
            </div>

            {/* Marquee (starts EXACTLY after logo) */}
            <div className="flex-1 overflow-hidden relative">
              <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                className="flex items-center gap-6 md:gap-10 min-w-max"
              >
                {[...dummyLogos, ...dummyLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center shrink-0 transition-opacity duration-300 cursor-pointer opacity-60 hover:opacity-100"
                  >
                    {logo}
                  </div>
                ))}
              </motion.div>

              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
