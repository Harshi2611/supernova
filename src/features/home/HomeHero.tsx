"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

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
            <div className="inline-flex items-center gap-2 bg-[#e9d287] text-amber-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 self-start shadow-sm">
              <Star className="w-3.5 h-3.5 fill-current" />
              Standard Excellence Redefined
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-primary leading-[1.1] mb-6">
              Ignite Your <br className="hidden lg:block"/>
              <span className="text-secondary lg:text-primary">Future.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl font-sans leading-relaxed">
              Merging technical precision with pedagogical mastery to create the next generation of luminaries in NEET, JEE, and Foundation sciences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-lg w-full sm:w-auto shadow-xl group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="h-14 px-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-xl text-lg w-full sm:w-auto transition-colors">
                Explore Programs
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
            <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-auto lg:h-full rounded-[2rem] overflow-hidden shadow-2xl z-10">
              {/* Replace with real image once copied */}
              <img 
                src="/focused_student_hero.png" 
                alt="Student Studying Intently" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>

            {/* Floating overlay card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-[-1rem] lg:bottom-12 -left-4 lg:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 z-20 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary font-heading leading-none">98%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Success Rate</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-tight">
                The precision of SuperNova's curriculum changes the entire approach to competitive learning.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
