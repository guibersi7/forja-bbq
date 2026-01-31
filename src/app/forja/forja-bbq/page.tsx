import { Header } from "@/components/forja/layout/Header";
import { Footer } from "@/components/forja/layout/Footer";
import { Hero } from "@/components/forja/sections/Hero";
import { About } from "@/components/forja/sections/About";
import { Forja } from "@/components/forja/sections/Forja";
import { CTASection } from "@/components/forja/sections/CTASection";
import { Details } from "@/components/forja/sections/Details";
import { Location } from "@/components/forja/sections/Location";

export default function ForjaBBQPage() {
  return (
    <div className="overflow-x-hidden forja-theme">
      <Header />
      <main>
        <Hero />
        <About />
        <CTASection />
        <Forja />
        <Details />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
