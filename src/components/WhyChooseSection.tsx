import { CottonIcon, SpoolIcon, ThreadIcon, KidsIcon, MBadgeIcon, CloudIcon } from "./icons";
import { TiltCard } from "./TiltCard";

const FEATURES = [
  { label: "Skin-Friendly Fabric", Icon: CottonIcon, cloudClass: "text-sky-100" },
  { label: "Daily Wear Comfort", Icon: SpoolIcon, cloudClass: "text-amber-100" },
  { label: "Strong Stitching", Icon: ThreadIcon, cloudClass: "text-pink-100" },
  { label: "For Boys & Girls", Icon: KidsIcon, cloudClass: "text-violet-100" },
  { label: "Retail & Bulk Orders", Icon: MBadgeIcon, cloudClass: "text-rose-100" },
];

export function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h2 className="text-center text-xl font-bold text-blue-950 sm:text-2xl md:text-3xl">
        Why Choose MJP.Tex?
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {FEATURES.map(({ label, Icon, cloudClass }) => (
          <TiltCard key={label}>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-md shadow-blue-900/5 backdrop-blur">
              <div className="relative flex h-20 w-24 items-center justify-center">
                <CloudIcon className={`absolute inset-0 h-full w-full drop-shadow-sm ${cloudClass}`} />
                <Icon className="relative h-9 w-9" />
              </div>
              <span className="text-sm font-semibold text-blue-950 sm:text-base">{label}</span>
            </div>
          </TiltCard>
        ))}
      </div>

      <p className="mt-8 text-center text-xs italic text-blue-900/50 sm:text-sm">
        &mdash; Colors may vary based on availability &mdash;
      </p>
    </section>
  );
}
