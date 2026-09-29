import type { RevenueStat } from "@/lib/data/careerGrowth";
import { cn } from "@/lib/utils";

type RevenueCardProps = {
  stat: RevenueStat;
  className?: string;
};

export function RevenueCard({ stat, className }: RevenueCardProps) {
  const changeBadge = (
    <span className="self-start rounded-3xl bg-secondary-500 px-2 py-0.5 text-caption font-medium leading-5 text-neutral-950">
      {stat.change}
    </span>
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-2xl bg-primary-800 p-4 text-neutral-50",
        className,
      )}
    >
      <div>
        <p className="text-label-m">{stat.title}</p>
        <p className="text-caption">{stat.period}</p>
      </div>

      {stat.progress === undefined ? (
        <>
          <p className="font-heading text-amount">{stat.amount}</p>
          {changeBadge}
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            <p className="font-heading text-amount">{stat.amount}</p>
            {changeBadge}
          </div>
          <div
            aria-hidden="true"
            className="h-2 overflow-hidden rounded-3xl bg-white"
          >
            <div
              className="h-full rounded-3xl bg-secondary-400"
              style={{ width: `${stat.progress}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}
