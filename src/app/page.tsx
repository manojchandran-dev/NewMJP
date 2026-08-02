import { BackgroundDecor } from "@/components/BackgroundDecor";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { BulkOrderSection } from "@/components/BulkOrderSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundDecor />
      <main>
        <Hero />
        <SectionDivider />
        <ProductSection />
        <SectionDivider />
        <WhyChooseSection />
        <SectionDivider />
        <BulkOrderSection />
        <SectionDivider />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
