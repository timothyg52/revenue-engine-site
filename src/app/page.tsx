import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Frameworks } from "@/components/Frameworks";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main className="relative">
        <Hero />
        <SocialProof />
        <Frameworks />
        <Process />
        <Results />
        <WhoThisIsFor />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
