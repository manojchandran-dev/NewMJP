import { WhatsAppButton } from "./WhatsAppButton";
import { MBadgeIcon } from "./icons";

export function BulkOrderSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-indigo-900 to-slate-900 px-6 py-12 text-center shadow-2xl shadow-blue-950/30 sm:px-10 sm:py-16">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <MBadgeIcon className="h-8 w-8" />
          </span>

          <h2 className="mt-5 text-xl font-bold text-white sm:text-2xl md:text-3xl">
            Looking for Bulk Orders?
          </h2>
          <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">
            Retailers, Wholesalers &amp; Distributors Welcome
          </p>
          <p className="mt-1 text-xs font-medium text-white/40 sm:text-sm">
            Trusted by 30+ regular wholesale partners in Andhra Pradesh
          </p>

          <div className="mt-7">
            <WhatsAppButton variant="solid" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
