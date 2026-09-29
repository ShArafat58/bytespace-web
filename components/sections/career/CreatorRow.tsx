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
      className="flex items-center gap-19.75"
    >
      <div className="relative h-149 w-135.25 shrink-0">
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

      <div className="flex w-145 shrink-0 flex-col gap-10">
        <h2
          id="creator-heading"
          className="max-w-97.75 font-heading text-heading-m text-neutral-950"
        >
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="text-body-l text-neutral-700">
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
