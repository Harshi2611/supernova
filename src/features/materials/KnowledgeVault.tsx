"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BadgeCheck,
  FlaskConical,
  Atom,
  Calculator,
  Dna,
  BookMarked,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "All Materials" | "Physics" | "Chemistry" | "Maths" | "Biology";

interface Material {
  id: string;
  badge: string;
  badgeVariant: "premium" | "series" | "free";
  title: string;
  description: string;
  cta: string;
  image: string;
  category: Category[];
  verified?: boolean;
  featured?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const MATERIALS: Material[] = [
  {
    id: "jee-advanced",
    badge: "PREMIUM",
    badgeVariant: "premium",
    title: "JEE Advanced Prep Kit",
    description:
      "Deep-dive archives featuring solved problem sets, visual physics simulations, and previous decade analysis.",
    cta: "Explore Kit",
    image: "/material-physics.png",
    category: ["Physics", "Maths"],
    verified: true,
    featured: true,
  },
  {
    id: "neet-biology",
    badge: "BENTO SERIES",
    badgeVariant: "series",
    title: "NEET Biology Booster",
    description:
      "Master cellular mechanics with our exclusive ultra-high-res diagrams.",
    cta: "Access Diagrams",
    image: "/material-biology.png",
    category: ["Biology"],
    featured: false,
  },
  {
    id: "chemistry-formulae",
    badge: "FREE ACCESS",
    badgeVariant: "free",
    title: "Chemistry Formula Sheets",
    description:
      "Concise, exam-ready formula cards covering all chapters for JEE & NEET chemistry.",
    cta: "Download Sheets",
    image: "/material-chemistry.png",
    category: ["Chemistry"],
  },
  {
    id: "maths-archive",
    badge: "PREMIUM",
    badgeVariant: "premium",
    title: "Maths Problem Archive",
    description:
      "10 years of solved PYQs with step-by-step methods, shortcuts, and speed tricks.",
    cta: "Start Solving",
    image: "/material-physics.png",
    category: ["Maths"],
    verified: true,
  },
  {
    id: "physics-mechanics",
    badge: "BENTO SERIES",
    badgeVariant: "series",
    title: "Physics: Mechanics Deep Dive",
    description:
      "Visualize every concept with 3D-rendered simulations and annotated motion diagrams.",
    cta: "Explore Module",
    image: "/material-biology.png",
    category: ["Physics"],
  },
  {
    id: "bio-botany",
    badge: "FREE ACCESS",
    badgeVariant: "free",
    title: "Botany Illustrated Guide",
    description:
      "Beautifully illustrated plant biology reference covering all NEET-relevant topics.",
    cta: "Open Guide",
    image: "/material-biology.png",
    category: ["Biology"],
  },
];

const CATEGORIES: Category[] = [
  "All Materials",
  "Physics",
  "Chemistry",
  "Maths",
  "Biology",
];

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  "All Materials": <BookMarked className="w-3.5 h-3.5" />,
  Physics: <Atom className="w-3.5 h-3.5" />,
  Chemistry: <FlaskConical className="w-3.5 h-3.5" />,
  Maths: <Calculator className="w-3.5 h-3.5" />,
  Biology: <Dna className="w-3.5 h-3.5" />,
};

