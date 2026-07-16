import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Portfolio } from "@/components/Portfolio";
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
        <WhyUs />
        <Portfolio />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
