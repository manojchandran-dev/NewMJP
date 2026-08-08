import clothRedImage from "@/assets/cloth-red.png";
import { Logo } from "./Logo";
import { HeroScene } from "./HeroScene";
import { MeeshoButton } from "./MeeshoButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { ProductShowcase3D } from "./ProductShowcase3D";
import { StarIcon } from "./icons";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "1–12", label: "Age Range" },
  { value: "30+", label: "Wholesale Partners" },
];

const GARMENT_COLORS = ["#facc15", "#f472b6", "#dc2626", "#7dd3fc", "#10b981"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-slate-950 via-indigo-950 to-slate-900 px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24 lg:px-8">
      <HeroScene />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Logo theme="dark" />

          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold text-amber-200 sm:text-sm">
            15+ Years of Experience
          </span>

          <h1 className="mt-6 max-w-xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            <span className="bg-linear-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">
              Kids Bottom Wear Manufacturer
            </span>{" "}
            in Tiruppur, Tamil Nadu
          </h1>
          <p className="mt-4 max-w-lg text-base font-medium text-white/80 sm:text-lg">
            Kids Inner Shorts for Boys &amp; Girls&nbsp;|&nbsp;Age 1&ndash;12 Years
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide text-white/50 sm:text-base">
            Soft &bull; Breathable &bull; Skin Friendly
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <MeeshoButton size="lg" />
            <WhatsAppButton variant="outline" size="lg" />
          </div>

          <dl className="mt-10 grid w-full max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-extrabold text-white sm:text-2xl">{stat.value}</dd>
                <dd className="mt-0.5 text-[11px] font-medium text-white/50 sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-linear-to-br from-pink-500/25 via-sky-400/15 to-amber-300/25 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8">
            <span className="absolute -top-3 -left-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-blue-950 shadow-lg ring-1 ring-blue-900/10">
              <StarIcon className="h-3 w-3 text-amber-400" /> Best Seller
            </span>
            <div className="h-64 w-full sm:h-80">
              <ProductShowcase3D
                textureUrl={clothRedImage.src}
                aspect={clothRedImage.width / clothRedImage.height}
                colors={GARMENT_COLORS}
                cycleMs={2000}
              />
            </div>
            <p className="mt-2 text-center text-xs text-white/50">
              Drag to rotate &middot; 3D preview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