// ─── Badge Component ───────────────────────────────────────────────────────────
function Badge({
  label,
  variant,
  verified,
}: {
  label: string;
  variant: "premium" | "series" | "free";
  verified?: boolean;
}) {
  const styles = {
    premium:
      "bg-[#eff6fb] text-[#145da0] border border-[#b1d4e0]",
    series:
      "bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]",
    free: "bg-[#fefce8] text-[#854d0e] border border-[#fde68a]",
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${styles[variant]}`}
      >
        {label}
      </span>
      {verified && (
        <BadgeCheck className="w-4 h-4 text-[#145da0]" strokeWidth={2.5} />
      )}
    </div>
  );
}

// ─── Featured Hero Card ────────────────────────────────────────────────────────
function FeaturedCard({ material }: { material: Material }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white"
    >
      {/* Left – Dark visual card */}
      <div className="relative lg:col-span-1 min-h-[260px] lg:min-h-[360px] overflow-hidden">
        <Image
          src={material.image}
          alt={material.title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051d40]/60 to-transparent" />
      </div>

      {/* Center – Content */}
      <div className="lg:col-span-1 flex flex-col justify-center px-8 py-10 bg-white border-r border-slate-100">
        <div className="mb-4">
          <Badge
            label={material.badge}
            variant={material.badgeVariant}
            verified={material.verified}
          />
        </div>
        <h2 className="text-3xl font-bold text-[#051d40] leading-tight mb-3 font-heading">
          {material.title}
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          {material.description}
        </p>
        <button className="inline-flex items-center gap-2 bg-[#145da0] hover:bg-[#051d40] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 w-fit">
          {material.cta}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right – Accent panel */}
      <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center bg-gradient-to-br from-[#eff6fb] to-[#dbeafe] p-10 gap-6">
        <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-[#b1d4e0]/50">
          <BookOpen className="w-10 h-10 text-[#145da0]" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#051d40] font-heading">500+</div>
          <div className="text-xs uppercase tracking-widest text-[#145da0] font-semibold mt-1">
            Curated Problems
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#051d40] font-heading">10 Yrs</div>
          <div className="text-xs uppercase tracking-widest text-[#145da0] font-semibold mt-1">
            PYQ Coverage
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Grid Card ────────────────────────────────────────────────────────────────
function GridCard({ material, index }: { material: Material; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={material.image}
          alt={material.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#051d40]/30" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <Badge
            label={material.badge}
            variant={material.badgeVariant}
            verified={material.verified}
          />
        </div>
        <h3 className="text-lg font-bold text-[#051d40] mb-2 leading-snug font-heading">
          {material.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {material.description}
        </p>
        <button className="mt-auto inline-flex items-center justify-center gap-2 border border-[#145da0] text-[#145da0] hover:bg-[#145da0] hover:text-white font-bold px-5 py-3 rounded-xl text-sm transition-all duration-300 w-full">
          {material.cta}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function KnowledgeVault() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Materials");

  const filtered = MATERIALS.filter(
    (m) =>
      activeCategory === "All Materials" || m.category.includes(activeCategory)
  );

  const featured = filtered.find((m) => m.featured) ?? filtered[0];
  const grid = filtered.filter((m) => m.id !== featured.id);

  return (
    <section className="relative bg-[#eff6fb] min-h-screen py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#b1d4e0]/20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-[#56aeff]/10 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.22em] text-[#145da0] uppercase mb-3">
              The Digital Archive
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#051d40] leading-[1.1] tracking-tight font-heading mb-4">
              Knowledge Vault
            </h1>
            <p className="text-slate-600 text-base leading-relaxed max-w-md">
              Unlock high-performance academic materials designed for the next
              generation of engineers and medical professionals.
            </p>
          </div>

          {/* Floating icon */}
          <div className="hidden lg:flex relative shrink-0 items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-[#b1d4e0]/30 backdrop-blur-sm border border-[#b1d4e0]/40 flex items-center justify-center shadow-inner">
              <BookOpen className="w-12 h-12 text-[#145da0]" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#145da0] flex items-center justify-center shadow-lg">
              <span className="text-white text-[10px] font-bold">✦</span>
            </div>
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-250 ${
                activeCategory === cat
                  ? "bg-[#145da0] text-white border-[#145da0] shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#145da0] hover:text-[#145da0]"
              }`}
            >
              {CATEGORY_ICONS[cat]}
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured Card ── */}
        <AnimatePresence mode="wait">
          <div key={`featured-${activeCategory}`} className="mb-8">
            <FeaturedCard material={featured} />
          </div>
        </AnimatePresence>

        {/* ── Grid Cards ── */}
        <AnimatePresence mode="wait">
          {grid.length > 0 && (
            <motion.div
              key={`grid-${activeCategory}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {grid.map((material, i) => (
                <GridCard key={material.id} material={material} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-slate-400"
          >
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">
              No materials found for this category yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
