import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { courses } from "@/lib/data/courses";

const [, digitalAssetCourse, bigDataCourse] = courses;

// Decorative collage; positions follow the 1440px design frame
export function AuthIllustration({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <CourseCard
        course={digitalAssetCourse}
        highlighted
        className="absolute left-30.5 top-98.5 w-93.25"
      />
      <CourseCard
        course={bigDataCourse}
        highlighted
        className="absolute left-58.25 top-76.25 w-93.25"
      />
      <HappyStudentsCard
        variant="accent"
        className="absolute left-87 top-185"
      />
      <Image
        src="/images/shapes/squiggle-white-small.png"
        alt=""
        width={177}
        height={176}
        className="pointer-events-none absolute left-117.5 top-156.5 select-none"
      />
      <Image
        src="/images/shapes/auth-ring-lime.png"
        alt=""
        width={148}
        height={147}
        className="pointer-events-none absolute left-37.75 top-80 select-none"
      />
      <Image
        src="/images/shapes/auth-cone-lime.png"
        alt=""
        width={190}
        height={189}
        className="pointer-events-none absolute left-24.25 top-175.5 select-none"
      />
    </div>
  );
}
