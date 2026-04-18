import { Mail, Phone } from "lucide-react";

export default function CampusLocations() {
  return (
    <section className="container pb-16">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-12">
        <div className="h-px bg-slate-200 flex-1" />
        <h2 className="text-3xl font-bold font-heading text-primary px-6 uppercase tracking-wider">
          Find Your Campus
        </h2>
        <div className="h-px bg-slate-200 flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12">
        {/* Card 1: SuperNova */}
        <div className="bg-white rounded-md shadow-xl overflow-hidden border border-slate-100 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          {/* Top Google Map Area */}
          <div className="h-56 relative w-full overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Ram%20Park%20Main%20Road%2C%20University%20Road%2C%20Rajkot&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Bottom Content Area */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
              SuperNova
            </h3>

            <div className="text-slate-600 text-base leading-relaxed mb-8 h-[60px]">
              Ram Park Main Road,
              <br />
              University Road,
              <br />
              Rajkot
            </div>

            <div className="space-y-3">
              <a
                href="tel:+919913030369"
                className="flex items-center gap-1 text-primary hover:text-primary transition-colors"
              >
                <div className="w-8 h-8  flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base text-black font-medium">
                  +91 99130 30369
                </span>
              </a>

              <a
                href="mailto:supernovarajkot@gmail.com"
                className="flex items-center gap-1 text-primary hover:text-primary transition-colors"
              >
                <div className="w-8 h-8  flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base text-black font-medium">
                  supernovarajkot@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: SuperNova 2.0 */}
        <div className="bg-white rounded-md shadow-xl overflow-hidden border border-slate-100 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          {/* Top Google Map Area */}
          <div className="h-56 relative w-full overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Siddhi%20Space%2C%20Ambika%20Township%2C%20Rajkot&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Bottom Content Area */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
              SuperNova 2.0
            </h3>

            <div className="text-slate-600 text-base leading-relaxed mb-8 h-[60px]">
              Siddhi Space,
              <br />
              Ambika Township,
              <br />
              Rajkot
            </div>

            <div className="space-y-3">
              <a
                href="tel:+919913030369"
                className="flex items-center gap-1 text-primary hover:text-primary transition-colors"
              >
                <div className="w-8 h-8  flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base text-black font-medium">
                  +91 99130 30369
                </span>
              </a>

              <a
                href="mailto:supernovarajkot@gmail.com"
                className="flex items-center gap-1 text-primary hover:text-primary transition-colors"
              >
                <div className="w-8 h-8  flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base  text-black font-medium">
                  supernovarajkot@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
