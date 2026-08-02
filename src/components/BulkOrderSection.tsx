import { WhatsAppButton } from "./WhatsAppButton";

export function BulkOrderSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
      <h2 className="text-xl font-bold text-blue-950 sm:text-2xl md:text-3xl">
        Looking for Bulk Orders?
      </h2>
      <p className="mt-2 text-sm font-medium text-blue-900/70 sm:text-base">
        Retailers, Wholesalers &amp; Distributors Welcome
      </p>
      <p className="mt-1 text-xs font-medium text-blue-900/50 sm:text-sm">
        Trusted by 30+ regular wholesale partners in Andhra Pradesh
      </p>

      <div className="mt-6 flex justify-center">
        <WhatsAppButton variant="solid" size="lg" />
      </div>
    </section>
  );
}
