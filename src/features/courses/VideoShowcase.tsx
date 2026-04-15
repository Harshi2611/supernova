"use client";

import { useState } from "react";
import { Play, BookOpen, Atom, TrendingUp, Brain } from "lucide-react";

const videos = [
  {
    id: 1,
    tag: "Grade 9 – 10",
    icon: BookOpen,
    tagColor: "bg-blue-100 text-blue-700",
    title: "Science & Mathematics",
    subtitle: "Building blocks for competitive success",
    description:
      "Our Grade 9–10 science and mathematics program builds deep conceptual clarity through structured problem-solving sessions, concept maps, and exam-focused revision. Students develop the analytical mindset essential for higher-level competitive exams.",
    highlights: ["CBSE Board Prep", "Olympiad Training", "Weekly Mock Tests"],
    youtubeId: "dQw4w9WgXcQ",
    accentColor: "#145da0",
    lightBg: "#eff6fb",
  },
  {
    id: 2,
    tag: "Grade 11 – 12",
    icon: Atom,
    tagColor: "bg-yellow-100 text-yellow-700",
    title: "JEE & NEET Foundation",
    subtitle: "Coaching for India's toughest entrances",
    description:
      "Comprehensive JEE & NEET preparation with chapter-wise modules, formula sheets, and previous-year analyses. Our faculty breaks down complex topics into digestible, high-yield lessons with a proven track record of top ranks.",
    highlights: ["Physics & Chemistry Deep Dives", "Previous 10-Year Papers", "Doubt Clearing Sessions"],
    youtubeId: "dQw4w9WgXcQ",
    accentColor: "#145da0",
    lightBg: "#fefce8",
  },
  {
    id: 3,
    tag: "Grade 5 – 8",
    icon: Brain,
    tagColor: "bg-green-100 text-green-700",
    title: "Junior Scholars Program",
    subtitle: "Igniting curiosity from the start",
    description:
      "For younger learners, we focus on building strong mathematical reasoning, scientific curiosity, and a love for learning. Interactive methods like mind-maps, quizzes, and hands-on experiments make each session memorable.",
    highlights: ["Logical Reasoning", "Science Olympiad Prep", "Vedic Math Basics"],
    youtubeId: "dQw4w9WgXcQ",
    accentColor: "#145da0",
    lightBg: "#f0fdf4",
  },
  {
    id: 4,
    tag: "All Grades",
    icon: TrendingUp,
    tagColor: "bg-purple-100 text-purple-700",
    title: "Results & Testimonials",
    subtitle: "Real students. Real transformations.",
    description:
      "Hear directly from our top achievers and their parents. From AIR ranks in JEE to perfect board scores, our alumni have proven that the SuperNova method works — time and time again.",
    highlights: ["98% Board Success Rate", "Top 500 JEE Ranks", "500+ Alumni Stories"],
    youtubeId: "dQw4w9WgXcQ",
    accentColor: "#145da0",
    lightBg: "#faf5ff",
  },
];

function VideoCard({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
      {playing ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Play button */}
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <Play className="w-7 h-7 md:w-8 md:h-8 text-[#145da0] fill-[#145da0] ml-1" />
            </div>
          </button>

          {/* Watch Now label */}
          <div className="absolute bottom-4 left-4 text-white text-sm font-semibold tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
            Watch Now
          </div>
        </>
      )}
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block bg-[#eff6fb] text-[#145da0] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#b1d4e0]">
            Inside Our Classroom
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#051d40] font-heading leading-tight">
            Experience SuperNova <br className="hidden md:block" />
            <span className="text-[#145da0]">in Action</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Watch how our expert faculty transform complex topics into clear,
            confident understanding — one session at a time.
          </p>
        </div>

        {/* Alternating Video + Text Rows */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {videos.map((video, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = video.icon;

            return (
              <div
                key={video.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Video Column */}
                <div className="w-full lg:w-1/2 shrink-0">
                  <VideoCard youtubeId={video.youtubeId} title={video.title} />
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-1/2">
                  {/* Tag */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 ${video.tagColor}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {video.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#051d40] font-heading leading-tight mb-2">
                    {video.title}
                  </h3>
                  <p className="text-[#145da0] font-semibold text-base mb-4">
                    {video.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 rounded-full bg-[#56aeff] mb-6" />

                  {/* Description */}
                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {video.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-3">
                    {video.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#eff6fb] border border-[#b1d4e0] flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3 text-[#145da0]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
