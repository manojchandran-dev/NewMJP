import { WhatsAppIcon } from "./icons";

export const WHATSAPP_URL = "https://wa.me/916380699014";

export function WhatsAppButton({
  label = "Chat on WhatsApp",
  variant = "solid",
  size = "md",
  className = "",
}: {
  label?: string;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
}) {
  const sizeClasses =
    size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm sm:text-base";

  const variantClasses =
    variant === "solid"
      ? "bg-brand-whatsapp text-white shadow-lg shadow-green-500/20 hover:bg-green-600"
      : "border-2 border-white/40 text-white hover:border-white hover:bg-white/10";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses} ${variantClasses} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
