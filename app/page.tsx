import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
      </main>
    </>
  );
}
