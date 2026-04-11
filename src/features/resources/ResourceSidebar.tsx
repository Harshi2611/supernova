import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Award } from "lucide-react";

export default function ResourceSidebar() {
  const trending = [
    {
      rank: "01",
      title: "New NTA Guidelines for 2025",
      meta: "2.4k Readers this week"
    },
    {
      rank: "02",
      title: "Organic Chemistry Short-notes PDF",
      meta: "1.8k Downloads"
    },
    {
      rank: "03",
      title: "Top 10 NITs for Computer Science",
      meta: "1.1k Views"
    }
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      
      {/* Trending Now */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
        <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">
          TRENDING NOW
        </h3>
        <div className="space-y-6">
          {trending.map((item, idx) => (
            <div key={idx} className="flex gap-4 group cursor-pointer">
              <div className="text-3xl font-bold text-slate-300 font-heading group-hover:text-amber-500 transition-colors">
                {item.rank}
              </div>
              <div className="mt-1">
                <h4 className="text-sm font-bold text-slate-800 font-heading group-hover:text-primary leading-snug mb-1">
                  {item.title}
                </h4>
                <div className="text-xs text-slate-500">
                  {item.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#051d40] text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
        
        <div className="relative z-10">
          <Mail className="w-8 h-8 text-accent mb-6" />
          <h3 className="text-2xl font-bold font-heading mb-3">
            The Academy Weekly
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Get curated academic strategies and technical insights delivered to your inbox every Sunday.
          </p>
          
          <div className="flex flex-col gap-3">
            <Input 
              type="email" 
              placeholder="Your academic email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus-visible:ring-accent"
            />
            <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              Subscribe Now
            </Button>
            <p className="text-[9px] text-white/50 text-center uppercase tracking-wider mt-2">
              No spam. Only excellence. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Upsell Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm">
        <div className="w-12 h-12 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-4">
          <Award className="w-6 h-6 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 font-heading mb-3">
          Member of the Club?
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Get exclusive access to premium mock tests and 1-on-1 mentorship sessions.
        </p>
        <Button variant="link" className="text-primary font-bold hover:text-primary/80 decoration-2 underline underline-offset-4">
          Join SuperNova Club
        </Button>
      </div>

    </div>
  );
}
