import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

export default function ResourceGrid() {
  const articles = [
    {
      id: 1,
      tag: "TEST STRATEGIES",
      title: "Biology Mastery: 5 Mnemonics for Plant Kingdom",
      description: "Simplify the complex classification system with these proven memory techniques used by top rankers.",
      image: "https://images.unsplash.com/photo-1530213786676-412f7188b839?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      tag: "STUDENT LIFE",
      title: "Balancing Coaching & School: The 8-8-8 Rule",
      description: "Learn how to manage your time without burning out during the peak academic season.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      tag: "PHYSICS",
      title: "Visualization in Electromagnetism",
      description: "A guide to mentally mapping flux lines and field interactions using 3D spatial thinking.",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      tag: "RESOURCES",
      title: "Best Reference Books for 2025 Foundation",
      description: "Beyond NCERT: The definitive list of textbooks for building a rock-solid fundamental base.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col h-full animate-fade-in-up" style={{ animationDelay: "100ms" }}>
      
      {/* Header bar for Grid */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary font-heading">
          Latest Intelligence
        </h2>
        <Button variant="outline" size="icon" className="border-slate-300 text-slate-500 rounded-lg">
          <ListFilter className="w-5 h-5" />
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
        {articles.map((article) => (
          <div key={article.id} className="group cursor-pointer flex flex-col h-full">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-5 shadow-sm group-hover:shadow-md transition-shadow">
               <img 
                 src={article.image} 
                 alt={article.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold tracking-wider text-slate-800 uppercase shadow-sm">
                 {article.tag}
               </div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 font-heading mb-3 group-hover:text-primary transition-colors leading-snug">
              {article.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
              {article.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-auto pb-10">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-6 rounded-lg text-sm w-full md:w-auto mt-4">
          Load More Intelligence
        </Button>
      </div>

    </div>
  );
}
