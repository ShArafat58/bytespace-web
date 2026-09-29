import Image from "next/image";
import { SignalIcon } from "@/components/icons/SignalIcon";
import { StarRoundedIcon } from "@/components/icons/StarRoundedIcon";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import type { Course } from "@/lib/data/courses";
import { courseAvatars } from "@/lib/data/courses";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  highlighted?: boolean;
  className?: string;
};

export function CourseCard({
  course,
  highlighted = false,
  className,
}: CourseCardProps) {
  const stats = [course.lessons, course.duration, course.comments];

  return (
    <article
      className={cn(
        "flex flex-col gap-5.25 rounded-3xl border border-neutral-200 bg-white p-4 pb-5.25 transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div className="relative h-48.75 overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="341px"
          className="object-cover"
        />
        <ul className="absolute bottom-4.75 left-3.25 flex gap-3">
          {stats.map((stat) => (
            <li
              key={stat}
              className="rounded-3xl bg-neutral-50/60 px-3 py-1.5 text-label-xs text-black-700 backdrop-blur-xs"
            >
              {stat}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-start justify-between gap-2.5">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div>
            <h3
              title={course.title}
              className="truncate font-heading text-heading-xs text-black-950"
            >
              {course.title}
            </h3>
            <p className="text-body-xs text-black-700">
              by <span className="text-primary-800">{course.creator}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-3xl bg-neutral-50 px-3 py-1.5 text-label-xs text-neutral-700">
              <SignalIcon aria-hidden="true" />
              {course.level}
            </span>
            <AvatarGroup
              avatars={courseAvatars}
              extraLabel={course.enrolledLabel}
              size="sm"
              badgeClassName={
                highlighted ? "bg-black-950 text-white" : undefined
              }
            />
          </div>

          <p className="flex items-end">
            <span className="font-heading text-heading-xs text-primary-800">
              {course.price}
            </span>
            <span className="text-body-xs text-black-700">/lifetime</span>
          </p>
        </div>

        <p className="flex shrink-0 items-center text-body-l text-black-700">
          <span className="sr-only">Rating:</span>
          {course.rating}
          <StarRoundedIcon
            aria-hidden="true"
            className={highlighted ? "text-secondary-400" : "text-neutral-200"}
          />
        </p>
      </div>
    </article>
  );
}
