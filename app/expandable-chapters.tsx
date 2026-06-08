"use client";

import { useState } from "react";

type Chapter = {
  num: string;
  title: string;
  topics: string;
};

export function ExpandableChapters({ chapters }: { chapters: Chapter[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? chapters : chapters.slice(0, 5);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {visible.map((ch) => (
          <div
            key={ch.num}
            className="flex gap-4 p-4 rounded-xl border border-zinc-800/40 bg-dark-900/30 hover:border-gold-500/20 transition-colors"
          >
            <span className="text-2xl font-bold text-gold-500/30 flex-shrink-0 leading-none mt-0.5 font-display">
              {ch.num}
            </span>
            <div>
              <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                {ch.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {ch.topics}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!expanded && (
        <div className="text-center mt-6">
          <button
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold-500/30 bg-gold-500/5 text-gold-300 text-sm font-semibold hover:bg-gold-500/10 transition-colors"
          >
            VER TODO O CONTEÚDO
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
