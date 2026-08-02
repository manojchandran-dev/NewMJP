export function Logo({
  className = "",
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "dark";
}) {
  const wordmarkClasses =
    theme === "dark"
      ? "bg-linear-to-r from-sky-300 via-pink-300 to-amber-300 bg-clip-text text-transparent"
      : "bg-linear-to-r from-blue-700 via-indigo-600 to-blue-700 bg-clip-text text-transparent";

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <span className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${wordmarkClasses}`}>
        MJP<span className="text-pink-500">.</span>Tex
      </span>
      <span className="mt-1 h-1 w-24 rounded-full bg-linear-to-r from-sky-400 via-pink-400 to-amber-400 sm:w-28" />
    </div>
  );
}
