import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export function Breadcrumbs({
  items,
  theme = "light",
}: {
  items: { label: string; href: string }[];
  theme?: "light" | "dark";
}) {
  const trail = [{ label: "Home", href: "/" }, ...items];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };

  const mutedClass = theme === "dark" ? "text-white/50" : "text-blue-900/50";
  const currentClass = theme === "dark" ? "text-white" : "text-blue-900/70";
  const linkHoverClass = theme === "dark" ? "hover:text-white" : "hover:text-blue-900";

  return (
    <>
      <JsonLd data={structuredData} />
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-1.5 text-xs sm:text-sm ${mutedClass}`}>
          {trail.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === trail.length - 1 ? (
                <span className={`font-semibold ${currentClass}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`transition ${linkHoverClass}`}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
