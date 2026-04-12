"use client";

import { getDriveFileId } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Play, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type TestimonialData = {
  id: string;
  type: "text" | "video";
  name: string;
  subtitle: string;
  content: string;
  avatarUrl?: string; // Optional user avatar for text cards
};

// DUMMY DATA FALLBACK
const dummyTestimonials: TestimonialData[] = [
  {
    id: "fallback-1",
    type: "video",
    name: "Karthik Iyer",
    subtitle: "JEE ADV RANK #42",
    content: "/focused_student_hero.png",
  },
  {
    id: "fallback-2",
    type: "text",
    name: "Priya Kapur",
    subtitle: "NEET AIR #112",
    content: `"The precision of the mock tests and the instant doubt resolution made my NEET preparation stress-free. I felt completely prepared on the final day."`,
    avatarUrl: "/focused_student_hero.png",
  },
];

// NATIVE CSV PARSER
function parseCSV(text: string) {
  const result: string[][] = [];
  let currentLine: string[] = [];
  let currentCell = "";
  let insideQuote = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        currentCell += '"';
        i++;
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === "," && !insideQuote) {
      currentLine.push(currentCell.trim());
      currentCell = "";
    } else if (char === "\n" && !insideQuote) {
      currentLine.push(currentCell.trim());
      result.push(currentLine);
      currentLine = [];
      currentCell = "";
    } else {
      currentCell += char;
    }
  }

  if (currentCell || currentLine.length > 0) {
    currentLine.push(currentCell.trim());
    result.push(currentLine);
  }
  return result;
}

function VideoCard({ item }: { item: TestimonialData }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative w-full aspect-[3/4] rounded-2xl lg:rounded-[2rem] overflow-hidden group shadow-md border border-slate-100 bg-[#000]"
      onClick={() => {
        if (!isPlaying) setIsPlaying(true);
      }}
    >
      {isPlaying ? (
        <iframe
          src={`${item.content}`}
          className="w-full h-full border-0"
          allow="autoplay; fullscreen"
        />
      ) : (
        <div className="w-full h-full cursor-pointer relative pt-8">
          {/* We default to a muted dark backdrop if there's no thumbnail, or use a generic graphic */}
          <div className="absolute inset-0 pattern-dots pattern-slate-800 pattern-bg-slate-900 pattern-size-4 pattern-opacity-20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#051d40] via-[#051d40]/40 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6">
            <div className="w-12 h-10 md:w-14 md:h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-lg group-hover:scale-105 ease-out">
              <Play className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white fill-current" />
            </div>
            <h3 className="text-white text-2xl font-bold font-heading mb-1">
              {item.name}
            </h3>
            <p className="text-white/80 text-xs font-bold uppercase tracking-wider">
              {item.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const url =
          "https://docs.google.com/spreadsheets/d/1G3HkfOo6xzB9s5THKHWT4F91-LCTleW7iVQ4PbSzswk/export?format=csv";
        const res = await fetch(url);
        if (!res.ok) throw new Error("Could not fetch sheet");
        const text = await res.text();
        const rows = parseCSV(text);

        const validTestimonials: TestimonialData[] = [];

        // Skip header row
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          if (row.length < 2) continue;

          const name = row[1] || "Anonymous";
          const subtitle = row[2] || "Student";
          const videoLink = row[3];
          const description = row[4];

          if (!videoLink && !description) continue;

          if (videoLink) {
            const fileId = getDriveFileId(videoLink);
            const videoUrl = fileId
              ? `https://drive.google.com/file/d/${fileId}/preview?hl=en`
              : null;

            validTestimonials.push({
              id: `sheet-${i}`,
              type: "video",
              name,
              subtitle,
              content: videoUrl || "",
            });
          } else if (description) {
            validTestimonials.push({
              id: `sheet-${i}`,
              type: "text",
              name,
              subtitle,
              content: `"${description}"`,
              avatarUrl: "/focused_student_hero.png", // Placeholder avatar
            });
          }
        }

        if (validTestimonials.length > 0) {
          setData(validTestimonials);
        } else {
          setData(dummyTestimonials);
        }
      } catch (error) {
        console.error("Failed to parse Google Sheet", error);
        setData(dummyTestimonials);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#fafafa] overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex flex-row items-center gap-2 bg-[#f2f7fd] border border-primary/10 text-primary px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest">
                Alumni Impact
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-[#051d40] tracking-tight leading-tight">
              Voices of Success
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              High-performance stories from the SuperNova community. Real
              impact, real results.
            </p>
          </div>

          {/* ARROW CONTROLS */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-xl border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300 shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-xl border border-slate-300 flex items-center justify-center text-slate-600 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300 shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CAROUSEL TRACK */}
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto gap-6 lg:gap-8 pb-12 snap-x snap-mandatory scrollbar-hide transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[350px] lg:w-[400px]"
            >
              {item.type === "video" ? (
                <VideoCard item={item} />
              ) : (
                // TEXT CARD
                <div className="relative w-full aspect-[3/4] bg-white rounded-2xl lg:rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-md border border-slate-100/50 hover:shadow-xl transition-shadow duration-300">
                  <div>
                    <Quote
                      className="w-10 h-10 text-primary/20 mb-6"
                      fill="currentColor"
                    />
                    <p className="text-lg md:text-xl text-[#051d40] font-medium italic leading-relaxed line-clamp-[8]">
                      {item.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
                      <Image
                        src={item.avatarUrl || "/supernova.png"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[#051d40] font-bold text-base line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest mt-0.5 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
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
