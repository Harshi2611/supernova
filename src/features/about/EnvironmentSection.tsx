"use client";

import { FlaskConical, Heart, Wifi } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Wifi,
    title: "Gigabit Connectivity",
    description:
      "Our campuses run on super-fast digital fibre and real-time testing portals.",
  },
  {
    icon: FlaskConical,
    title: "NABL Certified Labs",
    description:
      "Practice cutting-edge experiments mirroring actual medical and engineering exam standards.",
  },
  {
    icon: Heart,
    title: "Wellness Centers",
    description:
      "Dedicated counseling zones to manage competitive stress and peak performance coaching.",
  },
];

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "SuperNova Library",
  },
  {
    src: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "Science Laboratory",
  },
  {
    src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "Study Hall",
  },
  {
    src: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=500",
    alt: "Collaborative Space",
  },
];

export default function EnvironmentSection() {
  return (
    <section className="py-20 bg-[#F7FAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={img.alt}
                className={`rounded-2xl overflow-hidden shadow-sm ${
                  i === 0 ? "col-span-2 h-52" : "h-40"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C8960C] mb-2">
              Campus Life
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00457D] mb-5">
              The Environment of Focus.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Our campuses are intentionally designed to minimize cognitive load
              and maximize focus. We blend purposeful open-plan collaborative
              spaces, ensuring safety and social learning go hand-in-hand.
            </p>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F2FB] flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-[#00457D]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#00457D] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
