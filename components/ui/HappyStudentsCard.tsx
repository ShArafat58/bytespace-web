import { StarIcon } from "@/components/icons/StarIcon";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { heroAvatars, heroHappyStudents } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

type HappyStudentsCardProps = {
  variant?: "default" | "accent";
  className?: string;
};

export function HappyStudentsCard({
  variant = "default",
  className,
}: HappyStudentsCardProps) {
  const isAccent = variant === "accent";

  return (
    <div
      className={cn(
        "flex w-64.5 flex-col gap-2 rounded-2xl p-4",
        isAccent ? "bg-secondary-400" : "bg-white",
        className,
      )}
    >
      <div>
        <p className="text-label-m text-neutral-950">Happy Students</p>
        <p className="flex items-center text-body-xs text-neutral-950">
          {heroHappyStudents.rating}&nbsp;
          <span className={isAccent ? "text-neutral-700" : "text-neutral-500"}>
            {heroHappyStudents.reviews}
          </span>
          <StarIcon
            aria-hidden="true"
            className={isAccent ? "text-primary-800" : "text-secondary-400"}
          />
        </p>
      </div>
      <AvatarGroup
        avatars={heroAvatars}
        extraLabel={heroHappyStudents.total}
        badgeClassName={isAccent ? "bg-neutral-950 text-neutral-50" : undefined}
      />
    </div>
  );
}
