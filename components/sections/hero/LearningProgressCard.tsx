import { heroLearningProgress } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

export function LearningProgressCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-58 flex-col gap-2 rounded-2xl bg-white p-4",
        className,
      )}
    >
      <p className="text-label-s text-neutral-950">Learning Progress</p>
      <p className="font-heading text-stat text-neutral-950">
        {heroLearningProgress}%
      </p>
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={heroLearningProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-3xl bg-neutral-50"
      >
        <div
          className="h-full rounded-3xl bg-secondary-400"
          style={{ width: `${heroLearningProgress}%` }}
        />
      </div>
    </div>
  );
}
