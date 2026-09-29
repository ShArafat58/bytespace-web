import Image from "next/image";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type DecorativeShape = {
  src: string;
  width: number;
  height: number;
  className: string;
};

// Shapes cut by the frame edges are pinned to the section edges
const ctaShapes: DecorativeShape[] = [
  {
    src: "/images/shapes/cta-squiggle-lime-left.png",
    width: 267,
    height: 225,
    className: "left-0 top-0",
  },
  {
    src: "/images/shapes/cta-squiggle-white.png",
    width: 177,
    height: 176,
    className: "left-44.5 top-1.25",
  },
  {
    src: "/images/shapes/cta-cone-white.png",
    width: 140,
    height: 189,
    className: "left-0 top-56.25",
  },
  {
    src: "/images/shapes/cta-ring-lime.png",
    width: 346,
    height: 190,
    className: "bottom-0 left-4",
  },
  {
    src: "/images/shapes/cta-cone-lime.png",
    width: 190,
    height: 189,
    className: "right-43 top-0",
  },
  {
    src: "/images/shapes/cta-cylinder-white.png",
    width: 218,
    height: 372,
    className: "right-0 top-1.25",
  },
  {
    src: "/images/shapes/cta-squiggle-lime-right.png",
    width: 334,
    height: 199,
    className: "bottom-0 right-0",
  },
];

export function CreatorCta() {
  return (
    <section
      id="creators"
      aria-labelledby="creator-cta-heading"
      className="relative flex h-122 items-center overflow-hidden bg-primary-800 grid-lines"
    >
      <Container className="relative flex flex-col items-center gap-10 text-center">
        <h2
          id="creator-cta-heading"
          className="max-w-177.5 font-heading text-heading-m text-neutral-50"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-241 text-body-l text-neutral-50">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link href="/signup" className={buttonStyles({ onDark: true })}>
          Join as Creator
        </Link>
      </Container>

      {ctaShapes.map((shape) => (
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
    </section>
  );
}
