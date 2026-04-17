import supernova from "@/assets/supernova.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-20  bg-[#fafafa] border-t border-slate-100">
      <div className="container pt-16 lg:pt-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-6 items-start">
          {/* LEFT - BRAND */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div className="h-60 overflow-hidden flex items-center">
              <Image
                src={supernova}
                alt="SuperNova Logo"
                width={200}
                height={60}
                className="w-56 h-auto object-contain -mt-8 -mb-8"
              />
            </div>
            {/* <div className="">
              <Image
                src={supernova ?? ""}
                alt="SuperNova Logo"
                width={280}
                height={70}
                className="object-contain"
                priority
              />
            </div> */}
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-[380px]">
              The premium standard in academic coaching, empowering students to
              achieve technical mastery and intellectual precision.
            </p>

            <div className="flex gap-4 pt-2">
              {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 bg-[#EEF2F7] rounded-xl flex items-center justify-center hover:bg-primary group transition"
                >
                  <Icon
                    className="text-primary group-hover:text-white w-5 h-5 transition"
                    size={20}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* MIDDLE - OUR PRESENCE */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
              Our Presence
            </h4>

            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-start">
                <MapPin className="w-6 h-6 text-white mt-1" fill="#016EB9" />
                <div>
                  <p className="font-semibold  text-primary">SuperNova</p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Ram Park Main Road <br />
                    University Road, Rajkot
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin className="w-6 h-6 text-white mt-1" fill="#016EB9" />
                <div>
                  <p className="font-semibold text-primary">SuperNova 2.0</p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Siddhi Space, <br />
                    Ambika Township, Rajkot
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - SUPPORT */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
              Support Hub
            </h4>

            <div className="flex flex-col gap-5 text-sm">
              <div className="flex gap-3 items-center text-slate-500 hover:text-primary transition">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm leading-none">
                  supernovarajkot@gmail.com
                </span>
              </div>

              <div className="flex gap-3 items-center text-slate-500 hover:text-primary transition">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-sm leading-none">+91 99130 30369</span>
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
