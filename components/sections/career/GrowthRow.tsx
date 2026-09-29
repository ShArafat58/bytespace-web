import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";
import { growthStats } from "@/lib/data/careerGrowth";
import { courses } from "@/lib/data/courses";

export function GrowthRow() {
  return (
    <section
      aria-labelledby="growth-heading"
      className="flex items-center gap-15.75"
    >
      <div className="flex w-143.5 shrink-0 flex-col gap-10">
        <h2
          id="growth-heading"
          className="max-w-144.25 font-heading text-heading-m text-neutral-950"
        >
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="max-w-119.25 text-body-l text-neutral-700">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <dl className="flex items-end gap-14">
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

      <div className="relative h-138 w-155.25 shrink-0">
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
    </section>
  );
}
