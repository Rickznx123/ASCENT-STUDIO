import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Plans } from "@/components/Plans";
import { WhyUs } from "@/components/WhyUs";
import { Portfolio } from "@/components/Portfolio"; // na prática é o "Como trabalhamos"
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Services />
        <Plans />
        <WhyUs />
        <Portfolio />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
