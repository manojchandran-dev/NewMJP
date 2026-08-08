import { CottonIcon, SpoolIcon, ThreadIcon, KidsIcon, MBadgeIcon } from "./icons";
import { TiltCard } from "./TiltCard";

const FEATURES = [
  { label: "Skin-Friendly Fabric", Icon: CottonIcon, ringClass: "bg-sky-100" },
  { label: "Daily Wear Comfort", Icon: SpoolIcon, ringClass: "bg-amber-100" },
  { label: "Strong Stitching", Icon: ThreadIcon, ringClass: "bg-pink-100" },
  { label: "For Boys & Girls", Icon: KidsIcon, ringClass: "bg-violet-100" },
  { label: "Retail & Bulk Orders", Icon: MBadgeIcon, ringClass: "bg-rose-100" },
];

export function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <span className="mx-auto block w-fit rounded-full bg-blue-950/5 px-4 py-1 text-center text-xs font-bold tracking-wide text-blue-950/60 uppercase">
        Why Manufacturers &amp; Parents Trust Us
      </span>
      <h2 className="mt-3 text-center text-xl font-bold text-blue-950 sm:text-2xl md:text-3xl">
        Why Choose MJP.Tex?
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {FEATURES.map(({ label, Icon, ringClass }) => (
          <TiltCard key={label}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-md shadow-blue-900/5 backdrop-blur">
              <div className={`flex h-20 w-20 items-center justify-center rounded-full ${ringClass}`}>
                <Icon className="h-10 w-10" />
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
