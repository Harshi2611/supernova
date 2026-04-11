import { Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-12 py-16">
          {/* LEFT - BRAND */}
          <div className="space-y-5 max-w-xs">
            <Image
              src="/supernova.png"
              alt="SuperNova"
              width={180}
              height={40}
            />

            <p className="text-sm text-muted-foreground leading-relaxed">
              Redefining academic potential through technical precision and the
              pursuit of cosmic intelligence.
            </p>

            <div className="flex gap-5 text-muted-foreground">
              <Globe className="w-5 h-5 hover:text-primary cursor-pointer transition" />
              <Mail className="w-5 h-5 hover:text-primary cursor-pointer transition" />
              <Phone className="w-5 h-5 hover:text-primary cursor-pointer transition" />
            </div>
          </div>

          {/* RIGHT - EXPLORE + SOCIAL */}
          <div className="flex flex-col md:flex-row gap-16 md:items-start md:justify-end w-full">
            {/* EXPLORE */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-foreground mb-5">
                EXPLORE
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">
                  Courses
                </li>
                <li className="hover:text-foreground cursor-pointer">
                  Success Stories
                </li>
                <li className="hover:text-foreground cursor-pointer">
                  Branch Locations
                </li>
                <li className="hover:text-foreground cursor-pointer">
                  Scholarships
                </li>
              </ul>
            </div>

            {/* SOCIAL ICONS ONLY */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest text-foreground mb-5">
                SOCIAL
              </h4>

              <div className="flex gap-4 text-muted-foreground">
                {/* <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition" />
                <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition" />
                <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition" /> */}
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="hover:text-foreground cursor-pointer">
                    Instagram
                  </li>
                  <li className="hover:text-foreground cursor-pointer">
                    Linkedin
                  </li>
                  <li className="hover:text-foreground cursor-pointer">
                    Facebook
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-border" />

        {/* BOTTOM */}
        <div className="py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} SuperNova Academic Excellence. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
