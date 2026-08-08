import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbItems,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbItems: { label: string; href: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-blue-950 via-indigo-900 to-slate-900 px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
      <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <div className="flex justify-center">
          <Breadcrumbs items={breadcrumbItems} theme="dark" />
        </div>

        {eyebrow && (
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold text-amber-200 sm:text-sm">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">{title}</h1>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
