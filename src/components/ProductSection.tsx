import Image from "next/image";
import clothImage from "@/assets/cloth.png";
import sizeImage from "@/assets/size.png";
import { ProductShowcase3D } from "./ProductShowcase3D";
import { MeeshoButton } from "./MeeshoButton";

const SPECS = [
  { label: "Age", value: "1–12 Years" },
  { label: "Sizes", value: "S, M, L, XL" },
  { label: "Pack Size", value: "12 Pieces" },
  { label: "Fabric", value: "Soft Cotton Blend" },
  { label: "Fit", value: "Regular & Comfortable" },
  { label: "Colors", value: "5 Shades Available" },
];

const COLORS = [
  { label: "Yellow", swatchClass: "bg-yellow-400" },
  { label: "Pink", swatchClass: "bg-pink-400" },
  { label: "Light Blue", swatchClass: "bg-sky-300" },
  { label: "Green", swatchClass: "bg-emerald-500" },
  { label: "Red", swatchClass: "bg-red-600" },
];

const SIZE_GUIDE = [
  { size: "S", hipCm: "18 cm", hipIn: "7.09 in", lengthCm: "20 cm", lengthIn: "7.87 in" },
  { size: "M", hipCm: "19 cm", hipIn: "7.48 in", lengthCm: "23 cm", lengthIn: "9.06 in" },
  { size: "L", hipCm: "20 cm", hipIn: "7.87 in", lengthCm: "26 cm", lengthIn: "10.24 in" },
  { size: "XL", hipCm: "23 cm", hipIn: "9.06 in", lengthCm: "31 cm", lengthIn: "12.20 in" },
];

export function ProductSection() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <span className="mx-auto block w-fit rounded-full bg-blue-950/5 px-4 py-1 text-center text-xs font-bold tracking-wide text-blue-950/60 uppercase">
        Product Specifications
      </span>
      <h2 className="mt-3 text-center text-xl font-bold text-blue-950 sm:text-2xl md:text-3xl">
        Kids Inner Shorts &ndash; Boys &amp; Girls
      </h2>
      <p className="mt-1 text-center text-xs text-blue-900/50 sm:text-sm">
        Drag to rotate &middot; 3D preview
      </p>

      <div className="mt-6 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-xl shadow-blue-900/5 backdrop-blur sm:p-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <div className="flex h-full flex-col justify-between gap-6">
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SPECS.map((spec) => (
                <li
                  key={spec.label}
                  className="rounded-xl border border-blue-900/10 bg-white/80 px-3 py-2.5"
                >
                  <span className="block text-[11px] font-semibold tracking-wide text-blue-900/50 uppercase">
                    {spec.label}
                  </span>
                  <span className="text-sm font-semibold text-blue-950 sm:text-base">
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-blue-900/10 bg-white/80 px-3 py-2.5">
              <span className="block text-[11px] font-semibold tracking-wide text-blue-900/50 uppercase">
                Available Colors
              </span>
              <div className="mt-2 flex flex-wrap gap-3">
                {COLORS.map((color) => (
                  <span key={color.label} className="flex items-center gap-1.5" title={color.label}>
                    <span className={`h-4 w-4 rounded-full ring-1 ring-blue-900/10 ${color.swatchClass}`} />
                    <span className="text-xs font-medium text-blue-900/60">{color.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <a
              href={sizeImage.src}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between gap-3 rounded-2xl border border-blue-900/10 bg-white/80 p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-blue-900/10 bg-white">
                  <Image
                    src={sizeImage}
                    alt="MJP.Tex kids inner shorts size chart showing S, M, L, XL measurements"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-blue-950">Size Chart</p>
                  <p className="text-xs text-blue-900/60">Tap to view full image</p>
                </div>
              </div>
              <span className="pr-1 text-xl text-blue-900/40">&#8250;</span>
            </a>
          </div>

          <div className="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-between gap-3">
            <div
              className="h-56 w-full sm:h-64"
              role="img"
              aria-label="3D preview of MJP.Tex kids inner shorts fabric, drag to rotate"
            >
              <ProductShowcase3D textureUrl={clothImage.src} aspect={clothImage.width / clothImage.height} />
            </div>
            <MeeshoButton size="lg" />
          </div>
        </div>

        <p className="mt-6 border-t border-dashed border-blue-900/15 pt-4 text-center text-xs italic text-blue-900/50 sm:text-sm">
          Colors may vary based on availability.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-center text-lg font-bold text-blue-950 sm:text-xl md:text-2xl">
          Size Guide
        </h3>
        <p className="mt-1 text-center text-xs text-blue-900/50 sm:text-sm">
          All measurements are in cm (inches)
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-lg shadow-blue-900/5 backdrop-blur">
          <div className="overflow-x-auto">
            <table className="w-full min-w-130 text-center text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="px-3 py-3 font-semibold">Size</th>
                  <th className="px-3 py-3 font-semibold">Hip Width (cm)</th>
                  <th className="px-3 py-3 font-semibold">Hip Width (inches)</th>
                  <th className="px-3 py-3 font-semibold">Total Length (cm)</th>
                  <th className="px-3 py-3 font-semibold">Total Length (inches)</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_GUIDE.map((row) => (
                  <tr key={row.size} className="border-t border-blue-900/10">
                    <td className="px-3 py-3 font-bold text-blue-950">{row.size}</td>
                    <td className="px-3 py-3 text-blue-950">{row.hipCm}</td>
                    <td className="px-3 py-3 text-blue-950">{row.hipIn}</td>
                    <td className="px-3 py-3 text-blue-950">{row.lengthCm}</td>
                    <td className="px-3 py-3 text-blue-950">{row.lengthIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-4 text-center text-xs italic text-blue-900/50 sm:text-sm">
          &mdash; Sizes may vary slightly depending on child growth &mdash;
        </p>
      </div>
    </section>
  );
}
