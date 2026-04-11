import { Brain, Target, Users, Key } from "lucide-react";

export default function PulseEcosystem() {
  const features = [
    {
      title: "Precision Analytics",
      desc: "Granular performance mapping down to the sub-topic level. Know exactly where you stand.",
      icon: <Target className="w-6 h-6 text-secondary" />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Luminary Mentorship",
      desc: "Direct 1-on-1 sessions with top rankers and subject-matter experts for premium members.",
      icon: <Users className="w-6 h-6 text-primary" />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "24/7 Digital Concierge",
      desc: "Instant doubt resolution and resource retrieval via our integrated AI student portal, available on all devices.",
      icon: <Key className="w-6 h-6 text-accent" />,
      colSpan: "lg:col-span-2",
      showImage: true
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-heading mb-6">
            The Nova Pulse Ecosystem
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Beyond traditional tutoring—we provide a precision-engineered learning environment powered by AI and data analytics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Large Card (AI Adaptive Learning) */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-[2rem] bg-primary text-white p-10 h-[400px] flex flex-col justify-end shadow-xl group">
             {/* Background glow and image layer */}
             <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors duration-700"></div>
                {/* We map a digital neural placeholder for the background pattern */}
                <div className="absolute inset-0 bg-[#051d40]/40 mix-blend-overlay"></div>
             </div>
             
             <div className="relative z-10 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-auto backdrop-blur-md border border-white/20">
               <Brain className="w-6 h-6 text-white" />
             </div>
             
             <div className="relative z-10 max-w-md mt-8">
               <h3 className="text-3xl font-bold font-heading mb-4">AI-Driven Adaptive Learning</h3>
               <p className="text-white/80 leading-relaxed text-sm md:text-base">
                 Our proprietary algorithm identifies your conceptual gaps in real-time, tailoring every mock test to your unique cognitive signature.
               </p>
               
               <div className="mt-8 inline-flex items-center text-xs font-bold tracking-widest uppercase bg-white text-primary px-4 py-2 rounded-full cursor-pointer hover:bg-slate-100 transition-colors">
                  SEE HOW IT WORKS
               </div>
             </div>
          </div>

          {/* Supplemental Cards */}
          {features.map((feat, idx) => (
            <div key={idx} className={`bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col ${feat.colSpan}`}>
              
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 font-heading mb-3">
                {feat.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {feat.desc}
              </p>

              {feat.showImage && (
                <div className="mt-4 w-full h-[120px] bg-slate-100 rounded-xl overflow-hidden relative">
                  <div className="absolute -bottom-10 right-4 p-4 bg-white shadow-xl rounded-t-xl border border-slate-200 w-48 text-xs font-bold text-slate-700">
                    <div className="flex gap-2 items-center mb-2"><div className="w-6 h-6 rounded-full bg-primary flex-shrink-0"></div> Support Bot</div>
                    <div className="bg-slate-100 p-2 rounded-md">How can I help?</div>
                  </div>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
