"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DynamicBannerCTAProps {
  headline: string;
  buttonText: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function DynamicBannerCTA({
  headline,
  buttonText,
  buttonHref = "#",
  imageSrc,
  imageAlt = "Banner Graphic",
  reverse = false,
}: DynamicBannerCTAProps) {
  return (
    <section className=" bg-[#eff6fb] overflow-hidden">
      <div className="container">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10 md:gap-14 lg:gap-16`}
        >
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-primary leading-tight tracking-tight max-w-xl mx-auto lg:mx-0">
              {headline}
            </h2>

            <div className="pt-2 flex justify-center lg:justify-start">
              <Link href={buttonHref}>
                <button className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-2.5 md:py-3 rounded-md text-sm md:text-base font-bold transition-all duration-300 group shadow-sm hover:shadow-md">
                  {buttonText}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
