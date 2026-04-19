import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";

export default function ForjaM4Page() {
  return (
    <div className="overflow-x-hidden bg-bg-primary">
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  );
}
