import { CareerAndCreator } from "@/components/sections/CareerAndCreator";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { DiscoverCourses } from "@/components/sections/discover/DiscoverCourses";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <DiscoverCourses />
        <LearningPaths />
        <CareerAndCreator />
        <CreatorCta />
      </main>
    </>
  );
}
