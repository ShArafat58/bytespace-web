import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths } from "@/lib/data/learningPaths";

export function LearningPaths() {
  return (
    <section
      aria-labelledby="learning-paths-heading"
      className="pb-16 xl:pb-30"
    >
      <Container className="flex flex-col items-center gap-10 xl:gap-17">
        <SectionHeading
          id="learning-paths-heading"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          titleClassName="md:text-heading-s"
        />
        <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:grid-cols-6 xl:gap-10">
          {learningPaths.map(({ label, Icon }) => (
            <li key={label}>
              <Link
                href="#courses"
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 transition-shadow hover:shadow-lg focus-ring"
              >
                <span className="flex size-15 items-center justify-center rounded-full bg-secondary-400">
                  <Icon
                    aria-hidden="true"
                    className="size-9 text-neutral-950"
                  />
                </span>
                <span className="text-center text-label-l text-neutral-950 md:text-label-xl">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
