import { Logo } from "./Logo";
import { HeroScene } from "./HeroScene";
import { MeeshoButton } from "./MeeshoButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-slate-950 via-indigo-950 to-slate-900 px-4 pt-10 pb-20 text-center sm:px-6 sm:pt-16 sm:pb-28 lg:px-8">
      <HeroScene />

      <div className="relative mx-auto max-w-2xl">
        <div className="flex flex-col items-center gap-4">
          <Logo theme="dark" />

          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold text-amber-200 sm:text-sm">
            15+ Years of Experience
          </span>
        </div>

        <h1 className="mx-auto mt-6 max-w-xl text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          <span className="bg-linear-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">
            Comfort First.
          </span>{" "}
          Everyday Inner &amp; Bottom Wear for Kids.
        </h1>
        <p className="mt-4 text-base font-medium text-white/80 sm:text-lg">
          Boys &amp; Girls&nbsp;|&nbsp;Age 1&ndash;12 Years
        </p>
        <p className="mt-1 text-sm font-medium tracking-wide text-white/50 sm:text-base">
          Soft &bull; Breathable &bull; Skin Friendly
        </p>

        <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <MeeshoButton size="lg" />
          <WhatsAppButton variant="outline" size="lg" />
        </div>
      </div>
    </section>
  );
}
