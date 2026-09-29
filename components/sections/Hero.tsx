import Image from "next/image";
import { HeroSearch } from "@/components/sections/hero/HeroSearch";
import { HeroVisual } from "@/components/sections/hero/HeroVisual";
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
      className="relative overflow-hidden bg-primary-800 grid-lines xl:h-256"
    >
      <Container className="relative flex flex-col items-center gap-10 pt-32 md:pt-36 xl:gap-15 xl:pt-42.25">
        <div className="flex flex-col items-center gap-4 text-center md:gap-8">
          <h1
            id="hero-heading"
            className="max-w-233.75 font-heading text-heading-s text-white md:text-heading-m lg:text-heading-l"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-204.75 text-body-m text-neutral-100 md:text-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <HeroSearch />
      </Container>

      <HeroVisual />

      {heroShapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          aria-hidden="true"
          width={shape.width}
          height={shape.height}
          className={cn(
            "pointer-events-none absolute hidden select-none xl:block",
            shape.className,
          )}
        />
      ))}
    </section>
  );
}
