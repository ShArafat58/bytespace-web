import Image from "next/image";
import { CategoryHighlightCard } from "@/components/sections/hero/CategoryHighlightCard";
import { HappyStudentsCard } from "@/components/sections/hero/HappyStudentsCard";
import { HeroSearch } from "@/components/sections/hero/HeroSearch";
import { LearningProgressCard } from "@/components/sections/hero/LearningProgressCard";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type DecorativeShape = {
  src: string;
  width: number;
  height: number;
  className: string;
};

// Shapes that bleed off the 1440 frame are pinned to the viewport edges
const heroShapes: DecorativeShape[] = [
  {
    src: "/images/shapes/squiggle-lime.png",
    width: 267,
    height: 387,
    className: "left-0 top-55.25",
  },
  {
    src: "/images/shapes/squiggle-white-small.png",
    width: 177,
    height: 176,
    className: "left-45.75 top-119.25",
  },
  {
    src: "/images/shapes/ring-white.png",
    width: 346,
    height: 343,
    className: "bottom-0 left-3.5",
  },
  {
    src: "/images/shapes/cylinder-lime.png",
    width: 213,
    height: 372,
    className: "right-0 top-55",
  },
  {
    src: "/images/shapes/cone-white.png",
    width: 190,
    height: 189,
    className: "right-36.5 top-116",
  },
  {
    src: "/images/shapes/squiggle-white-large.png",
    width: 317,
    height: 332,
    className: "right-0 top-168",
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-256 overflow-hidden bg-primary-800 grid-lines"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-145.5 size-287.25 -translate-x-1/2 rounded-full border-320 border-secondary-500"
      />

      <Container className="relative flex flex-col items-center gap-15 pt-42.25">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1
            id="hero-heading"
            className="max-w-233.75 font-heading text-heading-l text-white"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-204.75 text-body-l text-neutral-100">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <HeroSearch />
      </Container>

      <Image
        src="/images/hero-student.png"
        alt="Smiling student wearing headphones and holding a laptop"
        width={722}
        height={515}
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute left-1/2 top-127.25 -ml-77.5 select-none"
      />

      <LearningProgressCard className="absolute left-1/2 top-162.75 ml-30.5" />
      <HappyStudentsCard className="absolute left-1/2 top-209.25 -ml-98" />

      {heroShapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          aria-hidden="true"
          width={shape.width}
          height={shape.height}
          className={cn(
            "pointer-events-none absolute select-none",
            shape.className,
          )}
        />
      ))}

      <CategoryHighlightCard className="absolute left-1/2 top-159.75 -ml-79" />
    </section>
  );
}
