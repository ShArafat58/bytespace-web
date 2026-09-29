import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { RevenueCard } from "@/components/sections/career/RevenueCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { creatorBenefits, revenueStats } from "@/lib/data/careerGrowth";

export function CreatorRow() {
  const [totalRevenue, yearToDate] = revenueStats;

  return (
    <section
      aria-labelledby="creator-heading"
      className="flex flex-col-reverse gap-10 xl:flex-row xl:items-center xl:gap-19.75"
    >
      {/* 541 x 596 artboard, scaled down on small screens */}
      <div className="relative h-82 w-full sm:h-134 md:h-149 xl:w-135.25 xl:shrink-0">
        <div className="absolute left-1/2 top-0 h-149 w-135.25 origin-top -translate-x-1/2 scale-55 sm:scale-90 md:scale-100">
          <RevenueCard
            stat={totalRevenue}
            className="absolute left-0 top-11 w-58"
          />
          <RevenueCard
            stat={yearToDate}
            className="absolute left-0 top-48.5 w-33.5"
          />
          <Image
            src="/images/creator-student.png"
            alt="Smiling creator wearing headphones and holding a tablet"
            width={579}
            height={719}
            sizes="(min-width: 768px) 579px, (min-width: 640px) 522px, 319px"
            className="pointer-events-none absolute -top-0.75 left-1.75 max-w-none select-none"
          />
          <HappyStudentsCard className="absolute left-70.75 top-103.25" />
          <Image
            src="/images/shapes/squiggle-creator.png"
            alt=""
            aria-hidden="true"
            width={217}
            height={216}
            className="pointer-events-none absolute left-75.75 top-28.5 select-none"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 md:gap-10 xl:w-145 xl:shrink-0">
        <h2
          id="creator-heading"
          className="font-heading text-heading-s text-neutral-950 md:text-heading-m xl:max-w-97.75"
        >
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="text-body-m text-neutral-700 md:text-body-l">
          <strong className="font-bold text-neutral-950">ByteSpace</strong>{" "}
          supports individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <ul className="flex flex-col gap-4">
          {creatorBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-end gap-2 text-label-l text-neutral-950"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="shrink-0 text-primary-800"
              />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
