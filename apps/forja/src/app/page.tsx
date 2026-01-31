import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Forja } from "@/components/sections/Forja";
import { CTASection } from "@/components/sections/CTASection";
import { Details } from "@/components/sections/Details";
import { Location } from "@/components/sections/Location";

export default function ForjaBBQPage() {
  return (
    <div className="overflow-x-hidden">
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
