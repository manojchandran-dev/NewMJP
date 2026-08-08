import { CloudIcon, StarIcon } from "./icons";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-linear-to-br from-sky-100 via-pink-50 to-violet-100"
    >
      <div
        className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:26px_26px] text-blue-900/10"
      />
      <div className="absolute inset-0 bg-linear-to-b from-white/60 via-transparent to-white/70" />

      <div className="absolute -top-10 left-4 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="absolute top-2/3 right-1/4 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="absolute -bottom-24 right-[8%] h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />

      <CloudIcon className="absolute top-10 left-[6%] h-10 w-16 animate-float text-white/80 drop-shadow-sm sm:h-14 sm:w-24" />
      <CloudIcon className="absolute top-24 right-[8%] h-8 w-14 animate-float-delayed text-white/70 sm:h-12 sm:w-20" />
      <CloudIcon className="hidden h-10 w-16 text-white/70 sm:block sm:absolute sm:top-[55%] sm:left-[3%] sm:animate-float-delayed" />
      <CloudIcon className="hidden h-10 w-16 text-white/60 lg:block lg:absolute lg:top-[85%] lg:right-[18%] lg:animate-float" />

      <StarIcon className="absolute top-[18%] right-[15%] h-4 w-4 animate-twinkle text-amber-300 sm:h-6 sm:w-6" />
      <StarIcon className="absolute top-[42%] left-[8%] h-3 w-3 animate-twinkle text-sky-300 [animation-delay:0.6s] sm:h-5 sm:w-5" />
      <StarIcon className="absolute bottom-[30%] right-[10%] h-3 w-3 animate-twinkle text-pink-300 [animation-delay:1.2s] sm:h-5 sm:w-5" />
      <StarIcon className="absolute bottom-[12%] left-[20%] h-3 w-3 animate-twinkle text-violet-300 [animation-delay:0.3s] sm:h-4 sm:w-4" />
      <StarIcon className="absolute top-[70%] right-[35%] h-3 w-3 animate-twinkle text-amber-200 [animation-delay:0.9s] sm:h-4 sm:w-4" />
    </div>
  );
}
