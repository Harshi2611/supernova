"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-[#E8F2FB] via-white to-amber-50/40"
    >
      <div className="absolute top-24 right-0 w-[500px] h-[500px] rounded-md bg-[#00457D]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-md bg-[#C8960C]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-md bg-[#C8960C]/10 text-[#C8960C] border border-[#C8960C]/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-md bg-[#C8960C] animate-pulse" />
              Established 1983
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-balance">
              <span className="text-[#00457D]">From Rajkot Roots to </span>
              <br />
              <span className="italic text-[#C8960C]">
                Cosmic Intelligence.
              </span>
            </h1>

            <p className="text-base lg:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              What started as a single classroom in the heart of Rajkot has
              evolved into a luminary of academic excellence, guiding thousands
              of aspirants toward the stars of NEET and JEE success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#C8960C] hover:bg-[#a87a0a] text-white font-semibold px-8 py-6 text-base rounded-md shadow-lg shadow-[#C8960C]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[#C8960C]/25 hover:-translate-y-0.5"
              >
                Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00457D] text-[#00457D] hover:bg-[#E8F2FB] font-semibold px-8 py-6 text-base rounded-md transition-all duration-200"
              >
                Explore Programs
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#00457D]">25+</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Users className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Torch-Givers
                  </span>
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#00457D]">
                    15k+
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Award className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Success Stories
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #00457D22 0%, #C8960C11 100%)",
                }}
              />
              <div
                className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl"
                style={{ transform: "rotate(2deg)" }}
              >
                <Image
                  src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SuperNova Coaching Institute - Modern campus building"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00457D]/30 to-transparent" />
              </div>

              <div
                className="absolute -bottom-6 -left-8 bg-white rounded-xl shadow-xl p-4 border border-border"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-700 font-bold text-sm">
                      98%
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Concept Mastery Focus
                    </p>
                    <p className="text-xs text-gray-500">
                      Precision of SuperNova&apos;s
                    </p>
                    <p className="text-xs text-gray-500">innovative approach</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 bg-[#00457D] rounded-xl shadow-xl p-4"
                style={{ transform: "rotate(2deg)" }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">40+</p>
                  <p className="text-xs text-white/80 mt-0.5">
                    Years of Legacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
