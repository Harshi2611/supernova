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
    <section className="border-primary border-y-4 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch h-[100px]">
        {/* ← moved flex outside container */}
        {/* Sinhar - full bleed left with bg-primary */}
        <div className="hidden md:flex bg-primary rounded-r-full shrink-0 items-center justify-center pl-20 h-full">
          <Image
            src={sinhar}
            width={280}
            height={90}
            alt="Sinhar Logo"
            className=""
            unoptimized
          />
        </div>
        {/* Right side stays in container */}
        <div className="container  flex-1 flex items-center overflow-hidden">
          <div className="relative flex-1 w-full flex items-center h-[90px] overflow-hidden">
            {/* Sticky SuperNova Logo */}
            <div className="flex items-center bg-white z-20">
              <Image
                src={supernova}
                alt="SuperNova Logo"
                width={280}
                height={60}
                priority
                unoptimized
              />
            </div>

            {/* Marquee */}
            <div className="flex-1 overflow-hidden relative">
              <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                className="flex items-center gap-6 md:gap-10 min-w-max"
              >
                {[...dummyLogos, ...dummyLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center duration-300 cursor-pointer"
                  >
                    {logo}
                  </div>
                ))}
              </motion.div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
