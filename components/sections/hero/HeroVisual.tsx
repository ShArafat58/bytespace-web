import Image from "next/image";
import { CategoryHighlightCard } from "@/components/sections/hero/CategoryHighlightCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";

/**
 * The student, ring and floating cards live on one 804 x 515 artboard
 * (the design area from x 328 to 1132, y 509 to 1024). Smaller screens
 * scale the whole artboard so the composition never breaks.
 */
export function HeroVisual() {
  return (
    <div className="relative mt-12 h-54 w-full sm:h-92.75 md:h-108.25 lg:h-128.75 xl:absolute xl:left-1/2 xl:top-127.25 xl:-ml-98 xl:mt-0 xl:w-201">
      <div className="absolute left-1/2 top-0 h-128.75 w-201 origin-top -translate-x-1/2 scale-42 sm:scale-72 md:scale-84 lg:scale-100">
        <div
          aria-hidden="true"
          className="absolute -left-[182.5px] top-18.25 size-287.25 rounded-full border-320 border-secondary-500"
        />
        <Image
          src="/images/hero-student.png"
          alt="Smiling student wearing headphones and holding a laptop"
          width={722}
          height={515}
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute left-20.5 top-0 max-w-none select-none"
        />
        <div aria-hidden="true">
          <LearningProgressCard className="absolute left-128.5 top-35.5" />
          <HappyStudentsCard className="absolute left-0 top-82" />
          <CategoryHighlightCard className="absolute left-19 top-32.5" />
        </div>
      </div>
    </div>
  );
}
