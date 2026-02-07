import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

const About = dynamic(() =>
  import("@/components/sections/About").then((m) => m.About),
);
const CTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((m) => m.CTASection),
);
const IgeKids = dynamic(() =>
  import("@/components/sections/IgeKids").then((m) => m.IgeKids),
);
const Forja = dynamic(() =>
  import("@/components/sections/Forja").then((m) => m.Forja),
);
const Details = dynamic(() =>
  import("@/components/sections/Details").then((m) => m.Details),
);
const Location = dynamic(() =>
  import("@/components/sections/Location").then((m) => m.Location),
);

export default function ForjaBBQPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <CTASection />
        <IgeKids />
        <Forja />
        <Details />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
