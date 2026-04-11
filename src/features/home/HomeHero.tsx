"use client";

import star from "@/assets/star.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#eff6fb] min-h-[90vh] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#dbe9f4] to-transparent z-0 hidden lg:block"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-xs font-bold border border-primary uppercase tracking-widest mb-8 self-start shadow-sm">
              <Star className="w-3.5 h-3.5 fill-current text-primary" />
              Education is passion
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-primary leading-[1.1] mb-6">
              Transform Your Academic with SuperNova
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-xl font-sans leading-relaxed">
              Personalized learning, expert guidance & proven results
              <br className="hidden lg:block" /> for Grades 1<sup>st</sup> to 12
              <sup>th</sup>, NEET & JEE aspirants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-lg w-full sm:w-auto shadow-xl group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-xl text-lg w-full sm:w-auto transition-colors"
              >
                Explore Courses
              </Button>
            </div>
          </motion.div>

          {/* Image & Overlay Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/focused_student_hero.png"
                alt="Student Studying Intently"
                fill
                className="object-cover object-[center_top]"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating overlay card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-[-1rem] lg:bottom-12 -left-4 lg:-left-12 bg-transparent backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 z-20 max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md shrink-0">
                  <Image
                    src={star} // put your image inside /public folder
                    alt="Star"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <div className="text-3xl font-bold text-primary font-heading leading-none">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider leading-tight">
                    Improvement
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
