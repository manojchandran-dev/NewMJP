import { StoreIcon } from "./icons";

export const MEESHO_URL = "https://www.meesho.com/MJPTex?_ms=3.0.1";

export function MeeshoButton({
  label = "Buy on Meesho",
  href = MEESHO_URL,
  size = "md",
  className = "",
}: {
  label?: string;
  href?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizeClasses =
    size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm sm:text-base";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-meesho font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/40 active:translate-y-0 ${sizeClasses} ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <StoreIcon className="h-5 w-5 shrink-0" />
      <span className="relative">{label}</span>
    </a>
  );
}
