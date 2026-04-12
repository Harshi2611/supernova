import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 mt-32 bg-[#fafafa] border-t border-slate-100">
      {/* Floating CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] max-w-[1000px] z-30">
        <div className="bg-primary rounded-md lg:rounded-md p-8 md:p-12 border border-white/5 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-[0_20px_50px_rgba(5,29,64,0.15)]">
          <div className="w-full md:w-[65%] text-center md:text-left">
            <h3 className="text-white text-[1.25rem] md:text-[1.5rem] lg:text-2xl font-bold leading-snug">
              Ready to accelerate your academic journey?
              <span className="block text-white mt-1">
                Ignite your limitless potential with SuperNova today.
              </span>
            </h3>
          </div>

          <div className="w-full md:w-[35%] flex justify-center md:justify-end">
            <button className="bg-white hover:bg-slate-100 text-primary px-10 py-4 lg:py-4.5 rounded-md text-base md:text-lg font-extrabold transition-all whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 border border-transparent">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-40 md:pt-32">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-12">
          {/* LEFT - BRAND */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/supernova.png"
                alt="SuperNova Logo"
                width={200}
                height={40}
                className="object-contain"
              />
            </Link>

            <p className="text-slate-500 leading-relaxed max-w-sm">
              The premium standard in academic coaching, empowering students to
              achieve technical mastery and intellectual precision.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <button className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                {/* <Instagram className="w-5 h-5" /> */}
                <Image src={instagram} alt="Instagram" width={20} height={20} />
              </button>
              <button className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                {/* <Linkedin className="w-5 h-5" /> */}
              </button>
              <button className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center text-primary  transition-colors">
                {/* <Facebook className="w-5 h-5" /> */}
                <Image src={facebook} alt="Facebook" width={25} height={25} />
              </button>
            </div>
          </div>

          {/* MIDDLE - OUR PRESENCE */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <h4 className="text-xs font-extrabold tracking-[0.15em] text-primary uppercase">
              Our Presence
            </h4>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-primary mb-1">
                    SuperNova 1.0
                  </span>
                  <span className="text-sm text-slate-500 max-w-[200px] leading-relaxed">
                    Nova Plaza, Tech Enclave, New Delhi - 110001
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-primary mb-1">
                    SuperNova 2.0
                  </span>
                  <span className="text-sm text-slate-500 max-w-[250px] leading-relaxed">
                    Stellar Heights, Innovation District, Mumbai - 400001
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - SUPPORT HUB */}
          <div className="lg:col-span-3 flex flex-col space-y-8">
            <h4 className="text-xs font-extrabold tracking-[0.15em] text-primary uppercase">
              Support Hub
            </h4>

            <div className="flex flex-col gap-6 text-slate-500 text-sm">
              <div className="flex gap-4 items-center hover:text-primary transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>admissions@supernova.edu</span>
              </div>
              <div className="flex gap-4 items-center hover:text-primary transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>1800-NOVA-PULSE</span>
              </div>
              <div className="flex gap-4 items-center hover:text-primary transition-colors cursor-pointer">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <span>www.supernova.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-100" />

        {/* BOTTOM */}
        <div className="py-8 text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} SuperNova Academic Excellence. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
