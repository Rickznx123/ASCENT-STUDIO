import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { Cases } from "@/components/Cases";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Portfolio } from "@/components/Portfolio"; // na prática é o "Como trabalhamos"
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <Cases />
        <HowItWorks />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
