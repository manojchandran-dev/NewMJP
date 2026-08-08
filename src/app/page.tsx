import Link from "next/link";
import { Hero } from "@/components/Hero";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { BulkOrderSection } from "@/components/BulkOrderSection";
import { SectionDivider } from "@/components/SectionDivider";
import { TiltCard } from "@/components/TiltCard";
import { CottonIcon, MapPinIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <span className="mx-auto block w-fit rounded-full bg-blue-950/5 px-4 py-1 text-center text-xs font-bold tracking-wide text-blue-950/60 uppercase">
          Get To Know Us
        </span>
        <h2 className="mt-3 text-center text-xl font-bold text-blue-950 sm:text-2xl md:text-3xl">
          What We Manufacture
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-blue-900/60 sm:text-base">
          Two ways to get to know MJP.Tex &mdash; our kids inner shorts range, and the story
          behind our manufacturing unit in Tiruppur.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TiltCard>
            <Link
              href="/products"
              className="block h-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-md shadow-blue-900/5 backdrop-blur transition hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">
                <CottonIcon className="h-8 w-8" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-blue-950 sm:text-xl">
                Kids Inner Shorts
              </h3>
              <p className="mt-2 text-sm text-blue-900/60 sm:text-base">
                Soft cotton-blend inner shorts for boys &amp; girls, age 1&ndash;12, in sizes S
                to XL. See full specs, size guide &amp; a 3D preview.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-950">
                View product details <span aria-hidden="true">&#8250;</span>
              </span>
            </Link>
          </TiltCard>

          <TiltCard>
            <Link
              href="/about"
              className="block h-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-md shadow-blue-900/5 backdrop-blur transition hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-100">
                <MapPinIcon className="h-7 w-7 text-pink-600" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-blue-950 sm:text-xl">
                15+ Years Manufacturing Kids Innerwear
              </h3>
              <p className="mt-2 text-sm text-blue-900/60 sm:text-base">
                MJP.Tex is based in Tiruppur, Tamil Nadu &mdash; one of India&rsquo;s largest
                knitwear manufacturing hubs. Learn about our story &amp; capabilities.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-950">
                About MJP.Tex <span aria-hidden="true">&#8250;</span>
              </span>
            </Link>
          </TiltCard>
        </div>
      </section>

      <SectionDivider />
      <WhyChooseSection />
      <SectionDivider />
      <BulkOrderSection />

      <section className="mx-auto max-w-4xl px-4 pb-10 text-center sm:px-6 sm:pb-14 lg:px-8">
        <p className="text-sm text-blue-900/60 sm:text-base">
          Have a question, or want to place a wholesale order?{" "}
          <Link href="/contact" className="font-semibold text-blue-950 underline underline-offset-4">
            See our full contact details &amp; location
          </Link>
          .
        </p>
      </section>
    </>
  );
}
