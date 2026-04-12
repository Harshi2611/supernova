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
    <section className="py-12 md:py-12 bg-[#eff6fb]  overflow-hidden">
      <div className="container ">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between `}
        >
          {/* Image Node */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[550px] aspect-video sm:aspect-[4/3] drop-shadow-xl hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Text & Button Node */}
          <div className="w-full  flex flex-col justify-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-heading text-primary leading-tight tracking-tight">
              {headline}
            </h2>

            <div className="pt-2">
              <Link href={buttonHref}>
                <button className="inline-flex items-center gap-2.5 border-[2px] border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-bold transition-all duration-300 group shadow-sm hover:shadow-md">
                  {buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
