import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Frameworks } from "@/components/Frameworks";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { LeadMagnet } from "@/components/LeadMagnet";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { Faq } from "@/components/Faq";
import { Founder } from "@/components/Founder";
import { SocialProof } from "@/components/SocialProof";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main className="relative">
        <Hero />
        <Frameworks />
        <Process />
        <Results />
        <LeadMagnet />
        <WhoThisIsFor />
        <Faq />
        <Founder />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
