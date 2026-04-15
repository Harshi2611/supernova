"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Newspaper,
  Images,
  ShieldCheck,
  ChevronRight,
  LayoutGrid,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Tab = "newspaper" | "gallery";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SIDE_ARTICLES = [
  {
    id: "rajkot-mirror",
    source: "Rajkot Mirror",
    sourceColor: "text-[#145da0]",
    title: "Empowering the Next Generation of Scientists",
    description:
      "Our campus expansion and the inauguration of the new Quantum Labs covered by the Mirror's educational supplement.",
  },
  {
    id: "edu-insights",
    source: "Educational Insights",
    sourceColor: "text-[#145da0]",
    title: "Top 10 Institutes for Technical Precision",
    description:
      "SuperNova ranks #1 in student satisfaction and mentor-led technical training modules for 2024.",
  },
];

const MINI_PUBLICATIONS = [
  {
    id: "daily-scholar",
    name: "The Daily Scholar",
    desc: "Focus on student-led community initiatives.",
  },
  {
    id: "tech-junction",
    name: "Tech Junction",
    desc: "Review of our proprietary Digital Luminary Portal.",
  },
  {
    id: "local-post",
    name: "Local Post",
    desc: "Celebration of Top 10 rankers in Board Exams.",
  },
];

const GALLERY_IMAGES = [
  { src: "/campus-classroom.png", alt: "Modern Classroom", span: "col-span-1 row-span-1" },
  { src: "/campus-lab.png", alt: "Science Laboratory", span: "col-span-1 row-span-2" },
  { src: "/material-physics.png", alt: "Campus Building", span: "col-span-2 row-span-1" },
  { src: "/campus-study.png", alt: "Study Materials", span: "col-span-1 row-span-1" },
  { src: "/material-biology.png", alt: "Biology Research", span: "col-span-1 row-span-1" },
  { src: "/material-chemistry.png", alt: "Chemistry Lab", span: "col-span-1 row-span-1" },
  { src: "/campus-classroom.png", alt: "Lecture Hall", span: "col-span-1 row-span-1" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function NewspaperTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Main Grid: Left featured + Right sidebar ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">

        {/* LEFT – Featured Article */}
        <div className="lg:col-span-3 flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Hero Image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/article-newspaper.png"
              alt="SuperNova in the news"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-3 flex-1">
            <div className="flex items-center gap-3">
              <span className="inline-block bg-amber-100 text-amber-800 border border-amber-200 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">
                Times of India
              </span>
              <span className="text-xs text-slate-400 font-medium">October 24, 2024</span>
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-[#051d40] leading-snug font-heading">
              SuperNova Emerges as the Leading Hub for NEET-JEE Excellence in the Region
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed flex-1">
              The latest annual academic review highlights our student-centric approach and
              the revolutionary &quot;Luminary&quot; curriculum that has set new records in
              regional entrance scores.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#145da0] font-bold text-sm hover:gap-3 transition-all duration-200 mt-auto pt-2 border-t border-slate-100 w-fit"
            >
              Read Full Feature
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT – Sidebar */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Article cards */}
          {SIDE_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className={`text-[9px] font-black tracking-[0.18em] uppercase ${article.sourceColor}`}>
                {article.source}
              </span>
              <h3 className="text-sm font-bold text-[#051d40] leading-snug font-heading">
                {article.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {article.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[#145da0] text-[11px] font-bold hover:gap-2 transition-all duration-150 pt-1"
              >
                View Article
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}

          {/* Award / Merit card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#145da0] to-[#051d40] text-white p-5 flex flex-col gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-300" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-base font-bold leading-snug font-heading">
                National Merit Acknowledgement
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                Official citation from the Council of Academic Excellence for 2023-24.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mini Publications Row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {MINI_PUBLICATIONS.map((pub) => (
          <div
            key={pub.id}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 hover:border-[#145da0]/40 hover:shadow-sm transition-all duration-200 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#eff6fb] flex items-center justify-center shrink-0 mt-0.5">
              <Newspaper className="w-3.5 h-3.5 text-[#145da0]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#051d40] group-hover:text-[#145da0] transition-colors">
                {pub.name}
              </p>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">{pub.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── View All Newspapers CTA ── */}
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-[#145da0] text-[#145da0] hover:bg-[#145da0] hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <LayoutGrid className="w-4 h-4" />
          View All Newspapers
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

function GalleryTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* Gallery Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading">
          <span className="text-[#051d40]">Campus</span>{" "}
          <span className="text-amber-500">Life Archive</span>
        </h2>
        <button className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#051d40] font-bold text-xs px-4 py-2 rounded-lg tracking-widest uppercase transition-colors shadow-sm">
          <Images className="w-3.5 h-3.5" />
          All Photos
        </button>
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] gap-3">
        {/* Row 1 */}
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <Image src="/campus-classroom.png" alt="Classroom" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative group">
          <Image src="/campus-lab.png" alt="Science Lab" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
          <Image src="/material-physics.png" alt="Campus Building" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Row 2 */}
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <Image src="/campus-study.png" alt="Study Materials" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <Image src="/material-biology.png" alt="Biology Lab" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
          <Image src="/material-chemistry.png" alt="Chemistry" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* All Photos Button */}
      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-[#145da0] text-[#145da0] hover:bg-[#145da0] hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <Images className="w-4 h-4" />
          View Full Gallery
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MediaArchives() {
  const [activeTab, setActiveTab] = useState<Tab>("newspaper");

  return (
    <section className="relative bg-[#f7fafd] min-h-screen py-20 lg:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#b1d4e0]/15 blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#56aeff]/8 blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Page Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-[10px] font-extrabold tracking-[0.22em] text-[#145da0] uppercase mb-2">
              Institutional Presence
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight font-heading">
              <span className="text-[#051d40]">Media &amp;</span>
              <br />
              <span className="text-amber-500">Academic Archives</span>
            </h1>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("newspaper")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-250 ${
                activeTab === "newspaper"
                  ? "bg-[#145da0] text-white shadow-md"
                  : "text-slate-500 hover:text-[#145da0]"
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              Newspaper
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-250 ${
                activeTab === "gallery"
                  ? "bg-[#145da0] text-white shadow-md"
                  : "text-slate-500 hover:text-[#145da0]"
              }`}
            >
              <Images className="w-3.5 h-3.5" />
              Gallery
            </button>
          </div>
        </div>

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">
          {activeTab === "newspaper" ? (
            <NewspaperTab key="newspaper" />
          ) : (
            <GalleryTab key="gallery" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
