import { StarIcon } from "@/components/icons/StarIcon";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { heroAvatars, heroHappyStudents } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

export function HappyStudentsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-64.5 flex-col gap-2 rounded-2xl bg-white p-4",
        className,
      )}
    >
      <div>
        <p className="text-label-m text-neutral-950">Happy Students</p>
        <p className="flex items-center text-body-xs text-neutral-950">
          {heroHappyStudents.rating}&nbsp;
          <span className="text-neutral-400">{heroHappyStudents.reviews}</span>
          <StarIcon aria-hidden="true" className="text-secondary-400" />
        </p>
      </div>
      <AvatarGroup avatars={heroAvatars} extraLabel={heroHappyStudents.total} />
    </div>
  );
}
