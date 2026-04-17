"use client";

import { getDriveFileId } from "@/lib/utils";
import { BadgeCheck, ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
export type TestimonialData = {
  id: string;
  type: "text" | "video";
  name: string;
  subtitle: string;
  content: string;
  avatarUrl?: string;
};

// ─── Static fallback data ─────────────────────────────────────────────────────
const STATIC_REVIEWS: TestimonialData[] = [
  {
    id: "static-1",
    type: "text",
    name: "Ananya R.",
    subtitle: "JEE Student",
    content:
      "SuperNova's JEE curriculum is incredibly precise. The AI diagnostics identified my weak spots in Calculus within a week. Now I'm heading to IIT Delhi!!",
  },
  {
    id: "static-2",
    type: "text",
    name: "Dr. Vikram Mehra",
    subtitle: "Parent · NEET Aspirant",
    content:
      "As a parent, I was worried about the stress of NEET. The mentorship here is stellar; they don't just teach subjects, they build confidence.",
  },
  {
    id: "static-3",
    type: "text",
    name: "Ishaan K.",
    subtitle: "JEE Advanced Qualifier",
    content:
      "The Nova 3.0 interface is light years ahead. 3D physics modules make complex concepts like electromagnetic induction so easy to visualize.",
  },
  {
    id: "static-4",
    type: "text",
    name: "Priya Sharma",
    subtitle: "NEET AIR #112",
    content:
      "The precision of the mock tests and the instant doubt resolution made my NEET preparation stress-free. I felt completely prepared on exam day.",
  },
  {
    id: "static-5",
    type: "text",
    name: "Rohan Desai",
    subtitle: "Class XII · Science",
    content:
      "SuperNova's board prep was exceptional. The structured revision schedules and personal mentors helped me score 97% in my boards.",
  },
  {
    id: "static-6",
    type: "text",
    name: "Mrs. Kavita Joshi",
    subtitle: "Parent",
    content:
      "My daughter's confidence transformed completely. The teachers here genuinely care about every student's growth, not just marks.",
  },
];

// ─── CSV Parser ───────────────────────────────────────────────────────────────
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

// ─── Google "G" SVG Logo ──────────────────────────────────────────────────────
function GoogleLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────
function StarRow({
  count = 5,
  size = "w-4 h-4",
}: {
  count?: number;
  size?: string;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${size} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: TestimonialData }) {
  return (
    <div className="flex flex-col bg-white rounded-md border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 gap-4">
      {/* Top row: stars + Google G */}
      <div className="flex items-center justify-between">
        <StarRow />
        <GoogleLogo />
      </div>

      {/* Quote */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        &ldquo;{review.content.replace(/^"|"$/g, "").replace(/^'|'$/g, "")}
        &rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
        <span className="text-sm font-bold text-[#145da0]">{review.name}</span>
        <BadgeCheck className="w-5 h-5 text-white shrink-0" fill="[#145da0]" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Testimonials() {
  const [reviews, setReviews] = useState<TestimonialData[]>(STATIC_REVIEWS);

  useEffect(() => {
    async function fetchData() {
      try {
        const url =
          "https://docs.google.com/spreadsheets/d/1G3HkfOo6xzB9s5THKHWT4F91-LCTleW7iVQ4PbSzswk/export?format=csv";
        const res = await fetch(url);
        if (!res.ok) throw new Error("Could not fetch sheet");
        const text = await res.text();
        const rows = parseCSV(text);

        const fetched: TestimonialData[] = [];
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          if (row.length < 2) continue;

          const name = row[1] || "Anonymous";
          const subtitle = row[2] || "Student";
          const videoLink = row[3];
          const description = row[4];

          if (!description) continue; // Only show text reviews in this layout

          if (!videoLink && description) {
            fetched.push({
              id: `sheet-${i}`,
              type: "text",
              name,
              subtitle,
              content: description,
            });
          } else if (videoLink) {
            const fileId = getDriveFileId(videoLink);
            if (fileId && description) {
              fetched.push({
                id: `sheet-${i}`,
                type: "text",
                name,
                subtitle,
                content: description,
              });
            }
          }
        }

        if (fetched.length > 0) setReviews(fetched);
      } catch {
        // Keep static fallback
      }
    }
    fetchData();
  }, []);

  // Show only text reviews (max 6 for the grid), split into rows of 3
  const textReviews = reviews.filter((r) => r.type === "text").slice(0, 6);

  return (
    <section className="">
      <div className="container">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-4 gap-3">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading leading-tight">
            What Parents &amp; Students Say on Google
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center gap-2">
            <StarRow size="w-5 h-5" />
            <span className="text-sm font-bold text-slate-500">
              4.9/5 Rating
            </span>
          </div>
        </div>

        {/* ── Review Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {textReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center mt-10">
          <a
            href="https://g.co/kgs/supernova-reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#145da0] font-bold text-sm hover:underline underline-offset-4 transition-all"
          >
            View all 1,240 reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
