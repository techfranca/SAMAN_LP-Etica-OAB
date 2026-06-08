"use client";

export function CtaButton({
  href,
  label = "QUERO SER APROVADO NA OAB",
  size = "lg",
}: {
  href: string;
  label?: string;
  size?: "lg" | "md";
}) {
  const base =
    "inline-flex items-center justify-center font-bold tracking-wide rounded-lg transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-lg shadow-green-500/20 cursor-pointer";
  const sizes = {
    lg: "px-8 py-5 text-base sm:text-lg w-full sm:w-auto",
    md: "px-6 py-4 text-sm sm:text-base w-full sm:w-auto",
  };

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  return (
    <a href={href} onClick={handleClick} className={`${base} ${sizes[size]}`}>
      {label}
      <svg
        className="ml-2 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  );
}
