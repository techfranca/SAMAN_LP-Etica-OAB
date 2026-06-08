"use client";

import { useState } from "react";

type Testimonial = {
  src: string;
  alt: string;
};

export function ExpandableTestimonials({ prints }: { prints: Testimonial[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? prints : prints.slice(0, 3);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/15 bg-dark-950/60 p-2 hover:border-white/30 transition-colors"
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {!expanded && prints.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold-500/30 bg-gold-500/5 text-gold-300 text-sm font-semibold hover:bg-gold-500/10 transition-colors"
          >
            VER MAIS DEPOIMENTOS
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
