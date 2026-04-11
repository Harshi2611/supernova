import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, StarIcon } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50/30"
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-md bg-secondary/10 text-secondary border border-secondary/20">
                <StarIcon className="w-3 h-3" fill="currentColor" />
                Academic Excellence Redefined
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground"
            >
              <span className="text-[#00457D]">Ignite Your </span>
              <span className="text-primary">Future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-muted-foreground text-gray-600 mb-10 max-w-lg"
            >
              Merging technical precision with pedagogical mastery to create the
              next generation of luminaries in NEET, JEE, and Foundation
              sciences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button
                size="lg"
                className="rounded-md py-6 px-8 text-base font-semibold glow-primary"
              >
                Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-md py-6 text-primary font-semibold bg-gray-50 px-8"
              >
                Explore Programs
              </Button>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={""}
                alt="SuperNova coaching - Board, Foundation, NEET, JEE"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">98%</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    The precision of SuperNova&apos;s
                  </p>
                  <p className="text-xs text-muted-foreground">
                    innovative approach to learning
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
