import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";
import { growthStats } from "@/lib/data/careerGrowth";
import { courses } from "@/lib/data/courses";

export function GrowthRow() {
  return (
    <section
      aria-labelledby="growth-heading"
      className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-15.75"
    >
      <div className="flex w-full flex-col gap-6 md:gap-10 xl:w-143.5 xl:shrink-0">
        <h2
          id="growth-heading"
          className="font-heading text-heading-s text-neutral-950 md:text-heading-m xl:max-w-144.25"
        >
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="text-body-m text-neutral-700 md:text-body-l xl:max-w-119.25">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <dl className="flex items-end gap-8 md:gap-14">
          {growthStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-body-l text-neutral-700">{stat.label}</dt>
              <dd className="font-heading text-display-xs text-primary-800">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 621 x 552 artboard, scaled down on small screens */}
      <div className="relative h-69 w-full sm:h-124.25 md:h-138 xl:w-155.25 xl:shrink-0">
        <div className="absolute left-1/2 top-0 h-138 w-155.25 origin-top -translate-x-1/2 scale-50 sm:scale-90 md:scale-100">
          <CourseCard
            course={courses[0]}
            highlighted
            className="absolute left-0 top-0 w-93.25"
          />
          <Image
            src="/images/growth-student.png"
            alt="Student wearing headphones and holding a laptop"
            width={703}
            height={688}
            className="pointer-events-none absolute -left-5.25 top-2.25 max-w-none select-none"
          />
          <LearningProgressCard className="absolute left-86.25 top-53.25" />
          <Image
            src="/images/shapes/squiggle-growth.png"
            alt=""
            aria-hidden="true"
            width={217}
            height={216}
            className="pointer-events-none absolute left-101 top-16.75 select-none"
          />
        </div>
      </div>
    </section>
  );
}
